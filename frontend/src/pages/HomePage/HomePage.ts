// Подключение картинок
import photoVTB from "/images/photo_vtb.png";
import certificateVTB from "/images/vtb_api_certificate.png";
import certificateVK from "/images/vk_edu_certificate.png";

// Подключение иконок
import iconHTML from "/icons/html_icon.png";
import iconCSS from "/icons/css_icon.png";
import iconJS from "/icons/js_icon.png";
import iconPython from "/icons/python_icon.png";
import iconSvelte from "/icons/svelte_icon.png";
import iconReact from "/icons/react_icon.png";
import iconSelenium from "/icons/selenium_icon.png";

export default `
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
`;