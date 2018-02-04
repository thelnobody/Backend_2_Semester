/*

function myFunction() {
    document.getElementById("box1").textContent = 'This is dynamically added text';
}
*/
function myFunction(id) {
    var x = document.getElementById(id);
    switch (id) {
        case 'box1':
            if (x.innerHTML === "click me") {
                x.textContent = id;
                x.style.backgroundImage = "url('assets/1.jpg')";
                x.style.backgroundSize = "cover";
                breakTag = document.createElement('br');
                icon = document.createElement("i");
                icon.className = "far fa-hand-spock";
                icon.style.fontSize = "100px";
                icon.style.height = "80%";
                x.appendChild(breakTag);
                
                x.appendChild(icon);
            } else {
                x.innerHTML = "click me";
                x.removeAttribute("style")
            }
            break;

        case 'box2':
            if (x.innerHTML === "click me") {
                x.textContent = id;
                x.style.backgroundImage = "url('assets/2.jpg')";
                x.style.backgroundSize = "cover";
                breakTag = document.createElement('br');
                icon = document.createElement("i");
                icon.className = "far fa-hand-peace";
                icon.style.color = "yellow";
                icon.style.fontSize = "100px";
                icon.style.height = "80%";
                x.appendChild(breakTag);
                x.appendChild(icon);
            } else {
                x.innerHTML = "click me";
                x.removeAttribute("style")
            }
            break;

        case 'box3':
            if (x.innerHTML === "click me") {
                x.textContent = id;
                x.style.backgroundImage = "url('assets/3.jpg')";
                x.style.backgroundSize = "cover";
                breakTag = document.createElement('br');
                icon = document.createElement("i");
                icon.className = "far fa-hand-lizard";
                icon.style.fontSize = "100px";
                icon.style.height = "80%";
                x.appendChild(breakTag);
                x.appendChild(icon);
            } else {
                x.innerHTML = "click me";
                x.removeAttribute("style")
            }
            break;
    }

}

