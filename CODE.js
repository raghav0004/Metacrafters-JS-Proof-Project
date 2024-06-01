/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFTs you have created
*/

// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++) {
        console.log("NFT #" + (i + 1));
        console.log("Name: " + nfts[i].name);
        console.log("Eye Color: " + nfts[i].eyeColor);
        console.log("Shirt Type: " + nfts[i].shirtType);
        console.log("Bling: " + nfts[i].bling);
        console.log("--------------------");
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line
mintNFT("raghav", "red", "Shirt", "Gold chain");
mintNFT("Meta", "green", "leather", "bronze Necklace");
mintNFT("bis", "blue", "jacket", "diamond Bracelet");

// List all NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total NFTs Minted: " + getTotalSupply());
