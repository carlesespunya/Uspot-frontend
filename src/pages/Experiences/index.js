
import './Experiences.css';
import { useQuery } from "@tanstack/react-query"
import fetchEvents from "./fetchers/events"
import { useSearchParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { types, eventStatus } from '../../data/globalData';
import FormattedDate from '../../utils/FormattedDate';
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
