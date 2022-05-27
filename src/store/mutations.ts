import {IAlbum, IAlbumApiResponse} from "@/store/actions";

const SET_RESOURCES = (state: any, payload: IAlbumApiResponse[]): void => {
    state.albums = payload.map((e): IAlbum => ({
      id: e.id,
      albumId: e.albumId,
      title: e.title,
      url: e.url,
      images: [e.thumbnailUrl]
    }))
};

const ADD_FAVOURITES = (state: any, albumToAdd: IAlbum): void => {
  for (const currentAlbum of state.favourites) {
    if(currentAlbum.id === albumToAdd.id) {
      return
    }
  }
  state.favourites = [...state.favourites, albumToAdd]
};

const REMOVE_FAVOURITE = (state: any, albumToRemove: IAlbum): void => {
  state.favourites = state.favourites.filter((currentAlbum: IAlbum) => currentAlbum.id !== albumToRemove.id)
};

const CREATE_ALBUM = (state: any, newAlbumData: any): void => {
  console.log(newAlbumData)
  const newId: number = state.albums.length + 1
  const newAlbum: IAlbum = {
    id: newId,
    title: newAlbumData.title,
    images: newAlbumData.images,

  }
  state.albums = [...state.albums, newAlbum]

};


export default {
    SET_RESOURCES,
    ADD_FAVOURITES,
    REMOVE_FAVOURITE,
    CREATE_ALBUM,
}
