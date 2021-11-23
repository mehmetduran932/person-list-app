import React from 'react'
import { Flex, Box, Button } from '@chakra-ui/react'
export default function ListPerson({ users, removeItem, name, phone, email }) {
  return (
    <div>
      {users.map((p) => (
        <Flex
          borderWidth="2px"
          marginTop="5px"
          borderColor="black"
          key={p.phone}
        >
          <Box p="4" bg="white.400" textAlign="left">
            <h1>Ad Soyad: {p.name}</h1>
            <h1>Telefon Numarası: {p.phone}</h1>
            <h1>E-mail: {p.email}</h1>
            <Button w="350px" colorScheme="red" onClick={() => removeItem(p)}>
              Kişiyi Sil
            </Button>
          </Box>
        </Flex>
      ))}
    </div>
  )
}
