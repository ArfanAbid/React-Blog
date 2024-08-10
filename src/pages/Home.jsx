import React,{useEffect,useState} from 'react'
import appwriteService from "../appwrite/config"
import { PostCard,Container } from '../components'

function Home() {
    const [posts,setPosts]=useState([])

    useEffect(()=>{
        appwriteService.getPosts().then((data)=>{
            if(data){
                setPosts(data.documents)
            }
        })
    },[])
    if(posts.length===0){
        return (
            //Login to read post
            <Container>
                <div className='flex justify-center items-center h-screen'> 
                    <p className='text-3xl font-bold'>Login to read post</p>
                </div>
            </Container> 
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flrx-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'> 
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home