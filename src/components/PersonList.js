import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPerson, removePerson } from '../redux/personActions'
import { Flex, Box, Heading, useToast } from '@chakra-ui/react'
import { Scrollbars } from 'react-custom-scrollbars'
import '../../src/style.css'
import PersonCart from './PersonCart'
import Search from './Search'

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
      description: 'Kişi Silindi',
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
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      className="top-space"
    >
      <Flex h="100%" w="100%" alignItems="center" borderColor="black">
        <Box
          maxW="sm"
          borderWidth="1px"
          overflow="hidden"
          borderColor="#61dafb"
          borderRadius="lg"
        >
          <Flex className="text-font">
            <Box maxW="sm" float="left">
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
            <Box w="100%" h="100%" borderColor="black" marginTop="15px">
              <Search
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                searchItem={searchItem}
              />
            </Box>
          </Flex>

          <Box w="100%" overflow="hidden" alignItems="center" marginTop="15px">
            <Scrollbars
              style={{
                width: 382,
                height: '25em',
                color: 'black',
                float: 'right'
              }}
            >
              {users.map((user, index) => (
                <PersonCart
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  removeItem={removeItem}
                  users={user}
                  loading={loading}
                  key={index}
                />
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
