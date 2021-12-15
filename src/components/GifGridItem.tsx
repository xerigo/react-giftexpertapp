import React from 'react'

interface Props {
    title: string,
    url:string
}

export const GifGridItem = (props: Props) => {
    const {title, url} = props
    return (
        <>
          <h5>{title}</h5>  
          <img 
            src={url}
            alt={title}
            height="100px"
            />
        </>
    )
}
