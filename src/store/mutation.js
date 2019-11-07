const mutation = {
  SET_LANG: (state, payload) => {
    state.lang = payload
  },

  SET_NAVIGATION_ALLOWED: (state, payload) => {
    state.navigationAllowed = payload
  },

  SET_PAGE_NEGATIVE: (state, payload) => {
    state.pageNegative = payload
  },

  SET_HEADER_NEGATIVE: (state, payload) => {
    state.header.negative = payload;
  },

  SET_HAS_LOADER: (state, payload) => {
    state.hasLoader = payload
  },

  SET_IS_IN_TRANSITION: (state, payload) => {
    state.isInTransition = payload
  },

  SET_IS_SCROLLING: (state, payload) => {
    state.isScrolling = payload
  }
}

export default mutation;