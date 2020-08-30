
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import PropTypes from 'prop-types';

import Head from '@components/head';

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
                <Head metadata={site.siteMetadata} />
            )}
        />
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout;