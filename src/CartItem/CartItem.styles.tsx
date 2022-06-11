import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding-bottom: 20px
    
    div {
        flex: 1;
    };

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    .information p:first-child {
        margin-right: 20px;
    }

    img{
        max-width: 80px;
        object-fit: cover;
        margin-left: 40px;
    }
`;