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
 

        // c.beginPath();
        // c.arc(((i)*un)+start_x+(un/2),((j+1)*un)+start_y+(un/2),un/2,0,2*Math.PI,true);
        // c.stroke();
        // c.strokeStyle = "#fa2ag6";
        
        if (i%(2*un) == 0) {
            j-=un;
        }

    }
}

// c.beginPath();
// c.arc(100,600,30,0,2*Math.PI,true);
// c.stroke();

//line
// c.beginPath(200,100);
// c.moveTo(300,100);
// c.lineTo(200,100);
// c.lineTo(150,50);
// // c.lineTo(1200,100);
// c.strokeStyle = "#fa2ag6";
// c.stroke();

console.log(canvas);