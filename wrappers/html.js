import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'


class HTMLWrapper extends Component {

  render () {
    const post = this.props.route.page.data

    return (
      <DocumentTitle title={`${post.title} • ${config.siteTitle}`}>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
      </DocumentTitle>
    )
  }

}

HTMLWrapper.propTypes = {
  route: PropTypes.object
}

export default HTMLWrapper
