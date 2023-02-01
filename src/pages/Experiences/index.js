import './Experiences.css';
import React, { useEffect, useState } from 'react'
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { types, eventStatus, sports, regions } from '../../data/globalData';
import FormattedDate from '../../utils/FormattedDate';


export default function Experiences() {
   const [params, setParams] = useSearchParams()
   const [selected, setSelected] = useState({ sport: undefined, type: undefined, status: undefined, region: undefined });

   const handleChange = (e, category) => {
      setParams(prevParams => {
         if (e.target.value === "All") {
            prevParams.delete(category);
            return prevParams
         }
         prevParams.set(category, e.target.value);
         return prevParams
      })
   }

   useEffect(() => {
      if (params.has("sport")) setSelected(prevSelected => ({ ...prevSelected, sport: params.get("sport") }));
      if (params.has("type")) setSelected(prevSelected => ({ ...prevSelected, type: params.get("type") }));
      if (params.has("status")) setSelected(prevSelected => ({ ...prevSelected, status: params.get("status") }));
      if (params.has("region")) setSelected(prevSelected => ({ ...prevSelected, status: params.get("region") }));
   }, [params]);


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
         <div className="experiences-search">

         </div>
         <div className="experiences-filter">
            <h2>Filter</h2>
            <div className="sport-filter">
               Sport
               <select value={selected.sport} onChange={(e) => handleChange(e, "sport")}>
                  <option value="All">All</option>
                  {sports.data.map((option) => (
                     <option key={option.key} value={option.key}>
                        {option.name}
                     </option>
                  ))}
               </select>
            </div>
            <div className="type-filter">
               Type
               <select value={selected.type} onChange={(e) => handleChange(e, "type")}>
                  <option value="All">All</option>
                  {types.data.map((option) => (
                     <option key={option.key} value={option.key}>
                        {option.name}
                     </option>
                  ))}
               </select>
            </div>
            <div className="status-filter">
               Status
               <select value={selected.status} onChange={(e) => handleChange(e, "status")}>
                  <option value="All">All</option>
                  {eventStatus.data.map((option) => (
                     <option key={option.key} value={option.key}>
                        {option.name}
                     </option>
                  ))}
               </select>
            </div>
            <div className="region-filter">
               Region
               <select value={selected.region} onChange={(e) => handleChange(e, "region")}>
                  <option value="All">All</option>
                  {regions.data.map((option) => (
                     <option key={option.key} value={option.key}>
                        {option.name}
                     </option>
                  ))}
               </select>
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
                                 <div className="experiences-list-card-user-img" style={{ backgroundImage: `url(${event.user.imageUrl})` }}>
                                 </div>
                                 <div className="experiences-list-card-info experiences-status-card" style={{ backgroundColor: eventStatus.data.find(status => status.key === event.status).color }}>
                                    {eventStatus.data.find(status => status.key === event.status).name}
                                 </div>
                              </div>
                           </div>
                           <div className="experiences-list-card-down">
                              <h3 className="experiences-list-card-title">{event.title}</h3>
                              <p>Start Date: {FormattedDate(event.startDate)}</p>
                              <p>End Date: {FormattedDate(event.endDate)}</p>
                              <div className="experiences-list-card-down-bot">
                                 <p className="experiences-list-card-location">{event.location}</p>
                                 <p className="experiences-list-card-price"><strong>{event.price} €</strong></p>
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
