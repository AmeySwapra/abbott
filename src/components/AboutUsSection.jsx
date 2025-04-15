import { Box, Container, Heading, Text, UnorderedList, ListItem, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import shape1 from '../assets/shape/shape6.png';
import shape2 from '../assets/shape/shape7.png';

const MotionBox = motion(Box);

const AboutUsSection = () => {
  const bgColor = useColorModeValue("#aee2e2", "gray.700");

  return (
    <Box position="relative" py={16} px={[4,8,16]} overflow="hidden" bg={bgColor}>
     
      <MotionBox
        position="absolute"
        top="10%"
        left="5%"
        w="1000px"
        h="900px"
        bgImage={`url(${shape1})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        zIndex={1} 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="5%"
        w="1000px"
        h="900px"
        bgImage={`url(${shape2})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        zIndex={1} 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
      />

      <Container maxW="container.xl" position="relative" zIndex={2}> 
        <Box textAlign="center" mb={12}>
          <Text fontSize="lg" color="#22b6af" fontWeight="semibold">
            ~~ Let Us Know ~~
          </Text>
          <Heading as="h2" size="xl" mt={2}>
            About Us
          </Heading>
        </Box>

        <Box 
          display="grid" 
          gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} 
          gap={6}
          position="relative"
          zIndex={2} 
        >
          {/* Mission */}
          <MotionBox
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5 }}
          >
            <Heading as="h4" size="md" textAlign="center" mb={4}>
              Mission
            </Heading>
            <Text>
              To serve Society by being a strong bond between the Chemical community and the Health Care
              industry, through absolute confidentiality and committed responses by dedicated and
              empowered personnel.
            </Text>
          </MotionBox>

          {/* Our Strength */}
          <MotionBox
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5 }}
          >
            <Heading as="h4" size="md" textAlign="center" mb={4}>
              Our Strength
            </Heading>
            <Text>
              Multistep synthesis of optically active molecules including asymmetric synthesis and
              generation of suitable and feasible chemistry for complex molecules.
            </Text>
          </MotionBox>

          {/* Main Agenda */}
          <MotionBox
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Heading as="h4" size="md" mb={4}>
              Main Agenda
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem fontWeight="bold">
                Production of the Prostaglandin intermediates in kilogram quantities.
              </ListItem>
              <ListItem>
                Custom synthesis of value added chemicals, bioactive molecules of pharmaceutical
                interest.
              </ListItem>
              <ListItem>
                Custom synthesis of organic chemicals for use in making metal-organic frameworks
                (MOFs) in the field of material science & engineering that have a rigid, cage-like
                structure that lends itself to a variety of applications, from gas storage to drug
                delivery
              </ListItem>
              <ListItem>
                Custom research for establishing suitable chemistry and development of suitable
                processes.
              </ListItem>
              <ListItem>Synthesis of low volume high value products.</ListItem>
            </UnorderedList>
          </MotionBox>

         
          <MotionBox
            p={6}
            bg="white"
            borderRadius="md"
            boxShadow="md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Heading as="h4" size="md" mb={4}>
              Practice at Abbott
            </Heading>
            <UnorderedList spacing={2}>
              <ListItem fontWeight="bold">
                Wide range of organic chemistry syntheses including synthetic planning and strategies,
                special organic reactions, development of custom methodologies, asymmetric synthesis,
                drug lead generation techniques, etc. operating in a safe and environment friendly
                manner.
              </ListItem>
              <ListItem>
                Expertise in handling highly chemistry intensive multistep synthesis of complex
                bioactive molecules.
              </ListItem>
              <ListItem>
                Highly specialized unit processes like Grignard reactions, hydrogenation reactions,
                Suzuki reaction, oxidations, epoxidations, Heck reaction and many more.
              </ListItem>
              <ListItem>GMP like</ListItem>
            </UnorderedList>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUsSection;