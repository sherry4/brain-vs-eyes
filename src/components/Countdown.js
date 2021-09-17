import * as React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../theme/Themes';
import variables from '../variables/variables';

const { font_sizes, colors, margins } = variables;

const CountDownContainer = styled.div`
    margin-top: ${margins.top};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: fit-content;
    flex-direction: column;
`;

const ProgressContainer = styled.div`
    margin-top: 16px;
    height: 31px;
    border: 2px solid ${colors.gray};
    width: 100%;
    border-radius: 41px;
    overflow: hidden;
`;

const ProgressBar = styled.div`
    height: 100%;
    background-color: ${colors.pastel_green};
    width: ${props => 100 * props.remaining / 20}%;
    transition: width 1s;
`;

const CountDownText = styled.span`
    font-size: ${font_sizes.text};
    color: ${props => props.theme.color};
`;

const Countdown = (props) => {
    const { remaining } = props;
    const { theme, language } = React.useContext(ThemeContext);

    return (
        <CountDownContainer>
            <CountDownText theme={theme}>{language.remaining} {remaining} {language.second}{remaining > 1 && language.name === 'en' && 's'}</CountDownText>
            <ProgressContainer>
                <ProgressBar remaining={remaining} />
            </ProgressContainer>
        </CountDownContainer>
    )
}

export default Countdown;