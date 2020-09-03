import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import theme from '../theme';

import styled from 'styled-components';

const StyledSection = styled.section`
    padding: 100px 0;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    justify-content: space-between;
    padding: 15px 0;
    a { color: ${theme.colors.text_color}}
`;

const StyledTitle = styled.h2`
    color: ${theme.colors.primary};
    font-family: 'LEMON MILK';
    font-size: 52px;
`;

// const StyledParagraph = styled.p`
//     font-size: ${theme.fontSizes.lg};
//     text-align: left;
// `;


const Services = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle className='mb-4 border-bottom pb-2'>Diensten <span aria-label='rocket' role='img'>🚀</span></StyledTitle>

                <Row className='justify-content-between'>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>
                    <Col md={4}>

                    </Col>

                </Row>

            </StyledContainer>
        </StyledSection>
    );
};

export default Services;