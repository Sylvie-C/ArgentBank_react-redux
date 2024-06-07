import "./Home.css"; 
import HomeIcon from "../../components/HomeIcon/HomeIcon" ; 
import chatImg from "../../img/optimized/icon-chat.webp" ; 
import moneyImg from "../../img/optimized/icon-money.webp" ; 
import securityImg from "../../img/optimized/icon-security.webp" ; 

const iconsData = [
  {
    img : chatImg , 
    imgAlt : "Chat Icon" , 
    title : "You are our #1 priority" , 
    text : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  } , 
  {
    img : moneyImg , 
    imgAlt : "Money Icon" , 
    title : "More savings means higher rates" , 
    text : "The more you save with us, the higher your interest rate will be!"
  } , 
  {
    img : securityImg , 
    imgAlt : "Security Icon" , 
    title : "Security you can trust" , 
    text : "We use top of the line encryption to make sure your data and money is always safe."
  }
] ; 

function Home () {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>

        {
          iconsData.map (
            (elt , index) => (
              <HomeIcon img = { elt.img }
                        imgAlt = { elt.imgAlt } 
                        title = { elt.title }
                        text = { elt.text }
                        key = { `icon${index}` }
              /> 
            )
          )
        }

      </section>
    </main>
  )
}

export default Home; 