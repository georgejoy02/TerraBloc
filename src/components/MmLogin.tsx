import React from 'react'
import { useState, useEffect } from 'react'
import Web3 from 'web3'


export const MmLogin = () => {

const [isCnctd,setIsCnctd]=useState(false)

    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        }
        else if (window.web3) {
            provider=window.web3.currentProvider;
        }else{
            console.log("no eth-browser detected,install metamask")
        }
        
    }





    return (
        <div>

        </div>
    )
}
