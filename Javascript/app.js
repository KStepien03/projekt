const switchButton = document.querySelector(".header__nav__navlinks__ul__li_but__button");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        theme = "light";
    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}

if (theme === "light") {
    document.querySelector("body").classList.add("light");
}

//////////////////////////////////////////////////////////

let navlinks = document.getElementById("navlinks");
    function showMenu(){
        navlinks.style.right = "0";
    }
    function hideMenu(){
        navlinks.style.right = "-200px";
    }