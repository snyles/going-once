import styled from "styled-components";

const ToggleDiv = styled.div`
display: flex;
justify-content: center;
width: 30%;
margin: 0 auto 2rem auto;
span {
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #333;
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  background: lightblue;
}
span:hover {
  background: #ccc;
}
span:first-child {
  border-right: none;
  border-radius: 1rem 0 0 1rem;
}
span:last-child {
  border-radius: 0 1rem 1rem 0;
}
.active {
  background: pink;
}
`;

export default function MapFeedToogle({display, setDisplay}) {
  return (
    <ToggleDiv>
      <span 
        className={display === 'map' ? 'active' : undefined} 
        onClick={() => setDisplay('map')}
      >
        Map
      </span>
      <span 
        onClick={() => setDisplay('feed')}
        className={display === 'feed' ? 'active' : undefined} 
      >
        Feed
      </span>
    </ToggleDiv>
  )
}