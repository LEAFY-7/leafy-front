import { useCallback } from 'react';
import { useBeforeUnload as _useBeforeUnload, unstable_usePrompt as usePrompt } from 'react-router-dom';

 const useBeforeUnload = (doBlock?: boolean) => {
  _useBeforeUnload(
    useCallback(e => {
      if (doBlock) {
        e.preventDefault();
        return e.returnValue = '';
      }
    }, [doBlock])
  );
}

export default useBeforeUnload