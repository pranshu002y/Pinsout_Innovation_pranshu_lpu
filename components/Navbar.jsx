import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  return (
    <Box>
      <Stack direction="row" px={250} py={2}>
        <Button variant="ghost" _hover={{}} rightIcon={<IoIosArrowDown />}>
          English
        </Button>
        <Button variant="ghost" _hover={{}} rightIcon={<IoIosArrowDown />}>
          USD
        </Button>
      </Stack>
      <Divider border="2px" color="#E5E5E5" />
      <Stack direction="row" px={16} py={2}>
        <Stack direction="row">
          <Image src={logo} width={100} height={20} />
          <Button variant="ghost" _hover={{}}>
            Home
          </Button>
          <Button variant="ghost" _hover={{}}>
            School Uniform
          </Button>
          <Button variant="ghost" _hover={{}}>
            Corporate
          </Button>
          <Button variant="ghost" _hover={{}} color="#FA8158">
            Sports
          </Button>
          <Button variant="ghost" _hover={{}}>
            Blog
          </Button>
        </Stack>

        <Stack
          direction="row"
          justifyContent="flex-end"
          width="100%"
          spacing={5}
        >
          <FiSearch size="30px" />
          <FiHeart size="30px" />
          <FiShoppingCart size="30px" />
          <FiUser size="30px" />
        </Stack>
      </Stack>
      <Stack
        direction="row"
        backgroundColor="black"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Text color="white">
          Free Delivery on orders above Rs. 1000, DON’T MISS
        </Text>
        <Text color="#FA8158" textDecoration="underline">
          SHOP NOW
        </Text>
      </Stack>
      <Stack px={16} py={2}>
        <Text color="#A0A0A0">
          Home/Category Sports/
          <span
            style={{
              color: "#000",
            }}
          >
            Football Shirt
          </span>
        </Text>
      </Stack>
    </Box>
  );
}
