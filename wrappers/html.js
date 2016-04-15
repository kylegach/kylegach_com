import React, { Component, PropTypes } from 'react'


class HTMLWrapper extends Component {

  render () {
    const post = this.props.route.page.data

    return (
      <div className="markdown">
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }

}

HTMLWrapper.propTypes = {
  route: PropTypes.object
}

export default HTMLWrapper
