import './Experiences.css';
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import ExperiencesList from './ExperiencesList';
import Filter from './filter'

export default function Experiences() {
   const [params] = useSearchParams()

   const { status, error, data } = useQuery({
      queryKey: ["events", { sport: params.get("sport"), type: params.get("type"), status: params.get("status"), region: params.get("region") }],
      keepPreviousData: true,
      queryFn: () => fetchEvents(params)
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1>{JSON.stringify(error)}</h1>


   return (
      <div className="experiences">
         <h1 className="experiences-title">U-Experiences</h1>
         <Filter />
         <ExperiencesList data={data} />
      </div>
   )
}
