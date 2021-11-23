import React from "react";
import { Input, Button, Box, Flex } from "@chakra-ui/react";
import "../../src/search.css";
export default function Search() {
  return (
    <div>
      <Flex>
        <Box>
          <Input placeholder="Ad Soyad" w="300px" h="50px" />
        </Box>
        <Box>
          <Button w="50px" h="50px" colorScheme="blue">
            Ara
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
