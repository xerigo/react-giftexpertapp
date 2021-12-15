import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs";


export const useFetchGif = (category: string)=>
{

    const [state, setstate] = useState({data: [], loading: true});

    useEffect( () => {
        getGifs(category).then((data) => setstate({data: data, loading: false}));
    }
    ,[category])



    return state;



}