// import React, { useState, useEffect } from "react";
// import TransactionTable from "./TransactionTable";
// import TransactionForm from "./TransactionForm";
// import "./App.css";

// function BankApp() {
//   const [transactions, setTransactions] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch(" http://localhost:3000/transactions")
//       .then((response) => response.json())
//       .then((data) => setTransactions(data.transactions));
//   }, []);

//   const handleSearchTermChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredTransactions = transactions.filter((transaction) =>
//     transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Bank App</h1>
//       <TransactionForm />
//       <hr />
//       <h2>Transactions</h2>
//       <div>
//         <input
//           type="text"
//           placeholder="Search transactions"
//           value={searchTerm}
//           onChange={handleSearchTermChange}
//         />
//       </div>
//       <TransactionTable transactions={filteredTransactions} />
//     </div>
//   );
// }

// export default BankApp;