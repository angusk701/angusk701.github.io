// Replace with your deployed contract address and ABI
const CONTRACT_ADDRESS = "0xc3036F4Cf88393EaAa9814946710E21aDA89423A";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "trainer",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "odds",
				"type": "uint256"
			}
		],
		"name": "addHorse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "bettor",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "BetPlaced",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "distributeWinnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "HorseAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "HorseRemoved",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "placeBet",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "RaceStarted",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "removeHorse",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startNewRace",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "winningHorseID",
				"type": "uint256"
			}
		],
		"name": "WinningsDistributed",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "withdrawHouseTake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawWinnings",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bets",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "getHorsePool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			}
		],
		"name": "getUserBet",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasBet",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "horseIdToIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "horsePoolAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "horses",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "horseID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "horseName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "odds",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "trainerName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextHorseId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "players",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "raceActive",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "raceSettled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewHorseList",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "horseID",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "horseName",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "odds",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "trainerName",
						"type": "string"
					}
				],
				"internalType": "struct HorseRacing.Horse[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "winnings",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider, signer, contract, userAddress, horsesCache = [];

async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        userAddress = await signer.getAddress();
        document.getElementById('account').innerText = `Connected: ${userAddress}`;
        contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

        // Check if user is owner
        const owner = await contract.owner();
        if (userAddress.toLowerCase() === owner.toLowerCase()) {
            document.getElementById('admin-section').style.display = "block";
        } else {
            document.getElementById('admin-section').style.display = "none";
        }

        await loadStatus();
        await loadHorses();
        await getWinnings();
        await loadTotalPool();
    } else {
        alert("Please install MetaMask!");
    }
}

async function loadStatus() {
    const raceActive = await contract.raceActive();
    const raceSettled = await contract.raceSettled();
    let status = "";
    if (raceSettled) status = "Race Settled. Awaiting new race.";
    else if (raceActive) status = "Race Active: Betting is OPEN.";
    else status = "Race Closed: Awaiting winner selection.";
    document.getElementById("race-status").innerText = status;
}

async function loadTotalPool() {
    if (!contract) return;
    let total = ethers.BigNumber.from(0);
    horsesCache.forEach(horse => {
        total = total.add(horse.pool);
    });
    document.getElementById("total-pool").innerText = `Total Pool: ${ethers.utils.formatEther(total)} ETH`;
}

async function loadHorses() {
    const horsesTable = document.querySelector("#horses-table tbody");
    horsesTable.innerHTML = "";
    horsesCache = [];
    try {
        const horses = await contract.viewHorseList();
        for (const horse of horses) {
            // Get pool and user bet for each horse
            const pool = await contract.horsePoolAmount(horse.horseID);
            const userBet = await contract.getUserBet(userAddress, horse.horseID);
            horsesCache.push({ ...horse, pool, userBet });
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${horse.horseID}</td>
                <td>${horse.horseName}</td>
                <td>${horse.trainerName}</td>
                <td>${(horse.odds / 100).toFixed(2)}</td>
                <td>${ethers.utils.formatEther(pool)} ETH</td>
                <td>${ethers.utils.formatEther(userBet)} ETH</td>
                <td>
                    <button onclick="fillHorseId(${horse.horseID})">Bet</button>
                </td>
            `;
            horsesTable.appendChild(row);
        }
    } catch (err) {
        horsesTable.innerHTML = "<tr><td colspan='7'>Unable to load horses.</td></tr>";
    }
    await loadTotalPool();
}

function fillHorseId(id) {
    document.getElementById("horse-id").value = id;
}

function showErrorModal(message) {
    const modal = document.getElementById("error-modal");
    const msgDiv = document.getElementById("error-modal-message");
    msgDiv.textContent = message;
    modal.style.display = "flex";
}

document.getElementById("close-modal").onclick = function() {
    document.getElementById("error-modal").style.display = "none";
};

// Optional: close modal when clicking outside the box
document.getElementById("error-modal").onclick = function(e) {
    if (e.target === this) this.style.display = "none";
};


document.getElementById("bet-form").onsubmit = async function(e) {
    e.preventDefault();
    const horseId = document.getElementById("horse-id").value;
    const amount = document.getElementById("bet-amount").value;
    const msgDiv = document.getElementById("bet-message");
    msgDiv.innerText = "Placing bet...";
    try {
        const tx = await contract.placeBet(horseId, { value: ethers.utils.parseEther(amount) });
        await tx.wait();
        msgDiv.innerText = "Bet placed successfully!";
        await loadHorses();
        await getWinnings();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// Add Horse
document.getElementById("add-horse-form").onsubmit = async function(e) {
    e.preventDefault();
    const name = document.getElementById("new-horse-name").value;
    const trainer = document.getElementById("new-trainer-name").value;
    const odds = document.getElementById("new-horse-odds").value;
    const msgDiv = document.getElementById("admin-message");
    msgDiv.innerText = "Adding horse...";
    try {
        const tx = await contract.addHorse(name, trainer, odds);
        await tx.wait();
        msgDiv.innerText = "Horse added!";
        await loadHorses();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// Remove Horse
document.getElementById("remove-horse-form").onsubmit = async function(e) {
    e.preventDefault();
    const horseId = document.getElementById("remove-horse-id").value;
    const msgDiv = document.getElementById("admin-message");
    msgDiv.innerText = "Removing horse...";
    try {
        const tx = await contract.removeHorse(horseId);
        await tx.wait();
        msgDiv.innerText = "Horse removed!";
        await loadHorses();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// Choose Winner
document.getElementById("choose-winner-form").onsubmit = async function(e) {
    e.preventDefault();
    const horseId = document.getElementById("winner-horse-id").value;
    const msgDiv = document.getElementById("admin-message");
    msgDiv.innerText = "Distributing winnings...";
    try {
        const tx = await contract.distributeWinnings(horseId);
        await tx.wait();
        msgDiv.innerText = "Winnings distributed!";
        await getWinnings();
        await loadStatus();
        await loadHorses();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// Start New Race
document.getElementById("start-race-btn").onclick = async function() {
    const msgDiv = document.getElementById("admin-message");
    msgDiv.innerText = "Starting new race...";
    try {
        const tx = await contract.startNewRace();
        await tx.wait();
        msgDiv.innerText = "New race started!";
        await loadStatus();
        await loadHorses();
        await getWinnings();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// Withdraw House Take
document.getElementById("withdraw-house-btn").onclick = async function() {
    const msgDiv = document.getElementById("admin-message");
    msgDiv.innerText = "Withdrawing house take...";
    try {
        const tx = await contract.withdrawHouseTake();
        await tx.wait();
        msgDiv.innerText = "House take withdrawn!";
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

async function getWinnings() {
    if (!contract || !userAddress) return;
    try {
        const win = await contract.winnings(userAddress);
        document.getElementById("winnings-message").innerText = 
            `Your winnings: ${ethers.utils.formatEther(win)} ETH`;
    } catch (err) {
        document.getElementById("winnings-message").innerText = "Unable to fetch winnings.";
    }
}

document.getElementById("withdraw-btn").onclick = async function() {
    const msgDiv = document.getElementById("winnings-message");
    msgDiv.innerText = "Withdrawing...";
    try {
        const tx = await contract.withdrawWinnings();
        await tx.wait();
        msgDiv.innerText = "Winnings withdrawn!";
        await getWinnings();
    } catch (err) {
        showErrorModal("Error: " + (err.data?.message || err.message));
    }
};

// On page load, connect wallet
window.onload = connectWallet;
