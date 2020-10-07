import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {

    //Hook
    const [categorias, setCategories] = useState(['Homero']);
    return (
        <>
            <h2>Giph App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categorias.map(category => (
                        <GiftGrid key={category}
                            category={category} />)
                    )
                }
            </ol>
        </>
    )
}
