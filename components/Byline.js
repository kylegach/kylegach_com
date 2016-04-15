import moment from 'moment'
import React, { Component, PropTypes } from 'react'


class Byline extends Component {

  render() {
    const { date } = this.props

    let postedOn = {}
    if (process.env.NODE_ENV === 'static') {
      postedOn = (<span>{moment(date).format('MMMM D, YYYY')}</span>)
    } else {
      postedOn = (<span title={moment(date).format('MMMM D, YYYY')}>{moment(date).fromNow()}</span>)
    }

    return (
      <em className="normal fs-5">{postedOn}</em>
    )
  }
}

Byline.propTypes = {
  date: PropTypes.string.isRequired
}

export default Byline
