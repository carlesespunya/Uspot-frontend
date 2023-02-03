import './SortBy.css';
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SortBy() {
   const [params, setParams] = useSearchParams()
   const [sort, setSort] = useState("startDate,desc")

   const handleChange = (e) => {
      setSort(e.target.value)
      const [sortBy, sortOrder] = e.target.value.split(",")

      setParams(prevParams => {
         prevParams.set("sortBy", sortBy)
         prevParams.set("sortOrder", sortOrder)
         return prevParams
      })
   }

   useEffect(() => {
      if (params.get("sortBy") && params.get("sortOrder")) return setSort(`${params.get("sortBy")},${params.get("sortOrder")}`)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   return (
      <div className="sortBy">
         <h3>Sort By: </h3>
         <select value={sort} onChange={handleChange}>
            <option value="startDate,desc">Start Date: descending</option>
            <option value="startDate,asc">Start Date: ascending</option>
            <option value="price,desc">Price: descending</option>
            <option value="price,asc">Price: ascending</option>
         </select>
      </div>
   )
}
