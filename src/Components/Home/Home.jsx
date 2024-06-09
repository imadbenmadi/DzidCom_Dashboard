import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { LiaUsersSolid } from "react-icons/lia";
import { SiFreelancer } from "react-icons/si";
import { MdOutlineWork } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";

function Home() {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "http://localhost:3000/Admin/Home",
                    {
                        withCredentials: true,
                        // validateStatus: () => true,
                    }
                );
                console.log("response from get home page :", response.data);
                if (response.status == 200) {
                    setData(response.data);
                } else {
                    setError(response.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return (
            <div className=" w-[80vw] h-[80vh] flex flex-col items-center justify-center">
                <span className="loader"></span>
            </div>
        );
    } else if (error)
        return (
            <div className=" w-screen h-screen flex items-center justify-center">
                <div className="text-red-600 font-semibold">
                    {error.message}
                </div>
            </div>
        );
    else
        return (
            <div>
                <div className=" text-perpol_v text-2xl font-semibold pt-6 pl-6">
                    Home page
                </div>
                <div className=" flex justify-center items-center flex-wrap gap-6 mx-6 my-6">
                    <div className=" border shadow-md py-6 px-6 flex flex-col items-center justify-start rounded-md  min-w-[200px]">
                        <div className=" text-xs font-semibold pb-2 text-gray_v w-full">
                            Total users :{" "}
                        </div>
                        <div className=" flex justify-between gap-2 mx-2 w-full">
                            <div className="  font-semibold text-2xl">
                                {data?.freelancers_nbr + data?.clients_nbr}
                            </div>
                            {/* <LiaUsersSolid className=" text-red-600 shadow-lg border border-gray_white rounded-lg p-4 flex items-center justify-center" /> */}
                            <div className=" shrink-0 text-blue-600 border border-gray_white px-2 py-1 flex items-center justify-center rounded-lg shadow-lg">
                                <LiaUsersSolid className="  shrink-0 text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className=" border shadow-md py-6 px-6 flex flex-col items-center justify-start rounded-md  min-w-[200px]">
                        <div className=" text-xs font-semibold pb-2 text-gray_v w-full">
                            Freelancers :{" "}
                        </div>
                        <div className=" flex justify-between gap-2 mx-2 w-full">
                            <div className="  font-semibold text-2xl">
                                {data?.freelancers_nbr}
                            </div>
                            {/* <LiaUsersSolid className=" text-red-600 shadow-lg border border-gray_white rounded-lg p-4 flex items-center justify-center" /> */}
                            <div className=" shrink-0 text-blue-600 border border-gray_white px-2 py-1 flex items-center justify-center rounded-lg shadow-lg">
                                <SiFreelancer className="  shrink-0 text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className=" border shadow-md py-6 px-6 flex flex-col items-center justify-start rounded-md  min-w-[200px]">
                        <div className=" text-xs font-semibold pb-2 text-gray_v w-full">
                            Clients :{" "}
                        </div>
                        <div className=" flex justify-between gap-2 mx-2 w-full">
                            <div className="  font-semibold text-2xl">
                                {data?.clients_nbr}
                            </div>
                            {/* <LiaUsersSolid className=" text-red-600 shadow-lg border border-gray_white rounded-lg p-4 flex items-center justify-center" /> */}
                            <div className=" shrink-0 text-blue-600 border border-gray_white px-2 py-1 flex items-center justify-center rounded-lg shadow-lg">
                                <FaUserTie className="  shrink-0 text-2xl" />
                            </div>
                        </div>
                    </div>
                    <div className=" border shadow-md py-6 px-6 flex flex-col items-center justify-start rounded-md  min-w-[200px]">
                        <div className=" text-xs font-semibold pb-2 text-gray_v w-full">
                            Total Projet :{" "}
                        </div>
                        <div className=" flex justify-between gap-2 mx-2 w-full">
                            <div className="  font-semibold text-2xl">
                                {data?.projects_nbr}
                            </div>
                            {/* <LiaUsersSolid className=" text-red-600 shadow-lg border border-gray_white rounded-lg p-4 flex items-center justify-center" /> */}
                            <div className=" shrink-0 text-blue-600 border border-gray_white px-2 py-1 flex items-center justify-center rounded-lg shadow-lg">
                                <MdOutlineWork className="  shrink-0 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Home;
