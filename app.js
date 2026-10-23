'use strict';
(() => {
  const config = window.DONATE_CONFIG;
  const safeUrl = value => {try {const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password?u.href:null;}catch{return null;}};
  const root = document.querySelector('#services');
  let active = 0;
  for (const service of config.services) {
    const target = service.verified === true ? safeUrl(service.url) : null;
    const card = document.createElement('article'); card.className='service';
    card.style.setProperty('--accent', service.color);
    const top = document.createElement('div'); top.className='card-top';
    const icon = document.createElement('span');icon.className='logo';icon.textContent=service.mark;icon.setAttribute('aria-hidden','true');
    const title = document.createElement('h3');title.textContent=service.name;
    top.append(icon,title);
    const status=document.createElement('p');status.className='status';status.textContent=target?(service.recipient?'Получатель: '+service.recipient:'Личная страница IDD'):'Способ ещё не подключён';
    const action=document.createElement(target?'a':'button');action.className='action';
    action.textContent=target?'Поддержать через '+service.name:'Скоро';
    if(target){action.href=target;action.target='_blank';action.rel='noopener noreferrer';active++;}else{action.type='button';action.disabled=true;action.setAttribute('aria-label',service.name+': приём донатов пока недоступен');}
    card.append(top,status,action);
    if(!target){const official=document.createElement('a');official.className='site-link';official.href=safeUrl(service.site);official.target='_blank';official.rel='noopener noreferrer';official.textContent='О сервисе ↗';card.append(official);}
    root.append(card);
  }
  if(active){document.querySelector('#notice').hidden=true;}
  const copy=document.querySelector('#copy');
  copy.addEventListener('click',async()=>{
    const url=safeUrl(config.canonicalUrl);
    const message=document.querySelector('#copy-status');
    if(!url){copy.textContent='Ссылка появится после публикации';message.textContent=copy.textContent;return;}
    try{await navigator.clipboard.writeText(url);copy.textContent='Ссылка скопирована ✓';message.textContent=copy.textContent;}
    catch{copy.textContent=url;message.textContent='Скопируйте адрес вручную: '+url;}
  });
})();
