import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import toTitleCase from 'to-title-case'

import Pages from 'components/Pages'


class WorkIndex extends Component {
  render () {
    const { route } = this.props

    return (
      <DocumentTitle title={`${toTitleCase(route.page.file.dirname)} • ${config.siteTitle}`}>
        <main className="maxW-3 mx-auto">
          <h1 className="h1 mb-2">{toTitleCase(route.page.file.dirname)}</h1>
          <p className="fs-3 mb-4" dangerouslySetInnerHTML={{ __html: config.work.blurb }} />
          <Pages pages={route.pages} folder={route.page.file.dirname} />
        </main>
      </DocumentTitle>
    )
  }
}

export default WorkIndex

WorkIndex.propTypes = {
  route: PropTypes.object
}
