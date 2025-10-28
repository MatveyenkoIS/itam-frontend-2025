// Подключение шрифтов и стилей главной страницы
import "./static/fonts/fonts.css";
import "reset-css/reset.css";
import "./index.css";

// Подключение картинок
import photoVTB from "./static/images/photo_vtb.png";
import certificateVTB from "./static/images/vtb_api_certificate.png";
import certificateVK from "./static/images/vk_edu_certificate.png";

// Подключение иконок
import iconHTML from "./static/icons/html_icon.png";
import iconCSS from "./static/icons/css_icon.png";
import iconJS from "./static/icons/js_icon.png";
import iconPython from "./static/icons/python_icon.png";
import iconSvelte from "./static/icons/svelte_icon.png";
import iconReact from "./static/icons/react_icon.png";
import iconSelenium from "./static/icons/selenium_icon.png";
import iconTelegram from "./static/icons/telegram_icon.png";
import iconVK from "./static/icons/vk_icon.png";
import iconGitHub from "./static/icons/github_icon.png";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <header class="header">
    <h1
      class="heading heading_hierarchy_1"
    >
      ILYA MATVEYENKO PERSONAL SITE
    </h1>
  </header>
  <main class="main">
    <div class="flex-row flex-row_greeting">
      <img
        class="portrait-photo"
        src="${photoVTB}"
        alt=""
      >
      <div class="content-container content-container_greeting">
        <span class="content-container__greeting-text">Привет, меня зовут Илья.&#160;</span>
        <span class="content-container__greeting-text">Добро пожаловать на мой веб-сайт!</span>
      </div>
    </div>

    <section class="section section_about">
      <div class="header-container">
        <h2
          class="heading heading_hierarchy_2"
        >
          Обо мне
        </h2>
      </div>
      <div
        class="content-container content-container_bordered content-container_about"
      >
        <p class="content-container__paragraph">
          Я студент 4 курса и обучаюсь на треке "Разработка мобильных и веб-приложений".  
        </p>
        <p class="content-container__paragraph">
          Возможно, некоторые преподаватели меня уже хорошо знают, так как в ITAM Frontend Courses я участвую уже в 3 раз.
        </p>
        <p class="content-container__paragraph">
          Почему же я снова здесь? Что ж, к хакатону я начал изучать совсем новую для себя библиотеку - React, и решил, что новая итерация курсов по фронтенд-разработке хорошо поддержит меня в освоении этой технологии.
        </p>
      </div>
    </section>

    <div class="flex-row flex-row_skills">
      <section class="section section_stack">
        <div
          class="header-container"
        >
          <h2
            class="heading heading_hierarchy_2"
          >
            Мой стек
          </h2>
        </div>
        <div
          class="content-container content-container_bordered content-container_stack"
        >
          <div class="icons-group">
            <div class="icons-group__row">
              <img
                class="icons-group__icon"
                src="${iconHTML}"
                alt=""
              >
              <img
                class="icons-group__icon"
                src="${iconCSS}"
                alt=""
              >
              <img
                class="icons-group__icon"
                src="${iconJS}"
                alt=""
              >
            </div>
            <div class="icons-group__row">
              <img
                class="icons-group__icon"
                src="${iconPython}"
                alt=""
              >
              <img
                class="icons-group__icon"
                src="${iconSvelte}"
                alt=""
              >
              <img
                class="icons-group__icon"
                src="${iconReact}"
                alt=""
              >
            </div>
          </div>
          <img
            class="content-container__icon"
            src="${iconSelenium}"
            alt=""
          >
        </div>
      </section>

        <section class="section section_achievements">
          <div
            class="header-container"
          >
            <h2
              class="heading heading_hierarchy_2"
            >
              Мои достижения
            </h2>
          </div>
          <div
            class="content-container content-container_bordered content-container_achievements"
          >
            <img
              class="content-container__image content-container__image_vtb-api"
              src="${certificateVTB}"
              alt=""
            >
            <img
              class="content-container__image content-container__image_vk-edu"
              src="${certificateVK}"
              alt=""
            >
          </div>
        </section>
    </div>
  </main>
  <footer class="footer">
    <div class="flex-row flex-row_footer flex-row_links">
      <section class="section section_links">
        <h2 class="heading heading_hierarchy_2">
          Мои контакты
        </h2>
        <div class="content-container content-container_links">
          <a
            class="content-container__link"
            href="https://t.me/Ilya_Matveyenko"
            target="_blank"
          >
            <img
              class="content-container__link-icon"
              src="${iconTelegram}"
              alt=""
            >
            Телеграм
          </a>
          <a
            class="content-container__link"
            href="https://vk.com/id263061135"
            target="_blank"
          >
            <img
              class="content-container__link-icon"
              src="${iconVK}"
              alt=""
            >
            Вконтакте
          </a>
          <a
            class="content-container__link"
            href="https://github.com/MatveyenkoIS"
            target="_blank"
          >
            <img
              class="content-container__link-icon"
              src="${iconGitHub}"
              alt=""
            >
            GitHub
          </a>
        </div>
      </section>

      <section class="section section_links">
        <h2 class="heading heading_hierarchy_2">
          Использованные шрифты
        </h2>
        <div class="content-container content-container_links">
          <a
            class="content-container__link content-container__link_OPTI-Enge-Etienne"
            href="https://www.fontbolt.com/font/final-fantasy-xiv-font/"
            target="_blank"
          >
            OPTI Enge Etienne
          </a>
          <a
            class="content-container__link content-container__link_Noto-Serif"
            href="https://en.bestfonts.pro/font/noto-serif"
            target="_blank"
          >
            Noto Serif
          </a>
          <a
            class="content-container__link content-container__link_Noto-Sans"
            href="https://en.bestfonts.pro/font/noto-sans"
            target="_blank"
          >
            Noto Sans
          </a>
        </div>
      </section>
    </div>

    <div class="flex-row flex-row_footer flex-row_legal-info">
      <span class="notice">Все права на шрифты, размещённые на сайте, принадлежат их настоящим владельцам.&#160;</span>
      <span class="copyright">&#169; 2025 Илья Матвеенко</span>
    </div>
  </footer>
`