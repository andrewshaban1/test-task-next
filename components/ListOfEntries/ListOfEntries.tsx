'use client';
import {
  Button,
  HStack,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import useFormInputStore from '@/state/formInputStore';

const ListOfEntries = () => {
  const { formEntries, deleteInput } = useFormInputStore();

  return (
    <UnorderedList styleType='none'>
      {formEntries.map(entry => (
        <ListItem key={entry.id} paddingY='1'>
          <HStack justify='space-between'>
            <Text>
              {entry.firstName} {entry.lastName} / {entry.age} y.o / Email:{' '}
              {entry.email}
            </Text>
            <Button
              size='sm'
              colorScheme='teal'
              onClick={() => deleteInput(entry.id)}
            >
              Delete
            </Button>
          </HStack>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default ListOfEntries;
