import { Box,Image,Text } from "@chakra-ui/react"
import React from "react"

export const Header = ({times}:{times:string}) => {
    return (
        <Box
            width="100%"
            height={'100px'}
            bg={'black'}
            py='5px'
            px='10px'
            position={'fixed'}
            display={'flex'}
            justifyContent='space-between'
        >
            <Image
                width={'90px'}
                borderRadius='10px'
                src={'/zaki.png'}
            ></Image>
            <Text
                color={'red'}
                fontSize={'50px'}
            >
                {times}
            </Text>
            <Text
                color={'blue'}
                fontSize={'50px'}
            >
                <b>Zakiyama</b>
            </Text>
            <Text
                color={'green'}
                fontSize={'50px'}
            >
                App
            </Text>
        </Box>
    )
}