import * as React from 'react';
import styled from 'styled-components';

import variables from '../variables/variables';

const { colors } = variables;

const ToolbarContainer = styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    padding : 0px 16px;
`;

const Toolbar = (props) => {
    const { children } = props;
    return (
        <ToolbarContainer>
            {children}
        </ToolbarContainer>
    )
}

export default Toolbar;