"use strict";
var puertos = [
    [0, 0, 0, 0, 0],
    [11, 11, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 0, 0],
];
var interval;
var flagForNext = false;
var random = 500;
var nextItem = 0;
var currentArr = 0;
var mapPorts = function (ports, puerto) {
    if (ports.includes(0)) {
        ports.map(function (_, index) {
            if (index === nextItem) {
                console.log("".concat(puerto, ": Iteraci\u00F3n n\u00FAmero: ").concat(index));
            }
        });
        flagForNext = false;
        nextItem = nextItem + 1;
        if (nextItem === ports.length) {
            currentArr = currentArr + 1;
            nextItem = 0;
        }
    }
    else {
        flagForNext = false;
        currentArr = currentArr + 1;
    }
    if (currentArr === puertos.length) {
        flagForNext = false;
        currentArr = 0;
    }
    clearInterval(interval);
    random = Math.floor(Math.random() * 1000);
    getPorts(puertos, random);
};
var getPuertos = function (puertos) {
    var a = "PRIMER IP 11";
    var b = "SEGUNDO IP 12";
    var c = "TERCER IP 14";
    flagForNext = random >= 400 && random <= 600 ? true : false;
    puertos.map(function (puerto, index) {
        if (flagForNext) {
            if (index === currentArr) {
                if (currentArr === 0) {
                    mapPorts(puerto, a);
                }
                else if (currentArr === 1) {
                    mapPorts(puerto, b);
                }
                else if (currentArr === 2) {
                    mapPorts(puerto, c);
                }
            }
        }
    });
    clearInterval(interval);
    random = Math.floor(Math.random() * 1000);
    getPorts(puertos, random);
};
var getPorts = function (puertos, timer) {
    interval = setInterval(function () {
        getPuertos(puertos);
    }, timer);
};
getPorts(puertos, random);
