import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { FaStar } from "react-icons/fa";
import testimonialBg from "../assets/banner/testimonial.jpg";
import userImg from "../assets/banner/user.jpg";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const bgColor = useColorModeValue("gray.100", "gray.800");
  const cardBg = useColorModeValue("white", "gray.700");
  const starColor = useColorModeValue("yellow.400", "yellow.300");

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore dolor magna aliqua ipsum suspen disse ultrices gravida Risus",
      author: "Vaibhav Z.",
      rating: 5,
    },
    {
      id: 2,
      text: "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore dolor magna aliqua ipsum suspen disse ultrices gravida Risus",
      author: "Pradnya R.",
      rating: 5,
    },
    {
      id: 3,
      text: "Lorem ipsum dolor amet consectet adipiscing sed do eiusmod tempor incididunt labore dolor magna aliqua ipsum suspen disse ultrices gravida Risus",
      author: "Rajashri A.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, testimonials.length]);

  return (
    <Box
      as="section"
      py={16}
      position="relative"
      bgImage={`url(${testimonialBg})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      ref={ref}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.600"
        zIndex={0}
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Box textAlign="center" mb={12}>
          <MotionText
            fontSize="lg"
            color="teal.300"
            fontWeight="semibold"
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 3 }}
          >
            Testimonials
          </MotionText>
          <MotionHeading
            size="xl"
            mt={2}
            color="white"
            initial={{ opacity: 0, y: 200 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 3, delay: 0.2 }}
          >
            What Our Clients Say?
          </MotionHeading>
        </Box>

        {/* Carousel Box */}
        <Box display="flex" justifyContent="center">
          <MotionBox
            key={testimonials[currentIndex].id}
            maxW={{ base: "300px", sm: "400px", md: "600px" }}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="xl"
            p={8}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <Stack direction="row" spacing={1} mb={4}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Box as={FaStar} key={i} color={starColor} />
              ))}
            </Stack>

            <Text fontSize="lg" mb={6} color="gray.600">
              {testimonials[currentIndex].text}
            </Text>

            <Box display="flex" alignItems="center">
              <Image
                src={userImg}
                alt={testimonials[currentIndex].author}
                borderRadius="full"
                boxSize="60px"
                objectFit="cover"
                mr={4}
              />
              <Heading as="h4" size="md">
                {testimonials[currentIndex].author}
              </Heading>
            </Box>
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
