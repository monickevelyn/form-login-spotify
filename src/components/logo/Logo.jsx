import { SiSpotify } from "react-icons/si";
import "./style.logo.scss"

function Logo() {
  return (
    <>
    <div className="card-header" >
        <SiSpotify className='logo' />
        <h2>Spotify</h2> 
    </div>  
    </>
  )
}
export default Logo