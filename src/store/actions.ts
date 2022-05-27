import axios from 'axios'

export interface IAlbum {
  id: number
  albumId?: number
  title: string
  url?: string
  images: string[]
}

export interface IAlbumApiResponse {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}

const fetchAlbums = ({commit}: {commit: any}) => {
    const URL = 'https://jsonplaceholder.typicode.com/photos'

    axios.get<IAlbumApiResponse[]>(URL)
        .then((response) => {
            commit('SET_RESOURCES', response.data.slice(0, 10))
        })
};


export default {
    fetchAlbums
}
