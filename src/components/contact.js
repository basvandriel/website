import React from 'react';

import { Container } from 'react-bootstrap';

import { StyledSectionTitle, StyledParagraph } from '@styles/GlobalStyle';

import styled from 'styled-components';
import theme from '../theme';
import StyledSection from '@styles/Section';

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    text-align: center;
    justify-content: space-between;

    a { color: ${theme.colors.text_color}}
`;

const Contact = () => (
    <StyledSection style={{ padding: "150px 0" }}>
        <StyledContainer id='contact' >
            <StyledSectionTitle>Contact</StyledSectionTitle>

            <StyledParagraph className='mb-0 text-center'>
                Voor vragen en offertes kunt u vrijblijvend contact opnemen.
            </StyledParagraph>

            <div style={{ fontSize: theme.fontSizes.xl, fontWeight: 400 }}>
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