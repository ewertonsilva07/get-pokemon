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

        const commonColor = document.createElement('div');
        const shinyColor = document.createElement('div');

        function createNewImage(image, pokemonColor) {
            if(image !== null){
                const container = document.createElement('div');
                const img = document.createElement('img')
                container.classList.add('img-container');
                img.src = image;
                img.classList.add('img-styles');
                pokemonInfo.append(pokemonColor);
                pokemonColor.append(container);
                container.append(img);
            }
        }

        const commonTitle = document.createElement('h2')
        commonTitle.innerText = 'Common Color';
        commonColor.append(commonTitle);
        createNewImage(sprites.back_default, commonColor);
        createNewImage(sprites.front_default, commonColor);
        const shinyTitle = document.createElement('h2')
        shinyTitle.innerText = 'Shiny';
        shinyColor.append(shinyTitle);
        createNewImage(sprites.back_shiny, shinyColor);
        createNewImage(sprites.front_shiny, shinyColor);
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
