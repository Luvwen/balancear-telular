const puertos = [
    [0, 0, 0, 0, 0],
    [11, 11, 11, 11, 11, 11],
    [0, 0, 0, 0, 0, 0, 0],
];
let interval: undefined | ReturnType<typeof setTimeout>;
let flagForNext = false;
let random = 500;
let nextItem = 0;
let currentArr = 0;

const mapPorts = (ports: number[], puerto: string): void => {
    if (ports.includes(0)) {
        ports.map((_, index) => {
            if (index === nextItem) {
                console.log(`${puerto}: Iteración número: ${index}`);
            }
        });
        flagForNext = false;
        nextItem = nextItem + 1;
        if (nextItem === ports.length) {
            currentArr = currentArr + 1;
            nextItem = 0;
        }
    } else {
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

const getPuertos = (puertos: number[][]): void => {
    let a = "PRIMER IP 11";
    let b = "SEGUNDO IP 12";
    let c = "TERCER IP 14";
    flagForNext = random >= 400 && random <= 600 ? true : false;

    puertos.map((puerto: number[], index: number) => {
        if (flagForNext) {
            if (index === currentArr) {
                if (currentArr === 0) {
                    mapPorts(puerto, a);
                } else if (currentArr === 1) {
                    mapPorts(puerto, b);
                } else if (currentArr === 2) {
                    mapPorts(puerto, c);
                }
            }
        }
    });
    clearInterval(interval);
    random = Math.floor(Math.random() * 1000);
    getPorts(puertos, random);
};

const getPorts = (puertos: number[][], timer: number) => {
    interval = setInterval(() => {
        getPuertos(puertos);
    }, timer);
};

getPorts(puertos, random);