import './Experiences.css';
import React from 'react'
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { types, eventStatus } from '../../data/globalData';


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
      <div className="experiences">
         <h1 className="experiences-title">U-Experiences</h1>
         <div className="experiences-search">

         </div>
         <div className="experiences-list">
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
                           <div className="experiences-list-card-type" style={{ backgroundColor: types.data.find(type => type.key === event.type).color  }}>
                              {types.data.find(type => type.key === event.type).name}
                           </div>
                           <div className="experiences-list-card-status" style={{ backgroundColor: eventStatus.data.find(status => status.key === event.status).color }}>
                              {eventStatus.data.find(status => status.key === event.status).name}
                           </div>


                           <p className="experiences-list-card-title">{ event.title }</p>
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
      </div>
   )
}
