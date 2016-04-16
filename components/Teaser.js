import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import access from 'safe-access'
import { Link } from 'react-router'
import { prune } from 'underscore.string'

import Byline from 'components/Byline'


class Teaser extends Component {

  render() {
    const { page, row } = this.props

    const title = access(page, 'data.title') || page.path
    const date = access(page, 'data.date')
    const byline = (date) ? (<Byline date={date} />) : ''
    // Create pruned version of the body.
    const html = page.data.body
    const blurb = prune(html.replace(/<[^>]*>/g, ''), 200)

    return (
      // TODO: Replace the flexItem-50 class with something more dynamic (quantity queries?)
      <article className={row ? 'flexItem-50 mb-3 mb-0@sm pr-3@sm' : 'mb-3 mb-4@sm'}>
        <h3 className="h4 mb-0"><Link to={prefixLink(page.path)} className="camoLink">{title}</Link></h3>
        {byline}
        <div className="mt-2">{blurb}</div>
        <Link to={prefixLink(page.path)} className="inlineBlock mt-2">Keep reading&hellip;</Link>
      </article>
    )
  }
}

Teaser.propTypes = {
  page: PropTypes.object.isRequired,
  row: PropTypes.bool
}

export default Teaser
