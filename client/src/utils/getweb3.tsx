import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import landcontract from '../abiandnetwork/abi.json';
import { Contract } from 'web3-eth-contract';
import { SmartContractContext } from './SmartContractContext';

interface SmartContractProviderProps {
    children: React.ReactNode;
}
interface Artifact {
    networks: {
        [key: number]: {
            address: string;
        };
    };
}

const contractABI: any = landcontract.abi;

export const SmartContractProvider: React.FC<SmartContractProviderProps> = ({ children }) => {


    const [contractAddress, setContractAddress] = useState<string | null>(null);
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [landContract, setLandContract] = useState<Contract | null>(null);


    const getContractAddress = async () => {
        const landcntract = landcontract as Artifact;

        try {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                const networkId = await web3.eth.net.getId();
                console.log("Network ID:", networkId);
                const address = landcntract.networks[networkId]?.address;
                if (address) {
                    console.log("Contract address:", address);
                    setContractAddress(address);
                } else {
                    console.error("Contract address not found for the current network");
                }
            } else {
                console.error("MetaMask not installed");
            }
        } catch (error) {
            console.error("Error getting contract address:", error);
        }
    };
    getContractAddress();

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
        } else {
            console.log('Please install MetaMask!');
        }
    }, []);

    useEffect(() => {
        if (web3 && contractAddress) {
            const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
            setLandContract(contractInstance);
        }
    }, [web3, contractAddress]);

    return (
        <SmartContractContext.Provider value={{ landContract, setLandContract }}>
            {children}
        </SmartContractContext.Provider>
    );
};