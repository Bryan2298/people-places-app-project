import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'KLCC',
    description: 'Kuala Lumpur City Centre (KLCC) is a multipurpose development area in Kuala Lumpur, Malaysia. Designed to be a city within a city, the 100-acre site hosts the tallest twin buildings in the world, the fourth tallest hotel in the world, a shopping mall, office buildings and several hotels.',
    image: 'https://www.suriaklcc.com.my/wp-content/uploads/2022/01/Lake-Symphony.jpg',
    address: '241, Suria KLCC, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur',
    location: {
      lat: 3.1480804,
      lng: 101.6877864,
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Sunway Pyramid Mall',
    description: 'Sunway Pyramid is your Unique Lifestyle Adventure Shopping Mall with more than 1000 retailers waiting for you to shop, eat, relax and enjoy right here.',
    image: 'https://pixelab.com.co/wp-content/uploads/2020/02/Sunway-Pyramid-Mall-opt.jpg',
    address: '3, Jalan PJS 11/15, Bandar Sunway, 47500 Petaling Jaya, Selangor',
    location: {
      lat: 3.0720837,
      lng: 101.6041568,
    },
    creator: 'u2'
  }
]
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;