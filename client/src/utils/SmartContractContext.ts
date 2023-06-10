import { createContext } from 'react';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

interface SmartContractContextType {
    landContract: Contract | null;
    setLandContract: (instance: Contract | null) => void;
}

export const SmartContractContext = createContext<SmartContractContextType>({
    landContract: null,
    setLandContract: () => { },
});