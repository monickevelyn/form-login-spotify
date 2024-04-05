import Form from '../form/Form'
import { SiSpotify } from "react-icons/si";
import "./style.cadlogin.scss"

function CardLogin() {

  return (
    <>
    <section className="card-login">
      <div className="card-header" >
        <SiSpotify className='logo' />
        <h2>Spotify</h2> 
      </div>
      <Form /> 
    </section>  
    </>
  )
}

export default CardLogin