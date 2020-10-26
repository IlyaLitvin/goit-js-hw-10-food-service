export default function () {
    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };
    const body = document.querySelector('body');
    body.classList.add(Theme.LIGHT);
    const switchToggle = document.querySelector("#theme-switch-toggle");
    const setClassList = function (e) {
            body.classList.toggle(Theme.LIGHT);
            body.classList.toggle(Theme.DARK);
            localStorage.setItem('checkbox', e.target.checked);
            localStorage.setItem('light', body.classList.contains(Theme.DARK));
        };
    switchToggle.addEventListener('change', setClassList);
    const themeChange = function () {   
        if (localStorage.getItem("checkbox") === 'false' && localStorage.getItem("light") === 'false') {
            switchToggle.checked = false
            body.classList.add(Theme.LIGHT)
        } else if (localStorage.getItem("checkbox") && localStorage.getItem("light")) {
            switchToggle.checked = true
            body.classList.add(Theme.DARK)
        };
    };
    return {themeChange}
};
