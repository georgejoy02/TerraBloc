# Project Setup and Installation

This project is built using React, TypeScript, Node.js, Express.js, Web3.js, Truffle, Ganache, and Solidity. It consists of a client-side application, a server-side application, and a smart contract for local deployment.

## Prerequisites

Before getting started, make sure you have the following tools installed on your machine:

- Node.js
- Truffle
- Ganache
- Metamask browser extension

## Installation

To set up the project, follow these steps:

1. Clone the repository.

2. Run the following command from the `client`, `server`, and `smartcontract` directories to install the required dependencies:

    ```shell
    npm install
    ```

3. Install the Metamask extension in your browser to interact with the smart contract.

## Configuration

### Server Configuration

1. In the `server` directory, create a `.env` file and add the following environment variables:

    - `RPC_URL`: The RPC URL of the network where the smart contract will be deployed.
    - `NFT_STORAGE_KEY`: The API key for NFT storage.
    - `PORT`: The port number for the server.

### Client Configuration

1. In the `client` directory, create a `.env` file and add the following environment variable:

    - `REACT_APP_MAPBOX_API_KEY`: The API key for Mapbox.

### Smart Contract Configuration

1. In the `smartcontract` directory, create a `.env` file and add the following environment variables:

    - `HDWALLET_MNEMONIC`: The mnemonic for the HD wallet.
    - `RPC_URL`: The RPC URL of the network where the smart contract will be deployed.

## Running the Project

To run the project, follow these steps:

1. In the `smartcontract` directory, run the following command to add the ABI of the smart contract to the `client` and `server` directories:

    ```shell
    npm start
    ```

2. In the `server` directory, run the following command to start the server:

    ```shell
    npm start
    ```

3. In the `client` directory, run the following command to start the client:

    ```shell
    npm start
    ```

## Usage

Once the project is running, you can access the client application in your browser. Make sure the Metamask extension is connected to the appropriate network to interact with the smart contract.

## License

This project is licensed under the [MIT License](LICENSE).


