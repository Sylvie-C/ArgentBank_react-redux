
function CreditCard ( { onClick , transactionsMode } ) {

  const handleClick = (evt) => {    
    // on click on button, send button identifier (data-id) to Parent component
    onClick(evt.currentTarget.dataset.transid) ;  
  }

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
        <p className="account-amount">$184.30</p>
        <p className="account-amount-description">Current Balance</p>
      </div>
      <div className="account-content-wrapper cta">
      {      
        transactionsMode ?
        <button className="transactionClose-button" data-transid="X" onClick={ (e) => handleClick(e) } >
          X
        </button>
        : 
        <button className="transaction-button" data-transid="creditcard" onClick={ (e) => handleClick(e) }>
          View Transactions
        </button>
      }
      </div>
    </section>
  ); 
}

export default CreditCard; 