import { useContext, useEffect, useState } from "react";
import LocationPicker from "../components/LocationPicker";
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
    category: "",
    // city: "",
    // owner: "",
  });

  const [pickerCoords, setPickerCoords] = useState(locData.location.coords)
  const [finalCoords, setFinalCoords] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      ...inputs,
      city: locData.location.name,
      lat: finalCoords.lat,
      lng: finalCoords.lng,
    }
    console.log(postData);
  }

  const addressChange = (coords) => {
    setPickerCoords(coords)
    setFinalCoords(coords)
  }

  return (
    <Page>
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
          <p>Adjust the map marker to set the item's exact location</p>
          <LocationPicker 
            startingCoords={pickerCoords} 
            setFinalCoords={setFinalCoords}
            />
        </ColTwo>
      </TwoCols>
    </Page>
  )
}