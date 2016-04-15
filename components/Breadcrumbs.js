import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import toTitleCase from 'to-title-case'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class Breadcrumbs extends Component {

  render() {
    const { route } = this.props
    const path = route.page.path
    const title = route.page.data.title

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
      <nav className="fs-5">
        <h1 className="inline fontSize-inherit"><Link to={prefixLink('/')}>{config.siteTitle}</Link></h1>
        {seperator}
        {breadcrumbs}
      </nav>
    )
  }
}

Breadcrumbs.propTypes = {
  route: PropTypes.object.isRequired
}

export default Breadcrumbs
