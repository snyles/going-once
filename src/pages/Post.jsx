import { useContext, useEffect, useState } from "react";
import GetCurrentLocation from "../components/GetCurrentLocation";
import Page from "../components/Page"
import PostForm from "../components/PostForm";
import {TwoCols , ColOne, ColTwo} from "../components/Styles/TwoCols";
import { LocationContext } from "../lib/LocationContext";
import useForm from "../lib/useForm";

export default function Post() {
  const locData = useContext(LocationContext)
  const {inputs, handleChange, resetForm } = useForm({
    title: "",
    condition: "",
    description: "",
    address: "",
    // city: "",
    // owner: "",
  });

  const [pickerCoords, setPickerCoords] = useState({
    lat: null,
    lng: null,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
  }

  const addressChange = (coords) => {
    console.log(coords)
    setPickerCoords(coords)
  }

  return (
    <Page>
      {!locData.location.name && <GetCurrentLocation />}
      <h1>Post a New Item in {locData.location.name}</h1>
      <TwoCols>
        <ColOne>
          <PostForm 
            inputs={inputs}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            handleChange={handleChange}
            addressChange={addressChange}
            locData={locData}
          />
        </ColOne>
        <ColTwo>

        </ColTwo>
      </TwoCols>
    </Page>
  )
}