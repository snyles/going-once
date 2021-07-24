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
    width: 80%;
    padding: 0.5rem;
    max-width: 300px;
  }
  label {
    font-size: 2rem;
  }
  textarea {
    width: 80%;
    max-width: 300px;
    min-height: 200px;
    font-size: 1.5rem;
  }
  input, textarea, select, button {
    margin-bottom: 2rem;
  }
  option, select {
    padding: 1rem;
    font-size: 1.5rem;
    min-width: 200px;
  }
  button {
    margin-right: 1rem;
  }

`;