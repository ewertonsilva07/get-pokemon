const myReq = new XMLHttpRequest();
const body = document.querySelector('body');

const randomNumber = function () {
    const num = Math.floor(Math.random() * 1017) + 1;
    return num;
}

addEventListener('click', () => {
    myReq.onload = function() {
        const data = JSON.parse(this.responseText);
        const { name, sprites } = data;
        const newName = name[0].toUpperCase();
        
    
        body.append(newName + name.slice(1))
        function createNewImage(image) {
            if(image !== null){
                const img = document.createElement('img')
                img.src = image;
                body.append(img) 
            }
        }

        createNewImage(sprites.back_default);
        createNewImage(sprites.front_default);
        createNewImage(sprites.back_shiny);
        createNewImage(sprites.front_shiny);
    }
    
    myReq.onerror = function() {
        console.log("ERROR!!!");
    }
    
    
    myReq.open('GET', `https://pokeapi.co/api/v2/pokemon/${randomNumber()}`);
    myReq.send();
})
