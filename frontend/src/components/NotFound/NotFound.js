
import "./NotFound.css"; 
import { NavLink } from "react-router-dom"; 

function NotFound() {
  return (
    <main className="notfound-page">
      LA PAGE QUE VOUS RECHERCHEZ N'EXISTE PAS.
      <NavLink to="/" className="notfound-link">RETOUR À L'ACCUEIL</NavLink>
    </main>
  )
}

export default NotFound; 