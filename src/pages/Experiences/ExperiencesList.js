import Paginate from '../../components/ui/Paginate';
import React from "react";
import { useSearchParams } from "react-router-dom";
import ExperiencesCard from './ExperiencesCard';
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"

export default function ExperiencesList() {
   const [params] = useSearchParams()

   const { status, error, data } = useQuery({
      queryKey: ["events", { sport: params.get("sport"), type: params.get("type"), status: params.get("status"), region: params.get("region"), page: params.get("page"), title: params.get("title"), sortBy: params.get("sortBy"), sortOrder: params.get("sortOrder") }],
      keepPreviousData: true,
      queryFn: () => fetchEvents(params)
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1 style={{ color: 'red' }}>{error.response.data.error}</h1>

   return (
      <div className="experiences-list">
         <div className="experiences-list-box">
            {data.data.events && data.data.events.length > 0
               ? data.data.events.map(event => (
                  <ExperiencesCard event={event} key={event._id} />
               ))
               : <h2>No events found</h2>}
         </div>
         <Paginate data={data.data} />
      </div>
   );
}
