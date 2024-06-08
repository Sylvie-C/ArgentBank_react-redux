import { useState } from "react"; 

import Hero from "../components/Hero/Hero" ; 
import Account from "../components/Account/Account" ; 

const accountsData = 
[  { accountId: "checking" , title: "Argent Bank Checking (x8349" , amount: "$2,082.79" } , 
  { accountId: "savings" , title: "Argent Bank Savings (x6712)" , amount: "$10,928.42" } , 
  { accountId: "creditcard" , title: "Argent Bank Credit Card (x8349)" , amount: "$184.30" } ]

function User() {

  // use Redux Store for V2 transactionsMode (router path "/:accountId/transactions")
  const [ transactionsMode , setTransactionsMode ] = useState (false); 

  return (
    <main className="user-container">
      <Hero />
      <h2 className="sr-only">Accounts</h2>

      {
        accountsData.map (
          (elt) => (
            <Account 
              transactionsMode= {transactionsMode}
              accountId= {elt.accountId}
              title= {elt.title} 
              amount= {elt.amount}

              key= {elt.accountId}
            />
          )
        )
      }
    </main>
  )
}

export default User ; 