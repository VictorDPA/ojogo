import {
  Card,
  CardBody,
  FormControl,
  FormLabel,
  Stack,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import CollorPalette from './CollorPalette';

const Board = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Stack
        display='flex'
        flexFlow='row'
        alignItems='center'
        justifyContent='end'
        mt='1'
        gap='2'
        mr='2'
      >
        <Text as='b' fontSize='sm'>Dark</Text>
        <Switch 
          size='sm' 
          colorScheme='purple' 
          pb='2'
          onChange={toggleColorMode} 
        />
      </Stack>
      <div>
        <Card
          w='70%'
          m='auto'
          display='flex'
          flexDir='row-reverse'
          justifyContent='center'
        >
          <Text
            fontSize='xl'
            alignSelf='center'
            // _hover={{bg}}
          >
            Pixels Art
          </Text>
        </Card>
      </div>
      <CollorPalette/>
    </>
  );
};

export default Board;
