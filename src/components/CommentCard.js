import styled from "styled-components"

const CommentCardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  max-width: 768px;
  margin: 3rem auto 0 auto;
`;

export default function CommentCard ({comment}) {
  console.log(comment);
  const {content, commentPostersName} = comment
  return (
    <>
      <CommentCardStyle>
        {content} {commentPostersName}
      </CommentCardStyle>
    </>
  )
}