import { useEffect } from 'react';

const useConsoleEasterEgg = () => {
  useEffect(() => {
    console.log(
      `%c
      (•_•)  No errors found. 
      ( ง )ง   Everything's working fine. 
      /︶\\  Go grab a coffee ☕ 
      `,
      'color: #f4c20d; font-size: 14px; font-weight: bold; padding: 10px; border-radius: 8px;'
    );

    console.log(
      "%cBut if you're here... you must be a developer. Want to talk tech? 🚀",
      'color: #0f52ba; font-size: 12px; font-weight: bold;'
    );
  }, []);
};

export default useConsoleEasterEgg;
