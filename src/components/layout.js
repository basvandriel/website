
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';
import styled from 'styled-components';


import Head from '@components/head';
import Footer from '@components/footer';

const Fullscreen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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