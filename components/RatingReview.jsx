import {
  Heading,
  Progress,
  Stack,
  Text,
  Button,
  Divider,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiTwotoneStar, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

export default function RatingReview() {
  return (
    <Stack direction="row" px={16} py={10} spacing={18} width="100%">
      <Stack spacing={10} direction="row" width="80%">
        <Stack pr={10}>
          <Heading as="h2" size="3xl">
            4.8
          </Heading>
          <Stack direction="row">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiOutlineStar />
          </Stack>
          <Text>(1,968 Rating)</Text>
        </Stack>
        <Stack>
          <Stack direction="row" width="100%">
            <Stack direction="row" spacing={1} width="fit-content">
              <Text>5</Text>
              <AiFillStar fill="#E09523" />
            </Stack>
            <Box width="200px">
              <Progress value={80} bg="#E5E5E5" colorScheme="green" />
            </Box>
            <Text>80%</Text>
          </Stack>
          <Stack direction="row" width="100%">
            <Stack direction="row" spacing={1} width="fit-content">
              <Text>4</Text>
              <AiFillStar fill="#E09523" />
            </Stack>
            <Box width="200px">
              <Progress value={60} bg="#E5E5E5" colorScheme="green" />
            </Box>
            <Text>80%</Text>
          </Stack>
          <Stack direction="row" width="100%">
            <Stack direction="row" spacing={1} width="fit-content">
              <Text>3</Text>
              <AiFillStar fill="#E09523" />
            </Stack>
            <Box width="200px">
              <Progress value={20} bg="#E5E5E5" colorScheme="red" />
            </Box>
            <Text>80%</Text>
          </Stack>
          <Stack direction="row" width="100%">
            <Stack direction="row" spacing={1} width="fit-content">
              <Text>2</Text>
              <AiFillStar fill="#E09523" />
            </Stack>
            <Box width="200px">
              <Progress value={10} bg="#E5E5E5" colorScheme="red" />
            </Box>
            <Text>80%</Text>
          </Stack>
          <Stack direction="row" width="100%">
            <Stack direction="row" spacing={1} width="fit-content">
              <Text>1</Text>
              <AiFillStar fill="#E09523" />
            </Stack>
            <Box width="200px">
              <Progress value={50} bg="#E5E5E5" colorScheme="red" />
            </Box>
            <Text>80%</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack justifyContent="flex-end" pl={20}>
        <Button>Write A Review</Button>
      </Stack>
    </Stack>
  );
}
