const myReq = new XMLHttpRequest();
const body = document.querySelector('body');


myReq.onload = function() {
    const data = JSON.parse(this.responseText);
    const name = data.name;
    const { sprites } = data;
    const newName = name[0].toUpperCase();
    

    body.append(newName + name.slice(1))
    function createNewImage(image) {
        const img = document.createElement('img')
        img.src = image;
        body.append(img) 
    }
    createNewImage(sprites.back_default);
    createNewImage(sprites.back_shiny);
    createNewImage(sprites.front_default);
    createNewImage(sprites.front_shiny);

}

myReq.onerror = function() {
    console.log("ERROR!!!");
    console.log(this)
}


myReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/303');
myReq.send();