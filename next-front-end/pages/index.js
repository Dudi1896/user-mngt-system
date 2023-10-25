import { AddUser } from '@components/AddUser';
import { Navbar } from '@components/Navbar';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Login } from '@components/Login';
import { UserList } from '@components/UserList';
import { useState } from 'react';

export default function Home({ session }) {
  const [responseUser, setResponseUser] = useState(null); 
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>User Management App</title>
      </Head>
      <Navbar />

      <main>
        <AddUser setResponseUser={setResponseUser} />
        <UserList user={responseUser} /> 
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
