export const UserList = () => {
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
          <tbody className='bg-white'>
            <tr>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>Ray</div>
              </td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>Epps</div>
              </td>
              <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>rayepps@gmail.com</div>
              </td>
              <td className='text-right px-6 py-4 whitespace-nowrap'>
                <a
                  href='#'
                  className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4'
                >
                  Edit
                </a>
                <a
                  href='#'
                  className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
