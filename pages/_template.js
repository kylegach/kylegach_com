import { prefixLink } from 'gatsby-helpers'
import moment from 'moment'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import suncalc from 'suncalc'

import Footer from 'components/Footer'

import 'styles/styles.css'


class Template extends Component {

  constructor() {
		super();
    this.state = {
			isReverse: false
		}
	}

  render () {
    const { children } = this.props

    const wrapperClasses = 'wrap' + (this.state.isReverse ? ' is-reverse ' : '')

    return (
      <div className={wrapperClasses}>
        <div className="content maxW-4 mx-auto p-2 pb-4 px-4@sm">
          {children}
        </div>
        {/*TODO: See Footer.js*/}
        <Footer className="footer" isReverse={this.state.isReverse} toggleReverse={this.toggleReverse} />
        {/*<Footer className="footer" />*/}
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
