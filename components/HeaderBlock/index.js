import camelCase from 'lodash/camelCase'
import React, { Component, PropTypes } from 'react'

import RhymesWith from 'components/RhymesWith'

import './styles.css'


class HeaderBlock extends Component {

  render () {
    const { title, children } = this.props

    // Inserting a <br /> between each word in the header’s title
    const titleArray = title.split(' ')
    const gap = (<span key="gap"><br className="display-none@xs display-none@sm-md"/><span className="display-none@md">&nbsp;</span></span>)
    let formattedTitle = [], word, i = 0

    for ( i; i < titleArray.length; i++ ) {
      word = (<span key={i}>{titleArray[i]}</span>)
      if ( i < titleArray.length - 1 ) {
        formattedTitle.push(word, gap)
      } else {
        formattedTitle.push(word)
      }
    }

    return (
      <header className={'cf mb-4 relative sectionBlock--' + camelCase(title)} role="banner">
        <div className="left@md w-25@md px-2 px-3@sm pl-0@md pr-3@md">
          <h1 className="h1 caps lineHeight-3 mb-1">{formattedTitle}</h1>
          <RhymesWith />
        </div>
        <div className="right@md w-75@md mt-3 mt-0@md px-2 px-3@sm pr-0@md">
          {children}
        </div>
      </header>
    )
  }

}

HeaderBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default HeaderBlock
