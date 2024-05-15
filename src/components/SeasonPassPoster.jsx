import {Flex,Box,Image,Button,Link,Heading} from '@chakra-ui/react'


export default function SeasonPassPoster(){


    return(
        <>
        <Flex
        padding={'2%'}
        alignItems={'center'}
        justifyContent={"center"}
        backgroundColor={"black "}
        color={"white"}
        >
            <Flex
            alignItems={'center'}
            >
        
        <Heading size='lg'   noOfLines={2} >Season <br/>Pass</Heading>
        </Flex>
        <Heading as='h5' size={['xs','md','lg']}
        margin={'3rem'}
        >Every match. Every club. No blackouts. Only on Apple TV.</Heading>
        <Box>
            <Button backgroundColor={'white'} color={"black"}>Subscribe</Button>
            


        </Box>


        </Flex>
        
        </>
    )
}