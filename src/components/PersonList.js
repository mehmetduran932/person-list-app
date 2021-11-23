import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPerson, removePerson } from '../redux/personActions'
import { Flex, Box, Button, Divider, Center, Input } from '@chakra-ui/react'
import Search from './Search'
import { Scrollbars } from 'react-custom-scrollbars'
import '../../src/search.css'

function PersonList({ person, removePerson }) {
  const [searchInput, setSearhInput] = useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    if (person) {
      setUsers(person)
    }
  }, [person])

  const removeItem = (listItem) => {
    let filtered = []
    filtered = person.filter((item) => item !== listItem)
    removePerson(filtered)
  }
  const searchItem = () => {
    if (searchInput.length === 0) {
      setUsers(person)
    } else {
      if (users?.length > 0) {
        const filtered = person.filter((user) =>
          user.name.toUpperCase().includes(searchInput)
        )
        setUsers(filtered)
        console.log(filtered)
      }
    }
  }

  useEffect(() => {
    if (searchInput.length === 0) {
      setUsers(person)
    }
  }, [searchInput])

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Flex h="900px" w="1500px" alignItems="center" borderColor="black">
        <Box maxW="sm" borderWidth="1px" overflow="hidden" borderColor="black">
          <Flex>
            <Box maxW="sm" borderColor="black">
              <h1 className="text-font">Kişi Listesi</h1>
            </Box>
          </Flex>

          <Center height="1px">
            <Divider orientation="horizontal" color="black" />
          </Center>
          <Flex marginTop="1px">
            <Box w="600px" h="70px" borderColor="black" marginTop="15px">
              <Flex marginTop="10px">
                <Box>
                  <Input
                    placeholder="Ad Soyad"
                    w="220px"
                    h="50px"
                    onChange={(e) =>
                      setSearhInput(e.target.value.toUpperCase())
                    }
                  />
                </Box>
                <Box>
                  <Button
                    w="150px"
                    h="50px"
                    colorScheme="blue"
                    marginLeft="5px"
                    onClick={searchItem}
                  >
                    Ara
                  </Button>
                </Box>
              </Flex>
            </Box>
          </Flex>

          <Box maxW="sm" overflow="hidden" alignItems="center" marginTop="15px">
            <Scrollbars
              style={{
                width: 380,
                height: 700,
                color: 'black',
                float: 'right'
              }}
            >
              {users.map((p) => (
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
  )
}
const mapStateToProps = (state) => {
  return {
    person: state.person
  }
}
export default connect(mapStateToProps, { getPerson, removePerson })(PersonList)
