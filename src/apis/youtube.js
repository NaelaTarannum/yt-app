import axios from "axios";
const KEY = 'AIzaSyC3O58mYqrHKS3LWDG--PR0TKeFwY2C4Ig';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY,
        origin:'http://localhost:3000'
    }
})