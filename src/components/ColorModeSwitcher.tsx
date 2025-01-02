// filepath: /C:/works/projects/sns-app/sns-ui/src/components/ColorModeSwitcher.tsx
import { IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label='Toggle color mode'
      icon={colorMode === 'dark' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
    />
  )
}

export default ColorModeSwitcher
