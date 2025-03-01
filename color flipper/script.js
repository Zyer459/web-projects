const bg = document.getElementById("main");
const color = document.getElementById("color");
const btn = document.getElementById("change");

const colors = ["red", "blue", "green", "orange", "brown", "whitesmoke", "bisque", "dodgerblue", "lightgrey", "seagreen"];

change = () => {
    if (checkRgb(color.textContent)) {
        let rgb = randRgb();
        bg.style.backgroundColor = rgb;
        color.textContent = rgb;
    }

    else if (checkHex(color.textContent)) {
        let hex = randHex();
        bg.style.backgroundColor = hex;
        color.textContent = hex;
    }

    else {
        let c = getRandidx(colors.length);
        bg.style.backgroundColor = colors[c];
        color.textContent = colors[c];
    }
}

getRandidx = (x) => {
    return Math.floor(Math.random() * (x));
}

checkHex = (x) => {
    if (x.charAt(0) === '#') {
        return true;
    }
    return false;
}

randHex = () => {
    let h = Math.random() * 0xFFFFF * 1000000;
    h = h.toString(16);
    h = h.slice(0, 6).toUpperCase();
    return `#${h}`;
}

checkRgb = (x) => {
    if (x.charAt(0) === "r" && x.charAt(1) === "g" && x.charAt(2) === "b") {
        return true;
    }
    return false;
}

randRgb = () => {
    let r,g,b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}