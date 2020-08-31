
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Head from '@components/head';
import Footer from '@components/footer';

import Nav from '@components/nav';

import '@styles/global.scss'


const Fullscreen = styled.div`
    border-top: .3rem solid #00b0a5;
    min-height: 100vh;
    height: 100vh;
    display: flex;
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
                    </Fullscreen>
                    <Footer />
                </div>
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout;