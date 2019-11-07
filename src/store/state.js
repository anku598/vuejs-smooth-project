const state = {
  lang: 'bn',
  pageNegative: false,
  navigationAllowed: true,
  header: {
    negative: false,
    filled: false,
    hidden: false
  },

  hasLoader: true,
  isInTransition: false,
  isScrolling: false,
  isInHeader: false,
  isMobileMenuOpen: false,
  isLoaderMounted: false,
  headline: {
    content: '',
    firstPaint: true
  },

  currentPageId: null,
  currentPageChildId: null,
  pages: {},
  pagesMap: {},
  settings: {}
}

export default state;