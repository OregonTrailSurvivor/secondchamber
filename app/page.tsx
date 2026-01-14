import Link from 'next/link';
import SignInButton from '@/components/SignInButton';
import SignOutButton from '@/components/SignOutButton';
import {auth} from '@/auth';


export default async function Home() {

const session = await auth();

  return (
    <div >
     Hello World! <Link className="text-blue-600 visited:text-purple-600" href="/dbTest">DB TEST LINK</Link> 

<div className="flex justify-around m-8"> <SignInButton /> <SignOutButton /> </div> 

<div>{session ? <p>Logged in as {session.user?.name}</p> : <p>Not logged in</p>}</div>
    
    </div>
  );
}
