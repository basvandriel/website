import React from 'react';

import logo from '@images/logo.png'

import { Container, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Hero = () => {
    return (
        <section id="hero" style={{ background: 'inherit' }} >
            <Container>
                <Fade duration={1000} delay={500} distance="30px">
                    <p className='hero-pretitle mb-1'>Mijn naam is</p>
                    {/* <img src={logo} alt='' className='logo mb-3' /> */}

                    <h1 className="hero-title">
                        Bas van Driel 👋
                    </h1>

                    <h2 className='hero-subtitle'>
                        {"Softwareontwikkelaar, ICT-consultant en fotograaf. 🚀"}
                    </h2>
                </Fade>
                <Fade duration={1000} delay={1000} distance="30px">
                    <p className="hero-cta">
                        <a className="cta-btn cta-btn--hero" href='mailto:contact@basvandriel.nl'>
                            Neem contact op
                        </a>
                    </p>
                </Fade>
            </Container>
        </section>
    );
};

export default Hero;