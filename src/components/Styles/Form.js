import styled from 'styled-components'

export const StyledForm = styled.form`
  max-width: 768px;
  width: 80%;
  margin: 0 auto; 
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;;
  &>*{
    width: 60%;
    margin: 3rem auto;
  }
  input, button {
    font-size: 2rem;
  }
  label {
    font-size: 1.5rem;
  }
`;