import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import toTitleCase from 'to-title-case'

import Breadcrumbs from 'components/Breadcrumbs'
import Pages from 'components/Pages'


class BlogIndex extends Component {
  render () {
    const { route } = this.props

    return (
      <DocumentTitle title={`${toTitleCase(route.page.file.dirname)} • ${config.siteTitle}`}>
        <div>
          <header className="mb-4">
            <Breadcrumbs route={route} />
          </header>
          <main className="maxW-3 mx-auto">
            <h1 className="h1 mb-2">{toTitleCase(route.page.file.dirname)}</h1>
            <p className="mb-4" dangerouslySetInnerHTML={{ __html: config.writing.blurb }} />
            <Pages pages={route.pages} folder={route.page.file.dirname} />
          </main>
        </div>
      </DocumentTitle>
    )
  }
}

export default BlogIndex

BlogIndex.propTypes = {
  route: PropTypes.object
}
