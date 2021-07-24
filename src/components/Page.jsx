import NavBar from "./NavBar"
import styled from 'styled-components'

const PageStyles = styled.main`
  margin: 2rem auto 0 auto;
  width: 80%;
  max-width: 1000px;

  @media (max-width: 992px) {
    max-width: 768px;
  }
`;

export default function Page({children}) {
  return (
    <>
      <NavBar />
      <PageStyles>
        {children}
      </PageStyles>
    </>
  )
}