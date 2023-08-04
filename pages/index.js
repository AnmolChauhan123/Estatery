//This is our Homepage where we are starting our developement

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import Property from '@/Components/Property';
import Search from '@/Components/Search';


 //My Dummy Data
 const data = [
  {
      name : "Palm Fun",
      stars : "3 star",
      id : 1,
      image_URL: "https://r1imghtlak.mmtcdn.com/80de8864360911eb8a620242ac110003.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,14&output-format=webp",
      location: "Pune",
      price: 2000,
      type: "House",
      rooms: 4,
      baths: 2,
      area: 98.5,
      isVerified: true,
      title: "Fully Spacious and Clean"
  },
  {
    name : "Country Love",
      stars : "5 star",
      id : 2,
      image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201902011130039055-dd5f27ce168e11ea80a90242ac110002.jpg?&output-quality=75&downsize=583:388&output-format=webp",
      location: "Delhi",
      price: 20000,
      type: "House",
      rooms: 5,
      baths: 3,
      area: 89.2,
      isVerified: true,
      title: "Experience unparalleled luxury at this opulent property known for its pure veg dining options, well-appointed rooms, a lavish spa and world-class amenities."
},
{
  name : "Novotel",
  stars : "3 star",
  id : 3,
  image_URL: "https://r1imghtlak.mmtcdn.com/28af6938f43211ea9c450242ac110004.jfif?&output-quality=75&downsize=583:388&crop=583:388;0,48&output-format=webp",
  location: "Delhi",
  price: 15000,
  type: "House",
  rooms: 3,
  baths: 2,
  area: 66.5,
  isVerified: true,
  title: "Rejuvenate to new life"
},
{
name : "Pride Villa",
stars : "4 star",
id : 4,
image_URL: "https://r1imghtlak.mmtcdn.com/e3e11798805211e8b9110262b38ef0b6.jpg?&output-quality=75&downsize=583:388&crop=583:388;23,0&output-format=webp",
location: "Kolkata",
price: 12000,
type: "House",
rooms: 5,
baths: 4,
area: 99.8,
isVerified: true,
title: "Elevate Your Stay: Where Comfort Meets Luxury"
},
{
name : "Serenity Haven",
stars : "2 star",
id : 5,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701211455342954-05055f5a7efe11e58eff001ec9b85d13.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,87&output-format=webp",
location: "Pune",
price: 10000,
type: "House",
rooms: 4,
baths: 4,
area: 78.5,
isVerified: true,
title: "Unwind in Style: Your Tranquil Retreat Awaits"
},
{
name : "Harmony Villa",
stars : "2 star",
id : 6,
image_URL: "https://r1imghtlak.mmtcdn.com/c7ba06dc26d411eeb8550a58a9feac02.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,14&output-format=webp",
location: "Delhi",
price: 14500,
type: "House",
rooms: 6,
baths: 3,
area: 103.5,
isVerified: true,
title: "Discover Blissful Retreats: Find Your Perfect Escape Here"
},
{
name : "Rosewood Cottage",
stars : "3 star",
id : 7,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201602031653275794-65321b92df7311eda1fc0a58a9feac02.jpg?&output-quality=75&downsize=583:388&output-format=webp",
location: "Kolkata",
price: 5000,
type: "House",
rooms: 2,
baths: 1,
area: 58.5,
isVerified: true,
title: "Dream, Relax, Repeat: Experience Serenity Here"
},
{
name : "Moonlit Harbor Hideaway",
stars : "5 star",
id : 8,
image_URL: "https://r1imghtlak.mmtcdn.com/e5fdba6e33a511eb99ed0242ac110004.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,28&output-format=webp",
location: "Chennai",
price: 10000,
type: "House",
rooms: 3,
baths: 2,
area: 78.5,
isVerified: true,
title: "Where Comfort Knows No Bounds: Discover Your Sanctuary"
},
{
name : "Dreamcatcher Chalet",
stars : "4.5 star",
id : 9,
image_URL: "https://r1imghtlak.mmtcdn.com/bdaa9b3e7ed111e4b04fdaf4768ad8d9.jfif?&output-quality=75&downsize=583:388&crop=583:388;0,48&output-format=webp",
location: "Pune",
price: 15500,
type: "House",
rooms: 3,
baths: 2,
area: 65.5,
isVerified: true,
title: "Luxury Unveiled: Your Key to Opulent Living"
},
{
name : "Sunflower Cottage",
stars : "3 star",
id : 10,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201404262025206984-b863be10045c11ea80a30242ac110003.jpg?&output-quality=75&downsize=583:388&crop=583:388;3,0&output-format=webp",
location: "Kolkata",
price: 12340,
type: "House",
rooms: 5,
baths: 3,
area: 128.5,
isVerified: true,
title: "Seamless Comfort, Unforgettable Moments: Your Stay, Your Story"
},
{
name : "Misty Mountain Lodge",
stars : "3.5 star",
id : 11,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201106291102388268-bfe8140cd1fd11e89e650242ac110004.jpg?&output-quality=75&downsize=583:388&crop=583:388;53,0&output-format=webp",
location: "Chennai",
price: 6500,
type: "House",
rooms: 2,
baths: 2,
area: 58.5,
isVerified: true,
title: "Where Every Moment Resides: Welcome to Your Home in the City"
},
{
name : "Tranquil Meadows Estate",
stars : "4 star",
id : 12,
image_URL: "https://r1imghtlak.mmtcdn.com/8fa95acc210a11eb84d60242ac110002.jpeg?&output-quality=75&downsize=583:388&output-format=webp",
location: "Delhi",
price: 4000,
type: "House",
rooms: 2,
baths: 2,
area: 74,
isVerified: true,
title: "A World of Tranquility: Elevate Your Stay, Elevate Your Experience"
},
{
name : "Sunburst Sanctuary",
stars : "5 star",
id : 13,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201310291236003196-5ae94454ea2111e39e96baaf629e9523.jpg?&output-quality=75&downsize=583:388&output-format=webp",
location: "Chennai",
price: 25000,
type: "House",
rooms: 5,
baths: 3,
area: 148.5,
isVerified: true,
title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
},
{
name : "Starry Skies Residence",
stars : "5 star",
id : 14,
image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201905141416461036-4caffe7697ee11eda7bf0a58a9feac02.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,4&output-format=jpg",
location: "Delhi",
price: 4000,
type: "House",
rooms: 2,
baths: 2,
area: 68.5,
isVerified: true,
title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
},
{
  name : "Whispering Pines Cottage",
  stars : "5 star",
  id : 15,
  image_URL: "https://r1imghtlak.mmtcdn.com/757f1f84138a11ebad3e0242ac110003.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,24&output-format=jpg",
  location: "Delhi",
  price: 14000,
  type: "House",
  rooms: 5,
  baths: 3,
  area: 98.5,
  isVerified: true,
  title: "Serenity Beckons: Your Gateway to Relaxation and Delight"
  },
  {
    name : "Cedar Crest Lodge",
    stars : "5 star",
    id : 16,
    image_URL: "https://r1imghtlak.mmtcdn.com/6a653fe4d7ac11eabeec0242ac110005.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,9&output-format=jpg",
    location: "Delhi",
    price: 4500,
    type: "House",
    rooms: 3,
    baths: 2,
    area: 78.5,
    isVerified: true,
    title: "Beyond Lodging: Embrace the Extraordinary, Embrace the Comfort"
    },
    {
      name : "Sunburst Sanctuary",
      stars : "5 star",
      id : 17,
      image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201112131656408769-4be4980241cb11e5ab1d0015c5f4277e.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,14&output-format=jpg",
      location: "Kolkata",
      price: 9000,
      type: "House",
      rooms: 4,
      baths: 5,
      area: 88.5,
      isVerified: true,
      title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
      },
      {
        name : "Sunrise",
        stars : "5 star",
        id : 18,
        image_URL: "https://r1imghtlak.mmtcdn.com/4ca9a5786ceb11e7aa5e0a4cef95d023.jpg?&output-quality=75&downsize=583:388&output-format=webp",
        location: "Delhi",
        price: 5600,
        type: "House",
        rooms: 3,
        baths: 2,
        area: 78.5,
        isVerified: true,
        title: "Seamless Comfort, Unforgettable Moments: Your Stay, Your Story"
        },
        {
          name : "Fire Enclave",
          stars : "5 star",
          id : 19,
          image_URL: "https://r1imghtlak.mmtcdn.com/71645fbea8ad11eb92f50242ac110003.jpg?&output-quality=75&downsize=583:388&crop=583:388;0,34&output-format=webp",
          location: "Chennai",
          price: 13000,
          type: "House",
          rooms: 3,
          baths: 2,
          area: 95.5,
          isVerified: true,
          title: "Your Private Oasis: Indulge in the Art of Relaxation"
          },
          {
            name : "Valley",
            stars : "5 star",
            id : 20,
            image_URL: "https://r1imghtlak.mmtcdn.com/87402574c37f11eb84af0242ac110002.jpg?&output-quality=75&downsize=583:388&crop=583:388;34,0&output-format=webp",
            location: "Kolkata",
            price: 13000,
            type: "House",
            rooms: 4,
            baths: 4,
            area: 87,
            isVerified: true,
            title: "Seamless Comfort, Unforgettable Moments: Your Stay, Your Story"
            },
            {
              name : "Triveni",
              stars : "5 star",
              id : 21,
              image_URL: "https://r1imghtlak.mmtcdn.com/961b8d6a220911e8b874025f77df004f.jpg?&output-quality=75&downsize=583:388&output-format=webp",
              location: "Pune",
              price: 9000,
              type: "House",
              rooms: 4,
              baths: 2,
              area: 56.5,
              isVerified: true,
              title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
              },
              {
                name : "Angel",
                stars : "5 star",
                id : 22,
                image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201709111329095285-d97835a03fcd11e7876b0a9df65c8753.jpg?&output-quality=75&downsize=583:388&crop=583:388;96,0&output-format=webp",
                location: "Delhi",
                price: 14000,
                type: "House",
                rooms: 5,
                baths: 5,
                area: 88.5,
                isVerified: true,
                title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
                },
                {
                  name : "Maplewood Manor",
                  stars : "5 star",
                  id : 23,
                  image_URL: "https://r1imghtlak.mmtcdn.com/eec1139e237711e8ae140a4cef95d023.jpg?&output-quality=75&downsize=583:388&output-format=webp",
                  location: "Chennai",
                  price: 6500,
                  type: "House",
                  rooms: 3,
                  baths: 2,
                  area: 88.5,
                  isVerified: true,
                  title: "Evergreen Heights"
                  },
                  {
                    name : "Family",
                    stars : "5 star",
                    id : 24,
                    image_URL: "https://r1imghtlak.mmtcdn.com/eec1139e237711e8ae140a4cef95d023.jpg?&output-quality=75&downsize=583:388&output-format=webp",
                    location: "Delhi",
                    price: 8000,
                    type: "House",
                    rooms: 4,
                    baths: 2,
                    area: 56.5,
                    isVerified: true,
                    title: "Where Every Detail Speaks Luxury: Experience Elegance, Stay Extraordinary"
                    },
                    {
                      name : "Under the Sky",
                      stars : "5 star",
                      id : 25,
                      image_URL: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202109301930541946-17c1d01a205611eca2660a58a9feac02.jpg?&output-quality=75&downsize=583:388&crop=583:388;53,0&output-format=webp",
                      location: "Chennai",
                      price: 18000,
                      type: "House",
                      rooms: 7,
                      baths: 6,
                      area: 340,
                      isVerified: true,
                      title: "Discover Blissful Retreats: Find Your Perfect Escape Here"
                      },
]

export default function Home() {

  return (
    <Box width="100%">
      {/* My Search Logic */}
      <Search properties={data} />
    </Box>
  )
}