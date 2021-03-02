import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => { 
    
    
    const [categories, setCategories] = useState(['Search'])


    return (
        <div className="app-cointainer">
            <h2 className="app-title">Gif Expert App</h2>
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
