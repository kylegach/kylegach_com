import { config } from 'config'
import React, { Component, PropTypes } from 'react'

import HeaderBlock from 'components/HeaderBlock'
import Pages from 'components/Pages'
import SectionBlock from 'components/SectionBlock'


class Home extends Component {
  render () {
    const { route } = this.props

    return (
      <div className="pt-2 pt-3@sm">

        <HeaderBlock title={config.siteTitle}>
          <div dangerouslySetInnerHTML={{ __html: config.header.text }} />
        </HeaderBlock>
        <main role="main">

          <SectionBlock
            title={config.work.title}
            blurb={config.work.blurb}
          >
            <Pages pages={route.pages} folder={config.work.dir} limit={2} />
          </SectionBlock>

          <SectionBlock
            title = {config.writing.title}
            blurb = {config.writing.blurb}
            link = {'/' + config.writing.dir + '/'}
            linkText="Archives"
          >
            <Pages pages={route.pages} folder={config.writing.dir} limit={2} row />
          </SectionBlock>

          <SectionBlock title={config.about.title}>
            <div className="cf" dangerouslySetInnerHTML={{ __html: config.about.text }} />
          </SectionBlock>

        </main>
      </div>
    )
  }
}

Home.propTypes = {
  route: PropTypes.object
}

export default Home
