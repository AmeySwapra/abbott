import {
    Box,
    Flex,
    HStack,
    IconButton,
    Link,
    useDisclosure,
    VStack,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack,
    Text,
    Spacer,
    Heading,
  } from '@chakra-ui/react';
  import { FaFacebookF, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
  import { HamburgerIcon } from '@chakra-ui/icons';
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Products', href: '/product' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact-us' },
  ];
  
  const socialLinks = [
    { icon: FaFacebookF, href: '#' },
    { icon: FaLinkedin, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaWhatsapp, href: '#' },
  ];
  
  const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="white" boxShadow="md" position="sticky" top="0" zIndex="999">
        <Flex
          justify="space-between"
          align="center"
          px={{ base: 4, md: 8 }}
          py={3}
          maxW="1200px"
          mx="auto"
        >
          {/* Mobile Toggler */}
          <IconButton
            icon={<HamburgerIcon />}
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            aria-label="Open Menu"
            variant="ghost"
          />
  
          {/* Navigation (Desktop) */}
          <HStack
            as="nav"
            spacing={6}
            display={{ base: 'none', md: 'flex' }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                fontWeight="medium"
                _hover={{ textDecoration: 'none', color: 'blue.500' }}
              >
                {item.label}
              </Link>
            ))}
          </HStack>
  
          {/* Social Icons */}
          <HStack spacing={4}>
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} isExternal>
                <Box as={social.icon} fontSize="lg" />
              </Link>
            ))}
          </HStack>
        </Flex>
  
        {/* Drawer for Mobile Nav */}
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="#061a3a" color="white">
            <DrawerCloseButton color="white" />
            <DrawerBody display="flex" flexDirection="column" justifyContent="space-between" py={6}>
              <VStack spacing={4} align="start">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    fontWeight="medium"
                    fontSize="lg"
                    onClick={onClose}
                    _hover={{ textDecoration: 'none', color: 'gray.300' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
  
              <Box mt={10}>
                <Heading as='h4' fontSize="xl">Contact Info</Heading>
                <Text fontSize="lg" color="gray.300">Email: abbottlab@gmail.com</Text>
                <Text fontSize="lg" color="gray.300">Phone: +9194xxxxxxxx</Text>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  };
  
  export default Header;
  