import React, { useCallback, useState } from 'react'

interface Props {
    onCategoryAdded: (newCategory: string) => void;
}

export const AddCategory = (props: Props) => 
{
    const {onCategoryAdded} = props;
    const [category, setCategory] = useState("");
    const handleChange = useCallback(
        (evt: React.ChangeEvent<HTMLInputElement>) => {
            setCategory(evt.target.value);
        },
        [setCategory],
    )
 

    const handleSubmit = useCallback((e) => {
        if(onCategoryAdded && category.trim().length > 0)
            onCategoryAdded(category);

        e.preventDefault();

        },
        [category, onCategoryAdded]
     )    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={category}
                onChange={(evt) => handleChange(evt)} />

        </form>               

    )
}
