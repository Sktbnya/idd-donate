# Поддержать IDD
Страница поддержки опубликована: https://sktbnya.github.io/idd-donate/. На ней собраны девять сервисов. Сейчас доступны проверенные личные формы Donate.Stream и DonationAlerts; на DonationAlerts отображается получатель Skotoboynya. Платёж не тестировался. DonatePay пока выключен, так как настройка вывода средств не завершена; остальные сервисы ожидают настройки и проверки личных форм.
Все платежи проходят на стороне выбранного сервиса. Хаб не собирает платёжные данные и не гарантирует доступность внешних страниц.
## Поддержать напрямую
- [Donate.Stream — поддержать IDD](https://donate.stream/idd-sktbnya)
- [DonationAlerts — поддержать IDD (получатель Skotoboynya)](https://www.donationalerts.com/r/skotoboynya)
## Кнопка для README GitHub
```markdown
[![Поддержать IDD](https://sktbnya.github.io/idd-donate/donate-button.svg)](https://sktbnya.github.io/idd-donate/)
```
## GitHub Sponsors
Файл `.github/FUNDING.yml`:
```yaml
custom: ['https://sktbnya.github.io/idd-donate/']
```
## Кнопка в веб-приложении
Открывает страницу поддержки во внешнем браузере:
```html
<a href="https://sktbnya.github.io/idd-donate/" target="_blank" rel="noopener noreferrer">Поддержать IDD</a>
```
Встроенные платёжные SDK не нужны. Для нативного приложения открытие ссылки следует адаптировать под платформу.
