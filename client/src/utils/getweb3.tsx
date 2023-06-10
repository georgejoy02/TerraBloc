import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
// import Contract from '../../abiandnetwork/abi.json';
// const contractABI:any = Contract.abi;

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const Getweb3: React.FC = () => {
    // const [web3, setWeb3] = useState<Web3 | null>(null);
    // const [contract, setContract] = useState<any>(null);

    // useEffect(() => {
    //     const initWeb3 = async () => {
    //         if (window.ethereum) {
    //             const web3Instance = new Web3(window.ethereum);
    //             setWeb3(web3Instance);
    //         } else {
    //             console.log('Please install MetaMask!');
    //         }
    //     };
    //     initWeb3();
    // }, []);

    // useEffect(() => {
    //     if (web3) {
    //         const contractInstance = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);
    //         setContract(contractInstance);
    //     }
    // }, [web3]);




    return (
        <div>
            {/* Your app code here */}
        </div>
    );
};

export default Getweb3;