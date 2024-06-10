import { FormEntry } from '@/types/formEntry.type';
import { create } from 'zustand';

interface FormInputStore {
  formEntries: FormEntry[];
  addInput: (formEntry: FormEntry) => void;
  deleteInput: (formEntryId: string) => void;
}

const initialState: FormEntry[] = [
  {
    id: 'uniqueId1',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 23,
    email: 'ivan@ivanov.com',
  },
  {
    id: 'uniqueId12',
    firstName: 'Perter',
    lastName: 'Perterov',
    age: 23,
    email: 'Perter@Perterov.com',
  },
  {
    id: 'uniqueId13',
    firstName: 'Bob',
    lastName: 'Bobov',
    age: 23,
    email: 'Bob@Bobov.com',
  },
  {
    id: 'uniqueId14',
    firstName: 'Sam',
    lastName: 'Samov',
    age: 23,
    email: 'Sam@Samov.com',
  },
  {
    id: 'uniqueId15',
    firstName: 'John',
    lastName: 'Johnov',
    age: 23,
    email: 'John@Johnov.com',
  },
  {
    id: 'uniqueId16',
    firstName: 'Mark',
    lastName: 'Markov',
    age: 23,
    email: 'Mark@Markov.com',
  },
  {
    id: 'uniqueId17',
    firstName: 'Paul',
    lastName: 'Paulov',
    age: 23,
    email: 'Paul@Paulov.com',
  },
  {
    id: 'uniqueId18',
    firstName: 'Dmitr',
    lastName: 'Dmitrov',
    age: 23,
    email: 'Dmitr@Dmitrov.com',
  },
  {
    id: 'uniqueId19',
    firstName: 'Vadim',
    lastName: 'Vadimov',
    age: 23,
    email: 'Vadim@Vadimov.com',
  },
  {
    id: 'uniqueId10',
    firstName: 'Georg',
    lastName: 'Georgov',
    age: 23,
    email: 'Georg@Georgov.com',
  },
];

const useFormInputStore = create<FormInputStore>((set) => ({
  formEntries: initialState,
  addInput: (formEntry: FormEntry) =>
    set((state) => ({
      ...state,
      formEntries: [...state.formEntries, formEntry],
    })),
  deleteInput: (formEntryId: string) =>
    set((state) => ({
      ...state,
      formEntries: state.formEntries.filter(
        (entry) => entry.id !== formEntryId
      ),
    })),
}));

export default useFormInputStore;
