var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillRect(100, 300, 100, 100);
// c.fillRect(200, 200, 100, 100);
// c.fillRect(100, 500, 100, 100);                  
// c.fillRect(200, 400, 100, 100);

var un = 100;
var start_x = 4*un;
var start_y = 0;

c.strokeRect(un+start_x,un+start_y,8*un,8*un);

for (var i=1; i<9 ; i+=1) {
    for (var j=1; j<8 ; j+=2) {

        if (i%2==0)
            j++;

        c.fillRect((i*un)+start_x,(j*un)+start_y,un,un);
        
        if (i%2 == 0) 
            j--;

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