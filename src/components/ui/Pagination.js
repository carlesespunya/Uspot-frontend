import './Pagination.css';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({data}) {
   const [params, setParams] = useSearchParams()
   const [page, setPage] = useState(1)

   const handlePageChange = (page) => {
      setParams(prevParams => {
         prevParams.set("page", page);
         return prevParams
      })
   }

   useEffect(() => {
      if (params.get("page")) return setPage(params.get("page"))
   }, [params, page])


   return (
      <div className="pagination">
         {data.prevPage && <button onClick={() => handlePageChange(data.prevPage)}>Previous</button>}
         {data.nextPage && <button onClick={() => handlePageChange(data.nextPage)}>Next</button>}
      </div>
   );
}
