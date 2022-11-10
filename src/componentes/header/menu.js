/* MENU */
let selMenu = document.getElementById("mIco");

// encolhe e expande as opções de navegação 
// https://youtu.be/BpzyuuPIEaQ
function mostraMenu() {
    var x = document.getElementById("mostraOpMobile");
    if (x.className === "menuMobileExpandidon") {
      x.className += " menuMobileExpandidos";
    } else {
      x.className = "menuMobileExpandidon";
    }
}

selMenu.onclick = function() { 
    mostraMenu();
}
