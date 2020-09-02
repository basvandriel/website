import React from 'react';
import { Link } from 'gatsby'


import { Container } from 'react-bootstrap';

import styled from 'styled-components';
import theme from '../theme';

const StyledSection = styled.section`
    padding: 150px 0;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    text-align: center;
    justify-content: space-between;
    padding: 15px 0;

    a { color: ${theme.colors.text_color}}
`;

const StyledTitle = styled.h2`
    color: ${theme.colors.primary};
    font-family: 'LEMON MILK';
    font-size: 52px;
`;

const StyledDescription = styled.p`
    font-size: ${theme.fontSizes.lg};
`;

const Contact = () => (
    <StyledSection>
        <StyledContainer>
            <StyledTitle>Contact</StyledTitle>

            <StyledDescription className='mb-3'>
                Voor vragen en offertes kunt u vrijblijvend contact opnemen.
            </StyledDescription>

            <div style={{ fontSize: theme.fontSizes.xl }}>
                <span role='img' aria-label='phone' className='mr-3'>
                    📞&nbsp;
                    <a href='tel:0683864762'>06 83 86 47 62</a>
                </span>

                <span role='img' aria-label='mail'>
                    📧&nbsp;
                    <a href='mailto:contact@basvandriel.nl'>contact@basvandriel.nl</a>
                </span>
            </div>
        </StyledContainer>
    </StyledSection>
);

export default Contact;