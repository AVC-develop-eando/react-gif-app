import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifAround = () => { 
    
    
    const [categories, setCategories] = useState(['Search'])


    return (
        <div className="app-cointainer">
            <div className="logo">
                <div className="app-title-GIF">GIF</div>
                <div className="app-title-Around">Around</div>
            </div>
            <hr />
            <AddCategory setCategories={setCategories} />
            <div  className="grid-container">

                    {
                        categories.map ( category => (
                            <GifGrid 
                                key={category}
                                category={category}/>
                        ))
                    }

            </div>


            
        </div>
    );
}
