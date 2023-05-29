import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: #000000;
  padding: 5px 20px;
  margin-left: 25px;
  border: 1px solid #000000;
  border-radius: 3px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25);
  width: 130px;

  &:active {
    background-color: #1b8bcd;
    color: #ffffff;
    border: none;
  }
`;
