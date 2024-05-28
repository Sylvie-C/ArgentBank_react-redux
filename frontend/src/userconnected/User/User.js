import { useState } from "react"; 

import "./User.css"; 
import Hero from "../components/Hero/Hero" ; 
import Checking from "../components/Checking/Checking" ; 
import Savings from "../components/Savings/Savings"; 
import CreditCard from "../components/CreditCard/CreditCard"; 
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
        <Checking onClick={(id) => handleClick(id)} transactionsMode={transactionsVisible} /> 
      }
      { 
        savingsVisible && 
        <Savings onClick={(id) => handleClick(id)} transactionsMode={transactionsVisible} /> 
      }
      { 
        creditcardVisible && 
        <CreditCard onClick={ (id) => handleClick(id) } transactionsMode={transactionsVisible} /> 
      }
      {
        transactionsVisible && 
        <Transactions transactionsId={transactionsId} />
      }
    </main>
  )
}

export default User ; 