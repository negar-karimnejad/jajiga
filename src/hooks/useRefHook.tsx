import { useEffect, useRef, useState } from 'react';

function useRefHook() {
  const [isShowNotification, setIsShowNotification] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const showModal = () => {
    setIsShowNotification(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShowNotification(false);
    }
  };

  useEffect(() => {
    if (isShowNotification) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShowNotification]);
  return { ref, showModal,isShowNotification };
}

export default useRefHook;
