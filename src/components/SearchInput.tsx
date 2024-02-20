import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'

interface Props{
  onSearch: (searchText:string) => void
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)


  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value)

    }}>
      <InputGroup>
        <InputLeftElement><SearchIcon /></InputLeftElement>
        <Input ref={ref} variant="filled" placeholder="Search games.."/>
      </InputGroup>
    </form>

  )
}

export default SearchInput
