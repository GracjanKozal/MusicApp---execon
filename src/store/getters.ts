import {IAlbum} from "@/store/actions";

const getAlbums = (state: any): IAlbum[] => state.albums

export default {
  getAlbums,
}
