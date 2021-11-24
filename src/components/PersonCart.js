import React from 'react'
import { Flex, Box, Button, Spinner } from '@chakra-ui/react'

export default function PersonCart({
  removeItem,
  loading,
  email,
  name,
  phone,
  users
}) {
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
            key={phone}
          />
        </div>
      ) : (
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
      )}
    </>
  )
}
