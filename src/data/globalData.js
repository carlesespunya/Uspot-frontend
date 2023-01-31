const types = {
   header: 'A wide variety of sport experiences',
   data: [
      {
         name: 'Course',
         key: 'Course',
         img: '',
         color: '#BDE6F1'
      },
      {
         name: 'Competition',
         key: 'Tournament',
         img: '',
         color: '#FF9B37'
      },
      {
         name: 'Sport Day',
         key: 'Day',
         img: '',
         color: '#FFDEBD'
      },
      {
         name: 'Sport Trip',
         key: 'Trip',
         img: '',
         color: '#40798C'
      }]
};

const sports = {
   header: 'Discover our sports',
   data: [
      {
         name: 'Surf',
         key: 'Surf',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673739/agua-como_hacer_412719155_127734818_1706x960_fh8kmx.jpg',
         color: '#FF9B37'
      },
      {
         name: 'Wind Surf',
         key: 'Wind Surf',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673627/surfing_Windsurf_JTCE_gr_epr5bb.jpg',
         color: '#FF9B37'
      },
      {
         name: 'Paddle Surf',
         key: 'Paddle Surf',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673627/th_5d7ff76d89cf8_bw3plq.jpg',
         color: '#FFDEBD'
      },
      {
         name: 'Kayak',
         key: 'Kayak',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673627/excursion-en-kayak-1_ohewnk.webp',
         color: '#261F1D'
      },
      {
         name: 'Cycling',
         key: 'Cycling',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674733515/8368_lj13sb.webp',
         color: '#261F1D'
      },
      {
         name: 'Motocross',
         key: 'Motocross',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674733516/Motocross_-MC_450F_Factory_Edition_-MC_250F_Factory_Edition_-2023-Action_quwlgc.jpg',
         color: '#261F1D'
      },
      {
         name: 'Mountain Skiing',
         key: 'Mountain Skiing',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674733515/muntania-skimo-portada_qk6wue.jpg',
         color: '#261F1D'
      },
      {
         name: 'Scuba Diving',
         key: 'Scuba Diving',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673627/TICKET-DIVING-Camping-Barcelona-scaled_klatoh.jpg',
         color: '#261F1D'
      },
      {
         name: 'Kite Surf',
         key: 'Kite Surf',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1674673627/KiteSurf-en-Castelldefels_ejsnul.jpg',
         color: '#261F1D'
      },
      {
         name: 'Other',
         key: 'Other',
         img: '',
         color: '#261F1D'
      }]
}


const regions = {
   header: 'Discover our sports',
   data: [
      {
         name: 'Barcelona',
         key: 'Barcelona',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081876/GettyImages-1392907424_inck5f.webp',
         color: '#BDE6F1'
      },
      {
         name: 'Griona',
         key: 'Griona',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081876/Girona-Spain-Onar-River_oan9pd.webp',
         color: '#FF9B37'
      },
      {
         name: 'Costa Brava',
         key: 'Costa Brava',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081876/296750458_10158559514491651_8942039791004225615_n-2022-08-15-08-30-30-e1661251941501-759x495_uzjjbh.jpg',
         color: '#FFDEBD'
      },
      {
         name: 'La Cerdanya',
         key: 'La Cerdanya',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081875/lles-top_w42l0s.jpg',
         color: '#261F1D'
      },
      {
         name: 'Illes Balears',
         key: 'Illes Balears',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081875/balears_n8icvq.jpg',
         color: '#261F1D'
      },
      {
         name: 'Lleida',
         key: 'Lleida',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081875/rincones-de-lleida_zyerz4.jpg',
         color: '#261F1D'
      },
      {
         name: 'Tarragona',
         key: 'Tarragona',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081875/f710b8f3-city-40385-1717ca7b5af_g1ftxx.jpg',
         color: '#261F1D'
      },
      {
         name: 'Andorra',
         key: 'Andorra',
         img: 'https://res.cloudinary.com/dk5b5onpr/image/upload/v1675081875/pistas-de-esqui-en-andorra_ygwy3d.jpg',
         color: '#261F1D'
      },
      {
         name: 'Other',
         key: 'Other',
         img: '',
         color: '#261F1D'
      }
   ]
}

const bookingStatus = {
   data: [
      {
         name: 'Accepted',
         key: 'Accepted',
         img: '',
         color: '#4FA941'
      }, {
         name: 'Pending',
         key: 'Pending',
         img: '',
         color: '#4FA941'
      }, {
         name: 'Canceled',
         key: 'Canceled',
         img: '',
         color: '#4FA941'
      }
   ]
}
const eventStatus = {
   data: [
      {
         name: 'Open Spots',
         key: 'Open',
         img: '',
         color: '#4FA941'
      },
      {
         name: 'Fully Booked',
         key: 'Full',
         img: '',
         color: '#58595B'
      },
      {
         name: 'Started',
         key: 'Started',
         img: '',
         color: '#F47920'
      },
      {
         name: 'Finished',
         key: 'Finished',
         img: '',
         color: '#261F1D'
      },
      {
         name: 'Canceled',
         key: 'Canceled',
         img: '',
         color: '#58595B'
      }
   ]
}


export { types, sports, regions, bookingStatus, eventStatus }
