import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'


class HTMLWrapper extends Component {

  render () {
    const post = this.props.route.page.data

    return (
      <div>
        <Helmet title={post.title} />
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </div>
    )
  }

}

HTMLWrapper.propTypes = {
  route: PropTypes.object
}

export default HTMLWrapper
