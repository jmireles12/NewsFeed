const config = {
    API_ENDPOINT: `https://salty-anchorage-98947.herokuapp.com/api`,
    API_KEY: process.env.REACT_APP_API_KEY,
    API_HEADLINES: `http://newsapi.org/v2/top-headlines?country=us&apiKey=`,
    API_NEWS: `https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_API_KEY}&format=json&page-size=100&show-fields=all`
}

export default config;