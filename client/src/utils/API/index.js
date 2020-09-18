import axios from 'axios'

//creating object of functions
const API = {
    getMedia: search => axios.get(`/api/omdb/${search}`),

    getSavedMedia: () => axios.get('/api/media'),

    //post request, you have to post a req.body. Here, it is media
    saveMedia: media => axios.post('/api/media', media),

    //deleting media
    deleteMedia: id => axios.delete(`/api/media/${id}`)
}

export default API