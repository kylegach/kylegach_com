// Send pageview event to Google Analytics on page change.
if (process.env.NODE_ENV === 'build-javascript') {
  exports.onRouteChange = (state, page, pages) => {
    if (ga) {
      ga('send', 'pageview', {
        page: state.path,
      })
    }
  }
}
