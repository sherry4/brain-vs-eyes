import * as React from 'react';
import styled from 'styled-components';
import variables from '../variables/variables';

const { margins } = variables;

const ActionContainer = styled.div`
    margin-top: ${margins.top};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const ActionZone = (props) => {
    const { children } = props;
    return (
        <ActionContainer>
            {children}
        </ActionContainer>
    )
}

export default ActionZone;