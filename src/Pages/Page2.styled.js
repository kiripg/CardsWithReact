import styled from '@emotion/styled';


export const Page2Styled={

    Container: styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
    backgroud: beige;

    `,
    Title: styled.h4`
    font-size: 1.7rem;
    font-weight: 700;
    
    `,
    Text: styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    
    `,
    Picture: styled.img`
    max-width: 100%;
    margin: 15px;
    border-radius: 0.5rem;
    
    `,
    Guarda: styled.div`
        max-width: 200px;
        max-height: 300px;
        display: flex;
        align-items: center;
        justify-items: center;

    `,
    Cuadro: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin: 3ch;
    `,


};

export default Page2Styled;