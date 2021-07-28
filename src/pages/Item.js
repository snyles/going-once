import { useContext, useEffect, useState } from "react";
import { Link, Redirect, useHistory, useParams } from "react-router-dom";
import Page from "../components/Page";
import { ColOne, ColTwo, TwoCols } from "../components/Styles/TwoCols";
import * as itemService from '../services/itemService'
import ItemMap from '../components/ItemMap'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styled from 'styled-components'
import { UserContext } from "../lib/UserContext";
import { Button } from "@material-ui/core";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import DeleteConfirm from '../components/DeleteConfirm'
import CommentForm from "../components/CommentForm";
import CommentMap from "../components/CommentMap";

const PageNav = styled.div`
  text-align: left;
  font-size: 2rem;
`;

const ImgDiv = styled.div`
  margin: 2rem auto;
  img {
    max-width: 768px;
    max-height: 400px;
    margin: 0 auto;
    border-radius: 0.5rem;
  }
`;

const ButtonDiv = styled.div`
  margin: 4rem auto;
  button {
    margin-right: 1rem;
  }
`;

export default function ItemPage() {
  const user = useContext(UserContext)
  const history = useHistory()
  const {id} = useParams();
  const [itemData, setItemData] = useState(null)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchItem = async (id) => {
      const result = await itemService.getItemsById(id);
      (result.title) ? setItemData(result) : setError("Item not found!")
    }
    if (id) fetchItem(id)
  }, [id])

  const deleteItem = async () => {
    if (itemData?.owner !== user._id) return
    await itemService.deleteItem(itemData?._id)
    history.push('/items')
  }

  const favoriteOrUnfavorite = async () => {
    try {
      const newItem = await itemService.addOrRemoveFavorite(itemData?._id)
      setItemData(newItem)
    } catch (err) {
      setError(err.message)
    }
  }

  const postComment = async (comment) => {
    if (!user) return
    const postData = {
      itemId: itemData?._id,
      comment: comment,
      commentPostersName: user.name,
      postedBy: user._id
    }
    const newItem = await itemService.postComment(postData)
    setItemData(newItem)
  }

  if (!id) return <Redirect to="/items" />
  return (
    <Page>
      <PageNav>
        <Link to="/items">
          <ArrowBackIcon /> All Items
        </Link>
      </PageNav>
      {error && <p>{error}</p>}
      {itemData?.title && <h1>{itemData.title}</h1>}
      {itemData?.picture && 
        <ImgDiv>
          <img src={itemData.picture} alt={itemData.title} />
        </ImgDiv>
      }
      <TwoCols>
        <ColOne>
          <h2>Details:</h2>
          { itemData?.description && 
            <p>
              <strong>Description: </strong>
              {itemData.description}
            </p> }
          { itemData?.condition && 
            <p>
              <strong>Condition: </strong>
              {itemData.condition}
            </p> }
          { itemData?.category && 
            <p>
              <strong>Category: </strong>
              {itemData.category}
            </p> }
            <ButtonDiv>
              {user && 
              <Button 
                variant="contained" 
                color={itemData?.favoritedBy.includes(user._id) ? 
                  "secondary" : "primary" }
                onClick={favoriteOrUnfavorite}
              >
                <FavoriteBorderOutlinedIcon fontSize="large" />
                {itemData?.favoritedBy.includes(user._id) ? 
                  'Unfavorite' : 'Favorite' }
              </Button>
              }
              {user?._id === itemData?.owner && 
                <Button 
                  variant="contained" 
                  color="secondary"
                  onClick={() => setIsOpen(true)}
                >
                  <DeleteOutlineIcon fontSize="large" />Delete
                </Button>
              }
            </ButtonDiv>
            <CommentMap comments={itemData?.comments}/>
            <CommentForm postComment={postComment} />
        </ColOne>
        <ColTwo>
          {itemData?.lat && itemData?.lng && 
            <>
              <h2>Location:</h2>
              <ItemMap coords={{
                lat: itemData.lat,
                lng: itemData.lng,
              }}/>
            </>
          }
        </ColTwo>
      </TwoCols>
      <DeleteConfirm isOpen={isOpen} setIsOpen={setIsOpen} deleteItem={deleteItem} />
    </Page>
  )
}
