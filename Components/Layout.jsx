//The layout will be first our navigation bar, then our center body and then the footer

import React from 'react';
import Head from 'next/head';
import { Box, Flex} from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
        <Head>
            <title>
                Real Estate
            </title>
        </Head>

        <Flex alignItems='center'>
        <Box >
            <header>
                <Navbar/>
            </header>

            <main>
                { children }
            </main>

            <footer>
                <Footer />
            </footer>
        </Box>
        </Flex>
    </>
  )
}

export default Layout;