import React from 'react';

import { Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import theme from '../theme';

const TITLE_SIZE = '4.5rem';

const StyledSection = styled.section`
    display: inherit;
    width: 100%;
    align-items: center;
    min-height: 100vh;`;

const StyledTitle = styled.h1`
    font-size: ${TITLE_SIZE};
    color: ${theme.colors.primary};
    font-weight: 700;
    font-family: 'Lemon Milk';
`;

const Hero = () => {
    return (
        <StyledSection id="hero" style={{ background: 'inherit' }} >
            <Container>
                <Fade duration={1000} delay={500} distance="30px">
                    <p style={{ fontWeight: 300 }} className='mb-0'>Mijn naam is</p>
                    <StyledTitle>
                        Bas van Driel 👋
                    </StyledTitle>

                    <h2 className='mb-4' style={{ fontWeight: 400 }}>
                        Softwareontwikkelaar, ICT-consultant en fotograaf 🚀
                    </h2>
                </Fade>
                <Fade duration={1000} delay={1000} distance="30px">

                    <h2>
                        <Button variant='link' className='d-inline-block mt-2 p-0' to='mailto:contact@basvandriel.nl'>
                            contact@basvandriel.nl
                        </Button>
                    </h2>

                </Fade>
            </Container>
        </StyledSection>
    );
};

export default Hero;