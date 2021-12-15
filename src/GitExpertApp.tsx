import React, { useCallback, useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

interface Props {
    
}

export const GitExpertApp = (props: Props) => 
{
    const [categories, setCategories] = useState(['Test']);

    const handleAddCategoryClick = useCallback((newCat: string) => 
    {
        setCategories([newCat, ...categories]);
        },
        [categories, setCategories],
    );
    return (
        <>
        <h1>
            Gif Expert App!            
        </h1>
        <h2>
            Welcome to new brand gif experience...
        </h2>
        <hr/>
        <AddCategory onCategoryAdded={handleAddCategoryClick}/>
        {categories.map((category: string, index: number) =>
        {
          return <GifGrid 
            key={`${category}_${index}`}
            category={category}
            />
        })}
        </>
    )
}

export default GitExpertApp;
