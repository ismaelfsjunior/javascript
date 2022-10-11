//     const handleClick = () => {
//         const body = document.querySelector('body');
//         body.innerHTML = `
//             <h1>HELLO JAVASCRIPT!</H1>
//             <h2>and Hello world!</h2>
//         `;
        
//         body.style.backgroundColor = '#000';
//         body.style.color = '#fff';
//     };

// document.addEventListener('DOMContentLoaded', () => {    
//     const el = document.getElementById("btn-start");
//     el.addEventListener('mouseover', () => {
//         el.style.position = 'absolute';
//         el.style.top = `${Math.random() * (window.innerHeight - 18)}px`;
//         el.style.left = `${Math.random() * (window.innerWidth - 36)}px`;
//     });
//     el.addEventListener('click', () => handleClick());
// })

const handleClick = () => {
    const body = $("body");
    body.html(`
        <h1>HELLO JAVASCRIPT!</H1>
        <h2>and Hello world!</h2>
    `);
    
    body.css("background-color", "#000");
    body.css("color", "#fff");
};

const startButtonInit = () => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position", "absolute");
        el.css("top", `${Math.floor(Math.random() * (window.innerHeight - 18))}px`);
        el.css("left", `${Math.floor(Math.random() * (window.innerWidth - 36))}px`);
    });
    el.on('click', () => handleClick());
};

const infoButtonInit = () => {
    const el = $("#btn-info");
    const elInitialText = el.html();
    el.on("click", () => {
        if (el.html() == elInitialText) {
            el.html('OCULTAR INFORMAÇÕES');
        }else{
            el.html(elInitialText);
        };
        $(".info").slideToggle();
    });
};

$(document).ready(() => {   
    startButtonInit();
    infoButtonInit();
});



