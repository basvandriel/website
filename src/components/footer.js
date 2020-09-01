import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import theme from '../theme';
import { Link } from 'gatsby'


import styled from 'styled-components';

import logo from '@images/logo_new.png';

const StyledFooter = styled.footer`
    padding: 15px;
    height: auto;
    min-height: 200px;
    background-color: ${theme.colors.white_background};
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSizes.sm};
    font-weight: 300;
    justify-content: space-between;
    color: ${theme.colors.text_color};
`;

const Footer = () => {
    const [githubInfo, setGitHubInfo] = useState({ stars: null, forks: null });

    return (
        <StyledFooter className='border-top'>
            <StyledContainer>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt='' />
                    Ontworpen en ontwikkeld door Bas van Driel
                    </Link>
                </div>
                <div>
                    Idk hoe dit werkt
                </div>
            </StyledContainer>
        </StyledFooter>
    );
};

Footer.propTypes = {
    githubInfo: PropTypes.object
}

export default Footer;