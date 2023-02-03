import FilterOption from './FilterOption';
import React from "react";
import { eventStatus, regions, sports, types } from "../../data/globalData";
import SearchBar from '../../components/ui/SearchBar'
import SortBy from '../../components/ui/SortBy'

export default function Filter() {

   return (
      <div className="experiences-filter">
         <SortBy />
         <SearchBar />
         <FilterOption category={"sport"} categoryData={sports} />
         <FilterOption category={"type"} categoryData={types} />
         <FilterOption category={"status"} categoryData={eventStatus} />
         <FilterOption category={"region"} categoryData={regions} />
      </div>
   );
}
