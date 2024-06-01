import { useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAppContext } from "../../AppContext";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
function Laptop() {
    const Navigate = useNavigate();
    const { set_Auth } = useAppContext();
    const [Active_nav, setActive_nav] = useState("Home");
    const location = useLocation();
    useEffect(() => {
        setActive_nav(location.pathname.split("/")[2]);
    }, [location.pathname]);

    const [LogoutClicked, setLogoutClicked] = useState(false);
    const handleLogout = async () => {
        setLogoutClicked(true);
        try {
            // Send a request to the logout endpoint on the server
            const response = await axios.post(
                "http://localhost:3000/logout",
                {},
                {
                    withCredentials: true,
                    validateStatus: () => true,
                }
            );
            console.log("response from Logout : ", response);
            if (response.status == 204) {
                set_Auth(false);
                Swal.fire("Success!", `Logged Out Successfully`, "success");
                Navigate("/Login");
            } else {
                Swal.fire("Error!", `Something Went Wrong ,`, "error");
            }
        } catch (error) {
            Swal.fire("Error!", `Something Went Wrong `, "error");
        }
        setLogoutClicked(false);
    };
    return (
        <div className="flex flex-col gap-6 text-sm text-gray_v pl-4 py-4">
            <div>
                <div className="text-base font-semibold pb-1">Home</div>
                <div className=" flex flex-col gap-1  pl-2">
                    <div>Home</div>
                    <div>Users</div>
                </div>
            </div>
            <div>
                <div className=" text-base font-semibold">Prjects</div>
                <div>
                    <div>Request</div>
                    <div>Applications</div>
                    <div>Accepted</div>
                    <div>Paying</div>
                    <div>At Work</div>
                </div>
            </div>
            <div>
                <div className=" text-base font-semibold">Feedbacks</div>
                <div>Clients feedbacks</div>
                <div>Freelancers feedbacks</div>
            </div>
            <div>
                <div className=" text-base font-semibold">Messages</div>
                <div>All messages</div>
            </div>
            <div>
                <div className=" text-base font-semibold">Terms</div>
                <div>Terms of service</div>
            </div>
            <div>
                <div className=" text-base font-semibold">Contact</div>
                <div>Contact</div>
            </div>
            <div className="">
                {LogoutClicked ? (
                    <div className="w-full ">
                        <span className="small-loader font-bold  w-full m-auto"></span>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer w-full 
                                    flex items-center gap-3 text-red-500"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        <TbLogout2 className="  text-xl" />
                        Logout
                    </div>
                )}
            </div>
        </div>
    );
}

export default Laptop;
