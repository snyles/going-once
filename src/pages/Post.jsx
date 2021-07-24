import Page from "../components/Page"
import { StyledForm } from "../components/Styles/Form"
// import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import useForm from "../lib/useForm"
import {TwoCols , ColOne, ColTwo} from "../components/Styles/TwoCols";

export default function Post() {
  const {inputs, handleChange, resetForm } = useForm({
    title: "",
    condition: "",
    description: "",

    // city: "",
    // owner: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Page>
      <h1>Post a New Item</h1>
      <TwoCols>
        <ColOne>
          <StyledForm autoComplete="off" onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="title">Title</label>
              <input 
                type="text"
                name="title"
                required
                value={inputs.title}
                onChange={handleChange}
              
              />
              <label htmlFor="description">Description</label>
              <textarea 
                name="description"
                value={inputs.description}
                onChange={handleChange}

              />
              <label htmlFor="address">Address</label>
              <input 
                type="text"
                name="address"
                required
                value={inputs.address}
                onChange={handleChange}
              />
              <label htmlFor="condition">Condition</label>
              <input 
                type="text"
                name="condition"
                value={inputs.condition}
                onChange={handleChange}
              />
            </fieldset>
            <button type="submit" >Post Item</button>
          </StyledForm>
        </ColOne>
        <ColTwo>

        </ColTwo>
      </TwoCols>
    </Page>
  )
}