import React, { createContext, useState, useContext } from 'react';
                      

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [isAskFriendClick,setIsAskFriendClicked] = useState(false)   
  const [checkTrue,setCheckTrue] = useState(false)  
  const [loading,setLoading] = useState(false)   
  const [showTimer,setShowTimer] = useState(false) 
  const [showOptions, setShowOptions] = useState(false)
  const [showCategory, setShowCategory] = useState(false); // State for toggling Category

  const [selectedCategory, setSelectedCategory] = useState("Clothes");
  const [reRenderOnCrossClick,setReRenderOnCrossClick] = useState(false)
  const [yourOrderDetails,setYourOrderDetails] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const [allProducts, setAllProducts] = useState([]);




  const [addressDetails,setAddressDetails] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    houseNo: "",
    streetNo: "",
    city: "",
    state: "",
    postalCode: "",

})
                
  return (                                 
    <LoginContext.Provider value={{allProducts,setAllProducts,isOpen,setIsOpen,yourOrderDetails,setYourOrderDetails,addressDetails,setAddressDetails,showOptions,setShowOptions,selectedCategory,setSelectedCategory,showCategory,setShowCategory, reRenderOnCrossClick,setReRenderOnCrossClick, isLoggedIn, setIsLoggedIn  ,isAskFriendClick,setIsAskFriendClicked, checkTrue,setCheckTrue,loading,setLoading,showTimer,setShowTimer}}>
      {children}
    </LoginContext.Provider>
  );
};



export const useLogin = () => {
  return useContext(LoginContext);  
};