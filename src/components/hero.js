import React from 'react';

import { Container, Button } from 'react-bootstrap';
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

class Hero extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false };
        this.toggleHover = this.toggleHover.bind(this);
    }
    componentDidMount() {
        this.toggleHover();

        setTimeout(() => { this.toggleHover() }, 2500);
    }
    toggleHover() {
        this.setState({ hovered: !this.state.hovered });
    }
    render() {
        return (
            <StyledSection id="hero" style={{ background: 'inherit' }} >
                <Container>
                    <Fade duration={1000} delay={500} distance="30px">
                        <p style={{ fontWeight: 300 }} className='mb-0'>Mijn naam is</p>
                        <StyledTitle>
                            Bas van Driel&nbsp;
                            <a onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} href>
                                <span className={this.state.hovered ? 'wave' : ''}
                                    role='img' aria-label='wave'>
                                    👋
                                </span>
                            </a>
                        </StyledTitle>

                        <h2 className='mb-4' style={{ fontWeight: 300, textTransform: 'uppercase' }}>
                            Full-stack developer en ICT-beheerder <span role='img' aria-label='wave'></span>
                        </h2>

                        <StyledDescription className='mb-1'>
                            Gespecialiseerd in maatwerk oplossingen omtrent het ontwerpen en realiseren van websites, applicaties en alles daar tussen in.</StyledDescription>
                    </Fade>
                    <Fade duration={1000} delay={500} distance="30px">
                        <div className='mt-4'>
                            <StyledButton variant='outline-primary' size='lg' className='mr-2'>Meer weten?</StyledButton>
                        </div>
                    </Fade>
                </Container>
            </StyledSection >
        );
    }
}

export default Hero;