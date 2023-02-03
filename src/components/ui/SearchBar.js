import './SearchBar.css';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from '../../hooks/useDebounce';


export default function SearchBar() {
   const [params, setParams] = useSearchParams()
   const [input, setInput] = useState("")

   const onChange = (e) => {
      setInput(e.target.value)
   }

   useDebounce(() => {
      setParams(prevParams => {
         prevParams.set("title", input)
         return prevParams
      })
   }, 1000, [input])

   useEffect(() => {
      if (params.get("title")) return setInput(params.get("title"))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <div className='search-bar'>
         <p className='search-bar-text'>Search by name: </p>
         <input value={input} onChange={onChange} className="search-bar" type="search" />
      </div>
   )
}
