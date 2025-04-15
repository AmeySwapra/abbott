import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";


const MotionBox = motion(Box);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          key="scroll-button"
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -1000, opacity: 0 }}
          transition={{ duration: 1.5 }}
          position="fixed"
          bottom="30px"
          right="30px"
          zIndex="10"
        >
          <IconButton
            aria-label="Scroll to top"
            icon={<ChevronUpIcon color="#22b6af" />}
            size="lg"
            fontSize="24px"
            border="8px dotted #22b6af"
            _hover={{ bg: "#f0f0f0" }}
            _active={{ bg: "#e0e0e0" }}
            onClick={scrollToTop}
            w="50px"
            h="50px"
            borderRadius="full"
          />
        </MotionBox>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
