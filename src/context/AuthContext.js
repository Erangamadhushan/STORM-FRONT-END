import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage or make an API call to verify authentication
        const storedToken = localStorage.getItem('authToken');
        const storedUser = localStorage.getItem('user');
        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (user, token) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setToken(token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user, token, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    if (!AuthContext) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return useContext(AuthContext);
}