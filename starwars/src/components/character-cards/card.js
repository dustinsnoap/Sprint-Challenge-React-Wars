import React from 'react'

const CharacterCard = ({character}) => {
    console.log(character)
    let imgSrc = './img/' + character.name + '.jpg';
    return (
        <div className='character'>
            <div className='character-image'>
                <img src={imgSrc} alt={character.name}/>
            </div>
            <div className='info overview'>
                <h2>Overview</h2>
                <pre>Name: {character.name}</pre>
                <pre>Gender: {character.gender}</pre>
                <pre>Birthyear: {character.birth_year}</pre>
                <pre>Films: {character.films.length}</pre>
            </div>
            <div className='info appearance'>
                <h2>Appearance</h2>
                <pre>Mass: {character.mass}kg</pre>
                <pre>Eye Color: {character.eye_color}</pre>
                <pre>Hair Color: {character.hair_color}</pre>
                <pre>Skin Color: {character.skin_color}</pre>
            </div>
        </div>
    )
}

export default CharacterCard