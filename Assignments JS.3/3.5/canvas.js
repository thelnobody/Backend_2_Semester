
'use strict';

let poly = function () {
    let canvas = $('myCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();       
        ctx.moveTo(50, 200);    
        ctx.lineTo(150, 50);    
        ctx.lineTo(180, 150); 
        ctx.lineTo(50, 200); 
        ctx.fillStyle = 'silver';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 10;
        ctx.fill();        
        ctx.stroke();     
    }
}

window.addEventListener('load', poly);
