
import "./Transactions.css" ; 
import { fetchMockedData } from "./transactionsAPI" ;  

import Collapse from "../Collapse/Collapse" ; 

const mockedData = await fetchMockedData() ; 

function Transactions ( {transactionsId} ) {
  let transactionsDataArray ; // array of transactions objects { Date: , Description: , Amount: , ... }

  // fetch transactions data according to account button clicked (checking, savings, creditcard)
  switch (transactionsId) {
    case "checking" : 
      transactionsDataArray = mockedData?.checking ;
    break; 

    case "savings" : 
      transactionsDataArray = mockedData?.savings ; 
    break; 

    case "creditcard" : 
      transactionsDataArray = mockedData?.creditcard ; 
    break; 

    default: 
      transactionsDataArray = undefined; 
  }

  return(
    <section className="transactionsBlock-container">
      <div className="transactionsBlock-content">
        <div className="transactionsBlock-header" key="transactions-header">
          <span key="date-header">Date</span>
          <span key="description-header">Description</span>
          <span key="amount-header" >Amount</span>
          <span key="balance-header">Balance</span>
        </div>
        <div key="transactions-body">
            {
              transactionsDataArray.map(
                (elt , index) => {
                  return (
                    <Collapse id={`transaction${index}`} 
                              headerText= {
                                <>
                                  <p key={`date${index}`}>{elt.date}</p>
                                  <p key={`description${index}`} >{elt.description}</p>
                                  <p key={`amount${index}`} >{elt.amount}</p>
                                  <p key={`balance${index}`} >{elt.balance}</p>
                                </>
                              }
                              hiddenText= {
                                <>
                                  <p key={`type${index}`} >Transaction Type : {elt.type}</p>
                                  <p key={`category${index}`} >Category : {elt.category}</p>
                                  <p key={`note${index}`} >Note : {elt.note}</p>
                                </>
                              }
                              key= {`transaction${index}`}          
                    />
                  )
                }
              )
            }
        </div>
      </div>
    </section>
  ); 
}

export default Transactions; 