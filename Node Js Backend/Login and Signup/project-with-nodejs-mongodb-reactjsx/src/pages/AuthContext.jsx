import { jwtDecode } from 'jwt-decode';
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token); 
            setUser({ id: decoded.id, email: decoded.email });
        }
    }, [token]);

    const login = (userData, token) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem("token", token); 
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token"); 
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
