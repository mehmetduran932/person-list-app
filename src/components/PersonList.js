import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPerson, removePerson } from '../redux/personActions'
import {
  Flex,
  Box,
  IconButton,
  Input,
  Heading,
  useToast
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars'
import '../../src/search.css'
import PersonCart from './PersonCart'

function PersonList({ person, removePerson }) {
  const [searchInput, setSearchInput] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const toast = useToast()
  useEffect(() => {
    if (person) {
      setUsers(person)
      setLoading(false)
    }
  }, [person])
  const removeItem = (listItem) => {
    let filtered = []
    filtered = person.filter((item) => item !== listItem)
    removePerson(filtered)
    toast({
      description: 'Person Deleted',
      status: 'error',
      duration: 9000,
      position: 'top-right',
      isClosable: true
    })
    setSearchInput('')
  }
  const searchItem = () => {
    if (searchInput.length === 0) {
      setUsers(person)
      setSearchInput('')
    } else {
      if (users?.length > 0) {
        const filtered = person.filter((user) =>
          user.name.toUpperCase().includes(searchInput)
        )
        setUsers(filtered)
      }
    }
  }
  useEffect(() => {
    if (searchInput.length === 0) {
      setUsers(person)
    }
  }, [searchInput])

  function re() {
    setLoading(true)
    setInterval(function () {
      setLoading(false)
    }, 1000)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Flex h="900px" w="1500px" alignItems="center" borderColor="black">
        <Box
          maxW="sm"
          borderWidth="1px"
          overflow="hidden"
          borderColor="#61dafb"
          borderRadius="lg"
        >
          <Flex className="text-font">
            <Box maxW="sm" borderColor="black" float="left">
              <Heading
                className="heading"
                size="lg"
                fontSize="35px"
                onClick={() => re()}
              >
                Kişi Listesi
              </Heading>
            </Box>
          </Flex>

          <Flex marginTop="1px">
            <Box w="600px" h="70px" borderColor="black" marginTop="15px">
              <Flex marginTop="10px">
                <Box>
                  <Input
                    placeholder="Ad Soyad"
                    paddingLeft="20px"
                    marginLeft="10px"
                    w="280px"
                    h="50px"
                    value={searchInput}
                    onChange={(e) =>
                      setSearchInput(e.target.value.toUpperCase())
                    }
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
                  >
                    Ara
                  </IconButton>
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
              <PersonCart
                name={users.name}
                email={users.email}
                phone={users.phone}
                removeItem={removeItem}
                users={users}
                loading={loading}
              />
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
