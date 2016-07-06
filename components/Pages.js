import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import sortBy from 'lodash/sortBy'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import access from 'safe-access'
import { include as includes } from 'underscore.string'

import Teaser from 'components/Teaser'
import WorkTeaser from 'components/WorkTeaser'


class Pages extends Component {
  render () {
    const { pages, folder, limit, row } = this.props

    const pageLinks = []
    // Sort pages.
    const sortedPages = sortBy(pages, (page) =>
      access(page, 'data.date')
    ).reverse()

    let i = 0
    sortedPages.forEach((page) => {
      let draft = false
      if (process.env.NODE_ENV === 'production') {
        draft = access(page, 'data.draft') || false
      }

      if ( access(page, 'file.ext') === 'md' &&
           !includes(page.path, '/404') &&
           (!draft) &&
           (!limit || i < limit) &&
           (!folder || folder === access(page, 'file.dirname').split('/')[0]) ) {
        switch ( folder ) {
          // TODO: Figure out why this case is throwing the "two children have the same key" warning
          case config.work.dir:
            pageLinks.push(
              <WorkTeaser key={page.path} page={page} />
            )
          default:
            pageLinks.push(
              <Teaser key={page.path} page={page} row={row} />
            )
        }
        i++
      }
    })

    return (
      <div className={row ? 'flex@sm mr-n3@sm' : ''}>
        {pageLinks}
      </div>
    )
  }
}

Pages.propTypes = {
  pages: PropTypes.array.isRequired,
  folder: PropTypes.string,
  limit: PropTypes.number,
  row: PropTypes.bool
}

export default Pages
