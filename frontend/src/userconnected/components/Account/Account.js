import { Link } from "react-router-dom" ; 

import "./Account.css" ; 

function Account ( { onClick , transactionsMode , accountId , title , amount } ) {

  const handleClick = (evt) => { 
    onClick(evt.currentTarget.dataset.transid) ;  
  }

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <div className="account-content-wrapper cta">
      
        {transactionsMode ?
          <button className="transactionClose-button" data-transid="X" onClick={ (e) => handleClick(e) } >
            X
          </button>
          : 
          <Link to={`/transactions/${accountId}`} className="transaction-button" >TRANSACTIONS VIEW</Link>
        }
      </div>
    </section>
  )
}

export default Account ; 