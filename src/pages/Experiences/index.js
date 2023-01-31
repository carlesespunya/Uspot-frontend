import './Experiences.css';
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"

export default function Experiences() {
   const { status, error, data} = useQuery({
      queryKey: ["events"],
      queryFn: fetchEvents,
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1>{JSON.stringify(error)}</h1>

   return (
      <>
         <h1>Experiences</h1>
         <ol>
            {data.data.events.map(event => {
               return(<li>
                  {event.title}
               </li>)
            })}
         </ol>
      </>
   )
}
