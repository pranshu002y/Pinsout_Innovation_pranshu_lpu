import { Input, Stack, Text, Divider } from "@chakra-ui/react";
import React from "react";
import { FaPinterestP } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <Stack px={16} py={10} bg='black'>
      <Stack bg="black" color="white" height="30vh" direction="row">
        <Stack px={10} py={7} spacing={5}>
          <Text fontSize="2xl">Sign Up Today and get </Text>
          <Text fontSize="2xl">Rs. 200 off On your first order.</Text>
          <Input
            placeholder="Enter your email address"
            width="100%"
            bg="white"
          />
          <Stack direction="row">
            <FiFacebook size={25} />
            <AiOutlineInstagram size={25} />
            <AiOutlineYoutube size={25} />
            <AiOutlineTwitter size={25} />
            <FaPinterestP size={25} />
          </Stack>
        </Stack>
        <Stack
          px={16}
          py={10}
          direction="row"
          justifyContent="space-evenly"
          width="100%"
        >
          <Stack>
            <Text as="b">Collection</Text>
            <Text>Clothing</Text>
            <Text>Tops</Text>
            <Text>Sweaters</Text>
            <Text>Dresses</Text>
            <Text>Shoes</Text>
          </Stack>
          <Stack>
            <Text as="b">Company</Text>
            <Text>Career at Toppers </Text>
            <Text>About Toppers</Text>
            <Text>Contact Us</Text>
            <Text>Gift Cards</Text>
            <Text>Blog</Text>
          </Stack>
          <Stack>
            <Text as="b">Collection</Text>
            <Text>Clothing</Text>
            <Text>Tops</Text>
            <Text>Sweaters</Text>
            <Text>Dresses</Text>
            <Text>Shoes</Text>
          </Stack>
          <Stack>
            <Text as="b">Collection</Text>
            <Text>Clothing</Text>
            <Text>Tops</Text>
            <Text>Sweaters</Text>
            <Text>Dresses</Text>
            <Text>Shoes</Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack bg="black" color="white" px={16} py={10}>
        <Divider width="100%" bg="white" />
        <Text>
          © 2022 <b>Company Name.</b> All Rights Reserved.
        </Text>
      </Stack>
    </Stack>
  );
}
