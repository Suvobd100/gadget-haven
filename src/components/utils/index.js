
import toast from "react-hot-toast";
// -------------------------------------------Cart---------------------------------------

const getAllFavorites = () => {
    const allLocalStorageCoffeeData = localStorage.getItem("carts");
  //   const allLocalStorageCoffeeData = localStorage.getItem("favorites");
  
    if (allLocalStorageCoffeeData) {
      const oldData = JSON.parse(allLocalStorageCoffeeData);
      // const favorites = JSON.parse(allLocalStorageCoffeeData);
      console.log('indx',oldData);
      return oldData;
      // return favorites;
    } else {
      // console.log([]);
      return [];
    }
  };
  
  // 1. Add a Coffee to local storage
  const addFavorite = (gadget) => {
    // Get all previously Favorite save Coffee data
  
  //   const favorites = getAllFavorites();
    const prvData = getAllFavorites();
  //   const isExist = favorites.find((item) => item.product_id == gadget.product_id);
    const isExist = prvData.find((item) => item.product_id == gadget.product_id);
    if (isExist) {
      return toast.error("This Product already exists!");
    }
  
    //   console.log(favorites);
  //   favorites.push(gadget);
    prvData.push(gadget);
  //   add local storage
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("carts", JSON.stringify(prvData));
    toast.success("Successfully added The Product!");
  };
    
// 3. Remove a Coffee from local storage
// const removeFavorite = (id) => {
//   // Get all previously Favorite save Coffee data
//   const favorites = getAllFavorites();

//   const remaining = favorites.filter((coffee) => coffee.id != id);
//   //   add local storage delete data
//   localStorage.setItem("favorites", JSON.stringify(remaining));
//   toast.success("Successfully Remove The Coffee!");
// };

// -----------------------Cart end-----------------------------

//  ######## Heart section------------

// 2. Get all Coffees from local storage
// const getAllFavorites = () => {
const getAllWishes = () => {
    const allLocalStorageData = localStorage.getItem("wishes");
  
  
    if (allLocalStorageData) {
      const oldData = JSON.parse(allLocalStorageData);
      
    
      return oldData;
      
    } else {
    //   console.log([]);
      return [];
    }
  };
  
  // 1. Add Product to local storage
//   const addFavorite = (gadget) => {
  const addWish = (gadget) => {
  
    // Get all previously save  data
  
    // const prvData = getAllFavorites();
    const prvData = getAllWishes();
  
    const isExist = prvData.find((item) => item.product_id == gadget.product_id);
    if (isExist) {
      return toast.error("This Wish already exists!");
    }
  // array update with new item
    prvData.push(gadget);
  
  //   add local storage
  
    // localStorage.setItem("carts", JSON.stringify(prvData));
    localStorage.setItem("wishes", JSON.stringify(prvData));
    toast.success("Successfully added your Wish!, Thanks");
  };



export { addFavorite,getAllFavorites,addWish,getAllWishes  };
