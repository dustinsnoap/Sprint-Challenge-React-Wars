import React from 'react'
import CharacterCard from './card'
import './cards.css'

const CharacterCards = ({characters}) => {
    console.log(characters)
    return (
        <div className='character-cards'>
            {characters.map((character, i) => <CharacterCard character={character} key={i}/>)}
        </div>
    )
}

export default CharacterCards