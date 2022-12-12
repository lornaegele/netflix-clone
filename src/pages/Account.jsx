import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {user} = UserAuth()

  console.log(user);
  return (
    <div className='w-full h-screen'>
      <img
        className='absolute w-full h-full object-cover'
        src='https://picsum.photos/2000'
        alt='/'
      />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen '></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-auto mx-auto bg-black/80 text-white rounded-md'>
          <div className='mx-8 py-8'>
            <h1 className='text-2xl font-bold'>Welcome to your account!</h1>
            <div className="flex flex-row justify-between p-3 mt-4 bg-gray-600 rounded-md">
              <h3>Your E-Mail:</h3>
              <h3>{user?.email}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
