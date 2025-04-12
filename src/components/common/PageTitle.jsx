import { 
    Box, 
    Flex, 
    Heading, 
    Breadcrumb, 
    BreadcrumbItem, 
    BreadcrumbLink,
    useBreakpointValue 
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import pageTitle from '../../assets/banner/page-title.jpg';
  import shape from '../../assets/shape/shape12.png';
  
  function PageTitle({ title = "About Us", breadcrumbs = [{ label: "Home", href: "/" }, { label: "About Us", href: "#" }] }) {
    const bgSize = useBreakpointValue({ base: "cover", md: "cover" });
    const height = useBreakpointValue({ base: "200px", md: "300px" });
    const titleSize = useBreakpointValue({ base: "2xl", md: "4xl" });
    const padding = useBreakpointValue({ base: 4, md: 8 });
    const shapeSize = useBreakpointValue({ base: "150px", md: "450px" });
  
    return (
      <Box 
        position="relative"
        width="100%"
        height={height}
        bgImage={`url(${pageTitle})`}
        bgSize={bgSize}
        bgPosition="center"
        bgRepeat="no-repeat"
        display="flex"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        {/* Dark overlay */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          bgColor="#1e364d"
          opacity="0.9"
          zIndex="0"
        />
        
       
        <Box
          position="absolute"
          width={shapeSize}
          height={shapeSize}
          bgImage={`url(${shape})`}
          bgSize="contain"
          bgPosition="center"
          bgRepeat="no-repeat"
          opacity="1" 
          zIndex="1"
        />
        
        <Box 
          maxWidth="1200px"
          width="100%"
          px={padding}
          zIndex="2"
        >
          <Flex 
            direction="column"
            alignItems="center"
            textAlign="center"
            position="relative"
          >
            <Heading as="h1" size={titleSize} color="white" mb={4}>
              {title}
            </Heading>
            
            <Breadcrumb 
              spacing="8px" 
              separator={<ChevronRightIcon color="gray.300" />}
              color="white"
            >
              {breadcrumbs.map((item, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === breadcrumbs.length - 1}>
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Flex>
        </Box>
      </Box>
    );
  }
  
  export default PageTitle;