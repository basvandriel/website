import styled from 'styled-components';

import theme from '../theme';
import media from '../media';

export const StyledSectionTitle = styled.h2`
    color: ${theme.colors.primary};
    font-family: 'LEMON MILK';
    font-size: 52px;
    ${media.tablet`font-size: 40px;`}
`;

export const StyledParagraph = styled.p`
    font-size: ${theme.fontSizes.lg};
    text-align: left;

    ${media.tablet`font-size: ${theme.fontSizes.md};`} ;
`;