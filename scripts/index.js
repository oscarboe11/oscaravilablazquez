
let height;
let width;
let interval;
let wavelength = 2;
let offset = 0;
let prevX;
let prevY;

$(document).ready(function () {
    requestAnimationFrame(plotSine);

    $('#dropdownMenu').on('click', function (event) {
        event.stopPropagation();
    });

});

function plotSine() {
    height = $("#sineContainer").height();
    width = $("#sineContainer").width();
    interval = width / 1000;

    let points = getPoints(width, wavelength, offset + 1);

    let yCoord = height / 2;
    let pathString = `M 0 ${yCoord} `;
    let xCoord = 0;

    for (const element of points) {
        pathString += `M ${xCoord} ${yCoord + element}`;
        xCoord += interval;
        pathString += ` L ${xCoord} ${yCoord + element}`;
    }

    $("#sine").empty();

    let draw = SVG().addTo("#sine").size(width, height);
    draw.path(pathString).fill('none').stroke({ width: 20, color: 'red' });

    offset += 0.01;

    requestAnimationFrame(plotSine);
}

function getPoints(width, wl, offset) {
    let points = [];

    for (let i = 0; i <= width; i += interval) {
        points.push(Math.sin(((i / width) * (2 * Math.PI) * wl) + offset) * 50);
    }

    return points;
}
