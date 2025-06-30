var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');






var un = 100;
var start_x = 4*un;
var start_y = 0;

c.strokeRect(un+start_x,un+start_y,8*un,8*un);

for (var i=1*un ; i<9*un ; i+=un) {
    for (var j=1*un ; j<8*un ; j+=2*un) {

        if (i%(2*un) == 0){
            j+=un;
        }
            
        
        c.fillRect(i+start_x,j+start_y,un,un);

        
        if (i%(2*un) == 0) {
            j-=un;
        }

    }
}


for (var i=0 ; i<100 ; i++) {

var x = Math.random() * window.innerWidth;

var y = Math.random() * window.innerHeight;

c.beginPath();
c.arc(x, y, 50, 0, Math.PI * 2, false);
c.strokeStyle.innerWidth = 10;


var hex = Math.floor((Math.random() * 0xffffff)).toString(16);
var color = '#' + hex.padStart(6,'0');



c.strokeStyle = color ;
c.stroke();

}



// c.beginPath();
// c.arc(x, y, 50, 0, Math.PI * 2, false);
// c.strokeStyle.innerWidth = 10;


console.log(canvas);