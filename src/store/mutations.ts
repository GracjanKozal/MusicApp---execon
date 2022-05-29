import {IAlbum, IAlbumApiResponse} from "@/store/actions";
import {IState} from "@/store/index";

const SET_RESOURCES = (state: IState, payload: IAlbumApiResponse[]): void => {
  state.albums = payload.map((e): IAlbum => ({
    id: e.id,
    albumId: e.albumId,
    title: e.title,
    url: e.url,
    images: [e.thumbnailUrl]
  }))
};

const ADD_FAVOURITES = (state: IState, albumToAdd: IAlbum): void => {
  for (const currentAlbum of state.favourites) {
    if (currentAlbum.id === albumToAdd.id) {
      return
    }
  }
  state.favourites = [...state.favourites, albumToAdd]
};

const REMOVE_FAVOURITE = (state: IState, albumToRemove: IAlbum): void => {
  state.favourites = state.favourites.filter((currentAlbum: IAlbum) => currentAlbum.id !== albumToRemove.id)
};

const CREATE_ALBUM = (state: IState, newAlbumData: any): void => {
  console.log(newAlbumData)
  const newId: number = state.albums.length + 1
  const newAlbum: IAlbum = {
    id: newId,
    title: newAlbumData.title,
    images: newAlbumData.images,

  }
  state.albums = [...state.albums, newAlbum]
};

const UPDATE_ALBUM = (state: IState, albumToBeUpdated: IAlbum): void => {
  const filteredAlbums: IAlbum[] = state.albums
    .filter(album => album.id !== albumToBeUpdated.id)
  state.albums = [...filteredAlbums, albumToBeUpdated].sort((e1, e2) => e1.id - e2.id)
}


export default {
  SET_RESOURCES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITE,
  CREATE_ALBUM,
  UPDATE_ALBUM
}
