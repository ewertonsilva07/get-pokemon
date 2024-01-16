const myReq = new XMLHttpRequest();


const randomizeButton = document.getElementById('searchPokemon');
const pokemonInfo = document.getElementById('pokemonInformation');

const randomNumber = function () {
    const num = Math.floor(Math.random() * 1017) + 1;
    return num;
}

const makeRequest = function (){
    myReq.onload = function() {
        const data = JSON.parse(this.responseText);
        const { name, sprites } = data;
        const newName = name[0].toUpperCase();
        const pokemonName = document.createElement('p');
    
        pokemonInfo.append(pokemonName);
        pokemonName.append(newName + name.slice(1));
        function createNewImage(image) {
            if(image !== null){
                const img = document.createElement('img')
                img.src = image;
                pokemonInfo.append(img); 
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
}

randomizeButton.addEventListener('click', () => {
    if(!pokemonInfo.innerHTML){
        makeRequest();
    } else{
        pokemonInfo.innerHTML = '';
        makeRequest();
    }
})
