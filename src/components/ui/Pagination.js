import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Pagination({data}) {
   const [setParams] = useSearchParams()

   const handlePageChange = (page) => {
      setParams(prevParams => {
         prevParams.set("page", page);
         return prevParams
      })
   }

   return (
      <div className="pagination">
         {data.prevPage && <button onClick={() => handlePageChange(data.previousPage)}>Previous</button>}{" "}
         {data.nextPage && <button onClick={() => handlePageChange(data.nextPage)}>Next</button>}
      </div>
   );
}
