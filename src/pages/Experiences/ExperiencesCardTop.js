import React from "react";
import { types, eventStatus } from '../../data/globalData';

const findType = typeKey => {
  const type = types.data.find(t => t.key === typeKey);
  return type ? type : { name: "", color: "" };
};

const findStatus = statusKey => {
  const status = eventStatus.data.find(s => s.key === statusKey);
  return status ? status : { name: "", color: "" };
};

export default function ExperiencesCardTop({ event = {} }) {
  const { mediaUrls = [], type, sport, status, user = {} } = event;
  const [mediaUrl = ""] = mediaUrls;
  const { imageUrl = "" } = user;

  const { color: typeColor = "", name: typeName = "" } = findType(type);
  const { color: statusColor = "", name: statusName = "" } = findStatus(status);

  return (
    <div className="experiences-list-card-up" style={{ backgroundImage: `url(${mediaUrl})` }}>
      <div className="experiences-list-card-up-top">
        <div className="experiences-list-card-info" style={{ backgroundColor: typeColor }}>
          {typeName}
        </div>
        <div className="experiences-list-card-info text-white">
          {sport}
        </div>
      </div>
      <div className="experiences-list-card-up-top">
        <div className="experiences-list-card-user-img" style={{ backgroundImage: `url(${imageUrl})` }}>
        </div>
        <div className="experiences-list-card-info experiences-status-card" style={{ backgroundColor: statusColor }}>
          {statusName}
        </div>
      </div>
    </div>
  );
}
