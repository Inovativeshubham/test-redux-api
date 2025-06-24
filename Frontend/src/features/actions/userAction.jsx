import { axiosInstance } from "../../axiosInstance"
import { setUser } from "../reducers/userSlice";


export const registerAction = (user)=> async (dispatch)=>{
    try {
        let res = await axiosInstance.post("/users", user);
        // console.log("api response from reg action-->", res)
        // if(res?.data){
        //     dispatch(setUser(res.data))
        // }

    } catch (error) {
        console.log(error.message)
    }
};

export const loginAction = (user)=> async (dispatch)=>{
    try {
        let res = await axiosInstance.get(
            `/users?email=${user.email}&password=${user.password}`
        )
        console.log('login response --,', res)

        localStorage.setItem('user', JSON.stringify(res.data[0]))
        dispatch(currentUserAction())

    } catch (error) {
        console.log(error.message)
    }
}

export const currentUserAction = ()=> async(dispatch)=>{
    try {
        let storeData = JSON.parse(localStorage.getItem('user'));
        if(storeData){
            dispatch(setUser(storeData))
        }
    } catch (error) {
        console.log(error.message)
    }
}

