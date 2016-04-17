import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class SkipLink extends Component {

  render() {
    const { to, text } = this.props

    return (
      <a href={to} className="skipLink hide p-1 bgDarker-1" onClick={this.setFocus}>{ text }</a>
    )
  }

  setFocus() {
    // Functionality from: https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/

    // Cannot figure out why this won't work. Get error that 'cannot read property props of null'. Hardcoding instead, for now.
    // const target = document.getElementById(this.props.to.split('#')[0])
    const target = document.getElementById('nav')
    target.setAttribute('tabindex', -1)
    target.addEventListener('blur', function() {
      target.removeAttribute('tabindex')
    })
    target.focus()
  }

}

SkipLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SkipLink
