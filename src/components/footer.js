import React from 'react';

import { Container } from 'react-bootstrap';
import theme from '../theme';

import styled from 'styled-components';

const StyledFooter = styled.footer`
    padding: 20px;
    align-items: center;
    min-height: 75px;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-size: ${theme.fontSizes.sm};
    font-weight: 300;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.text_color};
`;

const Footer = () => {
    return (
        <StyledFooter>
            <StyledContainer className='text-secondary'>

                <div>
                    Copyright © 2020 Bas van Driel
                </div>
            </StyledContainer >
        </StyledFooter >
    );
};

export default Footer;  