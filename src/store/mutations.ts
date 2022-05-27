import {IAlbum} from "@/store/actions";

const SET_RESOURCES = (state: any, payload: IAlbum[]): void => {
    state.albums = payload
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

const ADD_ALBUM = (state: any, newAlbumData: any): void => {
  const newId: number = state.albums.length + 1
  const newAlbum: IAlbum = {
    albumId: 1,
    id: newId,
    title: newAlbumData?.title,
    url: newAlbumData?.url,
    thumbnailUrl: newAlbumData?.thumbnailUrl,

  }
  state.albums = [...state.albums, newAlbum]

};


export default {
    SET_RESOURCES,
    ADD_FAVOURITES,
    REMOVE_FAVOURITE,
    ADD_ALBUM,
}
