import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    return (<div>Ontworpen en ontwikkeld door Bas van Driel</div>);
};

Footer.propTypes = {
    githubInfo: PropTypes.object
}

export default Footer;