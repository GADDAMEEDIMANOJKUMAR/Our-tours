import { useState, useEffect} from "react"
import TourCard from './Tourscard/TourCard'
import './App.css'


const App = () => {
  const [data, setData] = useState([])  

  const url = "https://www.course-api.com/react-tours-project"



  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setData(tours)
      
    } catch (error) {
      console.error("Error fetching tours:", error)
    }
  }
  useEffect(() => {
    fetchTours()
  }, [])  



  return (
    <div className="container">
      <h1>Welcome to Our Tours</h1>
      <div className='tour-card'>
        {data.map((tour) => (
          <TourCard key={tour.id} id ={tour.id} name={tour.name} info = {tour.info} image={tour.image} price = {tour.price} setData={setData}/>
        ))}
      </div>
       <div className="footer">
        
      {data.length === 0 && <h2 className="no-tours" >No Tours Left</h2>}
      {data.length > 0 ? <button className='btn' onClick={() => setData([])}>Remove All Tours</button> : <button className='btn' onClick={fetchTours}>Refresh Tours</button>}
      <h4 className='footer'>Created by ❤️ Manoj Kumar</h4>
        </div> 
    </div>
  )
}

export default App
