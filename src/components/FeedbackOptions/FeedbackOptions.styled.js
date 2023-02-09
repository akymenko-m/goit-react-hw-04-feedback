import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  /* margin-bottom: 40px; */
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  width: 80px;
  padding: 10px;
  background-color: lightblue;
  border: solid 1px darkblue;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: 16px;
  font-weight: 600;
  color: darkblue;
  cursor: pointer;
  :hover {
    border-color: yellow;
  }
`;
