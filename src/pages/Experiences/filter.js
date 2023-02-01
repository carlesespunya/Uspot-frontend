import { FilterOption } from './filterOption';
import React, { useState } from "react";
import { eventStatus, regions, sports, types } from "../../data/globalData";

export default function Filter() {
   // eslint-disable-next-line no-unused-vars
   const [selected, setSelected] = useState({ sport: undefined, type: undefined, status: undefined, region: undefined });

   return (
      <div className="experiences-filter">
         <FilterOption onSetSelected={setSelected} selected category={"sport"} categoryData={sports} />
         <FilterOption onSetSelected={setSelected} selected category={"type"} categoryData={types} />
         <FilterOption onSetSelected={setSelected} selected category={"status"} categoryData={eventStatus} />
         <FilterOption onSetSelected={setSelected} selected category={"region"} categoryData={regions} />
      </div>
   );
}
