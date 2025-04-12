import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Link,
  Card,
  CardBody,
  Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import banner from "../assets/banner/banner.jpg";
import pic1 from "../assets/banner/pic4.png";
import pic2 from "../assets/banner/pic2.png";
import pic3 from "../assets/banner/pic3.png";

const cards = [
  {
    id: 0,
    image: pic1,
    alt: "Image 1",
    title: "Abbott Laboratories",
    description:
      "An R & D and Production unit in the area of Chemistry. Intensive sophisticated fine chemicals, functional molecules, developmental research, and bioactive pharmaceutical products.",
  },
  {
    id: 1,
    image: pic2,
    alt: "Image 2",
    title: "Abbott Laboratories",
    description:
      "An R & D and Production unit in the area of Chemistry. Intensive sophisticated fine chemicals, functional molecules, developmental research, and bioactive pharmaceutical products.",
  },
  {
    id: 2,
    image: pic3,
    alt: "Image 3",
    title: "Abbott Laboratories",
    description:
      "An R & D and Production unit in the area of Chemistry. Intensive sophisticated fine chemicals, functional molecules, developmental research, and bioactive pharmaceutical products.",
  },
];

const RotatingImageCardSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState(0);

  const cardVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    exit: { y: -100, opacity: 0 },
  };

  const imageVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -50,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 50,
    }),
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentCard]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentCard(
      (prev) => (prev + newDirection + cards.length) % cards.length
    );
  };

  return (
    <Box
      position="relative"
      w="full"
      minH="100vh"
      py={16}
      px={[4, 8, 16]}
      backgroundImage={`url(${banner})`}
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      alignItems="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              bg="rgba(122, 200, 212, 0.7)"
              backdropFilter="blur(8px)"
              border="1px solid rgba(255,255,255,0.2)"
            >
              <CardBody p={0}>
                <Flex direction={{ base: "column", md: "row" }}>
                  <Box flex={1} p={8}>
                    <Text
                      fontSize={{ base: "sm", md: "md" }}
                      color="black"
                      fontWeight="medium"
                      mb={2}
                    >
                      ~~ WELCOME TO
                    </Text>
                    <motion.div
                      key={`title-${currentCard}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Heading
                        as="h2"
                        size={{ base: "xl", md: "4xl" }}
                        mb={10}
                        color="black"
                      >
                        {cards[currentCard].title}
                      </Heading>
                    </motion.div>
                    <motion.div
                      key={`desc-${currentCard}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Text mb={8} color="black" fontSize={"xl"}>
                        {cards[currentCard].description}
                      </Text>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Flex
                        gap={4}
                        direction={{ base: "column", md: "row" }} 
                        align="center" 
                        justify={{ base: "center", md: "flex-start" }} 
                        width="full" 
                      >
                        <Link
                          href="product"
                          width={{ base: "full", md: "auto" }}
                        >
                          {" "}
                         
                          <Button
                            color="white"
                            borderRadius="30px"
                            _hover={{ bg: "black", transition: "0.3s ease" }}
                            bg="#22b6af"
                            size="lg"
                            width={{ base: "full", md: "auto" }} 
                            px={{ base: 4, md: 8 }} 
                          >
                            Our Products
                          </Button>
                        </Link>

                        <Link
                          href="contact-us"
                          width={{ base: "full", md: "auto" }}
                        >
                          <Button
                            variant="outline"
                            borderRadius="30px"
                            borderColor="white"
                            color="white"
                            _hover={{ bg: "rgba(255,255,255,0.1)" }}
                            size="lg"
                            width={{ base: "full", md: "auto" }} 
                            px={{ base: 4, md: 8 }} 
                          >
                            Contact Us
                          </Button>
                        </Link>
                      </Flex>
                    </motion.div>
                  </Box>

                  {/* Image content (right side) */}
                  <Box flex={1} position="relative" minH="400px">
                    <AnimatePresence custom={direction}>
                      <motion.div
                        key={cards[currentCard].id}
                        custom={direction}
                        variants={imageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 2 },
                        }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "2rem",
                        }}
                      >
                        <Image
                          src={cards[currentCard].image}
                          alt={cards[currentCard].alt}
                          objectFit="contain"
                          maxH="350px"
                          w="full"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </Box>
                </Flex>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default RotatingImageCardSection;
