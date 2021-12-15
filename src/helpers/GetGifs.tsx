export const getGifs = async (category: string) =>
    {
        const url = `http://api.giphy.com/v1/gifs/search?api_key=Pb8CuOC0Q9Qrubomp6BaBBvMY0VkfjTX&q=${encodeURI(category)}&limit=5`
        const resp = await fetch(url);
        const { data } = await resp.json();
        const gifs = data.map(
            (img: any) => {return  {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url}}
        );
        return gifs;
    };

    