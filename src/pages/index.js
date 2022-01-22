import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import variables from '../variables/variables';
import './styles.scss';

import Board from '../components/Board';
import ActionZone from '../components/ActionsZone';
import ActionButton from '../components/ActionButton';
import Countdown from '../components/Countdown';
import Toolbar from '../components/Toolbar';
import { ThemeContext, themes, languages } from '../theme/Themes';
import Toggler from '../components/Toggler';
import LanguageButton from '../components/LanguageButton';

const { font_sizes, font_weights, game_colors } = variables;

// styles
const Main = styled.div`
    background-color: ${props => props.theme.background};
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
`;

const Container = styled.div`
    width: 550px;
    flex: 1;
    margin: auto;
    padding: 32px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 650px) {
        width: calc(100% - 64px);
    }
`;

const Title = styled.span`
    font-size: ${font_sizes.title};
    font-weight: ${font_weights.bold};
    color: ${props => props.theme.color};
    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const game_color_list = Object.keys(game_colors).map((key) => key);

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

const generate_board_data = () => (
    Array.from({ length: 35 }).map(() => {
        const random_index = getRandomInt(0, 5);
        const random_color = game_color_list[random_index];

        const extracted_color_list = game_color_list.filter((i) => i !== random_color); // new color list without the chosen color name
        const false_color_index = getRandomInt(0, 4); // index of the false color
        const false_color = extracted_color_list[false_color_index];
        const false_color_obj = game_colors[false_color];

        return { value: random_color, color: false_color_obj.value };
    })
);

const IndexPage = () => {
    const [is_playing, set_is_playing] = useState(false);
    const [remaining, set_remaining] = useState(20);
    const [theme, set_theme] = useState({});
    const [language, set_language] = useState({});
    const [board_data, set_board_data] = useState(generate_board_data());

    const timeout = useRef(null);

    useEffect(() => {
        let init_theme = null;
        let init_language = null;
        if (typeof window !== 'undefined') {
            init_theme = window.localStorage.getItem('theme');
            init_language = window.localStorage.getItem('language');
        };
        set_theme(themes[init_theme || 'light']);
        set_language(languages[init_language || 'en']);
        document.getElementsByTagName('BODY')[0].classList.toggle(init_theme);
    }, []);

    useEffect(() => {
        if (is_playing) {
            timeout.current = setInterval(() => {
                set_remaining(remaining => remaining - 1);
            }, 1000);
        } else {
            set_remaining(20);
        };
        return () => { clearInterval(timeout.current); }
    }, [is_playing]);

    useEffect(() => {
        if (remaining === 0) {
            clearInterval(timeout.current);
            set_is_playing(false);
        }
    }, [remaining]);

    const onClick = (type) => {
        switch (type) {
            case 'play':
                set_is_playing(true);
                break;
            case 'reset':
                set_remaining(20);
                set_is_playing(false);
                set_board_data(generate_board_data(language));
                break;
            case 'toggle_theme': {
                const new_theme = theme === themes.light ? themes.dark : themes.light;
                document.getElementsByTagName('BODY')[0].classList.replace(theme.name, new_theme.name);
                set_theme(new_theme);
                window.localStorage.setItem('theme', new_theme.name);
            } break;
            case 'change_language': {
                const new_language = language === languages.en ? languages.vi : languages.en;
                set_language(new_language);
                window.localStorage.setItem('language', new_language.name);
            } break;
            default: break;
        }
    };

    const buttons = [
        { label: language.play, onClick: () => onClick('play'), is_play_button: true },
        { label: language.reset, onClick: () => onClick('reset') },
    ];

    return (
        <div>
            {!!language.name && !!theme.name
                &&
                <Main theme={theme}>
                    <ThemeContext.Provider value={{ theme, language }}>
                        <Toolbar>
                            <LanguageButton change_language={() => onClick('change_language')} />
                            <Toggler toggle_theme={() => onClick('toggle_theme')} />
                        </Toolbar>
                        <Container>
                            <Title theme={theme}>{language.title}</Title>
                            <Board board_data={board_data} />
                            <Countdown remaining={remaining} />
                            <ActionZone>
                                {buttons.map((b, idx) => <ActionButton key={idx} {...b} is_playing={is_playing} />)}
                            </ActionZone>
                        </Container>
                    </ThemeContext.Provider>
                </Main>
            }
        </div>
    )
}

export default IndexPage;
