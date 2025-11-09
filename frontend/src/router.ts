import Home from "./pages/Home";
import Blog from "./pages/Blog";

interface Route {
    path: string;
    data: string;
};

const routes: Route[] = [
    {
        path: "/",
        data: Home
    },
    {
        path: "/blog",
        data: Blog
    }
];

const setRouteHtml = () => {
    const root: HTMLElement | null = document.getElementById("root");

    if (!root) return;

    const route: Route | undefined = routes.find(route => route.path == window.location.pathname);

    if (!route) return;

    const html: string = route.data;

    root.innerHTML = html;
};

const setNavLinkColor = () => {
    document.querySelectorAll<HTMLAnchorElement>(".navbar__link").forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('navbar__link_active');
        } else {
            link.classList.remove('navbar__link_active');
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
    setNavLinkColor();
};

const setEventListeners = () => {
    window.addEventListener('popstate', setRouteHtml);

    window.addEventListener('DOMContentLoaded', () => {
        setRouteHtml();
        setNavLinkColor();
    });

    document.querySelectorAll<HTMLAnchorElement>(".navbar__link").forEach(link => {
        link.addEventListener("click", router);
    });
};

setEventListeners();