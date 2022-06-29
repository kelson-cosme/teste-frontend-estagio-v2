const menu = document.getElementById("menu");
const opcoes = document.getElementById("opcoes")

function clicar(){
    console.log(opcoes.className)

    if(opcoes.className == "opcoes"){
        opcoes.classList.toggle("active")
    } else {
        opcoes.classList.toggle("active")
    }
}

menu.addEventListener("click", clicar)