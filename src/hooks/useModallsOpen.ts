import { useEffect } from 'react';
import { useAppSelector } from '../store';
import { appIsNavOpen } from '../store/selectors/app-selectors';

const useModalIsOpen = () => {
  const isOpen = useAppSelector(appIsNavOpen);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.setAttribute('style', 'overflow: hidden');
    } else {
      body?.setAttribute('style', 'overflow: scroll');
    }
  }, [isOpen]);
};
export default useModalIsOpen;
