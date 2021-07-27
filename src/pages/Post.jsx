import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import LocationPicker from "../components/LocationPicker";
import Page from "../components/Page"
import PostForm from "../components/PostForm";
import {TwoCols , ColOne, ColTwo} from "../components/Styles/TwoCols";
import { LocationContext } from "../lib/LocationContext";
import useForm from "../lib/useForm";
import { UserContext } from "../lib/UserContext";
import * as itemService from "../services/itemService"

export default function Post() {
  const user = useContext(UserContext)
  const locData = useContext(LocationContext)
  const history = useHistory();
  const {inputs, handleChange, resetForm } = useForm({
    title: "",
    condition: "",
    description: "",
    address: "",
    category: "",
    image: "",
  });

  const [pickerCoords, setPickerCoords] = useState(locData.location.coords)
  const [finalCoords, setFinalCoords] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      ...inputs,
      city: locData.location.name,
      lat: finalCoords.lat,
      lng: finalCoords.lng,
      owner: user._id
    }
    if (postData.image) {
      const imgData = await uploadImage()
      console.log("imgData", imgData)
      postData.picture = imgData.secure_url;
    }
    const post = await itemService.postItem(postData)
    history.push(`/item/${post._id}`)

  }

  const uploadImage = async () => {
    const data = new FormData()
    data.append("file", inputs.image)
    data.append("upload_preset", "f6qcny15")
    data.append("cloud_name", "dndtrmv6u")

    return fetch("https://api.cloudinary.com/v1_1/dndtrmv6u/image/upload",{
      method: "post",
      body: data,
    })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
  }

  useEffect(()=> {
    setPickerCoords(locData.location.coords)
  },[locData])

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