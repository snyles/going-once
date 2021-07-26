import ItemCard from "./ItemCard";
import styled from "styled-components"

const ItemFeedStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

export default function ItemFeed({items}) {

  return (
    <>
      <h1>Item Feed</h1>
      <ItemFeedStyle>
        {items.map((item) => (
          <ItemCard item={item} />
        ))}
      </ItemFeedStyle>
    </>
  )
}