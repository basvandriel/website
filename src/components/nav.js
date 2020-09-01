import React from 'react';
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade';

import styled from 'styled-components';
import theme from '../theme';

import logo from '@images/logo_new.png'

const { colors, fontSizes } = theme;


const StyledContainer = styled.header`
    display: flex;
    position: absolute;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px 50px;
    z-index: 11;
    height: 125px;
    width: 100%;
    `;

const StyledNav = styled.nav`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 100%;
    counter-reset: item 0;
    z-index: 12;
  `;

const StyledListItem = styled.li`
    text-transform: uppercase;
    color: ${colors.text_color};
    font-size: ${fontSizes.sm};
    font-weight: 300;
    margin: 0 10px;
`;

const StyledListLink = styled(Link)`
  padding: 12px 10px;
`;

class Nav extends React.Component {
    render() {
        return (
            <StyledContainer>

                <StyledNav>
                    <Fade duration={1000} delay={500} distance="30px">

                        <div className='logo'>
                            <Link to='/'><img src={logo} alt='' /></Link>
                        </div>
                    </Fade>

                    <ul className="nav justify-content-end align-items-center">
                        <Fade duration={1000} delay={500} distance="30px">

                            <StyledListItem className='nav-item'>
                                <StyledListLink to='/'>Wie ben ik</StyledListLink>
                            </StyledListItem>
                            <StyledListItem className='nav-item'>
                                <StyledListLink to='/'>Diensten</StyledListLink>
                            </StyledListItem>
                            <StyledListItem className='nav-item'>
                                <StyledListLink to='/'>Case studies</StyledListLink>
                            </StyledListItem>
                            <StyledListItem className='nav-item'>
                                <StyledListLink to='/' variant="outline-primary">Contact</StyledListLink>
                            </StyledListItem>
                        </Fade>
                    </ul>
                </StyledNav>

            </StyledContainer >
        );
    }
}

export default Nav;