import React, { useState } from "react";

const TransactionElement = () => {

  const [transactionAmount, setTransactionAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("/transaction/" + transactionId + "/" + transactionAmount, {
        method: "GET"
      });
      let jsonResponse = await response.json();
      console.log("status: " + jsonResponse.status);
      if (jsonResponse.status === 200) {
        console.log("Deposit succeeded");
        setTransactionId("");
        setTransactionAmount("");
      } else {
        console.log("Deposit went awry!");
      }
    } catch (err) {
      console.log("Depositerror: " + err);
    }

    console.log(e);
  };

  return <div>
    <header className="bank-child-header">Submit new transaction</header>
    <form onSubmit={onSubmit}>
      <label>
        Account ID:
        <br></br>
        <input data-type="account-id" onChange={(e) => {
          setTransactionId(e.target.value)
        }}
          value={transactionId}
          placeholder="Enter account ID"
        />
      </label>
      <br></br>
      <label>
        Amount:
        <br></br>
        <input data-type="amount" onChange={(e) => {
          setTransactionAmount(e.target.value)
        }}
          value={transactionAmount}
          placeholder="Enter transfer amount"
        />
      </label>
      <input data-type="transaction-submit" type="submit" />
    </form>
  </div>
};

export default TransactionElement;