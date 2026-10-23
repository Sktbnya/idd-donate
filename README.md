# Поддержать IDD

Страница поддержки IDD готовится к первому запуску на GitHub Pages: https://sktbnya.github.io/idd-donate/. До подтверждения публикации адрес может быть недоступен. Платежи не тестировались.

На странице собраны девять сервисов. Сейчас две проверенные личные формы — Donate.Stream и DonationAlerts; на последней отображается получатель Skotoboynya. DonatePay пока выключен: настройка вывода средств не завершена. Остальные сервисы также выключены, пока их личные формы не настроены и не проверены.

Все платежи проходят на стороне выбранного сервиса. Хаб не собирает платёжные данные и не обещает доступность внешних страниц.

## Временно поддержать напрямую

Пока хаб не опубликован, можно использовать эти прямые ссылки:

- [Donate.Stream — поддержать IDD](https://donate.stream/idd-sktbnya)
- [DonationAlerts — поддержать IDD (получатель Skotoboynya)](https://www.donationalerts.com/r/skotoboynya)

## Кнопка для README GitHub

```markdown
[![Поддержать IDD](https://sktbnya.github.io/idd-donate/donate-button.svg)](https://sktbnya.github.io/idd-donate/)
```

## GitHub Sponsors

Файл `.github/FUNDING.yml` в репозитории, где нужна кнопка Sponsor:

```yaml
custom: ['https://sktbnya.github.io/idd-donate/']
```

## Кнопка в веб-приложении

Открывает хаб во внешнем браузере:

```html
<a href="https://sktbnya.github.io/idd-donate/" target="_blank" rel="noopener noreferrer">Поддержать IDD</a>
```

Встроенные платёжные SDK не нужны. Для нативного приложения потребуется адаптировать открытие ссылки под его платформу.
