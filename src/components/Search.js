import React from 'react'
import { Input, Button, Box, Flex } from '@chakra-ui/react'
import '../../src/search.css'
export default function Search() {
  return (
    <div>
      <Flex marginTop="10px">
        <Box>
          <Input placeholder="Ad Soyad" w="220px" h="50px" />
        </Box>
        <Box>
          <Button w="150px" h="50px" colorScheme="blue" marginLeft="5px">
            Ara
          </Button>
        </Box>
      </Flex>
    </div>
  )
}
