import { HStack} from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import Navbar from "./Navbar"


const Header = () => (
  <HStack bg='black' justifyContent= 'space-between' padding="10px" >
    <Navbar />
    <ColorModeSwitch />
  </HStack>
)

export default Header
