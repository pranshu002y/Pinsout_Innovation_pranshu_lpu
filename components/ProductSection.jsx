import {
  Box,
  Button,
  Divider,
  GridItem,
  Heading,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import main from "../assets/main.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import { BsShareFill } from "react-icons/bs";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";

export default function ProductSection() {
  return (
    <SimpleGrid spacing={10} px={16} py={10} columns={2}>
      <GridItem>
        <Stack height="100%" width="100%">
          <Stack>
            <Image src={main} alt="logo" />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Image src={one} alt="logo" />
            <Image src={two} alt="logo" />
            <Image src={three} alt="logo" />
            <Image src={four} alt="logo" />
            <Image src={five} alt="logo" />
          </Stack>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack>
          <Text color="#A0A0A0">CLOTHING</Text>
          <Stack direction="row" width="100%">
            <Heading>Leather Boots With Tall Leg</Heading>
            <Box pl="40%" justifyContent="center" alignItem="center">
              <BsShareFill size={20} />
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack direction="row">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
            </Stack>
            <Text>(1,234 review)</Text>
            <Text pl={7}>
              <span color="black">SKU</span>: A515-56-36UT
            </Text>
            <Text color="#3DAB25" pl={7}>
              In Stock
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Heading color="#F3692E">$68.00</Heading>
            <Text color="#A0A0A0" pl={7}>
              <del>$98.00</del>
            </Text>
            <Tooltip
              pl={7}
              bg="linear-gradient(95.86deg, #FA6C58 0%, #FA6C58 109.07%);"
              hasArrow
              label="Save $12"
              isOpen
              placement="right-end"
            >
              <Text></Text>
            </Tooltip>
          </Stack>
          <Stack width="50%">
            <Text color="#616161">
              The garments labelled as Committed are products that have been
              produced using sustainable fibres or processes, reducing their
              environmental impact.
            </Text>
          </Stack>
          <Divider variant='solid' size='20px' borderColor='#E5E5E5'  />
          <Stack direction="row" width="100%">
            <Box width="50%">
              <Heading>Sold It:</Heading>
            </Box>
            <Box width="50%">
              <Stack spacing={1}>
                <Progress value={80} bg='#E5E5E5'  colorScheme='orange'/>
                <Text>
                  Avaliable:<span style={{ color: "#3DAB25" }}>20</span>
                </Text>
              </Stack>
            </Box>
          </Stack>
          <Stack direction="row" spacing={20}>
            <Stack>
              <Text color='black' fontSize='xl'>Hurry Up!</Text>
              <Text color='black' fontSize='xl'>Offer Ends In:</Text>
            </Stack>
            <Stack direction="row">
              <Box background="#E5E5E5" color="black" width='60px' justifyContent="center" alignItem="center" borderRadius="10%">
                <Text fontSize='2xl' color='black' pl={3} pt={2}>12</Text>
                <Text pl={2} pb={2}>Days</Text>
              </Box>
              <Text pt={3} fontSize='3xl'>:</Text>
              <Box background="#E5E5E5" color="black" width='60px' justifyContent="center" alignItem="center" borderRadius="10%">
                <Text fontSize='2xl' color='black' pl={3} pt={2}>03</Text>
                <Text pl={2} pb={2}>Hours</Text>
              </Box>
              <Text pt={3} fontSize='3xl'>:</Text>
              <Box background="#E5E5E5" color="black" width='60px' justifyContent="center" alignItem="center" borderRadius="10%">
                <Text fontSize='2xl' color='black' pl={3} pt={2}>14</Text>
                <Text pl={2} pb={2}>Mins</Text>
              </Box>
              <Text pt={3} fontSize='3xl'>:</Text>
              <Box background="#E5E5E5" color="black" width='60px' justifyContent="center" alignItem="center" borderRadius="10%">
                <Text fontSize='2xl' color='black' pl={3} pt={2}>21</Text>
                <Text pl={2} pb={2}>Sec</Text>
              </Box>
             
            </Stack>
          </Stack>
          <Divider borderColor='#E5E5E5'  />
          <Stack>
            <Text as='b' textDecoration='bold'>Size: M</Text>
            <Stack direction="row" alignItems='center' px={3}>
              <Box border='3px solid green' p={2} >XS</Box>
              <Box border='1px solid #E5E5E5' p={2}>S</Box>
              <Box border='1px solid #E5E5E5' p={2} bg=' linear-gradient(94.41deg, #FA6C58 8.77%, #FA9158 99.95%, #FA9258 99.96%, #FA9258 99.97%, rgba(250, 108, 88, 0) 99.98%, #FA6C58 99.99%)'>M</Box>
              <Box border='1px solid #E5E5E5' p={2}>L</Box>
              <Box border='1px solid #E5E5E5' p={2}>XL</Box>
              <Box border='1px solid #E5E5E5' p={2}>XXL</Box>
              <Text>
                <u>View Size Guide</u>
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Text as='b'>Quantity:</Text>
            <Stack direction="row" alignItems='center'>
              <Button width='40px' border='1px solid #E5E5E5'>-</Button>
              <Text width='50px' pl={5} >1</Text>
              <Button width='40px' height='40px' background="linear-gradient(94.41deg, #FA6C58 8.77%, #FA9158 99.95%, #FA9258 99.96%, #FA9258 99.97%, rgba(250, 108, 88, 0) 99.98%, #FA6C58 99.99%);">
                +
              </Button>
              <Button width='184px' height='40px' background="linear-gradient(94.41deg, #FA6C58 8.77%, #FA9158 99.95%, #FA9258 99.96%, #FA9258 99.97%, rgba(250, 108, 88, 0) 99.98%, #FA6C58 99.99%);">
                Add to
              </Button>
              <Button>
                <IoSwapHorizontalSharp />
              </Button>
              <Button>
                <AiOutlineHeart />
              </Button>
            </Stack>
          </Stack>
          <Text py={3}>Ready to ship | Order today</Text>
          <Divider />
          <Stack>
            <Heading color="black">Get It Today</Heading>
            <Stack direction="row" pt={5}>
              <FaShippingFast size={30}/>
              <Stack pl={5} >
                <Text>Fast Shipping</Text>
                <Text>Free Delivery When order from $500.</Text>
              </Stack>
            </Stack>
            <Stack direction="row" pt={2}>
              <TbReplace size={30} />
              <Stack pl={5} >
                <Text>100 - Day Returns</Text>
                <Text>
                  Not impressed? Get a refund. You have 100 days to break our
                  hearts.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </GridItem>
    </SimpleGrid>
  );
}
