import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import toTitleCase from 'to-title-case'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class Header extends Component {

  render() {
    const { page } = this.props
    const path = page.path
    const title = page.data.title

    const seperator = (<span className="mx-1">/</span>)

    // Inserting a "/" between each directory in the path and linking up all but the last one
    const pathBits = path.split('/').filter(function(n){ return n != '' })
    let breadcrumbs = [], pathBit = {}, pathSoFar = ''

    // TODO: Refactor
    for ( let i=0; i < pathBits.length; i++ ) {
      pathBit = toTitleCase(pathBits[i].replace('-',' '))

      if ( i < pathBits.length - 1 ) {
        pathBit = (<Link to={prefixLink('/' + pathSoFar + pathBits[i] + '/')} key={i}>{pathBit}</Link>)
        breadcrumbs.push(pathBit, seperator)
      } else {
        if (title) {
          pathBit = (<span key={i}>{title}</span>)
        } else {
          pathBit = (<span key={i}>{pathBit}</span>)
        }
        breadcrumbs.push(pathBit)
      }

      pathSoFar += pathBits[i] + '/'
    }

    return (
      <header className="header flexItem-none mb-4" role="banner">
        <nav className="fs-5 maxW-4 mx-auto px-2 px-4@sm" role="navigation">
          <h1 className="inline fontSize-inherit"><Link to={prefixLink('/')}>{config.siteTitle}</Link></h1>
          {seperator}
          {breadcrumbs}
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  page: PropTypes.object.isRequired
}

export default Header
