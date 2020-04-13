const state = {
  arrayOfValues: [],
  initialBoxes: [{ name: 'A', values: [3] },
    { name: 'B', values: [3] },
    { name: 'C', values: [3] },
    { name: 'D', values: [3] },
    { name: 'E', values: [3] },
    { name: 'F', values: [3] },
    { name: 'G', values: [3] },
    { name: 'H', values: [3] },
    { name: 'I', values: [3] },
    { name: 'J', values: [3] }
  ]
}

const mutations = {
  SET_ARRAY_OF_VALUES (state, payload) {
    state.arrayOfValues = payload
  },

  SET_RANDOM_VALUES (state) {
    state.arrayOfValues.forEach(val => {
      let random = Number((Math.random() * 1 + 1).toFixed(2))
      // choose positive or negative
      const plusMinus = Math.random() < 0.5 ? -1 : 1
      random = random * plusMinus
      const lastValue = val.values.slice(-1)
      const sum = lastValue[0] += random
      val.values.push(sum)
      // console.log(val.values)
    })
  }
}

const actions = {
  fetchBoxes ({ commit }) {
    const resultsArray = []
    const values = JSON.parse(sessionStorage.getItem('session_values'))
    if (values) {
      // const arr = values.getValues.arrayOfValues
      values.getValues.arrayOfValues.forEach(a => resultsArray.push(a))
      commit('SET_ARRAY_OF_VALUES', resultsArray)
    } else {
      state.initialBoxes.forEach(d => resultsArray.push(d))
      commit('SET_ARRAY_OF_VALUES', resultsArray)
    }
  },

  randomizeValues ({ commit }) {
    commit('SET_RANDOM_VALUES')
  }
}

const getters = {
  getArrayOfValues: state => {
    return state.arrayOfValues
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
