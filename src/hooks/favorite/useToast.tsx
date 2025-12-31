import { useState } from 'react';

const useToast = (selectedItem: boolean) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const successToast = (message: string = '저장되었습니다') => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const warningToast = () => {
    if (!selectedItem) {
      setToastMessage('목록을 선택해주세요.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return false;
    }
    return true;
  };
  return { showToast, toastMessage, successToast, warningToast };
};

export default useToast;
