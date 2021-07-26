import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import styled from "styled-components";
import AutoCompleteInput from "./AutoCompleteInput";

const LocationBox= styled.div`
  max-width: max-content;
  text-align: center;
  background-color: rgba(255,255,255,0.8);
  border-radius: 2rem;
  padding: 3rem 4rem;
  h1 {
    font-size: 3rem;
    margin: 0.5rem 0 1rem 0;
  }
  div {
    display: flex;
    justify-content: center;
    input {
      font-size: 2rem;
    }
    button {
      font-size: 2rem;
    }
  }
`;

export default function SplashLocation({location}) {
  const history = useHistory();

  return (
    <LocationBox>
      <h1>What's your Nearest City?</h1>
      <div>
        <AutoCompleteInput
          location={location}
          type="cities"
        />
        <Button
          onClick={() => {
            history.push('/items')
          }}
        >
          Go
        </Button>
      </div>
    </LocationBox>
  );
}