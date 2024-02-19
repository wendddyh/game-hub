import { SearchIcon } from "@chakra-ui/icons"
import { Box, HStack, Link } from "@chakra-ui/react"


const Navbar = () => {
  return (
    <HStack spacing='20px' h='50px' >
      <Link color='white' href= "">Home</Link>
      {/* <Link color='white' href= "">TV Shows</Link>
      <Link color='white' href= "">Movies</Link>
      <Link color='white' href= "">New & Popular</Link>
      <Link color='white' href= "">My List</Link>
      <Link color='white' href= "">Browse by Languages</Link> */}
      <Box ><SearchIcon color='white' /></Box>
  </HStack>
)
}

export default Navbar
