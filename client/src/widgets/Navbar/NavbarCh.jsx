import {
  Box,
  Flex,
  Heading,
  Button,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import DrawerExample from '../../components/Drawer/DrawerExample';
import axiosInstance from '../../axiosInstance';

export default function NavbarCh({user, restaurants,setUser,setAccessToken}) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const shadowColor = useColorModeValue(
    'rgba(0, 0, 0, 0.1)',
    'rgba(255, 255, 255, 0.1)'
  );
  const navigate = useNavigate();

  const logoutHandler = async () => {
    const response = await axiosInstance.get(
      `${import.meta.env.VITE_API}/auth/logout`
    );
    if (response.status === 200) {
      setUser({});
      setAccessToken('');
      navigate('/');
    }
  };
  console.log(restaurants);


  return (
    <Box
      bg={bgColor}
      boxShadow='md'
      p={4}
      position='sticky'
      top={0}
      zIndex={1000}
    >
      <Flex justifyContent='space-between' alignItems='center'>
        <Link to='/'>
          <Heading size='lg' color='teal.500'>
          <DrawerExample restaurants={restaurants}/>
          </Heading>
        </Link>
        {user.username ? (
          <Flex alignItems='center'>
            <Link onClick={logoutHandler}>
            <Button
              colorScheme='teal'
              variant='solid'
              mr={4}
              boxShadow='md'
              _hover={{ boxShadow: 'lg' }}
            >
              Выйти
            </Button>
            </Link>

            <Avatar name='User Name' src='https://bit.ly/broken-link' />
          </Flex>
        ) : (
          <Flex alignItems='center'>
            <Link to='/signin'>
            <Button
              colorScheme='teal'
              variant='solid'
              mr={4}
              boxShadow='md'
              _hover={{ boxShadow: 'lg' }}
            >
              Войти
            </Button>
            </Link>
            <Link to='/signup'>
            <Button
              colorScheme='teal'
              variant='outline'
              mr={4}
              boxShadow='md'
              _hover={{ boxShadow: 'lg' }}
            >
              Регистрация
            </Button>
            </Link>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
