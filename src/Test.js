import style from "styled-components";


export const Test = style.div`
    background-color:#242526;
    height: 180px;
    width:51px;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 0 3px 1px black inset;
    border-radius:30px;
    margin:20px 60px;
    border:3px solid black;
    transition:0.25s;

    &:hover {
        transform:scale(1.05);
        cursor:pointer;
        transition:0.25s;
    }
    
    `;

export const Inner = style.div`

    width:51px;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 0 3px 1px black;
    border-radius:30px;

`;
