import { useEffect, useState } from "react"
import styled from "styled-components";
import Checkbox from '@material-ui/core/Checkbox';

const ItemFilterDiv = styled.div`
  margin: 0 auto 2rem auto;
  /* border-top: solid 1px #ccc; */
  border-bottom: solid 1px #ccc;
  max-width: var(--maxWidth);
  /* &>* { border: solid 1px red } */
  h2 {
    margin: 0rem 0 2rem 0;
  }
  &>div.categories {
    display: flex;
    justify-content: flex-start;
    width: max-content;
    max-width: var(--maxWidth);
    margin: 0 auto;
    overflow-x: scroll;
    @media (max-width: 768px) {
      max-width: 95%;
    }
  }
  label {
    display: flex;
    margin: 0 1rem 0 0;
    padding: 2rem 0 1rem 0;
    font-size: 2rem;
    cursor: pointer;
    white-space: nowrap;
  }
  .selectAllNone {
    padding: 2rem 0;
    display: inline;
    span {
      cursor: pointer;
      margin-right: 1rem;
      background: #ccc;
      padding: 1rem;
      border-radius: 0.5rem;
    }
    span:hover {
      background: #ddd;
    }
  }
`;

export default function ItemCategoryFilter ({items, setFiltered}) {
  const [categories, setCategories] = useState([]) 
  const [selected, setSelected] = useState([])

  useEffect(() => {
    const cats = [...new Set(items.map(item => item.category))]
    setCategories(cats)
    setSelected(cats)
  },[items])

  useEffect(() => {
    const filtered = items.filter(item => selected.includes(item.category))
    setFiltered(filtered)
  },[selected, setFiltered, items])

  const toggleCategory = (cat) => {
    selected.includes(cat) ? 
      setSelected(selected.filter(c => c !== cat)) :
      setSelected([...selected, cat]);
  }

  const selectAll = () => {
    setSelected(categories)
  }
  const selectNone = () => {
    setSelected([])
  }

  if (!items.length) return (<></>)
  return (
    <>
      <ItemFilterDiv>
        <h2>Filter by Category</h2>
        <div className="selectAllNone">
          <span onClick={selectAll}>All</span>
          <span onClick={selectNone}>None</span>
        </div>
        <div className="categories">
        { categories.length && categories.map((cat,index) => (
          <label htmlFor={`cat-${cat}`} key={index}>{cat}
            <Checkbox
              id={`cat-${cat}`} 
              onClick={() => {toggleCategory(cat)}}
              checked={!!selected.includes(cat)}
            />
          </label>
        )) }
        </div>
      </ItemFilterDiv>
    </>
  )
}
