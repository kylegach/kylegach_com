import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import access from 'safe-access'

import Teaser from 'components/Teaser'


class ReadNext extends Component {

  render () {
    const { pages, post } = this.props

    let nextPost = {}

    for ( let i=0; i < pages.length; i++ ) {
      if ( post.path === pages[i].path &&
           pages[i].file.dirname.split('/')[0] === config.writing.dir ) {
        for ( let j=i+1; j < pages.length; j++ ) {
          let draft = false
          if (process.env.NODE_ENV === 'production') {
            draft = access(pages[j], 'data.draft') || false
          }

          if ( access(pages[j], 'file.ext') === 'md' && !draft ) {
            return (
              <div className="mt-4 p-2 pb-3 border borderColor-light">
                <h3 className="fs-5 caps mb-3">Thanks for reading! Read this next?</h3>
                <Teaser page={pages[j]} />
              </div>
            )
          }
        }

        return (
          <div className="mt-4 p-2 border borderColor-light">
            <h3 className="fs-5 caps mb-2">Thanks for reading!</h3>
            <p>Check the <Link to={prefixLink('/' + config.writing.dir + '/')}>Archives</Link> for more.</p>
          </div>
        )
      }
    }

    return React.createElement('noscript', null)
  }

}

ReadNext.propTypes = {
  pages: PropTypes.array.isRequired,
  post: PropTypes.object.isRequired
}

export default ReadNext
