import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    border:none;
    background-color: rgb(0, 113, 128);
    color: white;
    padding: 10px; 
    border-radius: 15px;
    margin-bottom: 20px;
    margin-top: 20px;

    &:hover {
        background-color: #7dd30c;
    }

    &:active {
        background-color: hsl(98, 95%, 47%);
    }    
`;

export const Field = styled.input`
    border: 2px solid rgb(204, 204, 204);
    padding: 10px;
    width: 100%;
    max-width: 250px;
    border-radius: 15px;
    border-color: black;
    margin-bottom: 5px;

    &:required{
        border-color: rgb(0, 47, 255);
        background-color: rgba(250, 246, 246, 0.705);
    }
    
    &:valid{
        background-color: #6bf36b;
    }
`;

export const Disclaimer = styled.p`
    text-align: center;
    font-size: small;
`;

export const LabelElement = styled.span`
    max-width: 300px;
    width: 100%;
    display:inline-block;
    margin-right: 15px;
    padding: 10px;
    margin-bottom: 5px;
`;

export const Fieldset = styled.fieldset`
    background-color: rgba(245, 245, 220, 0.842);
    border: 3px solid black;
    padding: 30px;
    border-radius: 25px;
    margin: 30px; 
`
export const Legend = styled.legend`
    background-color: tomato;
    color: black;
    border-radius: 15px;
    padding: 10px;
`;