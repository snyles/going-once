import CommentCard from "./CommentCard";
import styled from "styled-components"

const CommentMapStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 768px;
  margin: 3rem auto 0 auto;
`;

export default function CommentMap ({comments}) {
  console.log(comments)
  return (
    <>
      <CommentMapStyle>
        {comments?.length ? 
        comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        )) :
        <p>No Comments Yet!</p>
        }
      </CommentMapStyle>
    </>
  )
}