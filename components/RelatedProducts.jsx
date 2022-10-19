import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  TableContainer,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { GiCottonFlower } from "react-icons/gi";

export default function RelatedProducts() {
  return (
    <Stack>
      <Stack direction="row" justifyContent="center" spacing={30}>
        <Text fontSize="2xl" color="black">
          <u>Description</u>
        </Text>
        <Text fontSize="2xl">Specifications</Text>
        <Text fontSize="2xl">Review</Text>
      </Stack>
      <Stack direction="row" marginTop={10}>
        <Stack width="40%" marginRight="30%" px={10} py={10}>
          <Text as="b">About This Products</Text>
          <Text color="#616161">
            Keep your home organized, yet elegant with storage cabinets by H&N
            Patio Furniture. These cabinets not only make a great storage units,
            but also bring a great decorative accent to your decor.
            Traditionally designed, they are perfect to be used in the hallway,
            living room, bedroom, office or any place where you need to store or
            display things. Made of high quality materials, they are sturdy and
            durable for years. Bring one-of-a-kind look to your interior with
            furniture from H&N Patio Furniture!
          </Text>
          <Text as="b">Indochine Style</Text>
          <Text color="#616161">
            Indochine style Interior design is a mix of traditional Asian
            nostalgia and French romance. This skillfully crafted cabinet will
            perfectly enhance your indoor furnishing, while leaving a
            long-lasting impression and a traditional accent.
          </Text>
          <Text as="b">Features Products</Text>
          <Text color="#616161">
            Explore the many possibilities of transforming your home with our
            Decor Transfers. Exceptionally detailed, gorgeously composed and
            effortlessly easy to apply, these transfers will transform your
            living space.
          </Text>
        </Stack>
        <Stack pt={7}>
          <TableContainer>
            <Table variant="striped" colorScheme="gray" size="lg">
              <Tbody>
                <Tr width="30px">
                  <Td fontSize="lg" color="black">
                    <Text as="b"> Rating </Text>
                  </Td>
                  <Td>
                    <Stack direction="row">
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiTwotoneStar />
                      <AiOutlineStar />
                      <Text>(1,234)</Text>
                    </Stack>
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as="b"> Outer Shell </Text>
                  </Td>
                  <Td>100% polyester</Td>
                </Tr>
                <Tr>
                  <Td>
                    {" "}
                    <Text as="b"> Lining </Text>
                  </Td>
                  <Td>100% polyurethane</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as="b"> Size </Text>
                  </Td>
                  <Td>Grey, Red, Blue, Black</Td>
                </Tr>
                <Tr>
                  <Td>
                    <Text as="b"> Color </Text>
                  </Td>
                  <Td>S,M,L,XL</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
      <SimpleGrid columns={4} px={16} py={10}>
        <GridItem height="30%" width="40%" m={3}>
          <Box mb={4}>
            <FaShippingFast size={50} />
          </Box>
          <Box mb={4}>
            <Text as="b" size="xl">
              Shipping Faster
            </Text>
          </Box>
          <Text color="#616161">
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </GridItem>
        <GridItem height="30%" width="40%">
          <Box mb={4}>
            <GiCottonFlower size={50} />
          </Box>
          <Box mb={4}>
            <Text as="b" size="xl" pb={7}>
              Cotton Material
            </Text>
          </Box>
          <Text color="#616161">
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </GridItem>
        <GridItem height="30%" width="40%">
          <Box mb={4}>
            <MdOutlineVerified size={50} />
          </Box>
          <Box mb={4}>
            <Text as="b" size="xl">
              High Quality
            </Text>
          </Box>
          <Text color="#616161">
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </GridItem>
        <GridItem height="30%" width="40%">
          <Box mb={4}>
            <FaLeaf size={50} />
          </Box>
          <Box mb={4}>
            <Text as="b" size="xl">
              highly compatible
            </Text>
          </Box>
          <Text color="#616161">
            Use on walls, furniture, doors and many more surfaces. The
            possibilities are endless.
          </Text>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}
