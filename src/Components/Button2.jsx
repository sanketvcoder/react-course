import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '.'
const ButtonComp = () => {
    const {theme ,settheme} = useContext(GlobalContext)
    return (
        <Button onClick={()=> settheme(theme ==='light'? 'dark':'light')}>Click Here</Button>  // Use the styled component
    );
};

export { ButtonComp };

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
