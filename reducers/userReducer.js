import { Load_login,Sucess_login } from "../constant/constant";

export const SigunupUser = (state= {},action)=>{



    switch (action.type) {
        case Load_login:
            return {
                loading:true
            }

            case Sucess_login:
                return{
                    loading:false,
                    user:action.payload

                }

         
    
        default:
            return state ;
    }
}