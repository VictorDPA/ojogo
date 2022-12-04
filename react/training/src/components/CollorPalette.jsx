import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const CollorPalette = () => {
  const [palette, setPalette] = useState('Mude o Texto');
  const [colors, setColors] = useState([
    { id: 1, color: 'tomato' },
    { id: 2, color: 'pink.100' },
    { id: 3, color: 'yellow.200' },
    { id: 4, color: 'teal.300' },
  ]);

  const randomPalette = () => {
    return setPalette(
      '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')
          .toUpperCase(),
    );
  };

  const changeColor = () => {
    return setColors(() => {(
      colors.forEach(({id, color}) => ({id: id, [color]: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase()}` }))
    )
  })};

  return (
    <>
      <Stack direction='row' spacing='1rem' mt='2' justifyContent='center'>
        {colors.map(({ color, id }, arr) => (
          <Box
            key={id}
            w='40px'
            h='40px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bg={color}
            textAlign='center'
          >
            {arr}
          </Box>
        ))}
      </Stack>
      <Container centerContent display='flex' flexDir='row'>
        Mude as Cores
        {/* <Input size='xs' maxW='20%' onChange={handleSquares} /> */}
        <Button onClick={changeColor} colorScheme='facebook' size='xs'>Aleatório</Button>
      </Container>
      <Text onClick={randomPalette}>{palette}</Text>
      <Stack
        direction='row'
        wrap='wrap'
        maxW='210px'
        m='auto'
        spacing='0'
        justifyContent='center'
      ></Stack>
    </>
  );
};

export default CollorPalette;
