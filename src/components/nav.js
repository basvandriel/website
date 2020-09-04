import React from 'react';
import { Link } from 'gatsby'
import { Fade } from 'react-awesome-reveal';

import styled from 'styled-components';
import theme from '../theme';

import logo from '@images/logo_new.png';

import 'bootstrap-icons/bootstrap-icons.svg';

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

const StyledHamburger = styled.div`
    display: none;

    @media (max-width: 768em) {display: flex;}
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
    font-weight: 500;
    margin: 0 10px;
`;

const StyledListLink = styled(Link)`
  padding: 12px 10px;
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = { menuOpen: false }
    }

    componentDidMount() {
        // window.addEventListener('resize', () => {
        //     this.handleResize();
        //     console.log(window.innerWidth);
        // });
    }
    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });
    handleResize = () => (window.innerWidth > 768 && this.state.menuOpen) ? this.toggleMenu() : undefined;

    render() {
        return (
            <StyledContainer>

                <StyledNav>
                    {/* <Fade duration={1000} delay={500} distance="30px"> */}
                    <div className='logo'>
                        <Link to='/'><img src={logo} alt='' /></Link>
                    </div>

                    <ul className="nav justify-content-end align-items-center">
                        <StyledListItem className='nav-item'>
                            <StyledListLink to='/#about'>Over mij</StyledListLink>
                        </StyledListItem>
                        <StyledListItem className='nav-item'>
                            <StyledListLink to='/#services'>Diensten</StyledListLink>
                        </StyledListItem>
                        {/* <StyledListItem className='nav-item'>
                                <StyledListLink to='/'>Case studies</StyledListLink>
                            </StyledListItem> */}
                        <StyledListItem className='nav-item'>
                            <StyledListLink to='/#contact' variant="outline-primary">Contact</StyledListLink>
                        </StyledListItem>
                    </ul>
                </StyledNav>

                <StyledHamburger>
                    <svg width="40PX" height="40PX" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </StyledHamburger>

            </StyledContainer >
        );
    }
}

export default Nav;