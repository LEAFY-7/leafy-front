import { createSlice } from '@reduxjs/toolkit';
import review from '../../db/review.json';
type Status = 'admin' | 'member' | 'normal';
type User = {
    id: string;
    username: string;
    displayName: string;
    token: string;
    status: Status[];
};

interface InitialStateType {
    user: User;
    reviewList: any[];
}

const initialState: InitialStateType = {
    user: {
        id: '',
        username: '',
        displayName: '',
        token: '',
        status: ['admin'],
    },
    reviewList: [...review.data],
};

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload === null) {
                localStorage.removeItem('leafy');
            } else {
                if (action.payload.token) {
                    const userToken = action.payload.token;
                    localStorage.setItem('leafy', userToken);
                }
            }
            state.user = action.payload;
        },
        setReviewList: (state, action) => {
            state.reviewList = [...state.reviewList, action.payload];
        },
    },
});
export const { setUser, setReviewList } = userSlice.actions;

export default userSlice.reducer;
