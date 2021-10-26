

function toggleMenu(event) {
    // console.log(event.target.classList);
    // console.log(event.target);
    // event.target.classList.toggle("clicked");
    const randomText = "ezt vajon kilogolja e ?"
    const fastLogResult = fastLog("Ezt a szöveget szeretném kilogoltatni");
    fastLog(randomText);
    console.log(fastLogResult);
    document.getElementById("about").classList.add("clickedToo");
};

function loadEvent() {
    // console.log('the page has loaded');
    document.getElementById("menu-btn").addEventListener("click", toggleMenu);
};

function fastLog(text){
    console.log(text);
    return "muhaha";
};

window.addEventListener("load", loadEvent);

