
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import theme from '../theme';
import styled from 'styled-components';

import Head from '@components/head';
import Footer from '@components/footer';

import Nav from '@components/nav';

import '@styles/global.scss'

const { colors } = theme;

const Fullscreen = styled.div`
    border-top: .3rem solid ${colors.primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: ${colors.white_background};
    color: ${colors.text_color};
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