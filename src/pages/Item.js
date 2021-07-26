import { useEffect, useState } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import Page from "../components/Page";
import { ColOne, ColTwo, TwoCols } from "../components/Styles/TwoCols";
import * as itemService from '../services/itemService'
import ItemMap from '../components/ItemMap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components'

const PageNav = styled.div`
  text-align: left;
  font-size: 2rem;
`;
export default function ItemPage() {
  const {id} = useParams();
  const [itemData, setItemData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchItem = async (id) => {
      const result = await itemService.getItemsById(id);
      (result.title) ? setItemData(result) : setError("Item not found!")
    }
    if (id) fetchItem(id)
  }, [id])

  if (!id) return <Redirect to="/items" />
  return (
    <Page>
      <PageNav>
        <Link to="/items">
          <ArrowBackIcon /> All Items
        </Link>
      </PageNav>
      {error && <p>{error}</p>}
      <TwoCols>
        <ColOne>
          <h1>{itemData?.title}</h1>
          <p>{itemData?.description}</p>
          <p>{itemData?.condition}</p>
          <p>{itemData?.category}</p>
          <p>{itemData?.lat}</p>
          <p>{itemData?.lng}</p>
        </ColOne>
        <ColTwo>
          {itemData?.lat && itemData?.lng && 
            <>
              <p>Item Location</p>
              <ItemMap coords={{
                lat: itemData.lat,
                lng: itemData.lng,
              }}/>
            </>
          }
        </ColTwo>
      </TwoCols>

    </Page>
  )


}