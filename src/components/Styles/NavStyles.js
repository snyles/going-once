import styled from 'styled-components'

export const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  background: var(--offWhite);
  /* border-bottom: solid 1px var(--lightmint); */
  & > div:first-child {
    display: grid;
    grid-template-areas: 
      "logo links auth";
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 80%;
    max-width: var(--maxWidth);
    /* background: blue; */
    @media (max-width: 768px) {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "logo auth"
        "links links";
      a {
        height: 5rem;
      }
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 1rem 0 1rem;
    font-size: 2rem;
    color: var(--black);
    height: 7rem;
    margin: 1rem 0;
  }
  a:hover{
    background: var(--lightmint);
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
    font-family: "UniNeue-HeavyItalic";
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: 3rem;
    }
  }
  .auth {
    grid-area: auth;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links {
    grid-area: links;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background: red; */
  }
`;