import React from 'react';
import CardStyled from './Card.styled.js';
import { useNavigate } from 'react-router-dom';


function Card({ book }) {
    const navigate = useNavigate();
    

    function handleClick(){
        navigate(`/Page2/${book.id}`);
    }


    return (
        <CardStyled.Container onClick={handleClick}>
            <CardStyled.Image src={book.pic} alt={book.name} />
            <div>
                <CardStyled.Title>{book.name}</CardStyled.Title>
                <CardStyled.Text>{book.description}</CardStyled.Text>
            </div>
        </CardStyled.Container>
    );
}

export default Card;