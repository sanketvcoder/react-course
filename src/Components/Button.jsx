import React from 'react';
import styled from 'styled-components';

const ButtonComponent = ({ apiCall }) => {
    return (
        <Button onClick={apiCall}>Click Here</Button>  // Use the styled component
    );
};

export { ButtonComponent };

const Button = styled.button`
    border: 2px solid black;
    padding: 7px;
    border-radius: 7px;
    &:hover {
        background-color: black;
        color: white;
    }
    cursor: pointer;
`;
