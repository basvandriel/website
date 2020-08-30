import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon from '@images/favicons/favicon.ico';
import appleIcon57x57 from '@images/favicons/apple-icon-57x57.png';
import appleIcon72x72 from '@images/favicons/apple-icon-72x72.png';
import appleIcon76x76 from '@images/favicons/apple-icon-76x76.png';
import appleIcon114x114 from '@images/favicons/apple-icon-114x114.png';
import appleIcon120x120 from '@images/favicons/apple-icon-120x120.png';
import appleIcon144x144 from '@images/favicons/apple-icon-144x144.png';
import appleIcon152x152 from '@images/favicons/apple-icon-152x152.png';
import appleIcon180x180 from '@images/favicons/apple-icon-180x180.png';

const Head = ({ metadata }) => (
    <Helmet>
        <html lang="nl" prefix="og: http://ogp.mee/ns#" />
        <title itemProp="name" lang="en">{metadata.title}</title>
        <link rel="shortcut icon" href={favicon} />
        <link rel="canonical" href="https://basvandriel.nl" />

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.siteKeywords} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:locale" content={metadata.locale} />
        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="description" content={metadata.description} />


        <link rel="apple-touch-icon" sizes="57x57" href={appleIcon57x57} />
        <link rel="apple-touch-icon" sizes="72x72" href={appleIcon72x72} />
        <link rel="apple-touch-icon" sizes="76x76" href={appleIcon76x76} />
        <link rel="apple-touch-icon" sizes="114x114" href={appleIcon114x114} />
        <link rel="apple-touch-icon" sizes="120x120" href={appleIcon120x120} />
        <link rel="apple-touch-icon" sizes="144x144" href={appleIcon144x144} />
        <link rel="apple-touch-icon" sizes="152x152" href={appleIcon152x152} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon180x180} />
    </Helmet>
);

export default Head;

Head.propTypes = {
    metadata: PropTypes.object.isRequired,
};