import { createSlice } from '@reduxjs/toolkit';

const getInitialCart = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: getInitialCart(),
    reducers: {
        addToCart: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(i => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                return state.filter(i => i.id !== action.payload);
            }
        },
        clearCart: () => [],
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
