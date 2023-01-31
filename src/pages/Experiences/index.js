import './Experiences.css';
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/ui/Card';

export default function Experiences() {
   const [params, setParams] = useSearchParams()

   const { status, error, data } = useQuery({
      queryKey: ["events", params],
      keepPreviousData: true,
      queryFn: () => fetchEvents(params),
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1>{JSON.stringify(error)}</h1>

   return (
      <>
         <div className="experiences-search">

         </div>
         <div className="experiences-list">
            <h1>Experiences</h1>
            <div className="experiences-list-box">
               {data.data.events.map(event => {
                  return (
                     <Card>
                        <div className="experiences-list-card">
                           <div className="experiences-list-card-up" style={{ backgroundImage: `url(${event.mediaUrls[0]})` }}>
                              <div className="experiences-list-card-sport">
                                 {event.sport}
                              </div>
                              <div className="experiences-list-card-user-img" style={{ backgroundImage: `url(${ event.user.imageUrl })` }}>

                              </div>
                           </div>

                           <p className="experiences-list-card-title">{ event.title }</p>
                           {event.type}
                           {event.status}
                           {event.location}
                           {event.region}
                           {event.capacity}
                           {event.spots}
                           {event.price}
                        </div>
                     </Card>
                  )
               })}
            </div>
         </div>


      </>
   )
}
