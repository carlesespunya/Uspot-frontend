import './FilterOption.css'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterOption({ category, categoryData }) {
  const [params, setParams] = useSearchParams()
  const [value, setValue] = useState("All")

  const handleChange = (e) => {
    setParams(prevParams => {
      if (e.target.value === "All") {
        setValue("All")
        prevParams.delete(category);
        return prevParams
      }
      prevParams.set("page", 1);
      setValue(e.target.value)
      prevParams.set(category, e.target.value);

      return prevParams
    })
  }

  useEffect(() => {
    if (params.get(category)) return setValue(params.get(category))
    setValue("All")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="filter-opiton">
      <h3>{category.toUpperCase()}</h3>
      <select value={value} onChange={handleChange}>
        <option value="All">All</option>
        {categoryData.data.map(option => <option key={option.key} value={option.key}>
          {option.name}
        </option>)}
      </select>
    </div>
  );
}
