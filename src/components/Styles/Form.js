import styled from 'styled-components'

export const StyledForm = styled.form`
  max-width: 768px;
  width: 100%;
  margin: 0 auto; 
  font-size: 2rem;
  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
  }
  button {
    font-size: 1.5rem;
    padding: 1rem;
  }
  input {
    font-size: 2rem;
    margin-bottom: 2rem;
    width: 80%;
    padding: 0.5rem;
    max-width: 260px;
  }
  label {
    font-size: 2rem;
  }
  textarea {
    width: 80%;
    max-width: 260px;
    min-height: 100px;
    font-size: 1.5rem;
  }

`;