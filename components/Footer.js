import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'


class Footer extends Component {

  render() {
    // const { toggleReverse } = this.props

    return (
      <footer className="flexItem-none py-3 bgDarker-1">
        <div className="maxW-4 mx-auto px-3 px-4@sm flex@sm flex-wrap">
          <ul className="listReset lineHeight-44 mb-0 flex@sm flex-wrap items-center mr-auto@sm">
            <li className="inlineBlock mr-3">
              <Link to={prefixLink('/work/')}>Work</Link>
            </li>
            <li className="inlineBlock mr-3">
              <Link to={prefixLink('/writing/')}>Writing</Link>
            </li>
            <li className="inlineBlock mr-3">
              <a href={prefixLink('/resume.pdf')}>Résumé</a>
            </li>
            <li className="inlineBlock mr-3">
              <Link to={prefixLink('/colophon/')}>Colophon</Link>
            </li>
            <li className="inlineBlock mr-3">
              <a href="mailto:kyle.gach@gmail.com">Email</a>
            </li>
            <li className="inlineBlock mr-3">
              <a href={'https://twitter.com/' + config.twitter}>Twitter</a>
            </li>
            <li className="inlineBlock mr-3">
              <a href="https://github.com/kylegach">GitHub</a>
            </li>
          </ul>
          <span className="inlineBlock lineHeight-44 flex@sm flex-wrap items-center">
            <button type="button nowrap" onClick={this.props.toggleReverse} className="btn">
              {this.props.isReverse ? 'Turn on the lights' : 'Turn off the lights'}
            </button>
          </span>
          {/*{ this.button }*/}
        </div>
      </footer>
    )
  }

  // TODO: This doesn't work consistently. It seems like it works most/all of the
  //       time if "dark mode" is auto-triggered by the root template.js, but is
  //       very inconsistent otherwise. Consider launching without this?
  // buttonMarkup = () => {
  //   return (
  //     <span className="inlineBlock lineHeight-44 flex@sm flex-wrap items-center">
  //       <button type="button nowrap" onClick={this.props.toggleReverse} className="btn">
  //         {/* I don't understand why the check is negated here. It didn't need to be until I pulled this out of render() */}
  //         {!this.props.isReverse ? 'Turn on the lights' : 'Turn off the lights'}
  //       </button>
  //     </span>
  //   )
  // }
  //
  // componentDidMount = () => {
  //   this.button = this.buttonMarkup()
  // }
  //
  // componentWillUpdate = () => {
  //   this.button = this.buttonMarkup()
  // }

}

Footer.button = null

// Footer.propTypes = {
//   isReverse: PropTypes.bool,
//   toggleReverse: PropTypes.func
// }

export default Footer
