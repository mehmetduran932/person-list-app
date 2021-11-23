import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPerson, removePerson } from "../redux/personActions";
import { Flex, Box, Button, Divider, Center } from "@chakra-ui/react";
import Search from "./Search";
import { Scrollbars } from "react-custom-scrollbars";
import "../../src/search.css";

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
      <Flex h="900px" w="1500px" alignItems="center" borderColor="black">
        <Box maxW="sm" borderWidth="1px" overflow="hidden" borderColor="black">
          <Flex>
            <Box maxW="sm" borderColor="black">
              <div className="h1-yasla">
                <h1 className="text-font">Kişi Listesi</h1>
              </div>
            </Box>
          </Flex>

          <Center height="1px">
            <Divider orientation="horizontal" color="black" />
          </Center>
          <Flex marginTop="1px">
            <Box w="600px" h="70px" borderColor="black" marginTop="15px">
              <Search />
            </Box>
          </Flex>

          <Box maxW="sm" overflow="hidden" alignItems="center" marginTop="15px">
            <Scrollbars
              style={{
                width: 380,
                height: 700,
                color: "black",
                float: "right",
              }}
            >
              {person.map((p) => (
                <Flex borderWidth="2px" marginTop="5px" borderColor="black">
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
