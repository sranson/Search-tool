import axios from 'axios';




export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Jka735JO2x_3jcuOjhmaUzQT9CKGuTgoe4_rXW59OwQ'
    }, 
});