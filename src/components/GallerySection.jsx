import { Box, SimpleGrid, Heading, Flex, Button, IconButton, Image } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const MotionBox = motion(Box);
const MotionImage = motion(Image); 

const GallerySection = () => {
  const galleryItems = [
    { id: 1, image: "/assets/images/gallery/1.jpg", category: "instrument" },
    { id: 2, image: "/assets/images/gallery/2.jpg", category: "instrument" },
    { id: 3, image: "/assets/images/gallery/3.jpg", category: "instrument" },
    { id: 4, image: "/assets/images/gallery/4.jpg", category: "instrument" },
    { id: 5, image: "/assets/images/gallery/5.jpg", category: "instrument" },
    { id: 6, image: "/assets/images/gallery/6.jpg", category: "laboratory" },
    { id: 7, image: "/assets/images/gallery/7.jpg", category: "laboratory" },
    { id: 8, image: "/assets/images/gallery/8.jpg", category: "laboratory" },
    { id: 9, image: "/assets/images/gallery/9.jpg", category: "laboratory" },
    { id: 10, image: "/assets/images/gallery/10.jpg", category: "instrument" },
    { id: 11, image: "/assets/images/gallery/11.jpg", category: "instrument" },
    { id: 12, image: "/assets/images/gallery/12.jpg", category: "instrument" },
    { id: 13, image: "/assets/images/gallery/13.jpg", category: "instrument" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3
      } 
    }
  };

  const hoverVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3 
      } 
    }
  };

  return (
    <Box py={12} px={{ base: 4, md: 8, lg: 24 }}>
      <Flex direction="column" align="center" mb={10}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Gallery
        </Heading>
        
        <Flex wrap="wrap" justify="center" gap={4}>
          <Button 
            variant={activeFilter === "all" ? "solid" : "outline"}
            colorScheme="blue"
            onClick={() => setActiveFilter("all")}
          >
            All Type
          </Button>
          <Button 
            variant={activeFilter === "laboratory" ? "solid" : "outline"}
            colorScheme="blue"
            onClick={() => setActiveFilter("laboratory")}
          >
            Laboratory
          </Button>
          <Button 
            variant={activeFilter === "instrument" ? "solid" : "outline"}
            colorScheme="blue"
            onClick={() => setActiveFilter("instrument")}
          >
            Instrument
          </Button>
        </Flex>
      </Flex>

      <AnimatePresence mode="wait">
        <MotionBox
          variants={container}
          initial="hidden"
          animate="show"
          key={activeFilter}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
            <AnimatePresence>
              {filteredItems.map((item) => (
                <MotionBox
                  key={item.id}
                  variants={itemVariants}
                  layout
                  position="relative"
                  overflow="hidden"
                  borderRadius="md"
                >
                  <MotionImage
                    src={item.image}
                    alt={`Gallery item ${item.id}`}
                    w="100%"
                    h="auto"
                    objectFit="cover"
                    variants={hoverVariants}
                    whileHover="hover"
                  />
                  <MotionBox
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="blackAlpha.600"
                    opacity={0}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <IconButton
                      aria-label="View image"
                      icon={<FaSearch />}
                      colorScheme="whiteAlpha"
                      variant="ghost"
                      fontSize="xl"
                      isRound
                      onClick={() => window.open(item.image, '_blank')}
                    />
                  </MotionBox>
                </MotionBox>
              ))}
            </AnimatePresence>
          </SimpleGrid>
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
};

export default GallerySection;