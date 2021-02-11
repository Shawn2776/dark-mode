import React from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {

  const [ darkMode, setDarkMode ] = useLocalStorage("modeStatus", false);

  return [ darkMode, setDarkMode ];
};

export default useDarkMode