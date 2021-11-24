import React from 'react'
import { Flex, Box, Button, Spinner } from '@chakra-ui/react'

export default function PersonCart({ users, removeItem, loading }) {
  return (
    <>
      {loading ? (
        <div>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#61dafb"
            size="xl"
          />
        </div>
      ) : (
        <div>
          {users.map((p) => (
            <Flex marginTop="5px" key={p.phone}>
              <Box p="4" bg="white.400" textAlign="left" marginBottom="5px">
                <h1>Ad Soyad: {p.name}</h1>
                <h1>Telefon Numarası: {p.phone}</h1>
                <h1>E-mail: {p.email}</h1>
                <Button
                  w="350px"
                  colorScheme="red"
                  marginTop="10px"
                  onClick={() => removeItem(p)}
                >
                  Kişiyi Sil
                </Button>
              </Box>
            </Flex>
          ))}
        </div>
      )}
    </>
  )
}
