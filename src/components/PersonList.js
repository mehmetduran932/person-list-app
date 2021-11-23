import React, { useEffect, useState } from 'react'
import { SearchIcon} from '@chakra-ui/icons'
import { connect } from 'react-redux'
import { getPerson, removePerson } from '../redux/personActions'
import { Flex, Box, IconButton, Input } from '@chakra-ui/react'
import { Scrollbars } from 'react-custom-scrollbars'
import '../../src/search.css'
import ListPerson from './ListPerson'

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
        <Box
          maxW="sm"
          borderWidth="1px"
          overflow="hidden"
          borderColor="black"
          borderRadius="lg"
        >
          <Flex className="text-font">
            <Box maxW="sm" borderColor="black" float="left">
              <div>
                <h1 className="text-font">Kişi Listesi</h1>
              </div>
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
                    onChange={(e) =>
                      setSearhInput(e.target.value.toUpperCase())
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
              <ListPerson
                name={users.name}
                email={users.email}
                phone={users.phone}
                removeItem={removeItem}
                users={users}
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
