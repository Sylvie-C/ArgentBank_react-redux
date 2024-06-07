import { useState } from "react"; 

import "./User.css"; 
import Hero from "../components/Hero/Hero" ; 
import Account from "../components/Account/Account" ; 
import Transactions from "../components/Transactions/Transactions"; 

function User() {
  const [ hero , setHero ] = useState (true) ; 
  const [ checkingVisible , setCheckingVisibility ] = useState (true) ; 
  const [ savingsVisible , setSavingsVisibility ] = useState (true) ; 
  const [ creditcardVisible , setCreditcardVisibility ] = useState (true) ; 
  const [ transactionsVisible , setTransactionsVisibility ] = useState (false); 
  const [ transactionsId , setTransactionsId ] = useState ("") ; 

  // on click on "Transactions" button, hide <Hero/> and unclicked account headers + display transactions details
  const handleClick = (id) => { 

    // Save transactions Id in local state
    setTransactionsId(id) ; 

    // on click on "Transactions" button, hide <Hero/>
    setHero (false) ; 
    
    // handle display of account headers and transactions, according to clicked button id
    switch (id) {
      case "checking" : 
        setSavingsVisibility(false) ; 
        setCreditcardVisibility(false) ; 
        setTransactionsVisibility(true) ; 
      break; 
      case "savings" : 
        setCheckingVisibility(false) ; 
        setCreditcardVisibility(false) ; 
        setTransactionsVisibility(true) ; 
      break; 
      case "creditcard" : 
        setCheckingVisibility(false); 
        setSavingsVisibility(false); 
        setTransactionsVisibility(true) ; 
      break; 
      case "X" : 
        setCheckingVisibility(true); 
        setSavingsVisibility(true); 
        setCreditcardVisibility(true); 
        setTransactionsVisibility(false); 
      break; 
      default: 
    }
  }

  return (
    <main className="user-container">
      { hero && <Hero /> }
      <h2 className="sr-only">Accounts</h2>
      { 
        checkingVisible && 
        <Account  onClick={ (id) => handleClick(id) } 
                  transactionsMode={transactionsVisible}  
                  accountId="checking"
                  title="Argent Bank Checking (x8349)"
                  amount="$2,082.79"
        />
      }
      { 
        savingsVisible && 
        <Account  
          onClick={ (id) => handleClick(id) } 
          transactionsMode={transactionsVisible}  
          accountId="savings"
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
        />
      }
      { 
        creditcardVisible && 
        <Account  
          onClick={ (id) => handleClick(id) } 
          transactionsMode={transactionsVisible}  
          accountId="creditcard"
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
        />
      }
      {
        transactionsVisible && 
        <Transactions transactionsId={transactionsId} />
      }
    </main>
  )
}

export default User ; 