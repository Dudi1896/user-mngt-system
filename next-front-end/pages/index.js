import { AddUser } from '@components/AddUser';
import { Navbar } from '@components/Navbar';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { Login } from '@components/Login';

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>User Management App</title>
      </Head>
      <Navbar />

      <main>
        <AddUser />
      </main>
    </div>
  );
}

import React from 'react';

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
