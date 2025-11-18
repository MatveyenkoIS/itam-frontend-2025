import HomePage from "../pages/HomePage/HomePage";
import BlogPage from "../pages/BlogPage/BlogPage";

interface Route {
    path: string;
    data: string;
};

const routes: Route[] = [
    {
        path: "/",
        data: HomePage
    },
    {
        path: "/blog",
        data: BlogPage
    }
];

const setRouteHtml = () => {
    const main: HTMLElement | null = document.getElementById("main");

    if (!main) return;

    const route: Route | undefined = routes.find(route => route.path == window.location.pathname);

    if (!route) return;

    const html: string = route.data;

    main.innerHTML = html;
};

const setNavLinkStyles = () => {
    document.querySelectorAll<HTMLAnchorElement>(".nav-bar__link").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("nav-bar__link_active");
        } else {
            link.classList.remove("nav-bar__link_active");
        }
    })
};

const router = (mouseEvent: MouseEvent) => {
    if (!mouseEvent) return;

    mouseEvent.preventDefault();

    const target = (mouseEvent.target) as HTMLAnchorElement;

    if (!target) return;

    history.pushState({}, "newUrl", target.href);
    setRouteHtml();
    setNavLinkStyles();
};

const setEventListeners = () => {
    window.addEventListener("popstate", setRouteHtml);

    window.addEventListener("DOMContentLoaded", () => {
        setRouteHtml();
        setNavLinkStyles();
    });

    document.querySelectorAll<HTMLAnchorElement>(".nav-bar__link").forEach(link => {
        link.addEventListener("click", router);
    });
};

setEventListeners();