import "../Tourscard/ToursCard.css"
import { useState } from "react"

const TourCard = (props) => {
    const [readMore, setReadMore] = useState(false)
     


    const handletoggle = () => {
        setReadMore(!readMore)      
    }
    const handleDelete = (id) => {
        props.setData((prevData) => {
            return prevData.filter((tour) => tour.id !== id)   }) }
  return(
    <div>
        <div className='card'>
            <div>
                <div className="img-card">
                <img src={props.image} alt="cards" className='img'/>
                    <div className="price-tag">${props.price}</div>
                </div>
                <h2 className='head'>{props.name}</h2>
                <p className='bio'>{props.info.length > 200 ? (readMore ? props.info : `${props.info.substring(0, 200)}...`) : props.info}
                    <span className='read' onClick={() => handletoggle()}>{readMore ? "Readless" : "Readmore"}</span>   
                </p> 
                <button className='btn' onClick={()=>{handleDelete(props.id)}}>Not Interested</button>
            </div>
        </div>
    </div>
  )
}

export default TourCard