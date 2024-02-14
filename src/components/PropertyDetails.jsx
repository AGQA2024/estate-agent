// imports

import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchProperty } from "../api/api"
import Booking from './Booking'

function PropertyDetails() {
    const {property_id}=useParams()
    const [isLoading,setIsLoading]=useState(true)
    const [property,setProperty]=useState({})
    useEffect(()=>{
        setIsLoading(true)
        fetchProperty(property_id).then((data)=>{
            setProperty(data)
            setIsLoading(false
                )
        })
    },[setProperty,property_id,setIsLoading])
    return isLoading?<p>... loading</p>:
    <div className="booking-container"> 
        
            <div className="ppt title">
                    
                <h1>{property.address}, {property.postcode}</h1>
                    
            </div>
                
            <div className="ppt image">

                <img src={`${property.image}`} alt={`image of the property at ${property.address}`} />
                    
            </div>
         
        

            
            
            
            
        
        <div className = "ppt description" ><Booking propId= {property_id} comp = "list"/></div>
        <div className = "ppt content" ><Booking propId= {property_id} comp = "form"/></div>
      
        
    </div>
    

}

export default PropertyDetails