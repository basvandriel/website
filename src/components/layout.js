
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import theme from '../theme';
import styled from 'styled-components';

import Head from '@components/head';
import Nav from '@components/nav';
import Footer from '@components/footer';

import '@styles/global.scss'

const { colors } = theme;

// https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]');
}

const Fullscreen = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${colors.white_background};
    color: ${colors.text_color};
    overflow: hidden;
    `;


const Layout = ({ children }) => {
    return (
        <StaticQuery
            query={graphql`
                query LayoutQuery {
                    site {
                        siteMetadata {
                            title
                            siteUrl
                            keywords
                            locale
                            description
                        }
                    }
                }`}
            render={({ site }) => (
                <div id="root">
                    <Head metadata={site.siteMetadata} />

                    <Fullscreen>
                        <Nav />
                        {children}
                        <Footer />

                    </Fullscreen>
                </div>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout;