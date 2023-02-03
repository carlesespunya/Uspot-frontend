import './Paginate.css';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Paginate({data}) {
   // eslint-disable-next-line no-unused-vars
   const [params, setParams] = useSearchParams()
   const [page, setPage] = useState(1)

   const handlePageChange = (page) => {
      setPage(page)
      setParams(prevParams => {
         prevParams.set("page", page)
         return prevParams
      })
   }

   return (
      <div className='pagination'>
         <p className='pagination-text'>Page: {page} / {data.totalPages}</p>
         {data.prevPage && <button onClick={() => handlePageChange(data.prevPage)}>Previous</button>}
         {data.nextPage && <button onClick={() => handlePageChange(data.nextPage)}>Next</button>}
      </div>
   )
}
