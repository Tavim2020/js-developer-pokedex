const backgroundShadow = document.querySelector(".backgroundShadow");

const modal = document.querySelector(".modalElement");

backgroundShadow.addEventListener("click", () => {
  modal.classList.add("hidden");
  backgroundShadow.classList.add("hidden");
});

function clickCard({ target }) {
  const { id } = target;

  const pokemonSelected = allPokemonDetails.find(pokemon => pokemon.id === Number(id));

  const pokemonName = pokemonSelected.name;
  const pokemonImg = pokemonSelected.sprites.other.dream_world.front_default;

  backgroundShadow.classList.remove("hidden");
  modal.classList.remove("hidden");
  
  modal.innerHTML = `<img src="${pokemonImg}" class="imgPokemon"  alt="${pokemonName}" />`
}