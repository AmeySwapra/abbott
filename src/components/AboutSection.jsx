import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Button,
    List,
    ListItem,
    Image,
  } from "@chakra-ui/react";
  import about from "../assets/resource/about.png";
  import shape1 from "../assets/shape/shape4.png";
  import shape2 from "../assets/shape/shape5.png";
  import { FaRegCircleCheck } from "react-icons/fa6";
  
  const AboutSection = () => {
    return (
      <Box as="section" overflowX={'hidden'} py={{ base: 10, md: 20 }} bg="white">
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
          <Grid
            templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
            gap={{ base: 10, lg: 12 }}
            alignItems="center"
          >
            {/* Content Column */}
            <GridItem>
              <Box>
                {/* Section Title */}
                <Box mb={4}>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color="#22b6af"
                    fontWeight="medium"
                    mb={2}
                  >
                    ~~ WELCOME TO
                  </Text>
                  <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4}>
                    Abbott Laboratories
                  </Heading>
                </Box>
  
                {/* Description */}
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium" mb={6}>
                  An R & D and Production unit in the area of Chemistry Intensive
                  sophisticated fine chemicals, functional molecules,
                  developmental research, and bioactive pharmaceutical products.
                  The group would supply and service its customers locally and
                  globally.
                </Text>
  
                {/* Practice List */}
                <Box mb={8}>
                  <Text fontWeight="bold" mb={4}>
                    Practice at Abbott
                  </Text>
                  <List spacing={4}>
                    {[
                      "Wide range of organic chemistry syntheses including synthetic planning and strategies, special organic reactions, development of custom methodologies, asymmetric synthesis, drug lead generation techniques, etc. operating in a safe and environment friendly manner.",
                      "Expertise in handling highly chemistry intensive multistep synthesis of complex bioactive molecules.",
                      "Highly specialized unit processes like Grignard reactions, hydrogenation reactions, Suzuki reaction, oxidations, epoxidations, Heck reaction and many more.",
                      "GMP like",
                    ].map((item, idx) => (
                      <ListItem key={idx}>
                        <Flex align="start" gap={3}>
                          <Box color="#22b6af" mt={1}>
                            <FaRegCircleCheck size={18} />
                          </Box>
                          <Text fontWeight="medium" fontSize={{ base: "md", md: "md" }}>
                            {item}
                          </Text>
                        </Flex>
                      </ListItem>
                    ))}
                  </List>
                </Box>
  
                {/* Read More Button */}
                <Button
                  as="a"
                  href="/about-us"
                  position="relative"
                  overflow="hidden"
                  color="white"
                  bg="#22b6af"
                  borderRadius="30px"
                  size="lg"
                  px={8}
                  _hover={{
                    color: "white",
                    _before: {
                      transform: "translateY(0)",
                    },
                  }}
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bg: "black",
                    zIndex: 0,
                    transition: "transform 0.4s ease",
                    transform: "translateY(-100%)",
                  }}
                  zIndex={1}
                  _after={{
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    zIndex: -1,
                  }}
                >
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Read More
                  </span>
                </Button>
              </Box>
            </GridItem>
  
            {/* Image Column */}
            <GridItem>
              <Box position="relative">
                {/* Decorative Shapes */}
                <Box position="absolute" w="100%" h="100%">
                  <Box
                    position="absolute"
                    w="300px"
                    h="100px"
                    bgImage={`url(${shape1})`}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    top="-20px"
                    left="-20px"
                    zIndex={1}
                  />
                  <Box
                    position="absolute"
                    w="300px"
                    h="100px"
                    bgImage={`url(${shape2})`}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                    bottom="-20px"
                    right="-20px"
                    zIndex={1}
                  />
                </Box>
  
                {/* Main Image */}
                <Box position="relative" zIndex={2}>
                  <Image
                    src={about}
                    alt="Abbott Laboratories"
                    w="100%"
                    h="auto"
                    borderRadius="md"
                  />
                </Box>
  
                {/* Experience Badge */}
                <Box
                  position="absolute"
                  right={{ base: 2, md: 8 }}
                  bottom={{ base: 2, md: 8 }}
                  bg="white"
                  p={{ base: 3, md: 4 }}
                  borderRadius="lg"
                  boxShadow="md"
                  zIndex={3}
                  textAlign="center"
                >
                  <Heading as="h2" size={{ base: "lg", md: "xl" }} color="blue.600">
                    10+
                  </Heading>
                  <Text fontWeight="medium" fontSize={{ base: "sm", md: "md" }} color="gray.600">
                    Years of exps
                  </Text>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    );
  };
  
  export default AboutSection;
  