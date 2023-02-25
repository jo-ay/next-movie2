import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ms from '@/styles/Movie.module.css' 
import Link from 'next/link'
import {apiConfig,axiosRequest} from '../config'
import Image from 'next/image'

const Movie = () => {
    const [data,setData] = useState();

  useEffect(()=>{ //재랜더링을 방지하고자
    axiosRequest.get('/movie/popular')
    .then(res=>{
      console.log(res.data.results)
      setData(res.data.results)
    })
  },[]);
  function searchFn(e){
    e.preventDefault();
    axiosRequest.get(`/search/movie?query=${e.target.txt.value}`)
    .then(res=>{
      console.log(res.data.results)
      setData(res.data.results)
    })
    console.log(e.target.txt.value); // e.target은 form 이 잡힘
  }
  if(!data) return <>loading ....</> // data 값이 들어있지 않을때
  return (

    <div className={ms.list}>
       <h2>movie</h2>
       <div>
            <form onSubmit={searchFn}>
                <input type='text' name='txt'/>
                <input type='submit' value='🔍'/>
            </form>
       </div>
       <div>
          {
            data.map(obj =>(
              <figure key={obj.id}>
                <Link href={{pathname:'/detail',query:obj}}>
                    <img layout='responsive' src={apiConfig.originImg(obj.poster_path)} alt={obj.title}/>
                    <figure>{obj.title}</figure>
                </Link>
              </figure>
            ))
          }
       </div>
    </div>
  )
}

export default Movie