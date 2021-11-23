import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPerson, removePerson } from "../redux/personActions";
import { Flex, Box, Button } from "@chakra-ui/react";
import Search from "./Search";
import { Scrollbars } from "react-custom-scrollbars";

function PersonList({ person, removePerson }) {
  console.log(person);
  useEffect(() => {}, [person]);

  const removeItem = (listItem) => {
    let filtered = [];
    filtered = person.filter((item) => item !== listItem);
    removePerson(filtered);
  };
  return (
    <div>
      <Flex h="900px" w="1500px" alignItems="center">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <h1>Kişi Listesi</h1>
          </Box>
          <Box w="600px">
            <Search />
          </Box>

          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            alignItems="center"
          >
            <Scrollbars
              style={{
                width: 380,
                height: 700,
                color: "black",
                float: "right",
              }}
            >
              {person.map((p) => (
                <Flex>
                  <Box p="4" bg="white.400" textAlign="left">
                    <h1>Ad Soyad: {p.name}</h1>
                    <h1>Telefon Numarası: {p.phone}</h1>
                    <h1>E-mail: {p.email}</h1>
                    <Button
                      w="350px"
                      colorScheme="red"
                      onClick={() => removeItem(p)}
                    >
                      Kişiyi Sil
                    </Button>
                  </Box>
                </Flex>
              ))}
            </Scrollbars>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
};
export default connect(mapStateToProps, { getPerson, removePerson })(
  PersonList
);
