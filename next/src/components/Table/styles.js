import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Element = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 2px solid black;
    padding: 4px;
    background: #1f9999;
`;

export const BreakPoint = styled.p`
    display: flex;
`;

export const FulltTable = styled.p`
    display: flex;
    flex-direction: column;
    max-width: 672px;
    border: 2px solid black;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    h1{
        margin-top: 50px;
        font-weight: 500;
    }
    div{
        display: flex;
    }
`;

export const UserInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
