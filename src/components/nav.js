import React from 'react';
import { Link } from 'gatsby'
import Helmet from 'react-helmet';

import styled from 'styled-components';
import theme from '../theme';
import media from '../media';

import logo from '@images/logo_new.png';

import icons from 'bootstrap-icons/bootstrap-icons.svg';

import { slide as Menu } from 'react-burger-menu'


const { colors, fontSizes } = theme;


const StyledContainer = styled.header`
    display: flex;
    position: absolute;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 125px;
    width: 100%;
    `;

const StyledHamburger = styled.div`
    display: none;
    cursor: pointer;
    align-items: center;
    

    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;

    ${media.tablet`display: flex;`};
`;

const StyledNav = styled.nav`
    padding: 0px 50px;
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

    ${media.tablet`display: none;`};
`;

const StyledListLink = styled(Link)`
  padding: 12px 10px;
`;

const StyledHamburgerContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    outline: 0;
    opacity: 0.5;
    background-color: ${theme.colors.black_background};
`;

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = { menuOpen: false }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
        window.addEventListener('resize', () => this.handleResize());
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll());
        window.removeEventListener('resize', () => this.handleResize());

    }

    toggleMenu = () => this.setState({ menuOpen: !this.state.menuOpen });

    handleResize = () => (window.innerWidth > 768 && this.state.menuOpen) ? this.toggleMenu() : void 0;
    handleScroll = () => {
        if (this.state.menuOpen) {
            console.log('hey');
            return;
        }

    }
    render() {
        return (
            <StyledContainer>
                <Helmet>
                    <body className={this.state.menuOpen ? 'no-scroll' : ''} />
                </Helmet>
                <StyledNav>
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
                        <StyledListItem className='nav-item'>
                            <StyledListLink to='/#contact' variant="outline-primary">Contact</StyledListLink>
                        </StyledListItem>
                    </ul>

                    <StyledHamburger onClick={this.toggleMenu}>
                        <svg className="bi" width="35" height="35" fill="currentColor">
                            <use xlinkHref={icons + (this.state.menuOpen ? '#x' : '#list')} />
                        </svg>
                    </StyledHamburger>
                </StyledNav>



                <StyledHamburgerContainer className={this.state.menuOpen ? 'd-flex' : 'd-none'}>
                    <StyledListItem className='nav-item'>
                        <StyledListLink to='/#about' onClick={this.toggleMenu}>Over mij</StyledListLink>
                    </StyledListItem>
                    <StyledListItem className='nav-item'>
                        <StyledListLink onClick={this.toggleMenu} to='/#services'>Diensten</StyledListLink>
                    </StyledListItem>
                    <StyledListItem className='nav-item'>
                        <StyledListLink onClick={this.toggleMenu} to='/#contact' variant="outline-primary">Contact</StyledListLink>
                    </StyledListItem>
                </StyledHamburgerContainer>
            </StyledContainer >

        );
    }
}

export default Nav;