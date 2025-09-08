import { useState, type ChangeEvent } from 'react';
import { fetchRegisterVisitor } from '../api/fetchRegisterVisitor';
import { emptyValuesVisitorForm, type Visitor } from '../types/types';

export default function RegisterVisitorForm() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [userFeedback, setUserFeedback] = useState<string>('');
  const [visitorRegistered, setVisitorRegistered] = useState<Visitor>(emptyValuesVisitorForm);

  const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setIsLoading(true);

      const response = await fetchRegisterVisitor(visitorRegistered);

      !response ? setUserFeedback('Submit failed, try again later or contact support') : setUserFeedback('Submit sent successfully.');

      setVisitorRegistered({ username: '', email: '' });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
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
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-5 py-10 font-roboto'>
          <div className='bg-[#453c6d] flex flex-col justify-center items-center gap-2 border w-60 py-4'>
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
              required={true}
              minLength={3}
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
              autoComplete='off'
              value={visitorRegistered.email}
              onChange={handleInputForm}
              required={true}
            />
            <div className='flex justify-center items-center pt-2'>
              {isLoading ? (
                <div className='pt-2'>
                  <div
                    className='right-0 border-4 border-solid border-[#f3f3f3]
                        size-8 border-t-[#3498db] border-t-4 animate-spin rounded-full mb-2.5'></div>
                </div>
              ) : (
                <div className='flex flex-col justify-center items-center'>
                  <button
                    className='bg-green-500 hover:bg-green-600 hover:shadow-[0_0_20px_rgba(0,0,0,0.40)]
                          active:mt-2 active:bg-green-600 active:p-1 active:w-49 active:shadow-[0_0_20px_rgba(0,0,0,0.40)] 
                          cursor-pointer text-2xl border p-2 w-50 shadow-[0_0_20px_rgba(0,0,0,0.20)]'
                    type='submit'>
                    Submit visitor
                  </button>
                  {userFeedback === 'Submit failed, try again later or contact support' ? (
                    <p className='text-[#cb0000] text-center'>{userFeedback}</p>
                  ) : (
                    <p className='text-[#00bc10] text-center'>{userFeedback}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
