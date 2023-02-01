import './Experiences.css';
import React, { useMemo, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { types, eventStatus, sports } from '../../data/globalData';
import FormattedDate from '../../utils/FormattedDate';


export default function Experiences() {
   const [params, setParams] = useSearchParams()
   const [selectedSport, setSelectedSport] = useState("Surf")

   const handleSportChange = (e) => {
      setSelectedSport(e.target.value);
      setParams((prevParams) => {
         return { ...prevParams, sport: e.target.value };
      });
   }
   const queryKey = useMemo(() => ["events", { sport: selectedSport }], [selectedSport]);

   const { status, error, data } = useQuery({
      queryKey,
      keepPreviousData: true,
      queryFn: () => fetchEvents({sport: selectedSport})
   })

   if (status === "loading") return <h1>Loading...</h1>
   if (status === "error") return <h1>{JSON.stringify(error)}</h1>


   return (
      <div className="experiences">
         <h1 className="experiences-title">U-Experiences</h1>
         <div className="experiences-search">
            <div className="experiences-filter">
               <h2>Filter</h2>
               <div className="sport-filter">
                  Sport
                  <select value={selectedSport} onChange={handleSportChange}>
                        <option value="">All</option>
                        {sports.data.map((sport) => (
                           <option key={sport.key} value={sport.key}>
                              {sport.name}
                           </option>
                        ))}
                     </select>
               </div>
            </div>
         </div>
         <div className="experiences-list">
            <div className="experiences-list-box">
               {data.data.events.map(event => {
                  return (
                     <Card key={event._id}>
                        <div className="experiences-list-card">
                           <div className="experiences-list-card-up" style={{ backgroundImage: `url(${event.mediaUrls[0]})` }}>
                              <div className="experiences-list-card-up-top">
                                 <div className="experiences-list-card-info" style={{ backgroundColor: types.data.find(type => type.key === event.type).color }}>
                                    {types.data.find(type => type.key === event.type).name}
                                 </div>
                                 <div className="experiences-list-card-info text-white">
                                    {event.sport}
                                 </div>
                              </div>
                              <div className="experiences-list-card-up-top">
                                 <div className="experiences-list-card-user-img" style={{ backgroundImage: `url(${ event.user.imageUrl })` }}>
                                 </div>
                                 <div className="experiences-list-card-info experiences-status-card" style={{ backgroundColor: eventStatus.data.find(status => status.key === event.status).color }}>
                                    {eventStatus.data.find(status => status.key === event.status).name}
                                 </div>
                              </div>
                           </div>
                           <div className="experiences-list-card-down">
                              <h3 className="experiences-list-card-title">{ event.title }</h3>
                              <p>Start Date: {FormattedDate(event.startDate)}</p>
                              <p>End Date: {FormattedDate(event.endDate)}</p>
                              <div className="experiences-list-card-down-bot">
                                 <p>{event.location}</p>
                                 <p><strong>{event.price} €</strong></p>
                              </div>
                           </div>
                        </div>
                     </Card>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
