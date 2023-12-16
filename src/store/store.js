
import {configureStore} from '@reduxjs/toolkit';
import  resultsSlice  from './slices/results';

export const store = configureStore({
    reducer: {
        results: resultsSlice
    }
})