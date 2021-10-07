import axios from "axios"
import { Load_Register, Sucess_Register } from "../constant/constant"
import { Alert } from "react-native"
export const signUpUser = (name,email,password,mobile) => async(dispatch)=>{


    dispatch({type:Load_Register})


    try{
        const formdata = {
            name, email, password, mobile
        }

        
        
        const data =  await axios.post('http://10.0.2.2:4000/user/add', formdata);
        console.log(data)

       
        Alert.alert('sucess')
        dispatch({type:Sucess_Register,payload:data})

      }
    

   

    catch(e){

        console.log(e)
      }
}