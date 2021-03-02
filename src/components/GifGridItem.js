import React from 'react'

export const GifGridItem = ({ id, title, url} ) => {
    
    console.log('Hecho-GifGridItem');
    
    return (
        <div className="card animate__animated animate__zoomInUp" >
            <div className="card-gif">
                <img src={url} alt={title} id={id}/>
            </div>
            <div className="card-title">
                {title}
            </div>
        </div>
    )
}
