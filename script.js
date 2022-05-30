let grid = document.querySelector('.tabla');
let a = 0;
for (let i = 1; i < 65; i++) {
    let item = document.createElement('div');
    item.className = `item white ${i-1}`;
    item.innerHTML = "";
    if (a % 2 == 0) {
        item.className = `item black ${i-1}`
    }
    if (i % 8 == 0) {
        a+=2;
    }
    else{
        a++;
    }
    
    item.addEventListener('mousedown', katt);
    grid.appendChild(item);
}
function katt(e) {
    let a = e.target;
    let szamlalo = document.querySelector('.szamlalo');
    if (a.innerHTML == "") {
        a.innerHTML = "K";
        szamlalo.innerHTML++;
        ellenorzes(a);
        if (ellenorzes(a) && szamlalo.innerHTML == 8) {
            alert("minden királynő letéve");
        }
    }
    else if(a.innerHTML=="K"){
        a.innerHTML = "";
        szamlalo.innerHTML--;
    }
}
function ellenorzes(a) {
    let elemek = grid.children;
    // fel
    let i = a.className.split(' ')[2]-8;
    while (i >= 0 && elemek[i].innerHTML != "K") {
        console.log(i);
        i-=8;
    }
}