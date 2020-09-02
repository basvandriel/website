import React from 'react';
import { Link } from 'gatsby'
import { Container, Row, Col, Image } from 'react-bootstrap';

import theme from '../theme';

import styled from 'styled-components';

import me from '@images/me.png';

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

const StyledParagraph = styled.p`
    font-size: ${theme.fontSizes.lg};
    text-align: left;
`;


const About = () => {
    return (
        <StyledSection>
            <StyledContainer>
                <StyledTitle className='mb-4 border-bottom pb-2'>Over mij 👨‍💻</StyledTitle>

                <Row className='justify-content-between'>
                    <Col md={6}>
                        <StyledParagraph>
                            Hallo! Mijn naam is Bas van Driel, ik ben een full-stack developer en ICT-consultant uit Terneuzen.
                        </StyledParagraph>
                        <StyledParagraph>
                            Ik hou me graag bezig met het maken van websites, applicaties en alles daar tussen in.
                            Hiernaast vind ik het leuk om te adviseren en ondersteunen op gebied van IT!
                        </StyledParagraph>
                        <StyledParagraph>
                            Voor hobbies ben ik graag bezig met het maken van muziek, reizen en fotografie.
                        </StyledParagraph>
                    </Col>
                    <Col md={4}>
                        <Image thumbnail src={me} alt='Een foto van mij!' className='img-responsive' style={{ maxWidth: '85%' }} />
                    </Col>

                </Row>

            </StyledContainer>
        </StyledSection>
    );
};

export default About;