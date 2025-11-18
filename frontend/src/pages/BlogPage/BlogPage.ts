import iconSearch from "/icons/search_icon.png";

export default `
    <div class="filter-bar">
        <div class="search-box">
            <img
                class="search-box__icon"
                src=${iconSearch}
                alt=""
            >
            <input
                class="search-box__input"
                type="search"
            >
        </div>
        <select class="dropdown">
            <option selected>Сначала новые</option>
            <option>Сначала старые</option>
        </select>
        <button class="filter-bar__create-button">Создать публикацию</button>
    </div>
`;