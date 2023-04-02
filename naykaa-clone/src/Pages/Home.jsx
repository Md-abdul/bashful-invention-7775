import React from 'react'
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Spacer,
  Text, Grid, GridItem 
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <Box>
        <Box  m={10}>
          <Image
            style={{ width: "100%", marginTop: "10px", }}
            src="https://images-static.nykaa.com/uploads/1b38d8d2-c4f1-46ca-9698-5394169fd8e7.png?tr=w-1200,cm-pad_resize"
            alt="Dan Abramov"
          />
        </Box>

        <Stack m={10} mt={10} direction="row" >
        <Image boxShadow='md' p='6' rounded='md' bg='white'
          style={{ width:'100%' }}
          src="https://images-static.nykaa.com/uploads/c2e6510d-e26b-4eb6-9af8-db8a0edec8f5.jpg?tr=w-700,cm-pad_resize"
          alt="Dan Abramov"
        />
        <Spacer />
        <Image boxShadow='md' p='6' rounded='md' bg='white'
          style={{ width:'100%' }}
          src="https://images-static.nykaa.com/uploads/29e748a5-2bb8-43d0-96a6-7729d1306eb3.gif?tr=w-700,cm-pad_resize"
          alt="Dan Abramov"
        />
      </Stack>

      <Box m={10}>
        <Image style={{ width:'100%' }} src="https://images-static.nykaa.com/uploads/ede59af5-1112-4c73-bbf8-e0aa0c08444b.jpg?tr=w-1200,cm-pad_resize"/>
      </Box>

      <Text fontSize={32} mt={-15}>Top brands</Text>

      <Grid m={10}templateColumns='repeat(3, 1fr)' gap={6}>
        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/e9753262-d8a7-4ea4-b886-15e874a30641.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Up To 30% Off <br/>On Entire Range</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/f1b10b71-ace8-4989-8df7-194e801842a3.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Up To 30% Off <br/>On Entire Range</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/ac02041b-c124-4661-887c-50dba86945c0.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Up To 30% Off <br/>On Entire Range</Text>
        </Box>
{/* 2 */}
        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/0996053a-0b84-4169-af26-600c1a7c3d3e.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Up To 35% Off<br/>Brighten Up This Season with Glycolic Bright</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/8fb9d09c-3220-4040-8fa0-1aa42e3790b2.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Buy 2, Pick 1 Free<br/>Foundation Sample on all Orders</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/47aedf75-00b5-4e0a-bc54-9e6f9dab3251.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Upto 30% Off + mini on Rs.299+<br/>Additional Bodycare kit on Rs499+</Text>
        </Box>
      

      {/* 2 */}
      <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/4567f5b5-bc64-4913-8e4c-97fe3756fd84.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Flat 20% Off + Free Face Scrub on Rs.799<br/>Gold Infused Skincare</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%'}} src="https://images-static.nykaa.com/uploads/e5bb4ccd-3dac-4ce9-9462-acfa00fb81dc.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Holiday Gifts Up To 40% off <br/>+ Exciting Offers on Purchase!</Text>
        </Box>

        <Box style={{border:'1px solid',}}>
        <Image style={{ width:'100%', }} src="https://images-static.nykaa.com/uploads/697352c8-e151-4e34-87ad-2ad6d5e4ed26.jpg?tr=w-400,cm-pad_resize"/>
        <Text mt={5}>Complete Your Party Look In Minutes<br/>With Huda Beauty's Lovefest Collection</Text>
        </Box>
      </Grid>

      <Box bg={"teal.100"} >
        <Text fontSize="6xl"
  fontWeight="sm">Everyday Essentials</Text>
            <Box m={10}>
            <Image  style={{width:"100%"}} src="https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-1200,cm-pad_resize"/>
            </Box>

            <Grid ml={-100} m={10}templateColumns='repeat(6, 1fr)' gap={-15}>
                <Box ><Image src="https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-240,cm-pad_resize"/>
                <Text fontSize={25} mt={2} >Moisturisers</Text>
                </Box> 

                <Box><Image src="https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-240,cm-pad_resize"/>
                <Text  fontSize={25} mt={2}>Bath & Body</Text>
                </Box>

                <Box><Image src="https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-240,cm-pad_resize"/>
                <Text fontSize={25} mt={2}>Face Washes</Text>
                </Box>

                <Box><Image src="https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-240,cm-pad_resize"/><Text fontSize={25} mt={2}>Budget Makeup</Text></Box>

                <Box><Image src="https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-240,cm-pad_resize"/><Text fontSize={25} mt={2}>Value Combo</Text></Box>

                <Box>
                  <Image src="https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-240,cm-pad_resize"/>
                  <Text fontSize={25} mt={2} color='red.250'>Shampoos & <br/> Conditioners</Text>
                </Box>
            </Grid>
    </Box>
    </Box>
  )
}
