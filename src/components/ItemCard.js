import styled from 'styled-components'

const ItemCardStyles = styled.div`
    margin: auto;
`


export default function ItemCard (props) {
    const { title, picture, description, condition } = props
    return (
        <>
            <ItemCardStyles >
                <div className="title" >{title}</div>
                <div className="picture" >{picture}</div>
                <div className="description" >{description}</div>
                <div className="condition" >{condition}</div>
            </ItemCardStyles>
        </>
    )
}