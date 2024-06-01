import React from "react";
import Mobile from "./Mobile/Mobile";
import Laptop from "./Laptop";
function NavBar() {
    return (
        <div>
            <div className=" hidden md:flex  w-[250px] shrink-0">
                <Laptop />
            </div>
            <div className="md:hidden fixed  h-[50px] md:h-[60px] m-0  z-40 w-full bg-white border-b  ">
                <Mobile />
            </div>
        </div>
    );
}

export default NavBar;
