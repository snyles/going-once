import useForm from "../lib/useForm";
import { StyledForm } from "./Styles/Form"

export default function CommentForm({postComment}) {
    const {inputs, handleChange } = useForm({
        comment: "",
      })
    return (
      <StyledForm autoComplete="off" onSubmit={(e)=> e.preventDefault()}>
        <fieldset>
          <label htmlFor="commet">Comment</label>
          <textarea
            name="comment"
            required
            value={inputs.comment}
            onChange={handleChange}
          />
        </fieldset>
        <button type="button" onClick={() => {postComment(inputs.comment)}}>Post Comment</button>
      </StyledForm>
    )
}