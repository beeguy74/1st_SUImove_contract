import { getFullnodeUrl, SuiClient } from '@mysten/sui.js/client';
// import { getFaucetHost, requestSuiFromFaucetv1 } from '@mysten/sui.js/faucet';
import { MIST_PER_SUI } from '@mysten/sui.js/utils';
 
// replace <YOUR_SUI_ADDRESS> with your actual address, which is in the form 0x123...
const MY_ADDRESS = process.env.MY_ADDRESS // '<YOUR_SUI_ADDRESS>';
 
// create a new SuiClient object pointing to the network you want to use
const suiClient = new SuiClient({ url: getFullnodeUrl('devnet') });
 
// Convert MIST to Sui
const balance = (balance) => {
	return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
};
 
// store the JSON representation for the SUI the address owns before using faucet
const suiBefore = await suiClient.getBalance({
	owner: MY_ADDRESS,
});
 
console.log(MY_ADDRESS)
console.log(suiBefore)
// await requestSuiFromFaucetv1({
// 	// use getFaucetHost to make sure you're using correct faucet address
// 	// you can also just use the address (see Sui TypeScript SDK Quick Start for values)
// 	host: getFaucetHost('devnet'),
// 	recipient: MY_ADDRESS,
// });
 
// // store the JSON representation for the SUI the address owns after using faucet
// const suiAfter = await suiClient.getBalance({
// 	owner: MY_ADDRESS,
// });
 
// // Output result to console.
// console.log(
// 	`Balance before faucet: ${balance(suiBefore)} SUI. Balance after: ${balance(
// 		suiAfter,
// 	)} SUI. Hello, SUI!`,
// );