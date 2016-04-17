import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import access from 'safe-access'
import { Link } from 'react-router'

import Figures from 'components/Figures'


class WorkTeaser extends Component {

  render() {
    const { page } = this.props

    const title = access(page, 'data.title') || page.path
    const pathBits = page.path.split('/')
    const id = pathBits[pathBits.length - 2]
    const blurb = access(page, 'data.blurb') || ''
    const figure = access(page, 'data.figure') || ''

    let Figure = null
    if ( figure ) {
      Figure = React.createElement(Figures[figure], {})
    }

    return (
      <figure className="mb-4 flex@sm">
        <div className="m-0 flexItem-auto">
          { Figure }
        </div>
        <figcaption className="flexItem-33 ml-3@sm mt-1 mt-0@sm">
          <h3 id={id} className="h4 mb-2"><Link to={prefixLink(page.path)} className="camoLink">{title}</Link></h3>
          <p className="mb-2">{blurb}</p>
          <Link to={prefixLink(page.path)} className="inlineBlock" aria-labelledby={id}>Learn more&hellip;</Link>
        </figcaption>
      </figure>
    )
  }
}

WorkTeaser.propTypes = {
  page: PropTypes.object.isRequired
}

export default WorkTeaser
