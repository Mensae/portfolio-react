import React from 'react';
import {FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import {rem} from 'polished';

import globalStyles from '../../styles/global-styles';
import SiteHeader from '../SiteHeader';
import mq from '../../styles/templates/mediaQueries';
import {visuallyHidden} from '../../styles/mixins';
import {svgToURL} from '../../styles/tools';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const H1 = styled.h1`
  ${visuallyHidden}
`;

const StyledMain = styled.main`
  display: flex;
  flex: 1 0 auto;
  padding-top: ${props => `${props.fixedSiteNavOffset}px`};
  background-attachment: fixed;
  background-image: url(${svgToURL(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.5 196.3" preserveAspectRatio="xMaxYMid"><path fill="#AEE8FC" d="M41.88 103.97h16.64L50.2 89.55l-8.32-14.41-8.33 14.41-8.32 14.42z"/><path fill="#54D2FE" d="M11.44 56.67h11.44l-5.72-9.91-5.72-9.91-5.72 9.91L0 56.67z"/><path fill="#C9F0C4" d="M42.98 49.07h8.91l-4.46-7.72-4.45-7.71-4.45 7.71-4.46 7.72z"/><path fill="#D3EE32" d="M31.2 11.77h6.79l-3.4-5.88L31.2 0l-3.4 5.89-3.4 5.88z"/><path fill="#5DD2F9" d="M47.83 153.64H59.5l-5.83-10.11-5.84-10.11L42 143.53l-5.84 10.11z"/><path fill="#C8F1FD" d="M33.72 196.3h4.63l-2.32-4.02-2.31-4.01-2.32 4.01-2.32 4.02z"/></svg>')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 50%;
  
  ${mq.m`
    padding-top: 0;
  `}
`;

const StyledSection = styled.section`
  align-self: center;
  height: 100%;
  padding-right: 0;
  
  ${mq.m`
    padding-right: ${rem('114px')}; // Keep room for site navigation
  `}
  
  @media (min-width: ${rem('1920px')}) {
    padding: 0 17vw;
  }
`;

class Layout extends React.Component {
  state = {
    _siteNavIsFixedOffset: 0,
  };

  setSiteNavIsFixedOffset = (siteNavIsFixedOffset) => {
    if (typeof siteNavIsFixedOffset !== 'number') return;

    this.setState({
      _siteNavIsFixedOffset: siteNavIsFixedOffset,
    });
  };

  render() {
    return (
        <Wrapper>
          {globalStyles()}
          <H1><FormattedMessage id={'portfolio.title'} defaultMessage={'Welcome to my portfolio'}/></H1>
          <SiteHeader setSiteNavIsFixedOffset={this.setSiteNavIsFixedOffset} />

          <StyledMain fixedSiteNavOffset={this.state._siteNavIsFixedOffset}>
            <StyledSection>
              {this.props.children}
            </StyledSection>
          </StyledMain>

        </Wrapper>
    );
  }
}

export default Layout;
