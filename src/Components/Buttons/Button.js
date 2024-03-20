import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonStyled from './Button.styled';

function Button(){

    const navigate = useNavigate();

    function handle(){
        navigate("/");
    }

    return (

        <ButtonStyled.Container onClick={handle}>
           <ButtonStyled.Text>Go back</ButtonStyled.Text> 
        </ButtonStyled.Container>

    )

}

export default Button;