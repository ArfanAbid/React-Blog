import React,{useEffect,useState} from 'react'
import appwriteServices from "../appwrite/config"
import { PostCard,Container } from '../components'


function AllPost() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{},[])
    appwriteServices.getPosts([]).then((data)=>{
        setPosts(data.documents)
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flrx-wrap'>

            {posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'> 
                    <PostCard post={post} />
                </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost