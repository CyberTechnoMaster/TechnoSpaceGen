
const count = 200;//props.get("--pattern-speck-count").value;
const width = window.screen.width;
const height = window.screen.height;
const boxWidth = boxHeight = 10;
const colors = ['#161511', '#dd6d45', '#f2f2f2'];
const minSize = 0;
const maxSize = 9;
function paint(ctx, geometry, props) {
    //const { width, height } = geometry;

    // const seed = props.get("--pattern-seed").value;
    // const colors = props.getAll("--pattern-colors").map((c) => c.toString());
    // const count = props.get("--pattern-speck-count").value;
    // const minSize = props.get("--pattern-speck-min-size").value;
    // const maxSize = props.get("--pattern-speck-max-size").value;
    // const boxWidth = 
    if (true) {
        const x = Math.random() * boxWidth + (maxSize / 2);
        const y = Math.random()* boxHeight + (maxSize / 2);
        const radius = Math.random() * 90;
        const selectColor = Math.floor(Math.random() * colors.length);
        ctx.fillStyle = colors[selectColor];

        ctx.save();

        ctx.translate(x, y);
        ctx.rotate(((Math.random()* 360) * 180) / Math.PI) * 2;
        ctx.translate(-x, -y);

        ctx.beginPath();
        ctx.ellipse(x, y, radius, radius / 2, 0, Math.PI * 2, 0);
        ctx.fill();

        ctx.restore();
    }
}



window.onload = function () {
    var i = 0;
    var j = 0;

    for (i = 0; i <= count; i++) {
        var d = document.createElement("canvas");
        document.body.appendChild(d);
        d.className = "worklet-canvas pulseAnimation";
        d.style.left = Math.floor(Math.random() * window.screen.width);
        d.style.top = Math.floor(Math.random() * window.screen.height);
        d.style.zIndex = -100 - i;
        d.style.backgroundImage = paint(d.getContext("2d"));
    }
}