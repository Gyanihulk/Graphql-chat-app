import React,{useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import { LOAD_USERS } from '../graphql/Query'
const GetUsers =  () => {

    const {error,loading,data}= useQuery(LOAD_USERS)
    useEffect(()=>{
    },[data])
    if(!loading){
        console.log(data)
    }
  return (
    <div>GetUsers</div>
  )
}

export default GetUsers