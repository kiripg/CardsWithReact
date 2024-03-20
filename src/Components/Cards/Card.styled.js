import styled from '@emotion/styled';

export const CardStyled={
    Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(#22c1c3, #2d44fd);
    border-radius: 6rem;
    border: 2px solid SkyBlue;
    padding: 1.2rem;
    width: 25rem;
    height: 15rem;
    
    `,
    Title: styled.h4`
    color: beige;
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0;

`,
    Text: styled.p`
    color: beige;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0; 
    `,

    Image: styled.img`
        height: 15rem;
        width: 10rem;
        border-radius: 3rem; 
        display: inline-block;
        vertical-align: middle;
        margin-right: 1rem;
        border: 1px solid skyblue;
    `

}

export default CardStyled;