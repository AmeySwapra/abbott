import {
    Box,
    Flex,
    Icon,
    Text,
    Input,
    Button,
    Grid,
    GridItem,
    Image,
    FormControl,
    FormLabel,
    Checkbox,
    Textarea,
    HStack,
    VStack,
    Stack,
  } from '@chakra-ui/react';
  import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaSyncAlt } from 'react-icons/fa';
  import { useState } from 'react';
  import contactgif from '../assets/resource/contact-us.gif'
  
  const ContactSection = () => {
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaError, setCaptchaError] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (parseInt(captchaAnswer) !== 6) {
        setCaptchaError(true);
        return;
      }
      setCaptchaError(false);
     
    };
  
    return (
      <Box py={10} px={{ base: 4, md: 10 }} bg="white">
        {/* Contact Info */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          wrap="wrap"
          gap={6}
          mb={10}
        >
          <Box flex="1"  p={5} bg="white" shadow="dark-lg" borderRadius="md">
            <Icon as={FaMapMarkerAlt} boxSize={6} color="red.500" mb={2} />
            <Text fontWeight="bold">Office Location</Text>
            <Text>
              Abbott Laboratories C-4/28, MIDC,
              Jejuri, Pune 412 303, MH, India.
            </Text>
          </Box>
          <Box flex="1" p={5} bg="white" shadow="dark-lg" borderRadius="md">
            <Icon as={FaPhoneAlt} boxSize={6} color="red.500" mb={2} />
            <Text fontWeight="bold">Phone Number</Text>
            <Text>
              <a >+91 9422882326</a><br />
              <a >+91 9422016742</a>
            </Text>
          </Box>
          <Box flex="1" p={5} bg="white" shadow="dark-lg" borderRadius="md">
            <Icon as={FaEnvelope} boxSize={6} color="red.500" mb={2} />
            <Text fontWeight="bold">Email Address</Text>
            <Text>
              <a href="#">abbottlab@gmail.com</a><br />
              <a href="#">rajtejwani@rediffmail.com</a>
            </Text>
          </Box>
        </Flex>
  
        {/* Form and Image */}
        <Grid templateColumns={{ base: '1fr', md: '2fr 3fr' }} gap={10}>
          {/* Image */}
          <GridItem>
            <Image  src={contactgif} alt="Contact" />
          </GridItem>
  
          {/* Form */}
          <GridItem as="form"  onSubmit={handleSubmit} encType="multipart/form-data">
            <Stack spacing={4}>
              <HStack spacing={4} flexWrap="wrap">
                <Input name="name"  placeholder="Enter Your Name" required />
                <Input name="cname" placeholder="Enter Company Name" required />
              </HStack>
              <HStack spacing={4} flexWrap="wrap">
                <Input
                  name="phone"
                  type="number"
                  maxLength="15"
                  placeholder="Enter Phone Number"
                  required
                />
                <Input name="email" type="email" placeholder="Enter Email" required />
              </HStack>
              <HStack spacing={4} flexWrap="wrap">
                <Input name="pname" placeholder="Enter Product Name" required />
                <Input name="city" placeholder="Enter City Name" required />
              </HStack>
  
              <Checkbox
                name="contact_me_by_fax_only"
                value="1"
                display="none"
                tabIndex={-1}
                autoComplete="off"
              />
  
              <Textarea
                name="msg"
                placeholder="Drop Your Message Here"
                required
                height="100px"
              />
  
              <FormControl>
                <FormLabel>Upload File</FormLabel>
                <Input type="file" name="file" />
              </FormControl>
  
              {/* Simple Captcha */}
              <FormControl>
                <FormLabel fontWeight="bold">Just to prove you are a human?</FormLabel>
                <HStack>
                  <Text>1</Text>
                  <Text>+</Text>
                  <Text>5</Text>
                  <Text>=</Text>
                  <Input
                    type="text"
                    size="sm"
                    width="60px"
                    maxLength={2}
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    required
                  />
                  <Icon as={FaSyncAlt} />
                </HStack>
                {captchaError && (
                  <Text color="red.500" fontSize="sm">
                    Incorrect value
                  </Text>
                )}
              </FormControl>
  
              <Button colorScheme="red" type="submit" width="150px">
                Submit
              </Button>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    );
  };
  
  export default ContactSection;
  