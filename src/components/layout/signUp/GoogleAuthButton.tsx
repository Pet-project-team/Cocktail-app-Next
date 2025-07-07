import { GoogleIcon } from '@/assets/header/icons/HeaderIcons';
import { googleAuth } from '@/features/formActions/google';

export default function GoogleAuthButton() {
  return (
    <form className='w-full' action={googleAuth}>
      <button
        id='google'
        type='submit'
        className='box-border flex justify-center items-center self-center gap-[10px]
                     w-full h-[30px] py-0 px-[10px] rounded-[5px]
                     border border-main-600 bg-white
                     transition-all duration-300 
                   hover:border-main-700 hover:text-main-600
                     font-bold leading-[150%]'
      >
        <GoogleIcon />
        Sign Up With Google
      </button>
    </form>
  );
}
