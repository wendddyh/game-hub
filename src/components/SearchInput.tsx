import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'


const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement><SearchIcon /></InputLeftElement>
      <Input variant="filled" placeholder="Search games.."/>
    </InputGroup>

  )
}

export default SearchInput
