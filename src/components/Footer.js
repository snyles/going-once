import styled from "styled-components"
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterStyles = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.5rem;
  padding: 1rem 0;
`;

export default function Footer () {
  return (
    <FooterStyles>
       Copyright&copy; 2021&nbsp;
       <a href="https://github.com/SummerSquads-blue/going-once" target="_blank" rel="noreferrer" >
       <GitHubIcon /> SummerSquads Blue Team 
        </a>
    </FooterStyles>
  )
}