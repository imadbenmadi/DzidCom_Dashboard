import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
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
                <div>
                    <div className=" border shadow-md pt-6 px-8 flex items-center justify-center">
                        <div>{data.Freelancers}</div>
                    </div>
                </div>
            </div>
        );
}

export default Home;
