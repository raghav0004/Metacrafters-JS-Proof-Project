# Metacrafters-JS-Proof-Project

This project is a straightforward and engaging JavaScript application designed to simulate the creation and management of Non-Fungible Tokens (NFTs). The implementation includes functions to mint new NFTs, display all minted NFTs, and monitor the total number of NFTs created.

## Key Features:

1. **Mint New NFTs**: The `mintNFT` function allows users to generate a new NFT with specified metadata, including name, eye color, shirt type, and bling. Each new NFT is added to an array.

2. **List All NFTs**: The `listNFTs` function goes through the array of NFTs and logs their metadata to the console, providing a clear and organized view of all the NFTs created.

3. **Total NFT Supply**: The `getTotalSupply` function returns the total count of NFTs that have been minted, giving users a quick summary of the entire NFT collection.

## Project Structure:

1. **NFT Storage**: An array named `nftCollection` is utilized to store all the NFT objects.

2. **Minting Function**: The `mintNFT` function is responsible for creating and adding new NFT objects to the `nftCollection` array.

3. **Listing Function**: The `listNFTs` function prints each NFT's metadata to the console in a readable format.

4. **Supply Function**: The `getTotalSupply` function returns the total number of NFTs in the array.

## Conclusion:

This project is an educational tool aimed at explaining the fundamental principles of NFT creation and management. It allows users to engage with the code by minting new NFTs, viewing their collection, and tracking the total supply. This simulation offers a basic understanding of how NFTs operate in a simplified setting.
