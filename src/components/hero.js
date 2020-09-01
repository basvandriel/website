import React, { useState } from 'react';

import { Container, Button, ButtonGroup } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import theme from '../theme';

const TITLE_SIZE = '72px';

const StyledSection = styled.section`
    border-top: .3rem solid ${theme.colors.primary};
    display: inherit;
    width: 100%;
    align-items: center;
    min-height: 100vh;`;

const StyledTitle = styled.h1`
    font-size: ${TITLE_SIZE};
    color: ${theme.colors.primary};
    font-weight: 700;
    font-family: 'LEMON MILK';

    span { color: ${theme.colors.text_color}; }
`;

const StyledDescription = styled.p`
    width: 75%;
    font-size: ${theme.fontSizes.lg};
`;

const StyledButton = styled(Button)`
    color: ${theme.colors.primary};
    border-color: ${theme.colors.primary};

    &:hover { background-color: ${theme.colors.primary}; border-color: ${theme.colors.primary};}
`;
const Hero = () => {
    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <StyledSection id="hero" style={{ background: 'inherit' }} >
            <Container>
                <Fade duration={1000} delay={500} distance="30px">
                    <p style={{ fontWeight: 300 }} className='mb-0'>Mijn naam is</p>
                    <StyledTitle>
                        <span className='first'>Bas</span> van Driel&nbsp;
                        <a onMouseEnter={toggleHover} onMouseLeave={toggleHover} href>
                            <span className={hovered ? 'wave' : ''}
                                role='img' aria-label='wave'>
                                👋
                            </span>
                        </a>

                    </StyledTitle>

                    <h2 className='mb-4' style={{ fontWeight: 400 }}>
                        Softwareontwikkelaar, ICT-consultant en fotograaf <span role='img' aria-label='wave'>🚀</span>
                    </h2>

                    <StyledDescription className='mb-1'>
                        Ik ben een een full-stack developer uit Terneuzen, gespecialiseerd in het maken en ontwerpen van exceptionele websites, applicaties en alles daar tussen in.</StyledDescription>
                </Fade>
                <Fade duration={1000} delay={500} distance="30px">
                    <StyledButton variant='outline-primary' size='lg' className='mt-4'>Meer weten?</StyledButton>
                </Fade>
            </Container>
        </StyledSection >
    );
};

export default Hero;