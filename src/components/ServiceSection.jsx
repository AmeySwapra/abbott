import { Box, Flex, Grid, GridItem, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { FaFlask, FaMicroscope, FaVial, FaBacteria } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import shape1 from '../assets/shape/shape3.png';
import shape2 from '../assets/shape/shape2.png';

const ServiceSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const zoomIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  const services = [
    {
      icon: FaFlask,
      title: "Pilot Plant",
      description: "with SS reactors (1000lts, 800lts, 300lts, 100lit), Glass reactors 100lts & 50 lts, Chilling plant, Boiler"
    },
    {
      icon: FaMicroscope,
      title: "R & D Process",
      description: "R & D / process development equipped with all general research equipments"
    },
    {
      icon: FaVial,
      title: "QC lab",
      description: "having in-house GC, HPLC, Karl Fischer etc"
    },
    {
      icon: FaBacteria,
      title: "Microbiology Lab",
      description: "having Fermenters (5lts, 20lts, 60lts & 600lts), Shaker, Laminar, autoclave etc"
    }
  ];

  return (
    <Box as="section" position="relative" bg='#e9f8f8' py={20} overflow="hidden" ref={ref}>
     
      <Box position="absolute" top="0" left="0" w="100%" h="100%" pointerEvents="none">
       
        <Box
          as={motion.div}
          initial="hidden"
          animate={controls}
          variants={zoomIn}
          position="absolute"
          w={{ base: "300px", md: "500px" }}  
          h={{ base: "300px", md: "500px" }}  
          bgImage={`url(${shape1})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          top="0"
          left="0"
          transform="translate(-20%, -20%)"  
        />
        
        
        <Box
          as={motion.div}
          initial="hidden"
          animate={controls}
          variants={zoomIn}
          position="absolute"
          w={{ base: "300px", md: "500px" }}  
          h={{ base: "300px", md: "500px" }}  
          bgImage={`url(${shape2})`}
          bgSize="contain"
          bgRepeat="no-repeat"
          bottom="0"
          right="0"
          transform="translate(20%, 20%)"  
        />
      </Box>


      <Box maxW="container.xl" mx="auto" px={{ base: 4, md: 6, lg: 12 }} position="relative" zIndex={1}>
       
        <Flex direction="column" align="center" textAlign="center" mb={{ base: 8, md: 12 }}>
          <Heading as="h6" size="md" color="#22b6af" mb={2}>
            ~~ Laboratory Services ~~
          </Heading>
          <Heading as="h2" size="xl">
            Facilities
          </Heading>
        </Flex>

       
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 6, md: 8 }}
        >
          {services.map((service, index) => (
            <GridItem key={index}>
              <Box
                as={motion.div}
                initial="hidden"
                animate={controls}
                custom={index}
                variants={fadeInUp}
                bg="white"
                color='gray.700'
                p={6}
                borderRadius="lg"
                border='2px solid #22b6af'
                boxShadow="lg"
                h="100%"
                position="relative"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '0%',
                  bg: '#22b6af',
                  zIndex: 0,
                  transition: 'all 0.5s ease'
                }}
                _hover={{
                  color: 'white',
                  '&:before': {
                    height: '100%'
                  },
                  '& svg': {
                    color: 'white'
                  },
                  transform: 'translateY(-5px)'
                }}
                transition="all 0.3s ease"
              >
                <Flex direction="column" align="center" textAlign="center" h="100%" position="relative" zIndex={1}>
                  <Icon as={service.icon} boxSize={10} color="#22b6af" mb={4} />
                  <Heading as="h4" size="md" mb={3}>
                    <Link href="#" _hover={{ textDecoration: "none" }}>
                      {service.title}
                    </Link>
                  </Heading>
                  <Text flex={1}>{service.description}</Text>
                </Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceSection;