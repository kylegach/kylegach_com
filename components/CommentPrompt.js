import { config } from 'config'
import React, { Component, PropTypes } from 'react'


class CommentPrompt extends Component {

  render() {
    const { title } = this.props

    return (
      <p className="mt-4 p-2 bgDarker-1">
        This site doesn’t have comments, but I’d love for you to start a conversation on <a href={'https://twitter.com/intent/tweet?text=' + config.twitter + ' — re: ' + title + ', '}>Twitter</a> or in an <a href={'mailto:' + config.email + '?subject=Re:%20' + encodeURIComponent(title)}>email</a>.
      </p>
    )
  }
}

CommentPrompt.propTypes = {
  title: PropTypes.string.isRequired
}

export default CommentPrompt
