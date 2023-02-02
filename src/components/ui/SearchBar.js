import './SearchBar.css';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useDebounce from '../../hooks/useDebounce';


export default function SearchBar() {
   // eslint-disable-next-line no-unused-vars
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

   return (
      <div className='search-bar'>
         <p className='search-bar-text'>Search by name: </p>
         <input onChange={onChange} className="search-bar" type="search" />
      </div>
   )
}
