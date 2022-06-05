export const SET_NAME='SET_NAME';
export const SET_EMAIL='SET-EMAIL';
export const SET_COUNTRY='SET_COUNTRY';
export const SET_DOB='SET_DOB';
export const SET_PASSWORD='SET_PASSWORD'

export const setName = name => dispatch =>{
    dispatch({
        type:SET_NAME,
        payload:name,
    })
}

export const setEmail = email => dispatch =>{
    dispatch({
        type:SET_EMAIL,
        payload:email,
    })
}

export const setCountry = country => dispatch =>{
    dispatch({
        type:SET_COUNTRY,
        payload:country,
    })
}

export const setDOB = dob => dispatch =>{
    dispatch({
        type:SET_DOB,
        payload:dob,
    })
}

export const setPassword = password => dispatch =>{
    dispatch({
        type:SET_PASSWORD,
        payload:password,
    })
}