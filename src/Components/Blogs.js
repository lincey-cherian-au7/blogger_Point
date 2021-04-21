import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import '../styling/blog.css'
import { selectUserInput, setBlogData, setInput } from '../features/userDetails'

const api="aece119514ae4bdce577437bca0a8442"

const Blogs=() =>{
    const  searchInput= useSelector(selectUserInput)
    const fetch_url =`https://gnews.io/api/v4/search?q=${searchInput}&token=${api}`
    
    const dispatch = useDispatch();
    
    const [blogs,setBlogs]= useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get(fetch_url)
        .then((response)=>{
            dispatch(setBlogData(response.data))
            setBlogs(response.data)
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
        })
    },[searchInput,])

    return (
        <div className="blog__page">
            <h1 className="blog__page__header">
                Blogs
                {loading ? (<h1 className="loading">Loading....</h1>):("")}
                <div className="blogs">
                    {blogs?.articles?.map((blog)=>(
                        <a className="blog" target="_blank" href={blog.url}>
                            <img src={blog.image}/>
                            <div>
                                <h3 className="sourceName">
                                    <span>{blog.source.name}</span>
                                    <p>{blog.publishedAt}</p>
                                </h3>
                                <h1>{blog.title}</h1>
                                <p>{blog.description}</p>
                            </div>
                        </a>
                    ))}
                    {blogs?.totalArticles ==0 &&(
                        <h1 className="no_blogs">Sorry !!!!😟 No results found... Please try another search </h1>
                    )}
                </div>
            </h1>
            
        </div>
    )
}

export default Blogs




