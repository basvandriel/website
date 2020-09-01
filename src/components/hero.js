import React, { useState } from 'react';

import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import theme from '../theme';

const TITLE_SIZE = '4.5rem';

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
                        Bas van Driel&nbsp;
                        <a onMouseEnter={toggleHover} onMouseLeave={toggleHover} href>
                            <span className={hovered ? 'wave' : ''}
                                role='img' aria-label='wave'>
                                👋
                            </span>
                        </a>

                    </StyledTitle>

                    <h2 className='mb-2' style={{ fontWeight: 400 }}>
                        Softwareontwikkelaar, ICT-consultant en fotograaf <span role='img' aria-label='wave'>🚀</span>
                    </h2>
                </Fade>
                <Fade duration={1000} delay={1000} distance="30px">
                </Fade>
            </Container>
        </StyledSection >
    );
};

export default Hero;