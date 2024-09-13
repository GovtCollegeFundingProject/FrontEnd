import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectAdminToken, selectToken } from "../redux/authSlice";
import { useNavigate } from "react-router";

const AdminPanelData = () => {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState("general");
  const [transactions, setTransactions] = useState([]);
  const [sortOption, setSortOption] = useState("time");
  const token = useSelector(selectAdminToken);
  useEffect(() => {
    fetchTransactions();
  }, [transactionType, sortOption]);

  const fetchTransactions = async () => {
    if (!token) {
      navigate("/admin-login");
      return;
    }
    try {
      const responses = await axios.get(
        `${import.meta.env.VITE_BASE_URL}admin/admin-panel/`,
        {
          params: {
            type: transactionType,
            sort: sortOption,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(responses);
      setTransactions(responses.data);
      console.log(transactions);

      //   const response = await axios.get(
      //     `${import.meta.env.VITE_BASE_URL}admin/admin-panel/`,
      //     {
      //       headers: {
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   );
      //   setAdminData(response.data);
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
            <th>Donor mail</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.transactionID}>
              <td>{transaction.transactionID}</td>
              <td>{transaction.amount + "₹"}</td>
              <td>{transaction.type}</td>
              <td>{new Date(transaction.transactionTime).toLocaleString()}</td>
              <td>{transaction.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanelData;
