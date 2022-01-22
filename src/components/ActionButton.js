import * as React from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../theme/Themes';
import variables from '../variables/variables';

const { border_radius, colors, font_sizes, heights, box_shadows } = variables;

const ButtonContainer = styled.button`
    height: ${heights.button};
    border-radius: ${border_radius.button};
    padding: 8px 16px;
    text-align: center;
    background-color: ${props => props.playing ? colors.gray : props.theme.button_bg};
    width: calc(50% - 16px);
    cursor: ${props => props.playing ? 'default' : 'pointer'};
    border: none;
    font-family: inherit;
    &:hover {
        box-shadow: ${props => props.playing ? 'unset' : box_shadows.button};
    }
`;

const ButtonLabel = styled.span`
    font-size: ${font_sizes.button};
    color: ${colors.white};
    font-family: inherit;
    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const ActionButton = (props) => {
    const { is_play_button, label, onClick, is_playing } = props;
    const playing = is_playing && is_play_button;
    const { theme } = React.useContext(ThemeContext);

    return (
        <ButtonContainer theme={theme} onClick={onClick} playing={playing}>
            <ButtonLabel>{label}</ButtonLabel>
        </ButtonContainer>
    )
}

export default ActionButton;