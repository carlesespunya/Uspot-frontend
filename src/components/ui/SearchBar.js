import './SearchBar.css';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Paginate({ data }) {
   const [params, setParams] = useSearchParams()
   const [page, setPage] = useState(1)

   const onChange = (e) => {
      console.log(e.target.value)
   //    setParams(prevParams => {
   //       prevParams.set("page", page)
   //       return prevParams
   //    })
   }

   useEffect(() => {
      if (params.get("page")) return setPage(params.get("page"))
   }, [params, page])

   return (
      <div className='search-bar'>
         <p className='search-bar-text'>Search by name: </p>
         <input onChange={onChange} className="search-bar" type="search" />
      </div>
   )
}
