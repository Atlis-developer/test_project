import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',
})

export const contentAPI = {

    getPhotos() {
        return instanse.get(`photos`).
            then(response => {
                return response
            })
    }
}

