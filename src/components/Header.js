import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import Link from "./link";
import './styles.css';

import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
        `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks,
          }
        }
      } = data;
      const finalLogoLink = logo.link !== '' ? logo.link : '/';
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header'}>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
              <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                  <img className={'img-responsive'} src={'http://styczynski.in/img/1707b4e479f5206d15513a7f0f3a3d65.svg'} alt={'logo'} />
                <div className={"headerTitle"} dangerouslySetInnerHTML={{__html: headerTitle}} />
              </Link>
            </div>
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr/>
              </div>
                <ul className={'nav navbar-nav navBarUL'}>
                  <li className={'githubBtn'}>
                        <GitHubButton href="https://github.com/styczynski" data-size="large" data-show-count="true" aria-label="Follow @styczynski on GitHub">Follow @styczynski</GitHubButton>
                  </li>
                </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
