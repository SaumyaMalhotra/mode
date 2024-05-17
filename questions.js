let mbtn=document.querySelector('#mode');
let color=document.querySelector('body');
let cmode="light";
mbtn.addEventListener("click",() => {
    if(cmode==="light"){
        cmode="dark";
        color.classList.add("dark");
        color.classList.remove("light");
    } else {
        cmode = "light";
        color.classList.add("light");
        color.classList.remove("dark");
    }
    console.log(cmode);
});
