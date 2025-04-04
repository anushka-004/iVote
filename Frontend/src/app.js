// Import ethers.js (Since you're using ES Module)
import { ethers } from "./node_modules/ethers/dist/ethers.min.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("loginButton");
    const userAddress = document.getElementById("userAddress");

    async function connectWallet() {
        if (window.ethereum) {
            try {
                // Check if MetaMask is already connecting
                const accounts = await window.ethereum.request({ method: "eth_accounts" });
                if (accounts.length > 0) {
                    console.log("Already connected:", accounts[0]);
                    return;
                }
    
                // Request wallet connection
                const newAccounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log("Connected:", newAccounts[0]);
    
            } catch (error) {
                console.error("Connection error:", error);
            }
        } else {
            alert("MetaMask is not installed. Please install it to use this feature.");
        }
    }
    

    loginButton.addEventListener("click", connectWallet);
});
