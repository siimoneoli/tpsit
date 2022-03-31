/* Dichiara i 2 elementi "Box1 e Box2" */

var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")


/* Questa funzione permette hai quadrati di muoversi in uno spazio 500 x 800, e ogni secondo di cambiare posizione (La posizione è random)  */

function Start(){

    setInterval(function(){
        
        var boxposition1 = Math.floor((Math.random() * 500) + 1);
        var boxposition1 = Math.floor((Math.random() * 800) + 1);
        var boxposition2 = Math.floor((Math.random() * 500) + 1);
        var boxposition2 = Math.floor((Math.random() * 800) + 1);    

        box1.style.top = boxposition1 + "px";
        box1.style.left = boxposition1 + "px";
        box2.style.top = boxposition2 + "px";
        box2.style.left = boxposition2 + "px";       

    },1000)
}

/* Questa funzione è scritta in jquery (libreria di js) e permette di assumere hai quadrati diversi colori, ovvero: "Quando non si toccano sono 1 blu e 1 giallo, invece quando la funzione riconosce che tra i due ce stata una collisione li fa diventare entrambi rossi"  */

function collision($box1, $box2) {
    var x1 = $box1.offset().left;
    var y1 = $box1.offset().top;
    var h1 = $box1.outerHeight(true);
    var w1 = $box1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $box2.offset().left;
    var y2 = $box2.offset().top;
    var h2 = $box2.outerHeight(true);
    var w2 = $box2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
      
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
        box1.style.backgroundColor="yellow"
        box2.style.backgroundColor="blue"
    } else {
        box1.style.backgroundColor="red"
        box2.style.backgroundColor="red"
    }
  }

window.setInterval(function() {
  $('#result').text(collision($('#box1'), $('#box2')));
}, 10);