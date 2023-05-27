document.addEventListener("DOMContentLoaded", tomarElementos);

function tomarElementos(){
    let cajaHTML = document.getElementById("cajaHTML");
    let buttonTest = document.getElementById("buttonTest");
    let testArea = document.getElementById("testArea");

    let cajaCSS = document.getElementById('cajaCSS');
    let style = document.getElementById('style');

    let cajaJS = document.getElementById('cajaJS');
    let script = document.getElementById('script');

    buttonTest.addEventListener('click', render);
}

function render(){
    testArea.innerHTML = cajaHTML.value;
    style.innerHTML = cajaCSS.value;
    script.innerHTML = cajaJS.value;
}
