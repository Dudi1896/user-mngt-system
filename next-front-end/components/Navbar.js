import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    <div className='bg-gray-800'>
      <div className='h-16 px-8 flex items-center'>
        <p className='text-white font-bold flex-auto'>User Management System</p>
        {session && (
          <div onClick={signOut}>
            <Image
              onClick={signOut}
              className='rounded-full cursor-pointer'
              src={session.user.image}
              alt='profile'
              height={50}
              width={50}
              title='Click to Logout'
            ></Image>
            <p className='text-white font-semibold cursor-pointer'>Sign Out</p>
            {/* <p className='text-white font-semibold'>{session?.user.name}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};
