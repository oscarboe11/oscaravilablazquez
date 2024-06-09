
var height;
var width;
var interval;
var offset = 0;

$(document).ready(function () {
    requestAnimationFrame(plotSine);
});

function plotSine() {
    height = $("#sineContainer").height();
    width = $("#sineContainer").width();
    interval = width / 1000;

    points = getPoints(width, 2, offset + 1);

    yCoord = height / 2;
    pathString = `M 0 ${yCoord} `;
    xCoord = 0;

    for (let i = 0; i < points.length; i++) {
        pathString += `M ${xCoord} ${yCoord + points[i]}`;
        xCoord += interval;
        pathString += ` L ${xCoord} ${yCoord + points[i]}`;
    }

    $("#sine").empty();

    let draw = SVG().addTo("#sine").size(width, height);
    draw.path(pathString).fill('none').stroke({ width: 20, color: 'red' });

    offset += 0.01;

    requestAnimationFrame(plotSine);
}




function getPoints(width, wavelength, offset) {
    let points = [];

    for (let i = 0; i <= width; i += interval) {
        points.push(Math.sin(((i / width) * (2 * Math.PI) * wavelength) + offset) * 50); // Adjust the multiplier for amplitude
    }

    return points;
}
