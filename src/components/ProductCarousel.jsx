import { Box, Container, Heading, Text, Image, Button, useColorModeValue, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import shape1 from '../assets/shape/shape8.png';
import shape2 from '../assets/shape/shape9.png';
import shape3 from '../assets/shape/shape10.png';
import shape4 from '../assets/shape/shape11.png';
import favImg from '../assets/fav.png';


import product1 from '../assets/product/1.jpg';
import product2 from '../assets/product/2.jpg';
import product3 from '../assets/product/3.jpg';
import product4 from '../assets/product/4.jpg';
import product5 from '../assets/product/5.jpg';
import product6 from '../assets/product/6.jpg';
import product7 from '../assets/product/7.jpg';
import product8 from '../assets/product/8.jpg';
import product9 from '../assets/product/9.jpg';
import product10 from '../assets/product/10.jpg';
import product11 from '../assets/product/11.jpg';
import product12 from '../assets/product/12.jpg';
import product13 from '../assets/product/13.jpg';
import product14 from '../assets/product/14.jpg';
import product15 from '../assets/product/15.jpg';
import product16 from '../assets/product/16.jpg';
import product17 from '../assets/product/17.jpg';
import product18 from '../assets/product/18.jpg';
import product19 from '../assets/product/19.jpg';
import product20 from '../assets/product/20.jpg';
import product21 from '../assets/product/21.jpg';
import product22 from '../assets/product/22.jpg';

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProductCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const bgColor = useColorModeValue("white", "gray.800");
  const cardBg = useColorModeValue("#d8f5f5", "gray.700");
  const buttonBg = useColorModeValue("#f2f3f5", "teal.300");
  const buttonHoverBg = useColorModeValue("#22b6af", "teal.400");
  const arrowBg = useColorModeValue("whiteAlpha.800", "blackAlpha.800");

  const products = [
    {
      id: 1,
      image: product1,
      title: "(+/-) Corey Lactone diol / Hexahydro-5-hydroxyl-4- hydroxymethyl-2H- cyclopenta (b)-furan-2-one",
    },
    {
      id: 2,
      image: product2,
      title: "(-) Corey Lactone diol / (3aR,4S,5R,6aS)-(-)-Hexahydro-5-hydroxy-4-( hydroxymethyl)-2H- cyclopenta[b]furan-2-one",
    },
    {
      id: 3,
      image: product3,
      title: "(-) Corey Alcohol Benzoate Or 2H-Cyclopenta[b]furan-2-on,5-(benzoyloxy)hexahydro-4-(hydroxymethyl)[3aR-(3aα,4α ,5β,6aα )]",
    },
    {
      id: 4,
      image: product4,
      title: "(-) Corey Alcohol p-Phenyl Benzoate Or (3aR,4S,5R,6aS)-Hexahydro-4-hydroxymethyl-5-(4-phenylbenzoyloxy)cyclopenta[b]furan-2-one",
    },
    {
      id: 5,
      image: product5,
      title: "4-(R)-tert-butyldimethyl silyloxycyclopent-2-en-1-one",
    },
    {
      id: 6,
      image: product6,
      title: "Methyl-7-(-3-hydroxy-5-oxo-1cyclopentene-1-yl)-heptanoate",
    },
    {
      id: 7,
      image: product7,
      title: "(3aR,4R,5R,6aS)-2-Oxo-4-[(1E)-3-oxo-5-phenyl-1-penten-1-yl]hexahydro-2H-cyclopenta[b]furan-5-yl benzoate /LBE",
    },
    {
      id: 8,
      image: product8,
      title: "[(3aR,4R,5R,6aS)-4-[(3S)-3-hydroxy-5-phenylpent-1-enyl]-2-oxo-3,3a,4,5,6,6a-hexahydrocyclopenta[b]furan-5-yl] benzoate / LBA",
    },
    {
      id: 9,
      image: product9,
      title: "(+)-(3aR,4R,5r,6aS)-Hexahydro-5-hydroxy-4-[(1E,3R)-3-hydroxy-5-phenyl-1-pentenyl]-2H-cyclopenta[b]furan-2-one / BAP3",
    },
    {
      id: 10,
      image: product10,
      title: "(±)-7α-Triethylsilyloxy-6β-(3-oxo-4-m-chlorophenoxy-1E-butenyl)-2-oxabicyclo[3.3.0]octan-3-one OR CP6",
    },
    {
      id: 11,
      image: product11,
      title: "(1R,4S)-cis-4-Acetoxy-2-cyclopenten-1-ol",
    },
    {
      id: 12,
      image: product12,
      title: "(1S,4R)-4-hydroxycyclopent-2-en-1-yl acetate",
    },
    {
      id: 13,
      image: product13,
      title: "(4-Carboxybutyl)triphenylphosphonium bromide",
    },
    {
      id: 14,
      image: product14,
      title: "Dimethyl (2-oxo-4-phenylbutyl)phosphonate",
    },
    {
      id: 15,
      image: product15,
      title: "2 6-dibromonaphthalene-1 4 5 8-tetracarboxylic dianhydride",
    },
    {
      id: 16,
      image: product16,
      title: "1,4,5,8-Naphthalenetetracarboxylic dianhydride -NTCDA",
    },
    {
      id: 17,
      image: product17,
      title: "1,3,5 Trimethoxybenzene",
    },
    {
      id: 18,
      image: product18,
      title: "2,4,6-trihydroxy-1,3,5 benzenetricarbaldehyde",
    },
    {
      id: 19,
      image: product19,
      title: "4,4'-diaminoazobenzene",
    },
    {
      id: 20,
      image: product20,
      title: "1,3-Bis(4-(tert-butyl)phenyl)propan-2-one",
    },
    {
      id: 21,
      image: product21,
      title: "4,4′-diamino-2,2′-bipyridine",
    },
    {
      id: 22,
      image: product22,
      title: "Corey PG-lactone diol Or 5-hydroxy-4-[(E)-3-hydroxyoct-1-enyl]-3,3a,4,5,6,6a-hexahydrocyclopenta[b]furan-2-one",
    }
  ];

  const itemsPerPage = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? products.length - (products.length % itemsPerPage || itemsPerPage) : prevIndex - itemsPerPage
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <Box as="section" py={16} px={[4,8,16]} bg={bgColor} position="relative" overflow="hidden" ref={ref}>
     
      <MotionBox
        position="absolute"
        top="10%"
        left="5%"
        w={{ base: "150px", md: "200px" }}
        h={{ base: "150px", md: "200px" }}
        bgImage={`url(${shape1})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        initial={{ opacity: 0, rotate: 0 }}
        animate={isInView ? { opacity: 1, rotate: 360 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <MotionBox
        position="absolute"
        bottom="1%"
        right="5%"
        w={{ base: "150px", md: "200px" }}
        h={{ base: "150px", md: "200px" }}
        bgImage={`url(${shape2})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <MotionBox
        position="absolute"
        top="30%"
        right="10%"
        w={{ base: "100px", md: "150px" }}
        h={{ base: "100px", md: "150px" }}
        bgImage={`url(${shape3})`}
        bgSize="contain"
        bgRepeat="no-repeat"
        initial={{ opacity: 0, rotate: 0 }}
        animate={isInView ? { opacity: 1, rotate: 360 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Box textAlign="center" mb={12}>
          <Text fontSize="lg" color="teal.500" fontWeight="semibold">
            ~~ Let Us Know ~~
          </Text>
          <Heading as="h2" size="xl" mt={2}>
            Our Products
          </Heading>
        </Box>

        <Box position="relative">
          <IconButton
            aria-label="Previous slide"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={{ base: "-4", md: "-8" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            borderRadius="full"
            bg={arrowBg}
            boxShadow="md"
            onClick={prevSlide}
            display={{ base: "none", md: "flex" }}
          />

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)"
            }}
            gap={6}
            px={{ base: 2, md: 0 }}
          >
            {visibleProducts.map((product, index) => (
              <MotionBox
                key={product.id}
                bg={cardBg}
                borderRadius="md"
                boxShadow="lg"
                overflow="hidden"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 2, delay: index * 0.1 }}
              >
                <Box position="relative" h="250px" overflow="hidden">
                  <MotionImage
                    src={product.image}
                    alt={product.title}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="blackAlpha.600"
                    opacity={0}
                    _hover={{ opacity: 1 }}
                    transition="all 0.3s ease"
                  >
                    <Button
                      as="a"
                      href="product"
                      colorScheme="teal"
                      size="lg"
                      borderRadius="full"
                      px={8}
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>
                <Box p={6} position="relative">
                  <Box
                    position="absolute"
                    top={-6}
                    left="50%"
                    transform="translateX(-50%)"
                    w="50px"
                    h="50px"
                    bgImage={`url(${shape4})`}
                    bgSize="contain"
                    bgRepeat="no-repeat"
                  />
                  <Box textAlign="center" mb={4}>
                    <Image src={favImg} alt="Favorite" display="inline-block" w="30px" />
                  </Box>
                  <Heading as="h4" size="md" textAlign="center" mb={4} minH="60px">
                    {product.title}
                  </Heading>
                  <Box textAlign="center">
                    <Button
                      as="a"
                      href="product"
                      bg={buttonBg}
                      color="#22b6af"
                      _hover={{ bg: buttonHoverBg , color : 'white'}}
                      px={6}
                      py={3}
                      border={'1px solid #22b6af'}
                      borderRadius="30px"
                    >
                      Read More
                    </Button>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </Box>

          <IconButton
            aria-label="Next slide"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={{ base: "-4", md: "-8" }}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            borderRadius="full"
            bg={arrowBg}
            boxShadow="md"
            onClick={nextSlide}
            display={{ base: "none", md: "flex" }}
          />

          {/* Mobile arrows */}
          <Box display={{ base: "flex", md: "none" }} justifyContent="center" mt={6} gap={4}>
            <IconButton
              aria-label="Previous slide"
              icon={<ChevronLeftIcon />}
              borderRadius="full"
              bg={arrowBg}
              boxShadow="md"
              onClick={prevSlide}
            />
            <IconButton
              aria-label="Next slide"
              icon={<ChevronRightIcon />}
              borderRadius="full"
              bg={arrowBg}
              boxShadow="md"
              onClick={nextSlide}
            />
          </Box>

          {/* Dots indicator */}
          <Box display="flex" justifyContent="center" mt={6} gap={2}>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Box
                key={index}
                as="button"
                w="12px"
                h="12px"
                borderRadius="full"
                bg={currentIndex === index * itemsPerPage ? "#22b6af" : "gray.300"}
                onClick={() => setCurrentIndex(index * itemsPerPage)}
                _hover={{ bg: "#22b6af" }}
                transition="background 0.2s"
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductCarousel;