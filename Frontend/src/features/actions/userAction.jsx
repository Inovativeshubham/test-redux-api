import { axiosInstance } from "../../axiosInstance"


export const registerAction = (user)=> async (dispatch)=>{
    try {
        let res = await axiosInstance.post("/users", user);
        console.log("api response from reg action-->", res)
        return { payload: res.data }; // <-- return the data
    } catch (error) {
        console.log(error)
    }
};

registerAction()