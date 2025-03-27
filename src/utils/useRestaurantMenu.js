import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestuarantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);
    
    //fetch data
    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const menuData = await fetch(MENU_URL+resId);
        const menuJson = await menuData.json();
        //console.log(menuJson);

        setResInfo(menuJson.data);
    };

    return resInfo;
}

export default useRestuarantMenu;