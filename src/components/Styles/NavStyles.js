import styled from 'styled-components'

export const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background: var(--offWhite);
  /* border-bottom: solid 1px var(--lightmint); */
  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 80%;
    max-width: 768px;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    font-size: 2rem;
  }
  li a {
    display: flex;
    align-items: center;
  }
  li:hover{
    background: var(--lightmint);
  }
  li:last-child {
    margin-left: auto;
  }
  li:first-child {
    margin-right: auto;
  }
  a {
    color: var(--black)
  }
  a:hover {
    text-decoration: none;
  }
  a.active {
    border-bottom: solid 2px var(--mint)
  }
  .icon {
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0.5rem;
  }
  .logo {
    font-size: 2.5rem;
    font-family: "UniNeue-HeavyItalic"
  }
`;