import * as React from 'react';
import styled from 'styled-components';

import variables from '../variables/variables';
import { ThemeContext } from '../theme/Themes';

const { colors, box_shadows, border_radius } = variables;

const icons = {
    dark: require('../images/dark.png').default,
    light: require('../images/light.png').default,
}

const Container = styled.div`
    position: relative;
    cursor: pointer;
    user-select: none;
    outline: none;
    &:focus .toggler-thumb {
        box-shadow: ${box_shadows.button};
    };
`;

const TogglerTrack = styled.div`
    width: 50px;
    height: 24px;
    border-radius: ${border_radius.toggler};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 4px;
    background-color: ${colors.black};
`;

const TogglerThumb = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: ${colors.white};
    position: absolute;
    top: -3px;
    left: -3px;
    transform: translateX(${props => props.theme.translateX});
    transition: all .5s cubic-bezier(.23,1,.32,1) 0ms;
    outline: none;
`;

const ImageViewer = styled.div`
    width: 17px;
    height: 17px;
`;

const Image = styled.img`
    width: ${props => props.is_dark ? '90' : '100'}%;
`;

const Toggler = (props) => {
    const { toggle_theme } = props;
    const { theme } = React.useContext(ThemeContext);

    const handle_focus = (e) => {
        const thumb = document.getElementById('toggler-thumb');
        thumb.style.boxShadow = box_shadows.toggler;
    };

    const handle_blur = (e) => {
        const thumb = document.getElementById('toggler-thumb');
        thumb.style.boxShadow = 'none';
    };

    const handle_keydown = (e) => {
        if (e.code === 'Space') {
            toggle_theme();
        }
    };

    return (
        <Container onClick={toggle_theme} tabIndex={0} onFocus={handle_focus} onBlur={handle_blur} onKeyDown={handle_keydown}>
            <TogglerTrack>
                <ImageViewer>
                    <Image src={icons.dark} is_dark={true} />
                </ImageViewer>
                <ImageViewer>
                    <Image src={icons.light} />
                </ImageViewer>
            </TogglerTrack>
            <TogglerThumb id="toggler-thumb" theme={theme} />
        </Container>
    )
}

export default Toggler;