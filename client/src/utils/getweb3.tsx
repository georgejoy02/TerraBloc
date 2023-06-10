import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import landcontract from '../abiandnetwork/abi.json';
import { Contract } from 'web3-eth-contract';
import { SmartContractContext } from './SmartContractContext';

interface SmartContractProviderProps {
    children: React.ReactNode;
}

const contractABI: any = landcontract.abi;
const contratAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
//  || "0x2aC3001ACd7e2E59ABA277885f94f1F78AaB24C6";

export const SmartContractProvider: React.FC<SmartContractProviderProps> = ({ children }) => {



    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [landContract, setLandContract] = useState<Contract | null>(null);

    useEffect(() => {
        const initWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
            } else {
                console.log('Please install MetaMask!');
            }
        };
        initWeb3();
    }, []);

    useEffect(() => {
        if (web3) {
            const contractInstance = new web3.eth.Contract(contractABI, contratAddress);
            setLandContract(contractInstance);
        }
    }, [web3]);

    return (
        <SmartContractContext.Provider value={{ landContract, setLandContract }}>
            {children}
        </SmartContractContext.Provider>
    );
};