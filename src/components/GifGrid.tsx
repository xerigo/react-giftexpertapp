
import { useFetchGif } from '../Hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

interface Props {
  category: string;
}

export const GifGrid = (props: Props) => {
    const {category} = props;
    const {data, loading} = useFetchGif(category);
    
    return (
        <div>
            <h3>{category}</h3>
             {loading ? 'Cargando...' :
               data.map( (gif: any) => { 
                   return <GifGridItem 
                              key={gif.id} 
                              title={gif.title} 
                              url={gif.url}/>} )
               }
            <hr/>
        </div>
        
    )
}
