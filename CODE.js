// Step 1: Create a variable to hold your NFTs
// We use an array to store the NFTs
let nftCollection = [];

// Step 2: Create the mintNFT function
// This function takes parameters for the NFT metadata and adds the NFT to the collection
function mintNFT(name, rarity, theme, specialFeature) {
    // Create an NFT object with the given metadata
    const nft = {
        name: name,
        rarity: rarity,
        theme: theme,
        specialFeature: specialFeature
    };
    
    // Add the NFT to the collection
    nftCollection.push(nft);
}

// Mint some NFTs with unique metadata
mintNFT("Galactic Unicorn", "Legendary", "Space", "Rainbow Mane");
mintNFT("Fire Dragon", "Epic", "Fantasy", "Flaming Tail");
mintNFT("Cyber Samurai", "Rare", "Cyberpunk", "Energy Blade");

// Step 3: List all the NFTs in the collection
function listNFTs() {
    console.log("My NFT Collection:");
    nftCollection.forEach(nft => {
        console.log(`${nft.name} - Rarity: ${nft.rarity}, Theme: ${nft.theme}, Special Feature: ${nft.specialFeature}`);
    });
}

// Step 4: Print the total supply of NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Step 5: List all NFTs and print the total supply
listNFTs();
console.log(`Total Supply: ${getTotalSupply()}`);
