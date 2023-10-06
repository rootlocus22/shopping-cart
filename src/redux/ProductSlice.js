import { createSlice } from '@reduxjs/toolkit'

export const STATUS = {
    IDLE: "IDLE",
    LOADING: "LOADING",
    ERROR: "ERROR"
}
export const productSlice = createSlice({
    name: 'product',
    initialState:{ data: [], status: STATUS.IDLE },
    reducers: {
        setProducts(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        }

    },
})

export  function fetchProducts(){
    return async function fetchProductsThunk(dispatch, getState) {
        dispatch(setStatus(STATUS.LOADING))
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUS.IDLE));
        } catch (e) {
            dispatch(setStatus(STATUS.ERROR));
            console.log("Failed to fetch", e);
        }
    }
}

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;