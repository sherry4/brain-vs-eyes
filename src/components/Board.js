import * as React from 'react';
import styled from 'styled-components';

import variables from '../variables/variables';
import BoardItem from './BoardItem';
import { ThemeContext } from '../theme/Themes';

const { box_shadows, border_radius, margins } = variables;

const BoardContainer = styled.div`
    background-color: ${props => props.theme.board_bg};
    width: 100%;
    height: fit-content;
    box-shadow: ${box_shadows.board};
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(7, 1fr);
    border-radius: ${border_radius.board};
    margin-top: ${margins.top};
`;

const Board = (props) => {
    const { board_data } = props;
    const { theme } = React.useContext(ThemeContext);

    return (
        <BoardContainer theme={theme}>
            {board_data?.map((i, idx) => <BoardItem key={idx} color={i.color} value={i.value} />)}
        </BoardContainer>
    )
}

export default Board;