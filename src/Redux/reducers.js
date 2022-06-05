import { SET_NAME,SET_EMAIL,SET_COUNTRY,SET_DOB,SET_PASSWORD } from "./actions";

const intialState={
    Name:'',
    Email:'',
    Country:'',
    DOB:'',
    Password:''
}

function userValue(state=intialState,action)
{
    switch(action.type)
    {
        case SET_NAME:
            return {...state,name:action.payload};
        case SET_EMAIL:
            return {...state,email:action.payload};
        case SET_COUNTRY:
            return {...state,country:action.payload};
        case SET_DOB:
            return {...state,dob:action.payload};
        case SET_PASSWORD:
            return {...state,password:action.payload};
        default:
            return state;
    }
}

export default userValue;