import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'


class Root extends Component {

  render () {
    // TODO: Compare with other pages
    const title = DocumentTitle.rewind()

    let cssLink
    let AnalyticsJS1
    let AnalyticsJS2

    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
      AnalyticsJS1 = config.js.analytics
      AnalyticsJS2 = (<script async src="https://www.google-analytics.com/analytics.js"></script>)
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>{title}</title>
          {/*TODO: Create favicon */}
          {/*<link rel="shortcut icon" href="favicon.ico" />*/}
          {cssLink}
        </head>
        <body>
          {/* TODO: How to move this script into the <head>? Doing so gives an
                    error that the result of "document.getElementsByTagName('body')[0]"
                    is undefined.
          */}
          <script dangerouslySetInnerHTML={{ __html: config.js.head }} />
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script dangerouslySetInnerHTML={{ __html: AnalyticsJS1 }} />
          { AnalyticsJS2 }
        </body>
      </html>
    )
  }

}

Root.propTypes = {
  title: React.PropTypes.string
}

export default Root
