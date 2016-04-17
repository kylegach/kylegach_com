import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import suncalc from 'suncalc'

import Header from 'components/Header'
import Footer from 'components/Footer'

import 'styles/styles.css'

if (process.env.NODE_ENV === 'development') {
  require("script!../node_modules/tota11y/build/tota11y.min.js")
}


class Template extends Component {

  constructor() {
		super();
    this.state = {
			isReverse: false
		}
	}

  render () {
    const { children, routes } = this.props
    const page = routes[routes.length - 1].page

    let header
    if ( page.path !== '/' ) {
      header = (<Header page={page} />)
    }

    const wrapperClasses = 'wrap pt-2' + (this.state.isReverse ? ' is-reverse ' : '')

    return (
      <div className={wrapperClasses}>
        { header }
        <div className="content maxW-4 mx-auto px-2 px-4@sm pb-4">
          {children}
        </div>
        <Footer className="footer" {...this.props} />
      </div>
    )
  }

  componentDidMount = () => {
    /*
    I hard-coded Boulder's lat & long instead of using geolocation because:
    a) I think a prompt would be weird for the user, given the site's purpose
    b) Most of my target audience is in Boulder
    c) Nearly all of my audience is likely to be in the US and it's acceptable
       if the effect is off by ±2 hrs.
    */
    const time = moment()
    const sunset = suncalc.getTimes(time, 40.027435, -105.251945).sunset
    const sunrise = suncalc.getTimes(time, 40.027435, -105.251945).sunrise

    if ( time.isAfter(sunset) || time.isBefore(sunrise) ) {
      this.toggleReverse()
    }
  }

  toggleReverse = () => {
    this.setState({
      isReverse: !this.state.isReverse
    })
  }
}

Template.propTypes = {
  children: PropTypes.any
}

export default Template
