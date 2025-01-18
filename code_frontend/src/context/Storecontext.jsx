import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import axios from "axios"

export const Storecontext = createContext(null)
const Storecontextprovider = (props) => {


    const [cartitem, setcartitem] = useState({});
    const url="http://localhost:4000"
    const [token,settoken]=useState("");
    // const[food_list,setfood_list]=useState([]);

    const addtocart = async(itemid) => {
        if (!cartitem[itemid]) {
            setcartitem((prev) => ({ ...prev, [itemid]: 1 }))
        } else {
            setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{"itemId":itemid},{headers:{token}})
            // console.log(token);
            
        }
    }

    const removefromcart =async (itemid) => {


        setcartitem((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
        if(token){
            await axios.post(url+"/api/cart/remove",{"itemId":itemid},{headers:{token}})
        }
    }

    // useEffect(()=>{
    //     console.log(cartitem);

    // },[cartitem])

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartitem[item];
            }
        }
        return totalamount;
    }

    // const fetchfoodlist=async()=>{
    //     // const response = await axios.get(url+"/api/food/list")
        
        
    //     setfood_list(food_list)
        
    // }
    const loadCartData=async(token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setcartitem(response.data.cartData);
    }
    
    useEffect(()=>{
   
      async function loaddata() {
        await fetchfoodlist()
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
          }
        
      }
      loaddata();
    //   console.log("hii");
      
    },[])

    const contextvalue = {
        food_list,
        cartitem,
        setcartitem,
        addtocart,
        removefromcart,
        gettotalcartamount,
        url,
        token,
        settoken,


    }

    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider;