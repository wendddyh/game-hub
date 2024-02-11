import {HStack, Switch, useColorMode } from "@chakra-ui/react"


const ColorModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} >Dark Mode </Switch>


    </HStack>

  )
}

export default ColorModeSwitch
