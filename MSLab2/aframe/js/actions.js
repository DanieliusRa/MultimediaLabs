$ = (queryString) => document.querySelector(queryString);

////// VGTU Sphere functions

const animate = () => {
    const variation = Math.sin(Date.now() / 500);
    const position = `1.5 ${2 + variation} 0.5`;
    $('#vgtu-sphere').setAttribute('position', position);

    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

////// Sculpture functions

function toggleModelOff() {
    $('#sculpture').setAttribute("visible", false);
}

function toggleModelOn() {
    $('#sculpture').setAttribute("visible", true);
}

function rotateL() {
    var params = $('#sculpture').getAttribute("rotation");
    var x = Number(params.x);
    var y = Number(params.y) + 90;
    var z = Number(params.z);
    var rotation = x + " " + y + " " + z;
    $('#sculpture').setAttribute("rotation", rotation);
}

function rotateR() {
    var params = $('#sculpture').getAttribute("rotation");
    var x = Number(params.x);
    var y = Number(params.y) - 90;
    var z = Number(params.z);
    var rotation = x + " " + y + " " + z;
    $('#sculpture').setAttribute("rotation", rotation);
}

function leftF() {
    var params = $('#sculpture').getAttribute("position");
    var x = Number(params.x) - 1;
    var y = Number(params.y);
    var z = Number(params.z);
    var left = x + " " + y + " " + z;
    $('#sculpture').setAttribute("position", left);
}

function rightF() {
    var params = $('#sculpture').getAttribute("position");
    var x = Number(params.x) + 1;
    var y = Number(params.y);
    var z = Number(params.z);
    var right = x + " " + y + " " + z;
    $('#sculpture').setAttribute("position", right);
}

function upF() {
    var params = $('#sculpture').getAttribute("position");
    var x = Number(params.x);
    var y = Number(params.y) + 1;
    var z = Number(params.z);
    var up = x + " " + y + " " + z;
    $('#sculpture').setAttribute("position", up);
}

function downF() {
    var params = $('#sculpture').getAttribute("position");
    var x = Number(params.x);
    var y = Number(params.y) - 1;
    var z = Number(params.z);
    var down = x + " " + y + " " + z;
    $('#sculpture').setAttribute("position", down);
}

function enlarge() {
    var params = $('#sculpture').getAttribute("scale");
    var x = Number(params.x) * 1.25;
    var y = Number(params.y) * 1.25;
    var z = Number(params.z) * 1.25;
    var enlarge = x + " " + y + " " + z;
    $('#sculpture').setAttribute("scale", enlarge);
}

function shrink() {
    var params = $('#sculpture').getAttribute("scale");
    var x = Number(params.x) * 0.75;
    var y = Number(params.y) * 0.75;
    var z = Number(params.z) * 0.75;
    var shrink = x + " " + y + " " + z;
    $('#sculpture').setAttribute("scale", shrink);
}
