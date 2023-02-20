const cuadernoColores = document.getElementsByClassName("cuaderno-color");
const cuadernoColorContainers = document.getElementsByClassName("cuaderno-color-container");
const cuadernoImgContainers = document.getElementsByClassName("cuaderno-img-container");
const cuadernoContainers = document.getElementsByClassName("cuaderno-container");

// SEGUN EL ATRIBUTO CUADERNO COLOR PONER COLOR DE FONDO
for(let i = 0; i < cuadernoColores.length; i++) {
    if(cuadernoColores[i].hasAttribute("cuaderno-color")) {
        let color = cuadernoColores[i].getAttribute("cuaderno-color");
        cuadernoColores[i].style.backgroundColor  = color;
    }
}

// MOUSEOVER EN IMAGEN MOSTRAR CUADERNO COLORES
function onHoverShowColors(cuadernoContainer, posicionContainerEnArray) {
    cuadernoContainer.addEventListener("mouseover", ()=>{
        cuadernoColorContainers[posicionContainerEnArray].style.opacity = "1";
    })
}
// MOUSELEAVE EN IMAGEN MOSTRAR CUADERNO COLORES
function onLeaveHideColors(cuadernoContainer, posicionContainerEnArray) {
    cuadernoContainer.addEventListener("mouseleave", ()=>{
        cuadernoColorContainers[posicionContainerEnArray].style.opacity = "0";
    })
}

for(let i = 0; i < cuadernoImgContainers.length; i++) {
    onHoverShowColors(cuadernoImgContainers[i], i);
    onLeaveHideColors(cuadernoImgContainers[i], i);
}

// SEGUN EL COLOR SELECCIONADO CAMBIAR IMAGEN
function onColorClickChangeImg(elementoDomColor, target) {
    elementoDomColor.addEventListener('click', ()=>{
        elementoDomColor.classList.add("active")
        let sibilings = elementoDomColor.parentElement.children;
        for(let i = 0; i < sibilings.length; i++) {
            if(sibilings[i] != elementoDomColor) {
                sibilings[i].classList.replace("active", "a")
            }
        }
        let containerImgParent = elementoDomColor.parentElement.parentElement
        containerImgParent.style.background = "url("+ target +")";
        containerImgParent.style.backgroundPosition = "top";
        containerImgParent.style.backgroundSize = "cover";
    })
}

for(let i = 0; i < cuadernoColores.length; i++) {
    if(cuadernoColores[i].classList.contains("active")) {
        let containerImgParent = cuadernoColores[i].parentElement.parentElement
        containerImgParent.style.background = "url("+ cuadernoColores[i].getAttribute("target") +")";
        containerImgParent.style.backgroundPosition = "top";
        containerImgParent.style.backgroundSize = "cover";
    }
    onColorClickChangeImg(cuadernoColores[i],cuadernoColores[i].getAttribute("target"));
}