document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const month = now.getMonth();

    if (month > 1 && month < 5) {
        document.documentElement.style.setProperty('--bg-color', '#312750');
        document.documentElement.style.setProperty('--prim-color', '#de8aa0');
        document.documentElement.style.setProperty('--sec-color', '#ddc6f9');
        document.getElementById("img-banner").src = "img/spring.gif";
    }

    if (month > 4 && month < 8) {
        document.documentElement.style.setProperty('--bg-color', '#433d58');
        document.documentElement.style.setProperty('--prim-color', '#c276c8');
        document.documentElement.style.setProperty('--sec-color', '#ff9ec2');
        document.getElementById("img-banner").src = "img/summer.gif";
    }

    if (month > 7 && month < 11) {
        document.documentElement.style.setProperty('--bg-color', '#2b0e0d');
        document.documentElement.style.setProperty('--prim-color', '#e45415');
        document.documentElement.style.setProperty('--sec-color', '#fbc001');
        document.getElementById("img-banner").src = "img/autumn.gif";
    }

    if (month == 11 || month < 2) {
        document.documentElement.style.setProperty('--bg-color', '#42403c');
        document.documentElement.style.setProperty('--prim-color', '#5e789a');
        document.documentElement.style.setProperty('--sec-color', '#8db5cc');
        document.getElementById("img-banner").src = "img/winter.gif";
    }
    console.error('Unable to calculate current season');
});