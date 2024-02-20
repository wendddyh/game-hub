import { Box, HStack, Link} from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props{
  onSearch: (searchText:string) => void
}

const Header = ({onSearch}: Props) => (
  <HStack padding="10px" >
    <Link color='white' href= "">Home</Link>
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
  </HStack>
)

export default Header
