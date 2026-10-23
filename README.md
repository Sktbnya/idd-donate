# Поддержать IDD

Страница поддержки опубликована: https://sktbnya.github.io/idd-donate/. На ней собраны девять сервисов. Сейчас активны три проверенные личные формы: Donate.Stream, DonationAlerts (на странице отображается получатель Skotoboynya) и DonatePay. Платёж ни на одном сервисе не тестировался.

Boosty и Donatty имеют настроенные публичные страницы, но пока выключены до проверки возможности приёма платежей; для Donatty также требуется ID для вывода. CloudTips и СберЧаевые отложены. Sponsr и Planeta пока не имеют готовых личных страниц для донатов.

Все платежи проходят на стороне выбранного сервиса. Хаб не собирает платёжные данные и не гарантирует доступность внешних страниц.

## Поддержать напрямую

- [Donate.Stream — поддержать IDD](https://donate.stream/idd-sktbnya)
- [DonationAlerts — поддержать IDD (получатель Skotoboynya)](https://www.donationalerts.com/r/skotoboynya)
- [DonatePay — поддержать IDD](https://donatepay.ru/don/1539654)

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
