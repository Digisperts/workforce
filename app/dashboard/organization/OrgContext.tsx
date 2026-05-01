"use client"
import React, { createContext, useContext } from 'react';

type OrgContextType = {
    isPremium: boolean
};
const OrgContext = createContext<OrgContextType>({
    isPremium: false,
})

export const useOrg = () => useContext(OrgContext);

export default OrgContext;
