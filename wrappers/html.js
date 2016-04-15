import React, { Component, PropTypes } from 'react'


class HTMLWrapper extends Component {

  render () {
    const post = this.props.route.page.data

    return (
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    )
  }

}

HTMLWrapper.propTypes = {
  route: PropTypes.object
}

export default HTMLWrapper
