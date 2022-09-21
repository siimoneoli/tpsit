let BtnUp = document.getElementById("BtnUp");
let BtnDown = document.getElementById("BtnDown");
let BtnLeft = document.getElementById("BtnLeft");
let BtnRight = document.getElementById("BtnRight");

let Orizzontale = document.getElementById("Orizzontale");
let Verticale = document.getElementById("Verticale");

let O = 0;

let V = 0;

BtnUp.onclick = function(){

    V++;

    Verticale.innerHTML = V;

}

BtnDown.onclick = function(){

    if(V == "0"){

        Verticale.innerHTML = 0;

    }else{

        V--;

        Verticale.innerHTML = V;

    }
}

BtnRight.onclick = function(){

    O++;

    Orizzontale.innerHTML = O;

}

BtnLeft.onclick = function(){

    if(O == "0"){

        Orizzontale.innerHTML = 0;

    }else{

        O--;

        Orizzontale.innerHTML = O;

    }
}