import CommentCard from "./CommentCard";
import styled from "styled-components"

const CommentMapStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  max-width: 300px;
  margin: 3rem auto 0 auto;
  .p {
    border-radius: 10px;
    background-color:#E0E4E7;
    padding: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
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
        <p className="p">No Comments Yet!</p>
        }
      </CommentMapStyle>
    </>
  )
}