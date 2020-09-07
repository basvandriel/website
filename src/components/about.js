import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import theme from '../theme';

import styled from 'styled-components';

import me from '@images/me.png';

import { StyledSectionTitle, StyledParagraph } from '@styles/GlobalStyle';
import StyledSection from '@styles/Section';

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    justify-content: space-between;
    a { color: ${theme.colors.text_color}}
`;

const About = () => {
    return (
        <StyledSection>
            <StyledContainer id='about' className='py-3'>
                <StyledSectionTitle className='mb-4 border-bottom pb-2'>Over mij <span role='img' aria-label='tech'>👨‍💻</span></StyledSectionTitle>

                <Row className='justify-content-between'>
                    <Col md={6}>
                        <StyledParagraph>
                            Hallo! Mijn naam is Bas van Driel, ik ben een full-stack developer en ICT-beheerder uit Terneuzen.
                        </StyledParagraph>
                        <StyledParagraph>
                            Met meer dan 7 jaar ervaring  help ik u graag met al uw ICT vraagstukken.
                            Graag hou ik me bezig met het ontwerpen en realiseren van maatwerk websites, applicaties en alles daar tussen in.
                            Hiernaast vind ik het leuk om te adviseren en ondersteunen bij computerproblemen.
                        </StyledParagraph>
                        <StyledParagraph>
                            Wilt u meer weten? Bekijk dan mijn aanbod van diensten of stuur me gerust een bericht en wellicht kan ik u wel helpen!
                        </StyledParagraph>


                    </Col>
                    <Col md={4} className='text-center'>
                        <Image thumbnail src={me} alt='Een foto van mij!' className='img-responsive' style={{ maxWidth: '85%' }} />
                    </Col>

                </Row>

            </StyledContainer>
        </StyledSection>
    );
};

export default About;