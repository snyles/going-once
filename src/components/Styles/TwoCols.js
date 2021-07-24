import styled from 'styled-components'

export const TwoCols = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2rem;
  /* background: green; */
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ColOne = styled.div`
  width: 50%;
  /* background: blue; */
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ColTwo = styled.div`
  width: 50%;
  /* background: red; */
  @media (max-width: 992px) {
    width: 100%;
  }
`;
