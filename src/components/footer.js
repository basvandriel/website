import React from 'react';

import { Container } from 'react-bootstrap';
import theme from '../theme';
import { Link } from 'gatsby'


import styled from 'styled-components';

import logo from '@images/logo_new.png';

const StyledFooter = styled.footer`
    padding: 15px;
    height: auto;
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
    return (
        <StyledFooter className='border-top'>
            <StyledContainer>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt='' className='mr-2' />
                     Ontworpen en ontwikkeld door Bas van Driel
                    </Link>
                </div>
            </StyledContainer>
        </StyledFooter>
    );
};

export default Footer;