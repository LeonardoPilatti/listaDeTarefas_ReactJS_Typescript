import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  border: 1px solid #555;
  padding: 10px;
  margin: 20px 0;

  div {
    cursor: pointer;
  }
  
  input {
    flex: 1;
    border: 0px;
    background: transparent;
    outline: 0; /// para não ter animação ao redor dele;
    color: #fff;
    font-size: 18px;
  }
`;
