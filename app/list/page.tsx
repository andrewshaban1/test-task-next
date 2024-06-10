import AuthCheck from '@/components/AuthCheck';
import LIstOfEntries from '@/components/LIstOfEntries';

export default function Home() {
  return (
    <AuthCheck>
      <LIstOfEntries />
    </AuthCheck>
  );
}
