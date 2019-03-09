import React from 'react'
import Dog from './dog'
import './dogs.css'

const Dogs = ({dogs}) => {
    return (
        <div className='dogs'>
            {dogs.map((dog, i) => <Dog src={dog} key={i} />)}
        </div>
    )
}

export default Dogs