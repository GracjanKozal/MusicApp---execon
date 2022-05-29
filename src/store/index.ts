import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions, {IAlbum} from './actions'


Vue.use(Vuex);

export interface IState {
  albums: IAlbum[],
  favourites: IAlbum[]
}

export default new Vuex.Store({
  state: {
    albums: [],
    favourites: [],
  } as IState,
  getters,
  mutations,
  actions,
  modules: {

  }
});
