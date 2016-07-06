import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'


class Root extends Component {

  render () {
    let head = Helmet.rewind();

    let favicons
    let cssLink
    let AnalyticsJS1
    let AnalyticsJS2

    if (process.env.NODE_ENV === 'production') {
      favicons = config.favicons
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
          <title>{config.siteTitle}</title>
          { favicons }
          { cssLink }
          {/* TODO: How to bundle this script with the rest of them? It didn’t work
                    in Safari when I did so.
          */}
          <script src="//npmcdn.com/fontfaceobserver@1.7.1/fontfaceobserver.js"></script>
          <script dangerouslySetInnerHTML={{ __html: config.js.font }} />
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
