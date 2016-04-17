import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class SkipLink extends Component {

  render() {
    const { to, text } = this.props

    return (
      <a href={to} className="skipLink hide p-1 bgDarker-1">{ text }</a>
    )
  }

}

SkipLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SkipLink
