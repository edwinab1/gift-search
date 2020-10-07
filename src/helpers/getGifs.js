
export const getGifs = async (category) => {

    const url = process.env.REACT_APP_GIPHY_URL;
    const api_key = process.env.REACT_APP_GIPHY_API_KEY;

    const request_url = url + '?q=' + category + '&limit=10&api_key=' + api_key
    const response = await fetch(request_url);
    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}