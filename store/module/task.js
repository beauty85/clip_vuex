/**
 * Created by Administrator on 2018/2/1 0001.
 */

import api from '@/fetch/api'
import * as types from './type'

const state = {
  state: {
    getMineBaseMsg:{}
  }
}
const actions = {
  getMineBaseApi({commit,prams}) {
    console.log("aaaaa");
    // api.getTaskList(prams).then(res => {
    //     commit(types.GET_BASE_API, res)
    //   })
  }
}

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg
}

const mutations = {
  [types.GET_BASE_API](state, res) {
    state.getMineBaseMsg = { ...state.getMineBaseMsg, msg: res.data.msg }
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
