import { useState, type ChangeEvent } from 'react';
import { fetchRegisterVisitor, type User } from '../api/fetchRegisterVisitor';

export default function RegisterVisitorForm() {
  const [visitorRegistered, setVisitorRegistered] = useState<User>({ username: '', email: '' });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();

      await fetchRegisterVisitor(visitorRegistered);

      setVisitorRegistered({ username: '', email: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setVisitorRegistered(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='flex flex-col gap-5 py-10'>
        <form action=''>
          <div className='flex flex-col justify-center items-center gap-2'>
            <label
              className='text-white text-2xl'
              htmlFor='visitor-username'>
              Username:
            </label>
            <input
              className='bg-white border p-3 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
              id='visitor-username'
              name='username'
              type='text'
              placeholder='Username'
              autoComplete='off'
              value={visitorRegistered.username}
              onChange={handleInputForm}
            />
            <label
              className='text-white text-2xl'
              htmlFor='visitor-email'>
              Email:
            </label>
            <input
              className='bg-white border p-3 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
              id='visitor-email'
              name='email'
              type='email'
              placeholder='Email'
              value={visitorRegistered.email}
              onChange={handleInputForm}
            />
            <div className='flex justify-center items-center'>
              <button
                className='bg-green-500 hover:bg-green-600 text-2xl border p-3 w-52 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
                onClick={event => handleSubmit(event)}>
                Submit visitor
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
