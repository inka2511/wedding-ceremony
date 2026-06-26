const INVITATION = {
  groom: "Дамирхан",
  bride: "Інжу",
  eventDate: "2026-08-23T17:00:00+05:00",
  venue: {
    kk: {
      
      address: "Батыс тұрғын алаңы, 5/73, Жезқазған қаласы",
    },
    ru: {
      
      address: "Западный жилой район, 5/73, г. Жезказган",
    },
  },
  mapUrl: "https://maps.google.com/?q=%D0%96%D0%B5%D0%B7%D0%BA%D0%B0%D0%B7%D0%B3%D0%B0%D0%BD%205%2F73",
  musicUrl: "1687438130.mp3",
  telegram: {
    botToken: "8988994858:AAHmdzJcWO2KsVlgr5RLeNO97lmipMQ_SDY",
    chatId: "6689461397",
  },
};

const TRANSLATIONS = {
  kk: {
    monthNames: [
      "Қаңтар",
      "Ақпан",
      "Наурыз",
      "Сәуір",
      "Мамыр",
      "Маусым",
      "Шілде",
      "Тамыз",
      "Қыркүйек",
      "Қазан",
      "Қараша",
      "Желтоқсан",
    ],
    weekdayNames: [
      "жексенбі",
      "дүйсенбі",
      "сейсенбі",
      "сәрсенбі",
      "бейсенбі",
      "жұма",
      "сенбі",
    ],
    calendarHeads: ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб", "Жк"],
    texts: {
      "hero-kicker": "Үйлену тойға шақыру",
      "intro-kicker": "Құрметті қонақтар",
      "intro-title": "Сіздерді қуанышымызға ортақ болуға шақырамыз",
      "intro-lead": "Құрметті достарымыз, жақындарымыз және бауырларымыз!",
      "intro-text1":
        "Сіздерді Дамирхан мен Інжудің шаңырақ көтеруіне арналған ақ дастарқанымыздың қадірлі қонағы болуға шақырамыз.",
      "intro-text2":
        "Осы қуанышты күнімізде біздің қуанышымызға ортақтасып, жас жұбайларға ақ тілектеріңізді арнасаңыздар, біз үшін үлкен мәртебе болар еді.",
      "invitation-kicker": "Бір күн, бір қуаныш",
      "invitation-title": "Тойға шақыру",
      "invitation-text":
        "Біз үшін өте маңызды, егер сіздер осы қуанышты сәтте біздің жанымызбен бірге бөлісіп, жас жұбайларға жылы сөздеріңізді арнасаңыздар.",
      "date-kicker": "Той салтанаты",
      "couple-title": "Той иелері:",
      "venue-title": "Мекен-жайымыз",
      "countdown-kicker": "Кездескенше",
      "countdown-title": "Үйлену тойына дейін:",
      "day-label": "күн",
      "hour-label": "сағат",
      "minute-label": "минут",
      "second-label": "секунд",
      "place-kicker": "Мекен-жай",
      "place-title": "Той өтетін орын",
      "place-hint": "Жолды ыңғайлы табу үшін картаны ашып алыңыз:",
      "map-button": "Картаға өту",
      "rsvp-kicker": "Анкета",
      "rsvp-title": "Қатысуыңызды растаңыз",
      "rsvp-lead":
        "Құрметті қонақ, тойға қатысуыңызды алдын ала хабарлауыңызды сұраймыз.",
      "form-name": "Есіміңіз",
      "form-name-placeholder": "Аты-жөніңіз",
      "form-attendance": "Келе аласыз ба?",
      "form-attendance-yes": "Келемін",
      "form-attendance-no": "Келе алмаймын",
      "form-guests": "Қанша ересек адам болады?",
      "form-message": "Тілегіңіз",
      "form-message-placeholder": "Осында тілегіңізді жазып беріңіз",
      "form-submit": "Жіберу",
      "form-submitting": "Жіберілуде...",
      "form-success": "Жауабыңыз сақталды. Рақмет!",
      "form-telegram-success": "Жауабыңыз сәтті жіберілді!",
      "form-error":
        "Жіберу кезінде қате болды. Telegram botToken және chatId мәндерін тексеріңіз.",
      "form-local-note":
        "Telegram әлі бапталмаған, сондықтан жауап осы браузерде сақталды.",
      "footer-top": "Жоғарыға",
    },
    music: {
      play: "Әуен қосу",
      stop: "Әуенді тоқтату",
      ring: "ӘУЕН ҚОСУ ҮШІН БАСЫҢЫЗ",
      unavailable: "Әуен файлы қосылмаған",
    },
    yearSuffix: "жыл",
    localStorageKey: "wedding-rsvp-kk",
  },
  ru: {
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    weekdayNames: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    calendarHeads: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    texts: {
      "hero-kicker": "Приглашение на свадьбу",
      "intro-kicker": "Дорогие гости",
      "intro-title": "Приглашаем разделить с нами эту радость",
      "intro-lead": "Дорогие друзья, родные и близкие!",
      "intro-text1":
        "Мы приглашаем вас стать почётными гостями нашего свадебного стола, посвящённого поднятию юрты Дамирхана и Инжу.",
      "intro-text2":
        "В этот радостный день, разделив с нами нашу радость, подарите молодожёнам свои добрые пожелания — для нас это будет великой честью.",
      "invitation-kicker": "Один день, одна радость",
      "invitation-title": "Приглашение",
      "invitation-text":
        "Мы будем очень счастливы, если вы разделите с нами эту радость и поддержите молодых своим теплом и добрыми словами.",
      "date-kicker": "Торжество",
      "couple-title": "Молодожёны:",
      "venue-title": "Место проведения",
      "countdown-kicker": "До встречи",
      "countdown-title": "До свадьбы осталось:",
      "day-label": "дн",
      "hour-label": "ч",
      "minute-label": "мин",
      "second-label": "сек",
      "place-kicker": "Адрес",
      "place-title": "Место проведения",
      "place-hint": "Чтобы удобно построить маршрут, откройте карту:",
      "map-button": "Открыть карту",
      "rsvp-kicker": "Анкета",
      "rsvp-title": "Подтвердите участие",
      "rsvp-lead":
        "Дорогой гость, пожалуйста, заранее сообщите, сможете ли вы прийти.",
      "form-name": "Ваше имя",
      "form-name-placeholder": "Введите ваше имя",
      "form-attendance": "Вы сможете прийти?",
      "form-attendance-yes": "Приду",
      "form-attendance-no": "Не смогу прийти",
      "form-guests": "Сколько взрослых человек будет?",
      "form-message": "Пожелание",
      "form-message-placeholder": "Напишите пожелание здесь",
      "form-submit": "Отправить",
      "form-submitting": "Отправка...",
      "form-success": "Ответ сохранен. Спасибо!",
      "form-telegram-success": "Ваш ответ успешно отправлен!",
      "form-error": "Ошибка при отправке. Проверьте токен Telegram и ID чата.",
      "form-local-note":
        "Telegram еще не настроен, поэтому ответ сохранен в этом браузере.",
      "footer-top": "Наверх",
    },
    music: {
      play: "Включить музыку",
      stop: "Остановить музыку",
      ring: "НАЖМИТЕ, ЧТОБЫ ВКЛЮЧИТЬ МУЗЫКУ",
      unavailable: "Музыка не подключена",
    },
    yearSuffix: "г.",
    localStorageKey: "wedding-rsvp-ru",
  },
};

