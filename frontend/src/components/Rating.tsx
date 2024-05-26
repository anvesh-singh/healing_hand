//@ts-nocheck
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
export const Rating = ({ doctorid }) => {
  const [rating, Setrating] = useState(0);
  const [total, Settotal] = useState(0);
  const [reviews, setreviews] = useState([]);
  const [newreview, setnewreview] = useState([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/doctor/findone?q=${"qwerty@gmail.com"}`)
      .then((response) => {
        Setrating(response.data.rating.avgrating);
        Settotal(response.data.rating.totalrating);
        setreviews(response.data.rating.reviews);
      });
  }, []);
  const updaterating = async (newrating) => {
    const updaterating = Math.floor((rating * total + newrating) / (total + 1));
    const response = await axios.post(
      `${BACKEND_URL}/doctor/updateone?q=${"qwerty@gmail.com"}`,
      { avgrating: updaterating, totalrating: total + 1, newreview: newreview }
    );
    axios
      .get(`${BACKEND_URL}/doctor/findone?q=${"qwerty@gmail.com"}`)
      .then((response2) => {
        Setrating(response2.data.rating.avgrating);
        Settotal(response2.data.rating.totalrating);
      });
  };
  return (
    <div className="flex items-center">
      {rating}
      <button
        onClick={() => {
          updaterating(1);
        }}
      >
        <svg
          className={
            rating > 0
              ? "text-yellow-300 w-4 h-4  ms-1"
              : "text-gray-300 w-4 h-4  ms-1"
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
      <button
        onClick={() => {
          updaterating(2);
        }}
      >
        <svg
          className={
            rating > 1
              ? "text-yellow-300 w-4 h-4  ms-1"
              : "text-gray-300 w-4 h-4  ms-1"
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
      <button
        onClick={() => {
          updaterating(3);
        }}
      >
        <svg
          className={
            rating > 2
              ? "text-yellow-300 w-4 h-4  ms-1"
              : "text-gray-300 w-4 h-4  ms-1"
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
      <button
        onClick={() => {
          updaterating(4);
        }}
      >
        <svg
          className={
            rating > 3
              ? "text-yellow-300 w-4 h-4  ms-1"
              : "text-gray-300 w-4 h-4  ms-1"
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
      <button
        onClick={() => {
          updaterating(5);
        }}
      >
        <svg
          className={
            rating > 4
              ? "text-yellow-300 w-4 h-4  ms-1"
              : "text-gray-300 w-4 h-4  ms-1"
          }
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      </button>
      {reviews.map((r) => {
        return <div> {r}</div>;
      })}
    </div>
  );
};
