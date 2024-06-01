// Step 1: Create a variable to hold your NFTs
// We use an array to store the NFTs
let nftCollection = [];

// Step 2: Create the mintNFT function
// This function takes parameters for the NFT metadata and adds the NFT to the collection
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the given metadata
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    // Add the NFT object to the nftCollection array
    nftCollection.push(nft);
}

// Step 3: Create the listNFTs function
// This function loops through the nftCollection array and prints the metadata of each NFT
function listNFTs() {
    // Loop through the array of NFTs
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`NFT ${i + 1}`); // Print the NFT number
        console.log(`Name: ${nftCollection[i].name}`); // Print the name
        console.log(`Eye Color: ${nftCollection[i].eyeColor}`); // Print the eye color
        console.log(`Shirt Type: ${nftCollection[i].shirtType}`); // Print the shirt type
        console.log(`Bling: ${nftCollection[i].bling}`); // Print the bling
        console.log('-------------------------'); // Separator for readability
    }
}

// Step 4: Create the getTotalSupply function
// This function returns the total number of NFTs in the collection
function getTotalSupply() {
    return nftCollection.length; // Return the length of the nftCollection array
}

// Step 5: Call your functions below this line
// Mint three NFTs with different metadata
mintNFT("CryptoPunk", "Blue", "T-Shirt", "Gold Chain");
mintNFT("EtherRock", "Green", "Hoodie", "Diamond Ring");
mintNFT("BoredApe", "Brown", "Jacket", "Silver Watch");

// List all the NFTs in the collection
listNFTs();

// Print the total supply of NFTs
console.log(`Total Supply: ${getTotalSupply()}`);
