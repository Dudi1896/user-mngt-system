import { AddUser } from '@components/AddUser';
import { Navbar } from '@components/Navbar';
import Head from 'next/head';

export default function Home() {
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
