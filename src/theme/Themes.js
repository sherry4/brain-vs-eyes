import * as React from 'react';
import variables from '../variables/variables';

const { colors } = variables;

export const themes = {
    dark: {
        name: 'dark',
        background: colors.dark_bg,
        translateX: '27px',
        color: colors.white,
        board_bg: colors.snow,
        button_bg: colors.dark_pink,
        toolbar_button: colors.toolbar_button_dark,
    },
    light: {
        name: 'light',
        background: colors.light_bg,
        translateX: '0px',
        color: colors.black,
        board_bg: colors.white,
        button_bg: colors.violet,
        toolbar_button: colors.toolbar_button_light,
    },
}

export const languages = {
    en: {
        name: 'en',
        title: 'Brain vs Eyes',
        remaining: 'Remaining',
        second: 'second',
        play: 'play',
        reset: 'reset',
        red: 'red',
        green: 'green',
        blue: 'blue',
        black: 'black',
        yellow: 'yellow',
    },
    vi: {
        name: 'vi',
        title: 'Não vs Mắt',
        remaining: 'Còn lại',
        second: 'giây',
        play: 'bắt đầu',
        reset: 'chơi lại',
        red: 'đỏ',
        blue: 'lam',
        green: 'lục',
        black: 'đen',
        yellow: 'vàng',
    },
};

export const ThemeContext = React.createContext();