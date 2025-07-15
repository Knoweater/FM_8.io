function PopUp() {
    const form = document.getElementById("Div-display");
    let button = document.getElementById("share-button");

    let iconColor = document.getElementById("share-icon");

    iconColor.classList.toggle("color-icon");

    

    if (form.style.visibility == 'visible') {
        form.style.opacity = 0;
        form.style.visibility = 'hidden';
        button.style.backgroundColor = `var(--Light-Grayish-Blue)`;
    } else {
        form.style.opacity = 1;
        form.style.visibility = 'visible';
        button.style.backgroundColor = `var(--Very-Dark-Grayish-Blue)`;
    }

    if (form.style.position != 'absolute' && form.style.visibility == 'visible') {
        button.style.backgroundColor = `var(--Desaturated-Dark-Blue)`;
        button.style.zIndex = 1;
    }
}