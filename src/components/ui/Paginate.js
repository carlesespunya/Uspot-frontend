import './Paginate.css';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Paginate({data}) {
   const [params, setParams] = useSearchParams()
   const [page, setPage] = useState(1)

   const handlePageChange = (page) => {
      setParams(prevParams => {
         prevParams.set("page", page)
         return prevParams
      })
   }

   useEffect(() => {
      if (params.get("page")) return setPage(params.get("page"))
   }, [params, page])

   return (
      <div className='pagination'>
         <p className='pagination-text'>Page: {page} / {data.totalPages}</p>
         {data.prevPage && <button onClick={() => handlePageChange(data.prevPage)}>Next</button>}
         {data.nextPage && <button onClick={() => handlePageChange(data.nextPage)}>Previous</button>}
      </div>
   )
}
