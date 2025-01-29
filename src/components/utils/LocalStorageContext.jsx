import { createContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
import toast from "react-hot-toast";

//  Context Create
export const LocalStorageDataContext = createContext();







const LocalStorageDataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // data load from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("carts")) || [];
    setData(storedData);
  }, []);



  // update localStorage and state by Fun
  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem("carts", JSON.stringify(newData));
  };

  // Fun Remove Product from local storage
  const removeFavorite = (id) => {
    const favorites = data;
    const remaining = favorites.filter((i) => i.product_id != id);
    // console.log("indx frm", remaining);
    updateData(remaining);
    toast.success("Successfully Remove The Items!");
  };

  // Fun Sort products in descending order
  const sortProductsDesc = () => {
    const sortedItems = [...data].sort((a, b) => b.price - a.price);
    setData(sortedItems);
  };

  return (
    <LocalStorageDataContext.Provider
      value={{ data, updateData, removeFavorite, sortProductsDesc }}
    >
      {children}
    </LocalStorageDataContext.Provider>
  );
};

export default LocalStorageDataProvider;

