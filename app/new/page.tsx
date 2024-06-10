import AuthCheck from '@/components/AuthCheck';
import Form from '@/components/Form';

const NewEntry = () => {
  return (
    <AuthCheck>
      <Form />
    </AuthCheck>
  );
};

export default NewEntry;
