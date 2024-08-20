/* eslint-disable react/jsx-key */
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DrawerExample({ restaurants }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Рестораны</DrawerHeader>
          {restaurants?.map((restauran) => (
            <Button onClick={(()=>navigate(`/restauran/${restauran.id}`))} variant='outline' >
              {restauran.name}
            </Button>
          ))}

          <DrawerBody>
            <Input  placeholder='  Type here...' icon ={ <Search2Icon/> }/>
         
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
