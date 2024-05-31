import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "./AppContext";

function Default() {
    const { isAuth } = useAppContext();
    console.log("data from default", isAuth);
    const Navigate = useNavigate();
    useEffect(() => {
        if (!isAuth) Navigate("/Login");
        else if (isAuth) {
            Navigate(`/Home`);
        } else Navigate("/Login");
    }, [isAuth]);
}
export default Default;
