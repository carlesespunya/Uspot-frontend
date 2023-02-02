import Paginate from '../../components/ui/Paginate';
import React from "react";
import { useSearchParams } from "react-router-dom";
import ExperiencesCard from './ExperiencesCard';
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"

export default function ExperiencesList() {
   const [params] = useSearchParams()

   const { status, error, data } = useQuery({
      queryKey: ["events", { sport: params.get("sport"), type: params.get("type"), status: params.get("status"), region: params.get("region"), page: params.get("page"), title: params.get("title") }],
      keepPreviousData: true,
      queryFn: () => fetchEvents(params)
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1>{JSON.stringify(error.message)}</h1>


   return (
      <div className="experiences-list">
         <div className="experiences-list-box">
            {data.data.events.map(event => {
               return (
                  <ExperiencesCard event={event} key={event._id} />
               );
            })}
         </div>
         <Paginate data={data.data} />
      </div>
   );
}
