import React from 'react';

/**
 * 1. 다중 상태 관리 훅 (Multi State Management Custom hook)
 * 1.1. name - target state's name
 * 1.2. value - target state's value
 * 1.3. onChange - Changing state handler
 * 1.4. dispatch - changing state itself
 *
 * 2. 사용 방법
 * 2.1. Input 또는 Textarea
 * 1) name : props에 target state's name
 * 2) value : props에 target state's value
 * 3) onChange : props에 onChange를 내려주도록 한다.
 *
 * 3. onChange없이 변경하고 싶을 때, dispatch를 사용
 * 3.1. e.g. dispatch({name: "state's name", value: "state's value" })
 *
 * 4. I/O
 * 4.1. Input : 객체 형태의 state
 * - key : state의 이름
 * - value : state의 값
 *
 * 4.2. Output : 변경된 객체 형태의 state
 */

const reducer = (state: any, action: any) => {
    return {
        ...state,
        [action.name]: action.value,
    };
};

export default function useMultipleState(initialState) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(e.target);
    };
    return [state, dispatch, onChange] as const;
}
