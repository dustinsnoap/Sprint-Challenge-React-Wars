import React from 'react'

const Dog = props => {
    return (
        <div className='dog'>
            <img src={props.src} alt='dog'/>
        </div>
    )
}

export default Dog