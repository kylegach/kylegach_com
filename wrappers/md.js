import { config } from 'config'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import access from 'safe-access'

import Byline from '../components/Byline'
import Figures from 'components/Figures'

import '../styles/markdown.css'


class MDWrapper extends Component {

  render () {
    const { route } = this.props
    const page = route.page
    const date = access(page, 'data.date')
    const dirName = access(page, 'file.dirname').split('/')[0]
    const title = access(page, 'data.title') || page.path
    const introTxt = access(page, 'data.intro') || ''
    const responsibilities = access(page, 'data.responsibilities') || ''
    const figure = access(page, 'data.figure') || ''

    const byline = (date && dirName === 'writes') ? (<Byline date={date} />) : ''

    let intro
    let Responsibilities = []
    let Figure = []
    let workHeader = []

    if ( introTxt ) {
      intro = (<p className="fs-3 mt-2">{ introTxt }</p>)
    }

    if ( figure ) {
      Figure = React.createElement(Figures[figure], {})
    }

    if ( responsibilities && figure ) {
      let i = 0;
      responsibilities.split('; ').map( function(item) {
        const listItem = (<li key={i} className="mb-1">{item}</li>)
        Responsibilities.push(listItem)
        i++
      })

      workHeader = (
        <div className="cf mt-2 mt-3@sm">
          <div className="markdown right@sm w-25@sm">
            <h2 className="h5 mb-1">Responsibilities</h2>
            <ul className="fs-5">
              { Responsibilities }
            </ul>
          </div>
          <div className="left@sm w-75@sm mt-3 mt-0@sm pr-3@sm">
            { Figure }
          </div>
        </div>
      )
    } else if ( responsibilities ) {
      workHeader = (
        <div className="markdown cf">
          <h2 className="h5 left@sm mr-1@sm">Responsibilities</h2>
          <p className="fs-5 overflow-hidden">
            { responsibilities }
          </p>
        </div>
      )
    } else if ( figure ) {
      workHeader = (
        <div className="mt-3">
          { Figure }
        </div>
      )
    }

    return (
      <DocumentTitle title={`${title} • ${config.siteTitle}`}>
        <main className="maxW-3 mx-auto" role="main">
          <article role="article">
            <h1 className="h1 mb-0">{title}</h1>
            { byline }
            { intro }
            { workHeader }
            <div dangerouslySetInnerHTML={{ __html: page.data.body }} className="markdown mt-3" />
          </article>
        </main>
      </DocumentTitle>
    )
  }

}

MDWrapper.propTypes = {
  route: PropTypes.object
}

export default MDWrapper