let currentLanguage = "kk";
let musicIsActive = false;

const pad = (value) => String(value).padStart(2, "0");

function getTranslation() {
  return TRANSLATIONS[currentLanguage];
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setIcon(icon, mode) {
  const paths = {
    play: '<path d="M8 5v14l11-7z" />',
    pause: '<path d="M7 5h4v14H7zM13 5h4v14h-4z" />',
  };

  icon.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[mode]}</svg>`;
}

function updatePlaceholders() {
  const texts = getTranslation().texts;

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    const key = element.dataset.placeholder;
    if (texts[key]) {
      element.setAttribute("placeholder", texts[key]);
    }
  });
}

function updateRadioValues() {
  const texts = getTranslation().texts;
  const yesInput = document.querySelector('input[name="attendance"][value]');
  const noInput = document.querySelectorAll('input[name="attendance"]')[1];

  if (yesInput) {
    yesInput.value = texts["form-attendance-yes"];
  }

  if (noInput) {
    noInput.value = texts["form-attendance-no"];
  }
}

function updateTexts() {
  const translation = getTranslation();

  Object.entries(translation.texts).forEach(([key, value]) => {
    document.querySelectorAll(`[data-text="${key}"]`).forEach((element) => {
      element.textContent = value;
    });
  });

  updatePlaceholders();
  updateRadioValues();
  updateMusicLabels();
}

function formatDateParts(date) {
  const translation = getTranslation();

  return {
    hero: `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`,
    month: translation.monthNames[date.getMonth()],
    day: String(date.getDate()),
    year: String(date.getFullYear()),
    weekday: translation.weekdayNames[date.getDay()],
    time: `${pad(date.getHours())}:${pad(date.getMinutes())}`,
  };
}

function hydrateInvitation() {
  const eventDate = new Date(INVITATION.eventDate);
  const dateParts = formatDateParts(eventDate);
  const coupleName = `${INVITATION.groom} & ${INVITATION.bride}`;

  setText("[data-couple-name]", coupleName);
  setText("[data-hero-date]", dateParts.hero);
  setText("[data-event-month]", dateParts.month);
  setText("[data-event-day]", dateParts.day);
  setText("[data-event-year]", dateParts.year);
  setText("[data-weekday]", dateParts.weekday);
  setText("[data-event-time]", dateParts.time);

  const venue = INVITATION.venue[currentLanguage] || INVITATION.venue.ru;
  setText("[data-venue-name]", venue.name);
  setText("[data-venue-address]", venue.address);

  const calendarTitle = document.querySelector("[data-calendar-title]");
  if (calendarTitle) {
    calendarTitle.textContent = `${dateParts.month}, ${dateParts.year} ${getTranslation().yearSuffix}`;
  }

  const mapLink = document.querySelector("[data-map-link]");
  if (mapLink) {
    mapLink.href = INVITATION.mapUrl;
  }
}

function startCountdown() {
  const eventTime = new Date(INVITATION.eventDate).getTime();
  const dayNode = document.querySelector("[data-countdown-days]");
  const hourNode = document.querySelector("[data-countdown-hours]");
  const minuteNode = document.querySelector("[data-countdown-minutes]");
  const secondNode = document.querySelector("[data-countdown-seconds]");

  function tick() {
    const distance = Math.max(eventTime - Date.now(), 0);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    dayNode.textContent = pad(days);
    hourNode.textContent = pad(hours);
    minuteNode.textContent = pad(minutes);
    secondNode.textContent = pad(seconds);
  }

  tick();
  window.setInterval(tick, 1000);
}

function buildCalendar() {
  const calendar = document.querySelector("[data-calendar]");
  if (!calendar) {
    return;
  }

  const eventDate = new Date(INVITATION.eventDate);
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const markedDay = eventDate.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  calendar.innerHTML = "";

  getTranslation().calendarHeads.forEach((head) => {
    const cell = document.createElement("span");
    cell.className = "head";
    cell.textContent = head;
    calendar.append(cell);
  });

  for (let index = 0; index < offset; index += 1) {
    const cell = document.createElement("span");
    cell.className = "empty";
    calendar.append(cell);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const cell = document.createElement("span");
    if (day === markedDay) {
      cell.className = "marked";
      cell.innerHTML = `<b>${day}</b>`;
    } else {
      cell.textContent = day;
    }
    calendar.append(cell);
  }
}

function updateMusicLabels() {
  const button = document.querySelector("[data-music-toggle]");
  const ringText = document.querySelector("[data-music-ring]");
  const labels = getTranslation().music;

  if (!button) {
    return;
  }

  button.setAttribute("aria-label", musicIsActive ? labels.stop : labels.play);

  if (ringText) {
    ringText.textContent = labels.ring;
  }
}

function setupMusicButton() {
  const button = document.querySelector("[data-music-toggle]");
  const icon = document.querySelector("[data-music-icon]");
  const audio = document.querySelector("[data-wedding-audio]");

  if (!button || !icon || !audio) {
    return;
  }

  if (!INVITATION.musicUrl) {
    button.disabled = true;
    button.setAttribute("aria-label", getTranslation().music.unavailable);
    return;
  }

  audio.src = INVITATION.musicUrl;
  updateMusicLabels();

  button.addEventListener("click", async () => {
    if (musicIsActive) {
      audio.pause();
      musicIsActive = false;
      setIcon(icon, "play");
      updateMusicLabels();
      return;
    }

    try {
      await audio.play();
      musicIsActive = true;
      setIcon(icon, "pause");
      updateMusicLabels();
    } catch (error) {
      console.error(error);
    }
  });
}

function initLanguage() {
  const savedLanguage = localStorage.getItem("language");
  currentLanguage = TRANSLATIONS[savedLanguage] ? savedLanguage : "kk";
  document.documentElement.lang = currentLanguage;

  const button = document.querySelector("[data-language-toggle]");
  if (!button) {
    return;
  }

  const setButtonLabel = () => {
    button.textContent = currentLanguage === "kk" ? "RU" : "KZ";
    button.setAttribute(
      "aria-label",
      currentLanguage === "kk" ? "Русский язык" : "Қазақ тілі",
    );
  };

  setButtonLabel();
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "kk" ? "ru" : "kk";
    document.documentElement.lang = currentLanguage;
    localStorage.setItem("language", currentLanguage);
    setButtonLabel();

    updateTexts();
    hydrateInvitation();
    buildCalendar();
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function hasTelegramConfig() {
  const { botToken, chatId } = INVITATION.telegram;
  return (
    botToken &&
    chatId &&
    botToken !== "PASTE_BOT_TOKEN_HERE" &&
    chatId !== "PASTE_CHAT_ID_HERE"
  );
}

function buildTelegramMessage(formData) {
  const labels = {
    kk: {
      title: "Жаңа RSVP жауап",
      wedding: "Той:",
      name: "Есімі:",
      attendance: "Жауабы:",
      guests: "Ересек адам саны:",
      message: "Тілегі:",
    },
    ru: {
      title: "Новый ответ RSVP",
      wedding: "Свадьба:",
      name: "Имя:",
      attendance: "Ответ:",
      guests: "Количество взрослых:",
      message: "Пожелание:",
    },
  };

  const messageLabels = labels[currentLanguage];
  const lines = [
    `<b>${messageLabels.title}</b>`,
    `${messageLabels.wedding} ${escapeHtml(INVITATION.groom)} & ${escapeHtml(INVITATION.bride)}`,
    `${messageLabels.name} ${escapeHtml(formData.get("name"))}`,
    `${messageLabels.attendance} ${escapeHtml(formData.get("attendance"))}`,
    `${messageLabels.guests} ${escapeHtml(formData.get("guests"))}`,
  ];

  const message = formData.get("message")?.trim();
  if (message) {
    lines.push(`${messageLabels.message} ${escapeHtml(message)}`);
  }

  return lines.join("\n");
}

async function sendToTelegram(message) {
  const { botToken, chatId } = INVITATION.telegram;
  const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  const payload = await response.json();
  if (!response.ok || !payload.ok) {
    throw new Error(payload.description || "Telegram request failed");
  }
}

function saveLocalRsvp(formData) {
  const key = getTranslation().localStorageKey;
  const records = JSON.parse(localStorage.getItem(key) || "[]");

  records.push({
    name: formData.get("name"),
    attendance: formData.get("attendance"),
    guests: formData.get("guests"),
    message: formData.get("message"),
    createdAt: new Date().toISOString(),
  });

  localStorage.setItem(key, JSON.stringify(records));
}

function setupRsvpForm() {
  const form = document.querySelector("[data-rsvp-form]");
  const status = document.querySelector("[data-form-status]");
  const submitButton = document.querySelector("[data-submit-button]");

  if (!form || !status || !submitButton) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const texts = getTranslation().texts;

    if (formData.get("company")) {
      return;
    }

    submitButton.disabled = true;
    submitButton.querySelector("span").textContent = texts["form-submitting"];
    status.textContent = "";
    status.className = "form-status";

    try {
      if (hasTelegramConfig()) {
        await sendToTelegram(buildTelegramMessage(formData));
        status.textContent = texts["form-telegram-success"];
      } else {
        saveLocalRsvp(formData);
        status.textContent = `${texts["form-success"]} ${texts["form-local-note"]}`;
      }

      form.reset();
      form.elements.guests.value = "1";
      status.className = "form-status success";
    } catch (error) {
      status.textContent = texts["form-error"];
      status.className = "form-status error";
      console.error(error);
    } finally {
      submitButton.disabled = false;
      submitButton.querySelector("span").textContent = texts["form-submit"];
    }
  });
}

function setupScrollReveal() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selectors = [
    ".hero-copy > *",
    ".section-kicker",
    ".section h2",
    ".section h3",
    ".section p",
    ".glass-card h2",
    ".glass-card p",
    "form label",
    "form fieldset",
    ".submit",
    ".footer p",
    ".footer a",
  ];
  const elements = [...document.querySelectorAll(selectors.join(","))];

  elements.forEach((element, index) => {
    element.classList.add("reveal-text");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  });

  if (reducedMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "-8% 0px -8% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
}

initLanguage();
updateTexts();
hydrateInvitation();
startCountdown();
buildCalendar();
setupMusicButton();
setupRsvpForm();
setupScrollReveal();
