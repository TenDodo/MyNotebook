fetch('/MyNotebook/assets/scripts/header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#header-placeholder");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})
