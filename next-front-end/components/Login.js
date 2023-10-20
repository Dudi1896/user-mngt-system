import { signIn } from 'next-auth/react';
import { DesignSvg, Facebook, GithubIcon, GoogleIcon } from './Icons';

export const Login = () => {
  return (
    <div className='flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50'>
      <div className='relative'>
        <div className='hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20'>
          <DesignSvg />
        </div>
        <div className='hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20'>
          <DesignSvg />
        </div>
        <div className='relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4'>
          <div className='flex-auto p-6'>
            <div className='mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden'>
              <a
                href='#'
                className='flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500'
              >
                <span className='flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100'>
                  Denzel Udemba.
                </span>
              </a>
            </div>
            <h4 className='mb-2 font-medium text-gray-700 xl:text-xl'>
              Udemba: User Management System!
            </h4>
            <p className='mb-6 text-gray-500'>
              Please sign-in to access your account
            </p>
            <form
              id=''
              action='#'
              method='POST'
              className='mb-4'
            >
              <div className='mb-4'>
                <label
                  for='email'
                  className='mb-2 inline-block text-xs font-medium uppercase text-gray-700'
                >
                  Email or Username
                </label>
                <input
                  type='text'
                  className='block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus-bg-white focus-text-gray-600 focus-shadow'
                  id='email'
                  name='email-username'
                  placeholder='Login Via Facebook Only...'
                  autoFocus
                />
              </div>
              <div className='mb-4'>
                <div className='flex justify-between'>
                  <label
                    className='mb-2 inline-block text-xs font-medium uppercase text-gray-700'
                    for='password'
                  >
                    Password
                  </label>
                  <a
                    href='auth-forgot-password-basic.html'
                    className='cursor-pointer text-indigo-500 no-underline hover:text-indigo-500'
                  >
                    <small className=''>Forgot Password?</small>
                  </a>
                </div>
                <div className='relative flex w-full flex-wrap items-stretch'>
                  <input
                    type='password'
                    id='password'
                    className='relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus-border-indigo-500 focus-bg-white focus-text-gray-600 focus-shadow'
                    name='password'
                    placeholder='············'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <div className='block'>
                  <input
                    className='mt-1 mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked-bg-indigo-500 focus-border-indigo-500 focus-shadow'
                    type='checkbox'
                    id='remember-me'
                  />
                  <label
                    className='inline-block'
                    for='remember-me'
                  >
                    Remember Me
                  </label>
                </div>
              </div>
              <div className='mb-4'>
                <button
                  className='grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover-border-indigo-600 hover-bg-indigo-600 hover-text-white focus-border-indigo-600 focus-bg-indigo-600 focus-text-white focus-shadow-none'
                  type='submit'
                >
                  Sign in
                </button>
              </div>
              <div className=' flex items-center space-x-6 justify-center rounded border border-solid border-fuchsia-950'>
                  
                  <button className='w-10'><GithubIcon /></button>

                  <button className='w-10'><GoogleIcon onClick={signIn} /></button>

                  <button className='w-10'><Facebook onClick={signIn}/></button>

              </div>
            </form>
            <p className='mb-4 text-center'>
              New on futurism?
              <a
                href='#'
                className='cursor-pointer text-indigo-500 no-underline hover:text-indigo-500'
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

