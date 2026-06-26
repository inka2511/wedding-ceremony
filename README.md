# Damirkhan & Inzhu wedding invitation

Static wedding invitation made with HTML, CSS and JavaScript. It is ready for GitHub Pages or any simple static hosting.

## Current Details

- Couple: Damirkhan & Inzhu
- Date: August 23, 2026
- Time: 17:00
- Place: Ақ шаңырақ мейрамханасы, Қызылорда қаласы

## Setup

1. Open `script.js`.
2. Edit the `INVITATION` object if you need to change the date, time, restaurant, address, map link or music file.
3. To receive RSVP answers in Telegram, create a bot with `@BotFather`.
4. Put the bot token into `botToken`.
5. Put your Telegram chat or group id into `chatId`.
6. Publish the folder with GitHub Pages.

Music is connected through `musicUrl`:

```js
musicUrl: "1687438130.mp3",
```

If Telegram is not configured, the form saves answers in the visitor's browser so the page still feels complete during preview.

Important: with a static GitHub Pages site, the Telegram bot token is visible in browser JavaScript. For a private token you need a small backend or proxy.
