import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Text, Box, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import millify from 'millify';
import { GoVerified } from 'react-icons/go'; 

const Property = ({property}) => {

  return (
    
    <Flex flexWrap="wrap" w="420px" p="1" paddingTop="0" justifyContent="center" cursor="pointer" style={{borderRadius: '8px', border:'1px solid #ccc'}}>
      {/* //My Main body where all the cards are displayed */}
      <Box>
        <img src={property.image_URL} width={400} height={260} alt="house" style={{borderRadius: '8px'}}/>
      </Box>

      <Box w="full" >
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>

          {/* Price */}
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{property.isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'>INR {millify(property.price)}/month</Text>
          </Flex>
        </Flex>

        {/* Atomic values of properties */}
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.600'>
          {property.rooms}
          <FaBed /> | {property.baths} <FaBath /> | {millify(property.area)} sqft <BsGridFill />
          {property.location}
        </Flex>

        {/* title */}
        <Text fontSize='lg'>
          {property.title.length > 30 ? property.title.substring(0, 30) + '...' : property.title}
        </Text>
      </Box>
    </Flex>
  )
}

export default Property;