import AuthCheck from '@/components/AuthCheck';
import LIstOfEntries from '@/components/ListOfEntries/ListOfEntries';

const List = () => {
  return (
    <AuthCheck>
      <LIstOfEntries />
    </AuthCheck>
  );
};

export default List;
