import Page from "../components/Page"
import { StyledForm } from "../components/Styles/Form"
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import useForm from "../lib/useForm"

export default function Post() {
  const {inputs, handleChange, resetForm } = useForm({
    title: "",
    condition: "",
    city: "",
    owner: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Page>
      <h1>Post a New Item</h1>
      <StyledForm autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
          required
          value={inputs.title}
          onChange={handleChange}
          label="Post Title"
          variant="filled"
        />
        <TextField 
          required
          value={inputs.address}
          onChange={handleChange}
          label="Address"
          variant="filled"
        />
        <TextField 
            required
            value={inputs.condition}
            onChange={handleChange}
            label="Condition"
            variant="filled"
        />
        <TextField 
          required
          value={inputs.condition}
          onChange={handleChange}
          label="Condition"
          variant="filled"
        />


      </StyledForm>
    </Page>
  )
}