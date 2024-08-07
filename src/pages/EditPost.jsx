import React,{useEffect,useState} from 'react'
import appwriteServices from "../appwrite/config"
import { PostForm,Container } from '../components'
import { useParams,useNavigate } from 'react-router-dom'

function EditPost() {
    const [post,setPosts]=useState(null)
    const {slug} =useParams() // used to get anything from dynamic routing in react
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteServices.getPost(slug).then((data)=>{
                setPosts(data)
            })
        }else{
            navigate("/")
        }
    },[slug,navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost