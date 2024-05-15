import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton
  } from '@chakra-ui/react'
 import { HamburgerIcon } from '@chakra-ui/icons'
  import React from 'react'
  
  /**   
  * @author
  * @function HamburgerMenu
  **/
  
  export const HamburgerMenu = () => {
    return(
        <Menu backgroundColor={'white'} color='black'>
        <MenuButton
          width={'10%'}
          backgroundColor={'white'}
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />  
        <MenuList backgroundColor={'white'} color='black'>
          <MenuItem >
            Apple Tv+
          </MenuItem>
          <MenuItem >
            Mls Season Pass
          </MenuItem>
          
        </MenuList>
      </Menu>
     )
    }
  