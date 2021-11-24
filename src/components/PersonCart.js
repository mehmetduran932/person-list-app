import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'

export default function PersonCart({ removeItem, email, name, phone, users }) {
  return (
    <>
      <div>
        <Flex marginTop="5px">
          <Box
            p="4"
            bg="white.400"
            textAlign="left"
            marginBottom="5px"
            key={phone}
          >
            <h1>Ad Soyad: {name}</h1>
            <h1>Telefon Numarası: {phone}</h1>
            <h1>E-mail: {email}</h1>
            <Button
              w="350px"
              colorScheme="red"
              marginTop="10px"
              onClick={() => removeItem(users)}
            >
              Kişiyi Sil
            </Button>
          </Box>
        </Flex>
      </div>
    </>
  )
}
