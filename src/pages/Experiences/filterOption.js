import React from "react";
import { useSearchParams } from "react-router-dom";

export function FilterOption({ onSetSelected, selected, category, categoryData }) {
   const [params, setParams] = useSearchParams()

   const handleChange = (e) => {
      setParams(prevParams => {
         if (e.target.value === "All") {
            prevParams.delete(category);
            onSetSelected(prevSelected => ({ ...prevSelected, [category]: "All" }))
            return prevParams
         }
         prevParams.set(category, e.target.value);
         return prevParams
      })
   }

   return (
      <div className="filter-opiton">
         <h3>{category.toUpperCase()}</h3>
         <select value={params.get(category)} onChange={handleChange}>
            <option value="All">All</option>
            {categoryData.data.map(option => <option key={option.key} value={option.key}>
               {option.name}
            </option>)}
         </select>
      </div>
   );
}
