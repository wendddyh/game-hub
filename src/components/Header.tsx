import { Box, HStack, Link} from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { SearchIcon } from "@chakra-ui/icons"


const Header = () => (
  <HStack justifyContent= 'space-between' padding="10px" >
    <HStack spacing='20px' h='50px' >
      <Link color='white' href= "">Home</Link>
      <Box ><SearchIcon color='white' /></Box>
    </HStack>
    <ColorModeSwitch />
  </HStack>
)

export default Header
