import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";

export default function RelateProd() {
  return (
    <Stack px={16} py={10} spacing={7}>
      <Stack justifyContext="center" alignItems="center">
        <Heading>Related Products</Heading>
      </Stack>
      <SimpleGrid spacing={10} columns={4}>
        <Box>
          <Image src={r1} alt="logo" />
          <Stack>
            <Text as="b">Embroidered baguette bag</Text>
            <Text color="#DB4444">$68.00</Text>
            <Stack direction="row">
              <Box
                bg="#A0BCE0"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
              <Box
                bg="#E07575"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Image src={r2} alt="logo" />
          <Stack>
            <Text as="b">Lace-up leather boots</Text>
            <Text>$68.00</Text>
            <Stack direction="row">
              <Box
                bg="#A0BCE0"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
              <Box
                bg="#E07575"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
            </Stack>
          </Stack>
        </Box>
        <Box>
          <Image src={r3} alt="logo" />
          <Stack>
            <Text as="b">Link chain necklace</Text>
            <Text>$68.00</Text>
          </Stack>
        </Box>
        <Box>
          <Image src={r4} alt="logo" />
          <Stack>
            <Text as="b">Long sleeve lyocell t-shirt</Text>
            <Text color="#DB4444">$68.00</Text>
            <Stack direction="row">
              <Box
                bg="#A0BCE0"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
              <Box
                bg="#E07575"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
              <Box
                bg="#0C8C6C"
                height="24px"
                width="24px"
                borderRadius="10px"
              ></Box>
            </Stack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}
