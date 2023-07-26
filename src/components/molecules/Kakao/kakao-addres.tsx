import styled from '@emotion/styled';
import DropButton from 'components/atoms/Button/drop-button';
import Flex from 'components/atoms/Group/flex';
import React from 'react';

declare global {
    export interface Window {
        daum: any;
    }
}

interface IAddr {
    address: string;
    zonecode: string;
}

interface State {
    address: string;
    zonecode: string;
}

type Action = { type: 'SET_ADDRESS'; payload: string } | { type: 'SET_ZONECODE'; payload: string };

const initialState: State = {
    address: '',
    zonecode: '',
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_ADDRESS':
            return { ...state, address: action.payload };
        case 'SET_ZONECODE':
            return { ...state, zonecode: action.payload };
        default:
            return state;
    }
};

interface Props {
    onClickAddr: () => void;
}

const KakaoAddress = ({ onClickAddr }: Props) => {
    const [address, dispatch] = React.useReducer(reducer, initialState);

    return (
        <Flex direction="column">
            <Flex justifyContent="center" alignItems="center">
                <Input id="addr" type="text" readOnly onClick={onClickAddr} />
                <DropButton onClick={onClickAddr} variant="primary">
                    검색
                </DropButton>
            </Flex>
            <Flex>
                <Input id="zipNo" type="text" readOnly />
                <Input id="addrDetail" type="text" />
            </Flex>
        </Flex>
    );
};

export default KakaoAddress;

const Input = styled.input`
    border: 1px solid #000;
    width: 100%;
`;
