import {
    Box,
    Flex,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useBreakpointValue,
    Image,
    Link,
    Text
  } from "@chakra-ui/react";

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
  
  const ProductsTable = () => {
    
    const tableVariant = useBreakpointValue({ base: "simple", md: "striped" });
    const fontSize = useBreakpointValue({ base: "sm", md: "md" });
    const padding = useBreakpointValue({ base: 2, md: 4 });
    const imageSize = useBreakpointValue({ base: "80px", md: "120px" });
  
    
    const products = [
      {
        id: 1,
        image: product1,
        name: "(+/-)(Corey Lactone diol )/ Hexahydro-5-hydroxyl-4- hydroxymethyl-2H- cyclopenta (b)-furan-2-one",
        cas: "54423-47-1",
        mf: "C₈H₁₂O₄ / 172.18 AMU",
        purity: ">99.0%",
        chiral: "-",
        availability: "In stock: 30kg"
      },
      {
        id: 2,
        image: product2,
        name: "(-) Corey Lactone diol / (3aR,4S,5R,6aS)-(-)-Hexahydro-5-hydroxy-4-( hydroxymethyl)-2H- cyclopenta[b]furan-2-one",
        cas: "32233-40-2",
        mf: "C₈H₁₂O₄ / 172.18 AMU",
        purity: ">99.0%",
        chiral: "-",
        availability: "In stock: 30kg"
      },
      {
        id: 3,
        image: product3,
        name: "(-) Corey Alcohol Benzoate Or 2H-Cyclopenta[b]furan-2-on,5-(benzoyloxy)hexahydro-4-(hydroxymethyl)[3aR-(3aα,4α,5β,6aα)]",
        cas: "39746-00-4",
        mf: "C₁₅H₁₆O₅ / 276.28 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 20kg"
      },
      {
        id: 4,
        image: product4,
        name: "(-) Corey Alcohol p-Phenyl Benzoate Or (3aR,4S,5R,6aS)-Hexahydro-4-hydroxymethyl-5-(4-phenylbenzoyloxy)cyclopenta[b]furan-2-one",
        cas: "31752-99-5",
        mf: "C₂₁H₂₀O₅ / 352.38 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 1 kg"
      },
      {
        id: 5,
        image: product5,
        name: "4-(R)-tert-butyldimethylsilyloxycyclopent-2-en-1-one",
        cas: "61305-35-9",
        mf: "C₁₁H₂₀O₂Si / 212.36 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 5kg"
      },
      {
        id: 6,
        image: product6,
        name: "Methyl-7-(-3-hydroxy-5-oxo-1cyclopentene-1-yl)-heptanoate",
        cas: "40098-26-8",
        mf: "C₁₃H₂₀O₄ / 240.29 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 2kg"
      },
      {
        id: 7,
        image: product7,
        name: "(3aR,4R,5R,6aS)-2-Oxo-4-[(1E)-3-oxo-5-phenyl-1-penten-1-yl]hexahydro-2H-cyclopenta[b]furan-5-yl benzoate/ LBE",
        cas: "55076-60-3",
        mf: "C₂₅H₂₄O₅ / 404.455 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 2kg"
      },
      {
        id: 8,
        image: product8,
        name: "[(3aR,4R,5R,6aS)-4-[(3S)-3-hydroxy-5-phenylpent-1-enyl]-2-oxo-3,3a,4,5,6,6a-hexahydrocyclopenta[b]furan-5-yl] benzoate / LBA",
        cas: "55444-68-3",
        mf: "C₂₅H₂₆O₅ / 406.471 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 1kg"
      },
      {
        id: 9,
        image: product9,
        name: "(+)-(3aR,4R,5r,6aS)-Hexahydro-5-hydroxy-4-[(1E,3R)-3-hydroxy-5-phenyl-1-pentenyl]-2H-cyclopenta[b]furan-2-one / BAP3",
        cas: "41639-74-1",
        mf: "C₁₈H₂₂O₄ / 302.36 AMU",
        purity: ">98.0%",
        chiral: ">99.5%",
        availability: "In stock: 500gms\nUpto 1kg : One month\n5kg: Three months"
      },
      {
        id: 10,
        image: product10,
        name: "(±)-7α-Triethylsilyloxy-6β-(3-oxo-4-m-chlorophenoxy-1E-butenyl)-2-oxabicyclo[3.3.0]octan-3-one / CP6",
        cas: "-",
        mf: "C₂₃H₃₁O₅ClSi / 451.03 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 50gms\nUpto1kg : 2 months"
      },
      {
        id: 11,
        image: product22, 
        name: "Corey PG-lactone diol OR 5-hydroxy-4-[(E)-3-hydroxyoct-1-enyl]-3,3a,4,5,6,6a-hexahydrocyclopenta[b]furan-2-one",
        cas: "39182-59-7",
        mf: "C₁₅H₂₄O₄",
        purity: ">98.0%",
        chiral: "-",
        availability: "-"
      },
      {
        id: 12,
        image: product11, 
        name: "(1R,4S)-cis-4-Acetoxy-2-cyclopenten-1-ol",
        cas: "60176-77-4",
        mf: "C₇H₁₀O₃ / 142.152 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 20kg"
      },
      {
        id: 13,
        image: product12, 
        name: "(1S,4R)-4-hydroxycyclopent-2-en-1-yl acetate",
        cas: "60410-16-4",
        mf: "C₇H₁₀O₃ / 142.152 AMU",
        purity: ">98.0%",
        chiral: ">99.9%",
        availability: "In stock: 1kg"
      },
      {
        id: 14,
        image: product13, 
        name: "(4-Carboxybutyl)triphenylphosphonium bromide",
        cas: "17814-85-6",
        mf: "C₂₃H₂₄BrO₂P / 443.31 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 2kg"
      },
      {
        id: 15,
        image: product14, 
        name: "Dimethyl (2-oxo-4-phenylbutyl)phosphonate",
        cas: "41162-19-0",
        mf: "C₁₂H₁₇O₄P / 256.23 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 10kg"
      },
      {
        id: 16,
        image: product15, 
        name: "2,6-dibromonaphthalene-1,4,5,8-tetracarboxylic dianhydride",
        cas: "83204-68-6",
        mf: "C₁₄H₂Br₂O₆ / 425.97 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 100gms"
      },
      {
        id: 17,
        image: product16, 
        name: "1,4,5,8-Naphthalenetetracarboxylic dianhydride -NTCDA",
        cas: "81-30-1",
        mf: "C₁₄H₄O₆ / 268.18 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 500gms"
      },
      {
        id: 18,
        image: product17,
        name: "1,3,5 Trimethoxybenzene",
        cas: "621-23-8",
        mf: "C₉H₁₂O₃ / 168.19 AMU",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 1kg"
      },
      {
        id: 19,
        image: product18, 
        name: "2,4,6-trihydroxy-1,3,5 benzenetricarbaldehyde",
        cas: "34374-88-4",
        mf: "C₉H₆O₆",
        purity: ">97.0%",
        chiral: "-",
        availability: "In stock: 1kg"
      },
      {
        id: 20,
        image: product19, 
        name: "4,4'-diaminoazobenzene",
        cas: "538-41-0",
        mf: "C₁₂H₁₂N₄",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 3kg"
      },
      {
        id: 21,
        image: product20, 
        name: "1,3-Bis(4-(tert-butyl)phenyl)propan-2-one",
        cas: "64321-35-3",
        mf: "C₂₃H₃₀O",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 25gms\nUpto 5kg in 2months"
      },
      {
        id: 22,
        image: product21, 
        name: "4,4′-diamino-2,2′-bipyridine",
        cas: "18511-69-8",
        mf: "C₁₀H₁₀N₄",
        purity: ">98.0%",
        chiral: "-",
        availability: "In stock: 25gms"
      }
    ];
    
  
    
  
    return (
      <Box py={12} px={4}>
        <Box maxW="1200px" mx="auto">
          <Flex direction="column" align="center" mb={8}>
            <Text color="#22b6af" fontWeight="semibold" mb={2}>
             ~~ Let Us Know ~~
            </Text>
            <Heading as="h2" size="xl" textAlign="center">
              Our Products
            </Heading>
          </Flex>
  
          <Box overflowX="auto">
            <Table variant={tableVariant} size={fontSize}>
              <Thead bg="blue.50">
                <Tr>
                  <Th textAlign="center">Sr. No.</Th>
                  <Th textAlign="center">Molecular Structure</Th>
                  <Th textAlign="center">Product Name</Th>
                  <Th textAlign="center">CAS No</Th>
                  <Th textAlign="center">M.F./ M.W.</Th>
                  <Th textAlign="center">Purity (HPLC)</Th>
                  <Th textAlign="center">Chiral purity</Th>
                  <Th textAlign="center">Availability</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product) => (
                  <Tr key={product.id}>
                    <Td textAlign="center">{product.id}.</Td>
                    <Td textAlign="center">
                      <Link 
                        href={`/assets/images/product/${product.image}`} 
                        isExternal
                      >
                        <Image
                          src={product.image}
                          alt={`Product ${product.id}`}
                          maxW={imageSize}
                          mx="auto"
                          borderRadius="md"
                        />
                      </Link>
                    </Td>
                    <Td p={padding} dangerouslySetInnerHTML={{ __html: product.name }} />
                    <Td textAlign="center">{product.cas}</Td>
                    <Td textAlign="center" dangerouslySetInnerHTML={{ __html: product.formula }} />
                    <Td textAlign="center">{product.purity}</Td>
                    <Td textAlign="center">{product.chiral}</Td>
                    <Td textAlign="center">{product.availability}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default ProductsTable;