import React from 'react';
import { useFetchGif } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( {category} ) => {

    const { data:images, loading} = useFetchGif( category );

    return (
        <>
            <div className="cat-title animate__animated animate__zoomInDown">
                <h3>{ category }</h3>
            </div>

            {loading && <p className="loading">Loading...</p> }

            <div className="card-grid">

                {
                    images.map( ( img ) => (
                        <GifGridItem
                            key = { img.id }    
                            {...img }
                        />
                    ))
                }

            </div>
        </>
    )
}
