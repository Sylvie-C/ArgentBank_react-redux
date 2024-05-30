
import "./NotFound.css"; 
import { NavLink } from "react-router-dom"; 

function NotFound() {
  return (
    <main className="notfound-page">
      404 : Oups ! Nothing here ! 
      <NavLink to="/" className="notfound-link">Back Home</NavLink>
    </main>
  )
}

export default NotFound; 