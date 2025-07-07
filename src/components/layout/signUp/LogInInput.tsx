import { ClearIcon } from '@/assets/header/icons/HeaderIcons';

interface InputProps {
  inputType: string;
  name: string;
  content: string;
  enteredValue: string;
  setEnteredValue: any;
}

export default function LogInInput({
  inputType,
  name,
  content,
  enteredValue,
  setEnteredValue,
}: InputProps) {
  return (
    <div className='input-container relative w-full'>
      <input
        className={`w-full h-[30px] p-[10px] rounded-[5px] border border-[#d9d9d9] bg-white peer/${name}`}
        type={inputType}
        id={name}
        name={name}
        placeholder=' '
        required
        value={enteredValue}
        onChange={(e) => {
          setEnteredValue(e.target.value);
        }}
      />
      <label
        className={`absolute top-1/2 left-[10px] -translate-y-1/2 bg-gradient-to-b from-white via-white via-70% to-black/0 to-[70.1%] text-black/50 transition-[0.3s] peer-focus/${name}:top-0 peer-focus/${name}:text-[12px] peer-focus/${name}:text-black/85 peer-valid/${name}:top-0 peer-valid/${name}:text-[12px] peer-valid/${name}:text-black/85 peer-[:not(:placeholder-shown)]/${name}:top-0 peer-[:not(:placeholder-shown)]/${name}:text-[12px] peer-[:not(:placeholder-shown)]/${name}:text-black/85`}
        htmlFor={name}
      >
        {content}
      </label>
      {enteredValue.length > 0 && (
        <button
          className='clear-btn absolute right-[10px] top-1/2 size-[9px] -translate-y-1/2 cursor-pointer'
          type='button'
          onClick={() => {
            setEnteredValue('');
          }}
        >
          <ClearIcon />
        </button>
      )}
    </div>
  );
}
