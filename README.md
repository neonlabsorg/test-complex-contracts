# Examples of complex contracts deployment on Neon EVM

## Clone the repository

Run the following command to clone the repository -

```sh
git clone https://github.com/neonlabsorg/test-complex-contracts.git
```

## Install dependencies

Run the following command to install the dependencies -

```sh
cd neon-test-contracts
npm install --force
```

## Create a .env file

Create a `.env` file in the root directory and place the following line inside and replace the value with your private key -

```sh
PRIVATE_KEY_OWNER=XYZ
```

## Deploy and verify the contracts

### UUPS Contract

1. Deploy the contract:

```sh
npx hardhat run scripts/deployUUPS.js --network neondevnet
```

2. Verify the contract:

```sh
npx hardhat verify <PROXY_CONTRACT_ADDRESS> --network neondevnet
```

### TransparentUpgradeable Contract

1. Deploy the contract:

```sh
npx hardhat run scripts/deployTransparentUpgradeable.js --network neondevnet
```

2. Verify the contract:

```sh
npx hardhat verify <PROXY_CONTRACT_ADDRESS> --network neondevnet
```

### Beacon Proxy Contract

1. Deploy the contract:

```sh
npx hardhat run scripts/deployBeacon.js --network neondevnet
```

2. Verify the contract:

```sh
npx hardhat verify <BEACON_PROXY_CONTRACT_ADDRESS> --network neondevnet
```
