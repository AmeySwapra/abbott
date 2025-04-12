import { Box, Flex, Grid, GridItem, Heading, Text, Link, Divider, List, ListItem, Icon, Image } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUserAlt, FaHome, FaInfoCircle, FaBoxes, FaImages, FaAddressBook } from "react-icons/fa";
import { motion } from "framer-motion";
import shape1 from '../../assets/shape/shape1.png';

const Footer = () => {
 
  const rotateVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <Box  bg="#aee2e2" borderTop={'10px solid #22b6af'} borderTopColor="transparent" position="relative" overflow="hidden">
      {/* Decorative shapes */}
      <Box position="absolute" top="0" left="0" w="100%" h="100%" pointerEvents="none">
        <Box
          as={motion.div}
          position="absolute"
          top="10%"
          left="10%"
          w="100px"
          h="100px"
          bgImage={`url(${shape1})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          variants={rotateVariants}
          animate="animate"
        />
        <Box
          as={motion.div}
          position="absolute"
          bottom="10%"
          right="10%"
          w="80px"
          h="80px"
          bgImage={`url(${shape1})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          variants={rotateVariants}
          animate="animate"
        />
      </Box>

      {/* Footer Top */}
      <Box position="relative" zIndex="1" py={10}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, md: 6 }}
          >
            {/* Quick Links */}
            <GridItem>
              <Box>
                <Heading as="h4" fontSize="xl" mb={4}>
                  Quick Links
                </Heading>
                <List spacing={5}>
                  <ListItem>
                    <Flex align="center">
                      <Icon as={FaHome} mr={2} />
                      <Link href="/">Home</Link>
                    </Flex>
                  </ListItem>
                  <Divider my={2} />
                  <ListItem>
                    <Flex align="center">
                      <Icon as={FaInfoCircle} mr={2} />
                      <Link href="about-us">About Us</Link>
                    </Flex>
                  </ListItem>
                  <Divider my={2}/>
                  <ListItem>
                    <Flex align="center">
                      <Icon as={FaBoxes} mr={2} />
                      <Link href="product">Products</Link>
                    </Flex>
                  </ListItem>
                  <Divider my={2} />
                  <ListItem>
                    <Flex align="center">
                      <Icon as={FaImages} mr={2} />
                      <Link href="gallery">Gallery</Link>
                    </Flex>
                  </ListItem>
                  <Divider my={2} />
                  <ListItem>
                    <Flex align="center">
                      <Icon as={FaAddressBook} mr={2} />
                      <Link href="contact-us">Contact Us</Link>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </GridItem>

            {/* Contact Info */}
            <GridItem>
              <Box ml={{ md: "70px" }}>
                <Heading as="h2" fontSize="xl" mb={4}>
                  Contact Info
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <Flex align="flex-start">
                      <Icon as={FaUserAlt} mt={1} mr={3} />
                      <Text>Dr. R.B.Tejwani (Director)</Text>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="flex-start">
                      <Icon as={FaPhone} mt={1} mr={3} />
                      <Box>
                        <Link href="#">+919422882326</Link>
                        <br />
                        <Link href="#">+919422016742</Link>
                      </Box>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="flex-start">
                      <Icon as={FaEnvelope} mt={1} mr={3} />
                      <Box>
                        <Link href="#">abbottlab@gmail.com</Link>
                        <br />
                        <Link href="#">rajtejwani@rediffmail.com</Link>
                      </Box>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Flex align="flex-start">
                      <Icon as={FaMapMarkerAlt} mt={1} mr={3} />
                      <Text>
                        Abbott Laboratories
                        <br />
                        C-4/28, MIDC, Jejuri, Pune 412 303, MH, India.
                      </Text>
                    </Flex>
                  </ListItem>
                </List>
              </Box>
            </GridItem>

            {/* Location Map */}
            <GridItem>
              <Box ml={{ md: "70px" }}>
                <Heading as="h4" fontSize="xl" mb={4}>
                  Location Map
                </Heading>
                <Box
                  as="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484064.2669311831!2d73.53890013432687!3d18.585212398382463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2087779c213%3A0xbefbf7e2a6236a97!2sHygeia%20Laboratories!5e0!3m2!1sen!2sin!4v1680691996089!5m2!1sen!2sin"
                  width="100%"
                  height="250px"
                  border="0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box py={6} textAlign="center">
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            alignItems="center"
          >
            <GridItem>
              <Text>
                <Link href="index.php" fontWeight="bold">
                  AbbottLaboratories
                </Link>{" "}
                ©2023 All Rights Reserved
              </Text>
            </GridItem>
            <GridItem display={{ base: "none", md: "block" }} />
            <GridItem>
              <Text>
                Designed &amp; Developed By{" "}
                <Link href="https://www.swapratechnologies.com/" isExternal>
                  Swapra Technologies
                </Link>
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;