const izquierda = document.querySelector("#left");
const derecha = document.querySelector("#right");
const slider = document.querySelector(".slider");
let contador = 0;
let img = [1, 2, 3, 4]
derecha .addEventListener("click",function(){
contador++;
if(contador> img.length-1){
contador = 0;
}
slider.style.background = `url('./img/${img[contador].jpeg}')`;
});
