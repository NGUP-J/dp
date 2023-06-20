function random_bg_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${r},${g},${b})`;
    document.body.style.background = rgbColor;
}

random_bg_color()