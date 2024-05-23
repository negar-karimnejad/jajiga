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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return { ref, showModal, isShowNotification };
}

export default useRefHook;
