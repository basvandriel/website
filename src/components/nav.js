import React from 'react';

import styled from 'styled-components';

import logo from '@images/logo.png'

const StyledContainer = styled.header`
    display: flex;
    position: fixed;
    padding: 0px 50px;
    z-index: 11;
    width: 100%;
    height: 60px;
    `;

const StyledNav = styled.nav`
    display: flex;
    position: relative;
    width: 100%;
    counter-reset: item 0;
    z-index: 12;
  `;

class Nav extends React.Component {
    render() {
        return (
            <StyledContainer>
                <StyledNav>
                    <a href='#'>
                    </a>
                </StyledNav>

            </StyledContainer>
        );
    }
}

export default Nav;