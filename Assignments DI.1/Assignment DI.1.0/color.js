var container = document.getElementById('container');

var colors = [
    {
        "color": "black",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255, 255, 255, 1],
            "hex": "#000"
        }
    },
    {
        "color": "white",
        "category": "value",
        "code": {
            "rgba": [0, 0, 0, 1],
            "hex": "#FFF"
        }
    },
    {
        "color": "red",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255, 0, 0, 1],
            "hex": "#ff0000"
        }
    },
    {
        "color": "blue",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [0, 0, 255, 1],
            "hex": "#00F"
        }
    },
    {
        "color": "yellow",
        "category": "hue",
        "type": "primary",
        "code": {
            "rgba": [255, 255, 0, 1],
            "hex": "#FF0"
        }
    },
    {
        "color": "green",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [0, 255, 0, 1],
            "hex": "#0F0"
        }
    },
    {
        "color": "cyan",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [0, 255, 255, 1],
            "hex": "#00ffff"
        }
    },
    {
        "color": "purple",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [153, 50, 204, 1],
            "hex": "#9932cc"
        }
    },
    {
        "color": "pink",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [255, 192, 203, 1],
            "hex": "#ffc0cb"
        }
    },
    {
        "color": "orange",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [255, 165, 0, 1],
            "hex": "#ffa500"
        }
    },
    {
        "color": "pastel green",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [152, 251, 152, 1],
            "hex": "#98fb98"
        }
    },
    {
        "color": "pastel blue",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [173, 216, 230, 1],
            "hex": "#add8e6"
        }
    },
    {
        "color": "crimson red",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [220, 20, 60, 1],
            "hex": "#dc143c"
        }
    },
    {
        "color": "grey",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [128, 128, 128, 1],
            "hex": "#808080"
        }
    },
    {
        "color": "light yellow",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [253, 253, 150, 1],
            "hex": "#FDFD96"
        }
    },
    {
        "color": "brown",
        "category": "hue",
        "type": "secondary",
        "code": {
            "rgba": [131, 104, 83, 1],
            "hex": "#836853"
        }
    }
]

function getColors(color) {
    for (i = 0; i < color.length; i++) {
        var colorName =  color[i].color;
        var div
        div = document.createElement('div');
        text = document.createElement('p');
        text.innerHTML= colorName;
        div.classList.add('colorBox');
        div.style.backgroundColor = color[i].code.hex;
        container.appendChild(div);
        div.appendChild(text);
    }
}

getColors(colors)
