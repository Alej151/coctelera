import { useEffect, useState } from "react"

const useFetch= (url)=>{

    const [data,setData]=useState([]);

    useEffect(() => {
        getData()
      },[]);

    async function getData(){
        const res = await fetch(url)
        const data= await res.json();

        setData(data)
    }

    return data
}

export default useFetch