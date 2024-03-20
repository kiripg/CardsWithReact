import React from 'react';
import books from '../Components/Data/Data.js';
import { useParams } from 'react-router-dom';
import Button from './../Components/Buttons/Button.js'
import Page2Styled from './Page2.styled.js';

function Page2() {

    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id))



    return (
        <><Page2Styled.Container>
            <Page2Styled.Cuadro>
                <Page2Styled.Title>
                    {book.name}
                </Page2Styled.Title>
                <Page2Styled.Text>{book.description}</Page2Styled.Text>
            </Page2Styled.Cuadro>
                <Page2Styled.Guarda>
                <Page2Styled.Picture src={book.pic} alt={book.name} className='pic' />
                </Page2Styled.Guarda>
                <Button />
        </Page2Styled.Container>
            

        </>
    );
}

export default Page2;