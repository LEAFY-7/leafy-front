import { Alert } from 'modules/alert.module';
import { useCallback, useEffect } from 'react';
import { useBeforeUnload as _useBeforeUnload, unstable_usePrompt as usePrompt } from 'react-router-dom';

 const useBeforeUnload = (doBlock?: boolean) => {
  _useBeforeUnload(
    useCallback(e => {
      if (doBlock) {
        e.preventDefault();
        Alert.alert("변경사항이 있습니다. 페이지를 떠나시겠습니까?");
        return e.returnValue = 'block';
        
      }
    }, [doBlock])
  );
}

export default useBeforeUnload

// useEffect(() => {
//   const popstateHandler = () => {
//       const confirmResult = confirm('뒤로 가시겠습니까?');
//       if (confirmResult) {
//           history.back();
//       }
//   };

//   (() => {
//       history.pushState(null, '', location.href);
//       window.addEventListener('popstate', popstateHandler);
//   })();

//   return () => {
//       window.removeEventListener('popstate', popstateHandler);
//   };
// }, []);