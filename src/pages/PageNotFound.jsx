import React from "react";
import { ERROR_PAGE } from "../utils/constants";
const PageNotFound = ()=>{
    return (
        <div className="flex justify-center items-center">
            <img className="max-w-lvh" src={ERROR_PAGE} alt="page not found" />
        </div>
    )
}

export default PageNotFound;