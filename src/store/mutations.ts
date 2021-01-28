import { State } from './types'

const mutations = {
  SET_TITLE(state: State, title: string) {
    state.title = title
  }
}

export default mutations
