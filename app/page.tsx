import Link from 'next/link';
import SignInButton from '@/components/SignInButton';


export default function Home() {
  return (
    <div >
     Hello World! <Link className="text-blue-600 visited:text-purple-600" href="/dbTest">DB TEST LINK</Link> 

    <SignInButton />
    </div>
  );
}
