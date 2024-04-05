import Form from './components/form/Form'
import './index.scss'
import { SiSpotify } from "react-icons/si";

function App() {

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

export default App