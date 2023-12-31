import { 
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR ,
    FETCH_USER_LOGIN,
    USER_REFRESH,
    FETCH_USER_LOGOUT,
    USER_REGISTER

    } from './userAction';


    const INITIAL_STATE = {

        account: {
            email: '',
            auth: null,
            user : '',
            },
        OTP : null
    };

    const userReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {
            case FETCH_USER_LOGIN:
                return {                  
                ...state,   
                };
            case FETCH_USER_SUCCESS:
               console.log(">>check action", action)
            
                return {
                    ...state,
                    account: {
                    email: action.data.email,
                    token : action.data.token,
                    auth : true
                }
               };

            case FETCH_USER_ERROR:

                return {
                  ...state,
                  account: {                    
                    auth: false,                  
                    }
               };
            
            case FETCH_USER_LOGOUT:
                localStorage.removeItem('token');
                    
                return {
                  ...state,
                  account: {
                    email: '',
                    auth: false,
                    user : '',
                    }
               };
               
            case USER_REFRESH:
                
                return {
                  ...state,
                  account: {
                    email: '',
                    auth: true,
                    user : localStorage.getItem('user'),
                    }
               };

            case USER_REGISTER:               
                return {
                 ...state,
                 account: {
                   email: '',
                   auth: false,
                   user : '', 
                   }
                
            };
            

            default: return state;
        }

    };

    export default userReducer;