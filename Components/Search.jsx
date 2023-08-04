import React, { useState } from 'react';
import { Flex, Box, Text, Icon, Select, Button } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import Image from 'next/image';
import noresult from '../assets/noresult.svg';
import Property from '@/Components/Property';

const Search = (props) => {
  const properties = props.properties;

  const [location, setLocation] = useState('all');
  const [price, setPrice] = useState('all');
  const [area, setArea] = useState('all');
  const [rooms, setRooms] = useState('all');
  const [baths, setBaths] = useState('all');

  const handleLocationChange = (event) => setLocation(event.target.value);
  const handlePriceChange = (event) => setPrice(event.target.value);
  const handleAreaChange = (event) => setArea(event.target.value);
  const handleRoomsChange = (event) => setRooms(event.target.value);
  const handleBathsChange = (event) => setBaths(event.target.value);

  const filteredData = properties.filter(item =>
    (location === 'all' || item.location === location) &&
    (price === 'all' || item.price >= price) &&
    (area === 'all' || item.area >= area) &&
    (rooms === 'all' || item.rooms >= rooms) &&
    (baths === 'all' || item.baths >= baths)
  );

  return (
    <Box>
      <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='40'
        alignItems="center"
      >
        <Text>Search Properties to Rent</Text>
        <Icon paddingLeft='2' w='20' as={BsFilter} />
      </Flex>

      <Flex bg="gray.100" p="4" justifyContent="center" flexWrap="wrap">
        <Box>
          <Select onChange={handleLocationChange} placeholder="Location" w='fit-content' p='3' value={location}>
          <option value="Pune" key="Pune">Pune</option>
          <option value="Kolkata" key="Kolkata">Kolkata</option>
          <option value="Delhi" key="Delhi">Delhi</option>
          <option value="Chennai" key="Chennai">Chennai</option>
          </Select>
        </Box>
        <Box>
          <Select onChange={handlePriceChange} placeholder="MinPrice" w='fit-content' p='3' value={price}>
            <option value="1000" key="1000">1000</option>
            <option value="2000" key="2000">2000</option>
            <option value="4000" key="4000">4000</option>
            <option value="8000" key="8000">8000</option>
            <option value="12000" key="12000">12000</option>
            <option value="14000" key="14000">14000</option>
            <option value="15000" key="15000">15000</option>
          </Select>
        </Box>
        <Box>
          <Select onChange={handleAreaChange} placeholder="MinArea" w='fit-content' p='3' value={area}>
            <option value="40" key="40">40</option>
            <option value="50" key="50">50</option>
            <option value="70" key="70">70</option>
            <option value="80" key="80">80</option>
            <option value="90" key="90">90</option>
            <option value="100" key="100">100</option>
            <option value="110" key="110">110</option>
            <option value="120" key="120">120</option>
          </Select>
        </Box>
        <Box>
          <Select onChange={handleRoomsChange} placeholder="MinRooms" w='fit-content' p='3' value={rooms}>
            <option value="1" key="1">1</option>
            <option value="2" key="2">2</option>
            <option value="3" key="3">3</option>
            <option value="4" key="4">4</option>
            <option value="5" key="5">5</option>
            <option value="6" key="6">6</option>
            <option value="7" key="7">7</option>
          </Select>
        </Box>
        <Box>
          <Select onChange={handleBathsChange} placeholder="MinBaths" w='fit-content' p='3' value={baths}>
            <option value="1" key="1">1</option>
            <option value="2" key="2">2</option>
            <option value="3" key="3">3</option>
            <option value="4" key="4">4</option>
            <option value="5" key="5">5</option>
            <option value="6" key="6">6</option>
            <option value="7" key="7">7</option>
          </Select>
        </Box>
      </Flex>

      {filteredData.length === 0 ? (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      ) : (
        <Flex flexWrap="wrap" justifyContent="space-around" paddingTop='5'>
          {filteredData.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      )}
    </Box>
  );
};

export default Search;
