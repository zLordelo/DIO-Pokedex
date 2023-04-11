const pokemonPage = document.querySelector('#pokemonPage')
const api = 'https://pokeapi.co/api/v2/'

async function getPokemonGenderRatio() {
    const genderRatioFemale = await fetch(`${api}gender/1`)
    const dataFemale = await genderRatioFemale.json()

    console.log(dataFemale)
}

async function getPokemonSpecie() {
    const genderRatioFemale = await fetch(`${api}gender/1`)
    const dataFemale = await genderRatioFemale.json()

    console.log(dataFemale)
}

async function getPokemon(pokemon) {
    const response = await fetch(`${api}pokemon/${pokemon.dataset.pokemonName}`)
    const data = await response.json()
    
    console.log(
        `
            <section class="content-stats" id="pokemonInfo">
                <div class="pokemon-top">
                    <span class="material-symbols-outlined">arrow_back</span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>

                <div class="pokemon-name name">
                    <span>${data.name[0].toUpperCase() + data.name.substring(1)}</span>
                    <span>#${data.id}</span>
                </div>

                <div class="details">
                    <ol class="types">
                    ${data.types.map((type) => `<li class="type">${JSON.stringify(type.type.name)}</li>`).join('')}
                    </ol>
                </div>

                <div class="pokemon-image">        
                    <img src="${data.sprites.other.home.front_default}" alt="${data.name}">
                </div>
            </section>

            <div class="pokemon-stats" id="pokemonStats">
                <nav>
                    <ul>
                        <li class="active">About</li>
                        <li>Base Stats</li>
                        <li>Evolution</li>
                        <li>Moves</li>
                    </ul>
                </nav>

                <div class="info-table">
                    <table>
                        <tr>
                            <td class="item">Species</td>
                            <td class="description">Seed</td>
                        </tr>
                        <tr>
                            <td class="item">Height</td>
                            <td class="description">${data.height/10} m</td>
                        </tr>
                        <tr>
                            <td class="item">Weight</td>
                            <td class="description">${data.weight/10} Kg</td>
                        </tr>
                        <tr>
                            <td class="item">Abilities</td>
                            <td class="description">${data.abilities.map((ability) => `${JSON.stringify(ability.ability.name)}`).join(', ')}</td>
                        </tr>
                        <th>Breeding</th>
                            <tr>
                                <td class="item">Gender</td>
                                <td class="description gender">
                                    <span class="material-symbols-outlined male">
                                        male
                                    </span> 87.5%
                                    <span class="material-symbols-outlined female">
                                        female
                                    </span> 12.5%
                                </td>
                            </tr>
                            <tr>
                                <td class="item">Egg Groups</td>
                                <td class="description">Monster</td>
                            </tr>
                            <tr>
                                <td class="item">Egg Cycle</td>
                                <td class="description">Grass</td>
                            </tr>
                    </table>
                </div>
            </div>
        `

    )
}

