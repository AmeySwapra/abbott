import { Box, Flex, Image, Link, Button, Icon, Text } from '@chakra-ui/react';
import { MdEmail, MdPhone } from 'react-icons/md';
import logo from '../../assets/logo/logo.png'
const Topbar = () => {
  return (
    <Box bg="#e9f2f2" py={2} px={{base: 4, md: 8, lg :12}} boxShadow="dark-lg"> 
      <Box maxW="conatiner.xl" mx="auto" px={4}>
        <Flex justify="space-between" align="center" flexWrap="wrap">
          {/* Logo Box */}
          <Flex align="center">
            <Box bg="gray.100" w="40px" h="40px" mr={2} />
            <Image src={logo} alt="Logo" h="50px" />
          </Flex>

          {/* Info Box */}
          <Flex align="center" gap={6} flexWrap="wrap">
            <Flex align="center">
              <Icon as={MdEmail} boxSize={7} color="#22b6af" mr={1} />
              <Link href="#" fontWeight="bold">
                abbottlab@gmail.com
              </Link>
            </Flex>
            <Flex align="center">
              <Icon as={MdPhone} boxSize={7} color="#22b6af" mr={1} />
              <Link href="#" fontWeight="bold">
                +9194xxxxxxxx
              </Link>
            </Flex>
            <Button
              as="a"
              href="/contact-us"
              color="white"
              variant="solid"
              fontWeight="bold"
              bg='#22b6af'
              borderRadius={'30px'}
            >
              Join Research
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Topbar;
