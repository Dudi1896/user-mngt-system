import { User } from '@components/User';
import { useEffect, useState } from 'react';

export const UserList = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(process.env.USER_API_BASE_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='container mx-auto my-8'>
      <div className='flex shadow border-b'>
        <table className='min-w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wide py-3 px-6'>
                First Name
              </th>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wide py-3 px-6'>
                Last Name
              </th>
              <th className='text-left font-medium text-grey-500 uppercase tracking-wide py-3 px-6'>
                Email Id
              </th>
              <th className='text-right font-medium text-grey-500 uppercase tracking-wide py-3 px-6'>
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className='bg-white'>
              {users?.map((user) => (
                <User user={user} key={user.id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};
