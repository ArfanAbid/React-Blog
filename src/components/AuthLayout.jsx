import React,{useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children,authentication=true}) {
  
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const authStatus= useSelector(state => state.auth.status)

    useEffect(() => {
      if(authentication && authStatus !== authentication ){
        navigate('/login')
      }else if(!authentication && authStatus === authentication){
        navigate('/')
      }
      setLoading(false)

    },[authStatus,navigate,authentication])

          // Easy way may be
      /*
        if (authStatus===true){
            navigate('/')
        }else if(authStatus===false){
            navigate('/login')
        }
      */

    return  loader ? <h1>Loading...</h1> : <>{children}</>

}



// This concept will be used in Routers