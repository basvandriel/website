import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import layers from 'bootstrap-icons/icons/layers.svg';
import shield from 'bootstrap-icons/icons/shield-check.svg';
import gear from 'bootstrap-icons/icons/gear.svg';


import theme from '../theme';
import media from '../media';

import styled from 'styled-components';

import { StyledSectionTitle } from '@styles/GlobalStyle';

const StyledSection = styled.section`
    padding: 100px 0;
    padding-bottom: 0;
`;

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    font-weight: 300;
    justify-content: space-between;
    a { color: ${theme.colors.text_color}}
`;

const StyledService = styled.h3`
    font-size:  ${theme.fontSizes.lg};
    ${media.tablet`font-size: ${theme.fontSizes.md}`} ;
`;

const StyledParagraph = styled.p`
    font-size: ${theme.fontSizes.lg};
    text-align: left;
    
    ${media.tablet`font-size: ${theme.fontSizes.md}`} ;
`;

const StyledIcon = styled.img`
    width: 40px;
    height: 40px;
    text-align: left;
`;

const Services = () => {
    return (
        <StyledSection>
            <StyledContainer id='services' className='py-3'>
                <StyledSectionTitle className='mb-4 border-bottom pb-2'>Diensten <span aria-label='rocket' role='img'>🚀</span></StyledSectionTitle>

                <Row className='justify-content-between'>
                    <Col md={4}>
                        <StyledIcon src={layers} alt="" className='mb-4' />

                        <StyledService>Computerservice en schoonmaak</StyledService>
                        <StyledParagraph>Heeft u problemen met uw  computer, laptop of smartphone?
                        Of heeft u andere ICT-vraagstukken waar u niet uitkomt?
                        Graag los ik dit voor u op!
                        </StyledParagraph>
                    </Col>
                    <Col md={4}>
                        <StyledIcon src={shield} alt="" className='mb-4' />
                        <StyledService>Back-up gegevens</StyledService>
                        <StyledParagraph>
                            Wilt u gegevens veiligstellen maar weet u niet goed waar te beginnen?
                            Hier help ik u graag bij, ik zorg er namelijk voor dat er regelmatig een reservekopie wordt gemaakt van al uw bestanden.
                        </StyledParagraph>
                    </Col>
                    <Col md={4}>
                        <StyledIcon src={gear} alt="" className='mb-4' />
                        <StyledService>Reparatie- en onderhoud</StyledService>
                        <StyledParagraph>
                            Mocht uw computer stoppen met werken door bijvoorbeeld een software fout of mogelijk defecte hardware, dan
                            kunt u bij mij terecht. Ik zal ervoor zorgen dat deze weer naar behoren werkt.
                        </StyledParagraph>
                    </Col>
                </Row>

            </StyledContainer>
        </StyledSection>
    );
};

export default Services;