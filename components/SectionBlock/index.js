import { prefixLink } from 'gatsby-helpers'
import camelCase from 'lodash/camelCase'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './styles.css'


class SectionBlock extends Component {
  render () {
    const { title, blurb, link, linkText, type, children } = this.props

    let blurbTxt
    if ( blurb ) {
      if ( link ) {
        blurbTxt = (<p>{blurb}<br /><Link to={prefixLink(link)} className="inlineBlock mt-2">{linkText}</Link></p>)
      } else {
        blurbTxt = (<p>{blurb}</p>)
      }
    }

    return (
      <section className={'cf mb-4 relative sectionBlock--' + camelCase(title)}>
        <header className="left@md w-25@md mx-2 mx-3@sm mx-0@md pr-3@md mb-3 mb-0@md pb-3 pb-0@md border-bottom border-none@md borderColor-light">
          <h2 className={'h4 caps' + (blurb ? ' mb-2 ' : ' mb-0 ')}>{title}</h2>
          {blurbTxt}
        </header>
        <div className="right@md w-75@md px-2 px-3@sm pr-0@md">
          {children}
        </div>
      </section>
    )
  }
}

SectionBlock.propTypes = {
  title: PropTypes.string.isRequired,
  blurb: PropTypes.node,
  link: PropTypes.string,
  linkText: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any
}

export default SectionBlock
