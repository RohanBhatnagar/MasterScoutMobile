window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false; 

    function startPaint(){
        painting = true;
    }
    function endPaint(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(painting){
            ctx.lineWidth = 5;
            ctx.lineCap = "round";
            ctx.lineTo(e.clientX - 17, e.clientY - 51.5);
            ctx.strokeStyle = "blue";
            ctx.stroke();   
        }
    }
    canvas.addEventListener("mousedown", startPaint);
    canvas.addEventListener("mouseup", endPaint);
    canvas.addEventListener("mousemove", draw);

});
