import styled from "styled-components"

const CommentCardStyle = styled.div`
  text-align: start;
  width: 100%;
  .poster {
  }

  .comment {
    border-radius: 10px;
    background-color:#E0E4E7;
    padding: 1rem;
    margin-bottom: 0.5rem;
  }
`;

export default function CommentCard ({comment}) {
  console.log(comment);
  const {content, commentPostersName} = comment
  return (
    <>
      <CommentCardStyle>
          <div className="poster">{commentPostersName}</div>
          <div className="comment">{content}</div>
      </CommentCardStyle>
    </>
  )
}