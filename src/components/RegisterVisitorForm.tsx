import { useState, type ChangeEvent } from 'react';
import { fetchRegisterVisitor, type Visitor } from '../api/fetchRegisterVisitor';

export default function RegisterVisitorForm() {
  const [visitorRegistered, setVisitorRegistered] = useState<Visitor>({ username: '', email: '' });

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
      <form action=''>
        <div className='flex flex-col items-center gap-5 py-10'>
          <div className='bg-[#453c6d] flex flex-col justify-center items-center gap-2 border w-60 py-10'>
            <label
              className='text-white text-2xl'
              htmlFor='visitor-username'>
              Username:
            </label>
            <input
              className='bg-white border text-lg p-1 w-50 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
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
              className='bg-white border text-lg p-1 w-50 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
              id='visitor-email'
              name='email'
              type='email'
              placeholder='Email'
              value={visitorRegistered.email}
              onChange={handleInputForm}
            />
            <div className='flex justify-center items-center'>
              <button
                className='bg-green-500 hover:bg-green-600 hover:shadow-[0_0_20px_rgba(0,0,0,0.40)] 
                active:mt-2 active:bg-green-600 active:p-1 active:w-49 active:shadow-[0_0_20px_rgba(0,0,0,0.40)] 
                cursor-pointer text-2xl border p-2 w-50 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
                onClick={event => handleSubmit(event)}>
                Submit visitor
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
