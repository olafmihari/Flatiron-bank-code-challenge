import React, { useState, useEffect } from "react";

function TransactionFilter({ onFilterTransactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounce = setTimeout(() => {
      onFilterTransactions(searchTerm);
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchTerm, onFilterTransactions]);

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleFilter}
      placeholder="Search transactions"
    />
  );
}

export default TransactionFilter;