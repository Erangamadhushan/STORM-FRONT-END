import { useState, createContext, useContext } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orderDetails, setOrderDetails] = useState({
        watch: null,
        imageURL: '',
        quantity: 1,
        totalPrice: 0,
    });
    const updateOrder = (details) => {
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            ...details,
        }));
    };

    return (
        <OrderContext.Provider value={{ orderDetails, updateOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrder = () => {
    if (!OrderContext) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return useContext(OrderContext);
}