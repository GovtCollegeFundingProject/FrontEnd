import React, { useEffect, useState } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";
export default function Scrolling() {
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const fetchTotalAmount = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}auth/total-transaction-amount`
        );
        if (response.data && response.data.totalAmount !== undefined) {
          setTotalAmount(response.data.totalAmount);
          //   console.log(totalAmount);
        }
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };
    fetchTotalAmount();
  }, []);
  return (
    <>
      <Marquee>
        <div className="text-xl font-semibold text-blue-700">
          {`Contribute for a better society. Total amount collected through the contributions is ${totalAmount} Rupees`}
        </div>
      </Marquee>
    </>
  );
}
