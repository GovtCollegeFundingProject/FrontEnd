import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectToken } from "../redux/authSlice";
const AdminPanelData = () => {
  const [transactionType, setTransactionType] = useState("general");
  const [transactions, setTransactions] = useState([]);
  const [sortOption, setSortOption] = useState("time");

  useEffect(() => {
    fetchTransactions();
  }, [transactionType, sortOption]);

  const fetchTransactions = async () => {
    try {
      const token = useSelector(selectToken);
      //   const response = await axios.get(/api/transactions, {
      //     params: {
      //       type: transactionType,
      //       sort: sortOption
      //     }
      //   });
      //   setTransactions(response.data);
      if (!token) {
        // If no token found, redirect to login
        navigate("/admin-login");
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}admin/admin-panel/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the data to state
      setAdminData(response.data);
    } catch (error) {
      console.error("Error fetching transactions", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <label>
          <input
            type="radio"
            value="general"
            checked={transactionType === "general"}
            onChange={() => setTransactionType("general")}
          />
          General
        </label>
        <label>
          <input
            type="radio"
            value="collegeSpecific"
            checked={transactionType === "collegeSpecific"}
            onChange={() => setTransactionType("collegeSpecific")}
          />
          College Specific
        </label>
      </div>

      <div>
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="time">Time</option>
          <option value="money">Money</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Amount</th>
            <th>Transaction Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{new Date(transaction.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelData;
