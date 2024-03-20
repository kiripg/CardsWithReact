import React from 'react';
import Card from './../Components/Cards/Card.js';
import  books from '../Components/Data/Data.js';
import './MyApp.css';
import MyAppStyled from './MyApp.styled.js';



function MyApp(){

    return(
        <MyAppStyled.Container>
            {books.map((book)=> (
                <Card key={book.id} book={book}/>
            ))}
        </MyAppStyled.Container>
    )


}

export default MyApp;