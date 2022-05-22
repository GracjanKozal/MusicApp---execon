import axios from 'axios'

export interface IAlbum {
  id: number
  userId: number | null
  title: string
  image: File
}

const fetchAlbums = ({commit}: {commit: any}) => {
    const URL = 'https://jsonplaceholder.typicode.com/albums/'

    axios.get<IAlbum[]>(URL)
        .then((response) => {
            commit('SET_RESOURCES', response.data)
        })
};


export default {
    fetchAlbums
}
