import AuthCheck from '@/components/AuthCheck';
import EntryForm from '@/components/EnryForm';

const NewEntry = () => {
  return (
    <AuthCheck>
      <EntryForm />
    </AuthCheck>
  );
};

export default NewEntry;
