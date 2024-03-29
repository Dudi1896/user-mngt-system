import React, { useState, useEffect } from 'react';

export const EditUser = ({ userId, setResponseUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    emailId: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/' + userId,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const _user = await response.json();
        setUser(_user);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/' + userId,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
    if (!response.ok) {
      throw new Error('Something went Wrong');
    }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
  };

  return (
    <>
      <div className={`fixed inset-0 z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <div className='min-h-screen px-4 text-center'>
          <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md'>
            <h3 className='text-lg font-medium leading-6 text-gray-900'>
              Update User
            </h3>
            <div className='flex max-w-md max-auto'>
              <div className='py-2'>
                <div className='h-14 my-4'>
                  <label className='block text-gray-600 text-sm font-normal'>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={user.firstName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 px-2 py-2'
                  />
                </div>
                <div className='h-14 my-4'>
                  <label className='block text-gray-600 text-sm font-normal'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={user.lastName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 px-2 py-2'
                  />
                </div>
                <div className='h-14 my-4'>
                  <label className='block text-gray-600 text-sm font-normal'>
                    Email Id
                  </label>
                  <input
                    type='text'
                    name='emailId'
                    value={user.emailId}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 px-2 py-2'
                  />
                </div>
                <div className='h-14 my-4 space-x-4 pt-4'>
                  <button
                    onClick={updateUser}
                    className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'
                  >
                    Update
                  </button>
                  <button
                    onClick={reset}
                    className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
