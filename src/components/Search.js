import React from 'react'
import {
  Flex,
  Box,
  IconButton,
  Input,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function Search({ searchInput, setSearchInput, searchItem }) {
  return (
    <div>
      <Flex marginTop="10px">
        <Box>
          <Input
            placeholder="Ad Soyad"
            paddingLeft="20px"
            marginLeft="10px"
            w="280px"
            h="50px"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value.toUpperCase())}
          />
        </Box>
        <Box>
          <IconButton
            icon={<SearchIcon />}
            w="60px"
            h="50px"
            colorScheme="blue"
            marginLeft="5px"
            onClick={searchItem}
            className=".btn"
          >
            Ara
          </IconButton>
        </Box>
      </Flex>
    </div>
  )
}
