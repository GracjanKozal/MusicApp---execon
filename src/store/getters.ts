import {IAlbum} from "@/store/actions";
import {IState} from "@/store/index";

const getAlbums = (state: IState): IAlbum[] => state.albums

export default {
  getAlbums,
}
