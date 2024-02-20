import { Box, HStack, Link} from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


const Header = () => (
  <HStack padding="10px" >
    <Link color='white' href= "">Home</Link>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
)

export default Header
