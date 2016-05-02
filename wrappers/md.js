import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import access from 'safe-access'

import Byline from '../components/Byline'
import CommentPrompt from '../components/CommentPrompt'
import Figures from 'components/Figures'
import ReadNext from 'components/ReadNext'

import '../styles/markdown.css'


class MDWrapper extends Component {

  render () {
    const { route } = this.props
    const page = route.page
    const date = access(page, 'data.date')
    const dirName = access(page, 'file.dirname').split('/')[0]
    const title = access(page, 'data.title') || page.path
    const introTxt = access(page, 'data.intro') || ''
    const commentPrompt = access(page, 'data.commentPrompt') || false
    const responsibilities = access(page, 'data.responsibilities') || ''
    const figure = access(page, 'data.figure') || ''

    const byline = (date && dirName === 'writes') ? (<Byline date={date} />) : ''

    let intro
    let prompt
    let Responsibilities = []
    let Figure = []
    let workHeader = []

    if ( introTxt ) {
      intro = (<p className="fs-3 mt-2" dangerouslySetInnerHTML={{ __html: introTxt }} />)
    }

    if ( commentPrompt ) {
      prompt = <CommentPrompt title={title} />
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
      <main className="maxW-3 mx-auto mb-2 mb-4@sm" role="main">
        <Helmet title={title} />
        <article role="article">
          <header>
            <h1 className="h1 mb-0">{title}</h1>
            { byline }
          </header>
          { intro }
          { workHeader }
          <div dangerouslySetInnerHTML={{ __html: page.data.body }} className="markdown mt-3" />
          <footer>
            { prompt }
            <ReadNext post={page} pages={route.pages} />
          </footer>
        </article>
      </main>
    )
  }

}

MDWrapper.propTypes = {
  route: PropTypes.object
}

export default MDWrapper
