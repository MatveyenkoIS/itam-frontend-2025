import iconTelegram from "/icons/telegram_icon.png";
import iconVK from "/icons/vk_icon.png";
import iconGitHub from "/icons/github_icon.png";

export default `
    <header class="header">
        <h1
            class="heading heading_hierarchy_1"
        >
            ILYA MATVEYENKO PERSONAL SITE
        </h1>
        <nav class="navbar">
            <ul class="navbar__links-list">
                <li class="navbar__list-item">
                    <a class="navbar__link" href="/">Главная</a>
                </li>
                <li class="navbar__list-item">
                    <a class="navbar__link" href="/blog">Блог</a>
                </li>
            </ul>
        </nav>
    </header>
    <main id="root" class="main"></main>
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
`;