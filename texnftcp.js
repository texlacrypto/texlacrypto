


var currentPage = 1;
var rowsPerPage=9;
var address="";
var abiXen='[ { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "other", "type": "address" }, { "internalType": "uint256", "name": "pct", "type": "uint256" } ], "name": "claimMintRewardAndShare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "pct", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "claimMintRewardAndStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "claimRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GetPower", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "share", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GetPowerandShare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "rewardAmount", "type": "uint256" } ], "name": "MintClaimed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rank", "type": "uint256" } ], "name": "RankClaimed", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "power", "type": "uint256" } ], "name": "SacrifyPower", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "share", "type": "address" }, { "internalType": "uint256", "name": "power", "type": "uint256" } ], "name": "SendPower", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "Staked", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" } ], "name": "Withdrawn", "type": "event" }, { "inputs": [], "name": "activeMinters", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "activeStakes", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AUTHORS", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DAYS_IN_YEAR", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_PM_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_PM_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_RANK_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "GENESIS_RANK", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "genesisTs", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentAMP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentAPY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentEAAR", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentMaxTerm", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rankDelta", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "eaa", "type": "uint256" } ], "name": "getGrossReward", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getUserMint", "outputs": [ { "components": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "eaaRate", "type": "uint256" } ], "internalType": "struct TEXLACrypto.MintInfo", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUserStake", "outputs": [ { "components": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "apy", "type": "uint256" } ], "internalType": "struct TEXLACrypto.StakeInfo", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalRank", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_PENALTY_PCT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TERM_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TERM_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TERM", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "POWER_PER_XEN", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "powerBalances", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "powerSacrify", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REWARD_AMPLIFIER_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REWARD_AMPLIFIER_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SECONDS_IN_DAY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TERM_AMPLIFIER", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TERM_AMPLIFIER_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalXenStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userBurns", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userMints", "outputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "eaaRate", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userStakes", "outputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "apy", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAWAL_WINDOW_DAYS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_DAYS_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_MIN_BURN", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_MIN_STAKE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]';
var nftabi='[ { "inputs": [ { "internalType": "address", "name": "trustedForwarder", "type": "address" } ], "name": "addForwarder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "xenCrypto_", "type": "address" }, { "internalType": "uint256[]", "name": "burnRates_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "tokenLimits_", "type": "uint256[]" }, { "internalType": "uint256", "name": "startBlockNumber_", "type": "uint256" }, { "internalType": "address", "name": "forwarder_", "type": "address" }, { "internalType": "address", "name": "royaltyReceiver_", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" } ], "name": "OperatorNotAllowed", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" } ], "name": "bulkClaimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "count", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "bulkClaimRank", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "count", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "burning", "type": "uint256" } ], "name": "bulkClaimRankLimited", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "callClaimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "callClaimRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" } ], "name": "EndTorrent", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "burned", "type": "uint256" } ], "name": "onTokenBurned", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "powerDown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "xenContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenContract", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "xenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" } ], "name": "Redeemed", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "count", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "StartTorrent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "AUTHORS", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "BLACKOUT_TERM", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "COMMON_CATEGORY_COUNTER", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "genesisTs", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "isApex", "outputs": [ { "internalType": "bool", "name": "apex", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "forwarder", "type": "address" } ], "name": "isTrustedForwarder", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "LIMITED_CATEGORY_TIME_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "mintInfo", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "OPERATOR_FILTER_REGISTRY", "outputs": [ { "internalType": "contract IOperatorFilterRegistry", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ownedTokens", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "POWER_GROUP_SIZE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ROYALTY_BP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "salePrice", "type": "uint256" } ], "name": "royaltyInfo", "outputs": [ { "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "royaltyAmount", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SPECIAL_CATEGORIES_VMU_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesBurnRates", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesCounters", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesTokenLimits", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlockNumber", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenIdCounter", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "vmuCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "xenBurned", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "xenCrypto", "outputs": [ { "internalType": "contract TEXLACrypto", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]';
const abiMintInfo='[ { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "decodeMintInfo", "outputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amp", "type": "uint256" }, { "internalType": "uint256", "name": "eaa", "type": "uint256" }, { "internalType": "uint256", "name": "class", "type": "uint256" }, { "internalType": "bool", "name": "apex", "type": "bool" }, { "internalType": "bool", "name": "limited", "type": "bool" }, { "internalType": "bool", "name": "redeemed", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amp", "type": "uint256" }, { "internalType": "uint256", "name": "eaa", "type": "uint256" }, { "internalType": "uint256", "name": "class_", "type": "uint256" }, { "internalType": "bool", "name": "redeemed", "type": "bool" } ], "name": "encodeMintInfo", "outputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getAMP", "outputs": [ { "internalType": "uint256", "name": "amp", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getClass", "outputs": [ { "internalType": "uint256", "name": "class_", "type": "uint256" }, { "internalType": "bool", "name": "apex", "type": "bool" }, { "internalType": "bool", "name": "limited", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getEAA", "outputs": [ { "internalType": "uint256", "name": "eaa", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getMaturityTs", "outputs": [ { "internalType": "uint256", "name": "maturityTs", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getRank", "outputs": [ { "internalType": "uint256", "name": "rank", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getRedeemed", "outputs": [ { "internalType": "bool", "name": "redeemed", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "info", "type": "uint256" } ], "name": "getTerm", "outputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" } ], "stateMutability": "pure", "type": "function" } ]'
//const contrato='0x0D6A3F69048D8b49463E8f4Ad3cA4B278E55de67'0xb564a5767a00ee9075cac561c427643286f8f4e1   0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e  0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389;
let contrato='0xeCBFcff0df87b2e10fad55F310858393978061c0';
let nftcontrato='0x1806Abd7e3f900Fab70A2D75A1b56ba0e0878081';
let MintInfocontract='0x5D74a792cdF0A4a038fb86aFC4B8AE6819A6b165';

var uterm="";
var maturityTs="";
var crank="";
var amplifier="";
var eaaRate="";
var globalrank=null;


ethereum.on('accountsChanged', function () {
    // Recargar la página automáticamente
    
    location.reload();
   // ObtenerMetamaskId();
    //ActualizarDasboard();

  });
window.addEventListener('load', () => {
 
  ObtenerMetamaskId();
 //ConectarMetamask();
  //NftCatClass();
 // ListadoTEXNFT();
    
    
  });


document.addEventListener("DOMContentLoaded", function() {
     conectar = document.getElementById("conectar");
     //ObtenerMetamaskId();
    conectar.addEventListener("click", ConectarMetamask);
    
   
    
  });

  const netw=document.getElementById('selectnet');
  netw.addEventListener("change", function() {
    // Llamar a la función deseada
   // ObtenerMetamaskId();
    //ConectarMetamask();
   
    ActualizarDasboard();

  });
  
  window.onload = function() {
    ObtenerMetamaskId();
   //ConectarMetamask();
   // NftCatClass();
   // ListadoTEXNFT();
   
    
    
    
  };

// Definir la función a llamar
//function doSomething() {
//  console.log("La opción seleccionada ha cambiado");
  // Aquí puedes agregar cualquier otra lógica que desees ejecutar
//}


async function ConectarMetamask()
{
  const netw=document.getElementById('selectnet');
  let symb = document.getElementById("symbol");
  const post=netw.selectedIndex;
  let netid='106';
  
  if(netw.value==='velas'){
    //alert(netw.value);
      netid ='106';
      contrato = '0xeCBFcff0df87b2e10fad55F310858393978061c0';
      nftcontrato='0x1806Abd7e3f900Fab70A2D75A1b56ba0e0878081';
      MintInfocontract='0x5D74a792cdF0A4a038fb86aFC4B8AE6819A6b165';
      symb.textContent='VLX';
  }
  if(netw.value==='moonbeam'){
    //alert(netw.value);
      netid ='1284';
      contrato = '0x10509cC297d1D546Ca435ff28BE9F206d62a5881';
              nftcontrato='0x446049284920E87F5Deb6EC1e88bA2d8eF6F1Ea2';
              MintInfocontract='0x8Bbe68b7D503Fb7b468bfd2351918f772033e025';
      symb.textContent='GLMR';
      
  }
  if(netw.value==='polygon'){
    //alert(netw.value);
      netid='137';
      symb.textContent='MATIC';
  }
  if(netw.value==='avax'){
    //alert(netw.value);
      netid='43114';
      contrato = '';
      symb.textContent='AVAX';
      
  }
  if(netw.value==='bsc'){
    //alert(netw.value);
      netid='56';
      contrato = '';
      symb.textContent='BNB';
      
  }
  if(netw.value==='evmos'){
    //alert(netw.value);
      netid='9001';
      contrato = '0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e';
      nftcontrato='0x4c4cf206465abfe5cecb3b581fa1b508ec514692';
      MintInfocontract='0x8E2DF25F70534f8234Ef89419E4fa825F8690060';
      symb.textContent='EVMOS';
      
  }
  if(netw.value==='tlos'){
    //alert(netw.value);
      netid='40';
      contrato = '0x0d8ef82D3dce71D1FdCE83f4a6C6B9692B87Efd9';
      nftcontrato='0x91eefCc67A0cC3e8a27B86b389386129228D3D42';
      MintInfocontract='0x91DE3700573c7E19740C49240E413798c81337c9';
      symb.textContent='TLOS';
      
  }
  if(netw.value==='TENET'){
    //alert(netw.value);
      netid='1559';
      contrato = '0xEDc628042AAbF9Edf89F416FE8E30CBdFbcf68C7';
      nftcontrato='0x85f66Bc152fC639627CC41bA90CCbDA741aF26D7';
      MintInfocontract='0x581Cc74Ecd4d05839032058E94870220821b45A1';
      symb.textContent='TENET';
      
  }
  if(netw.value==='scroll'){
    //alert(netw.value);
      netid='534351';
      contrato = '0x2DC4ec9c7529F18Af709A144e4F63d18Fd9b2f0b';
      nftcontrato='0x6c9eBF33A4D44b5F7Ad2354c59272a09830851cd';
      MintInfocontract='0x11EdEB9fF2A00C299CA663c234C5083A0deBb9e5';
      symb.textContent='ETH';
      
  }
  if(netw.value==='taiko'){
    //alert(netw.value);
      netid='167007';
      contrato = '0x72e4b7E85BF174292A10c87b7ac274E6f60073BE';
      nftcontrato='0x11EdEB9fF2A00C299CA663c234C5083A0deBb9e5';
      MintInfocontract='0x181BE9b993cB9384c0B07381B771268dB6A2aC67';
      symb.textContent='ETH';
     
  }
  if(netw.value==='base'){
    //alert(netw.value);
      netid='8453';
      contrato = '0xffcbf84650ce02dafe96926b37a0ac5e34932fa5';
      nftcontrato='0x379002701BF6f2862e3dFdd1f96d3C5E1BF450B6';
      MintInfocontract='0x41Ef68B460871aCBbD355137134D7E278D2EFE82';   
      symb.textContent='ETH';
     
  }
  
 
 
  if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
    console.log('Extensión de Metamask detectada');
    
    // Verificar si la red actual de Metamask coincide con la red de Velas Blockchain
    const currentNetwork = await window.ethereum.request({ method: 'net_version' });
    
    if (currentNetwork === netid) { // 106 es el Chain ID de Velas Network
      //alert('Conectado a la red de Velas Blockchain');
  
      
        // New web3 provider
        if (window.ethereum) {
          window.web3 = new Web3(ethereum);
          try {
              // ask user for permission
              await ethereum.enable();
              // user approved permission
          } catch (error) {
              // user rejected permission
              console('user rejected permission');
          }
      }
      // Old web3 provider
      else if (window.web3) {
          window.web3 = new Web3(web3.currentProvider);
          // no need to ask for permission
      }
      // No web3 provider
      else {
          console.log('No web3 provider detected');
      }
      ObtenerCuenta();
      NftCatClass();
      
      ActualizarDasboard();      
      GlobaRank();
      

    } else {
      //alert('Please connect  Metamask to ' + netw.value + ' Blockchain');
      var conectar = document.getElementById("conectar");          
            // Cambia el valor del botón
            conectar.value = "Connect " + netw.value + " Chain";
            const tbody=document.getElementById('nftlistado');
           
            tbody.innerHTML = "";
    }
  } else {
    alert('Please install Metamask');
  }
    
        
          
}
async function TestConection(){
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
}

async function ObtenerCuenta(){
  //alert("pepo");
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
       
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
    
    address = (await web3.eth.getAccounts())[0];
    
    const balancevlx = web3.utils.fromWei(
        await web3.eth.getBalance(address) // Balance is in wei
      );
      const contract1 = new web3.eth.Contract(JSON.parse(abiXen), contrato);
      const MaxTerm = await contract1.methods.getCurrentMaxTerm().call();
    const MaxTerm1=MaxTerm/86400;
      var  Mterm = document.getElementById("term");
      Mterm.value=MaxTerm1;

     const aux=parseFloat(balancevlx);
     const aux1=aux.toFixed(3);
     

      var balanceVLX = document.getElementById("balancevlx");
      balanceVLX.textContent=aux1;
      
      const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
      const balancevlXen = await contract.methods.balanceOf(address).call();
      var  balancevlxen = document.getElementById("balancevlxen"); 
      const resultado = Number(balancevlXen) / 10**18;
      balancevlxen.textContent=resultado;
      
    
  
      
        var primeros =  address.substring(0,6);
        var ultimos = address.slice(-6);
            var conectar = document.getElementById("conectar");          
            // Cambia el valor del botón
           
            conectar.value = primeros + "........."+ ultimos;    
            NftCatClass();
            ListadoTEXNFT();
            var  pow = document.getElementById("power");
     const pwer=await GetPowerAmount();
     
     pow.textContent=pwer.toString();
            

}   


 function Dashboard(){
    
   ObtenerCuenta();
}


async function Mint()
{ 
      TestConection();

    
   const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);
    //claimRank
    
    var aux=document.getElementById('term');
    var term=parseInt(aux.value);
    if (isNaN(term) || term % 1 !== 0) {
        alert("El valor debe ser entero.");
      } else {
        address = (await web3.eth.getAccounts())[0];
        
        const receipt = await contract.methods.claimRank(term).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
          
      }
      ActualizarDasboard();
}


async function GlobaRank()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.globalRank().call();
    
    globalrank=receipt;
    
    const gRank = document.getElementById('gRank');
     gRank.textContent = receipt;
     
}
async function LiquidSupply()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.totalSupply().call();
    globalrank=receipt;
    const gRank = document.getElementById('liquid');
    const resultado = Number(receipt) / 10**18;
    const liquidy=Math.floor(resultado);
    //alert(liquidy);
     gRank.textContent =liquidy ;
}

function ActualizarDasboard()
{
    //ObtenerCuenta();
    GlobaRank();
    UserMints();
    LiquidSupply();
    UserStakes();
    
   
}


async function UserMints()
{ 
      TestConection();
      address = (await web3.eth.getAccounts())[0];
   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.userMints(address).call();
    const CAMP = await contract.methods.getCurrentAMP().call();
    const EAAR = await contract.methods.getCurrentEAAR().call();
    
    uterm=receipt[1];
    maturityTs=receipt[2];
    crank=receipt[3];
    amplifier=receipt[4];
    eaaRate=receipt[5];
    
    

    if(receipt[0]!=="0x0000000000000000000000000000000000000000"){
      
        
        document.getElementById("bmint").disabled=true;
        
        var reward=calculateMintReward(crank,uterm,maturityTs,amplifier,eaaRate);
        
        const reward1=((await reward).toString());
       
        //const reward2=reward1.slice(0,-1);
        
        document.getElementById("claimr").value=reward1 +" TEX to Claim";
        const crank1 = document.getElementById('cRank');
        crank1.textContent=crank;
       
        //document.getElementById("claimr").value=(await reward).toString() +" vlXEN to Claim";
       

        
        
    }
    else{
        document.getElementById("bmint").disabled=false;
        document.getElementById("claimr").disabled=true;
    }
    
}

async function calculateMintReward(cRank, term, maturityTs, amplifier, eeaRate) {
    
  TestConection();
  GlobaRank();
  //const timestamp = null;
  //
  
  
  const block = await web3.eth.getBlock('latest');
  const timestamp = block.timestamp;
    
 
    
  const secsLate = timestamp - maturityTs;
  //
  
  
  const penalty = Penalty(secsLate);
  
  const rankDelta = Math.max(globalrank - cRank, 2);
  const aux=1000;
  const EAA =BigInt (aux) + BigInt(eeaRate);
  //alert(EAA);
  const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
  const reward =await contract.methods.getGrossReward(rankDelta,amplifier,term,EAA).call();
  
  //const reward = getGrossReward(rankDelta, amplifier, term, EAA);
   const resultado = Math.floor((reward * (100 - penalty)) / 100);
   calculateTimeLeft(maturityTs);
   return resultado;
}

function Penalty(secsLate) {
  // =MIN(2^(daysLate+3)/window-1,99)
  const daysLate = Math.floor(secsLate / 86400);
  if (daysLate > 7 - 1) return 99;
  const penalty = (Math.pow(2, daysLate + 3)) / 7 - 1;
  return Math.min(penalty, 99);
}


function calculateTimeLeft(maturityTimeInSeconds) {
  const maturityTime = maturityTimeInSeconds * 1000; // Convertir a milisegundos
  const maturityDate = new Date(maturityTime); // Obtener la fecha de madurez
  const currentTime = new Date().getTime(); // Obtener la hora actual en milisegundos
  const remainingTime = maturityTime - currentTime;
  const count=document.getElementById('countdown');
  if (remainingTime < 0) {
      const textContent='Can Claim';
      return textContent;
  } else {
    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    const maturityDateFormatted = maturityDate.toLocaleDateString();
    const textContent=`Calim in ${days} Days and ${hours} Hours (${maturityDateFormatted})`;
    return textContent;
  }
}

      
      
      
    

      
      async function GetPower(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
    const amountBurn=document.getElementById('amountburn').value;
    
   
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.GetPower(address,amountBurn).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();           
      }
      
      async function Approve(amount){
         
        TestConection();    
        address = (await web3.eth.getAccounts())[0];
    
    
    
    const toapprove=BigInt( amount * (10 ** 18));
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.approve(nftcontrato,toapprove).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();           
      }
      async function GetPowerAmount(){
         
        TestConection();    
        address = (await web3.eth.getAccounts())[0];
    
   
   
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.powerBalances(address).call();
       // alert(receipt);
        return receipt;          
      }
      async function ObtenerMetamaskId()
      { 
        
          const netw=document.getElementById('selectnet');
          let symb = document.getElementById("symbol");
          // Verificar si la red actual de Metamask coincide con la red de Velas Blockchain
          const currentNetwork = await window.ethereum.request({ method: 'net_version' });
      
          if(currentNetwork==='106'){
            //alert(netw.value);
            netw.value='velas';
            contrato = '0xeCBFcff0df87b2e10fad55F310858393978061c0';
            nftcontrato='0x1806Abd7e3f900Fab70A2D75A1b56ba0e0878081';
            MintInfocontract='0x5D74a792cdF0A4a038fb86aFC4B8AE6819A6b165';
              symb.textContent='VLX';
              ConectarMetamask();
              

          }
          if(currentNetwork==='1284'){
            //alert(netw.value);
              netw.value='moonbeam';
              contrato = '0x10509cC297d1D546Ca435ff28BE9F206d62a5881';
              nftcontrato='0x446049284920E87F5Deb6EC1e88bA2d8eF6F1Ea2';
              MintInfocontract='0x8Bbe68b7D503Fb7b468bfd2351918f772033e025';
              symb.textContent='GLMR';
              ConectarMetamask();
          }
          if(currentNetwork==='56'){
            //alert(netw.value);
              netw.value='bsc';
              contrato = '0xF7Ba79A8dF627D5f04923637A9fDb1dc0435cBcd';
              symb.textContent='BNB';
              ConectarMetamask();
          }
          if(currentNetwork==='43114'){
            //alert(netw.value);
              netw.value='avax';
              contrato = '0x20B9292c3D4b1D5702fB1Da658653934CEE6ea52';
              symb.textContent='AVAX';
              ConectarMetamask();
          }
          if(currentNetwork==='137'){
            //alert(netw.value);
              netw.value='polygon';
             
              symb.textContent='MATIC';
              ConectarMetamask();
          }
          if(netw.value==='9001'){
            //alert(netw.value);
              netw.value='evmos';
              contrato = '0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e';
              nftcontrato='0x4c4cf206465abfe5cecb3b581fa1b508ec514692';
              MintInfocontract='0x8E2DF25F70534f8234Ef89419E4fa825F8690060';
              symb.textContent='EVMOS';
              ConectarMetamask();
              
          }
          if(currentNetwork==='40'){
            //alert(netw.value);
              netw.value='tlos';
              contrato = '0x0d8ef82D3dce71D1FdCE83f4a6C6B9692B87Efd9';
              nftcontrato='0x91eefCc67A0cC3e8a27B86b389386129228D3D42';
              MintInfocontract='0x91DE3700573c7E19740C49240E413798c81337c9';
              symb.textContent='TLOS';
              ConectarMetamask();
             
          }          
          if(currentNetwork==='1559'){
            //alert(netw.value);
            netw.value='TENET';
              contrato = '0xEDc628042AAbF9Edf89F416FE8E30CBdFbcf68C7';
              nftcontrato='0x85f66Bc152fC639627CC41bA90CCbDA741aF26D7';
              MintInfocontract='0x581Cc74Ecd4d05839032058E94870220821b45A1';
              symb.textContent='TENET';
              ConectarMetamask();
              
          }
          if(currentNetwork==='534351'){
            //alert(netw.value);
            netw.value='scroll';
              contrato = '0x2DC4ec9c7529F18Af709A144e4F63d18Fd9b2f0b';
              nftcontrato='0x6c9eBF33A4D44b5F7Ad2354c59272a09830851cd';
              MintInfocontract='0x11EdEB9fF2A00C299CA663c234C5083A0deBb9e5';
              symb.textContent='ETH';
              ConectarMetamask();
              
          }
          if(currentNetwork==='167007'){
            //alert(netw.value);
            netw.value='taiko';
            contrato = '0x72e4b7E85BF174292A10c87b7ac274E6f60073BE';
            nftcontrato='0x11EdEB9fF2A00C299CA663c234C5083A0deBb9e5';
            MintInfocontract='0x181BE9b993cB9384c0B07381B771268dB6A2aC67';
              symb.textContent='ETH';
              ConectarMetamask();
              
          }
          if(currentNetwork==='8453'){
            //alert(netw.value);
            netw.value='base';
            contrato = '0xffcbf84650ce02dafe96926b37a0ac5e34932fa5';
            nftcontrato='0x379002701BF6f2862e3dFdd1f96d3C5E1BF450B6';
            MintInfocontract='0x41Ef68B460871aCBbD355137134D7E278D2EFE82';
              symb.textContent='ETH';
              ConectarMetamask();
              
          }
          
                 
      }
     
      async function ListadoTEXNFT()
      { 
            TestConection();
            address = (await web3.eth.getAccounts())[0];
            
            const tbody=document.getElementById('nftlistado');
           
            tbody.innerHTML = "";
// Crear la fila del encabezado (<thead>)
var thead = document.createElement("thead");
tbody.appendChild(thead);

// Crear la fila de datos (<tbody>)
var tbodyData = document.createElement("tbody");
tbody.appendChild(tbodyData);

// Agregar los títulos de las columnas en la fila del encabezado
var trHead = document.createElement("tr");
thead.appendChild(trHead);

var thId = document.createElement("th");
thId.textContent = "ID";
trHead.appendChild(thId);

var thNFT = document.createElement("th");
thNFT.textContent = "NFT";
trHead.appendChild(thNFT);

var thvmu = document.createElement("th");
thvmu.textContent = "VMU";
trHead.appendChild(thvmu);

var thterm = document.createElement("th");
thterm.textContent = "TERM";
trHead.appendChild(thterm);

var thClaim = document.createElement("th");
thClaim.textContent = "TEX TO CLAIM";
trHead.appendChild(thClaim);

var thTime = document.createElement("th");
thTime.textContent = "TIME TO CLAIM";
trHead.appendChild(thTime);

var thImg = document.createElement("th");
thImg.textContent = "IMAGE";
trHead.appendChild(thImg);

            const contract = new web3.eth.Contract(JSON.parse(nftabi), nftcontrato);   
            const receipt = await contract.methods.ownedTokens().call({ from: address });            
            
           
           

  
            
            for (var i = 0; i < receipt.length; i++) {
              var token = receipt[i];
              const contract1 = new web3.eth.Contract(JSON.parse(nftabi),nftcontrato );   
              const info = await contract1.methods.mintInfo(token).call();
              var Nfturi = await contract1.methods.tokenURI(token).call();
              var vmu = await contract1.methods.vmuCount(token).call();
              const contract2 = new web3.eth.Contract(JSON.parse(abiMintInfo),MintInfocontract );   
              const term = await contract2.methods.getTerm(info).call();
              const maturity = await contract2.methods.getMaturityTs(info).call();
              const cRankk = await contract2.methods.getRank(info).call();
              const Amplifierr = await contract2.methods.getAMP(info).call();
              const EAARR = await contract2.methods.getEAA(info).call();
              const nftcat = await contract2.methods.getClass(info).call();
              const redeemed = await contract2.methods.getRedeemed(info).call();
             
              var apex=nftcat[1];
              var limited=nftcat[2];
              let catnft = 'Collector';
              
             if (apex == true) {
                 catnft = 'Apex';
             } else if (limited == true) {
                 catnft = 'Limited';
             } else {
                 catnft = 'Collector';
                 
             }
             const fecha= calculateTimeLeft(maturity);
             
             

             var reward=calculateMintReward(cRankk,term,maturity,Amplifierr,EAARR);
        
             const reward1=((await reward).toString());
            
             //const reward2=reward1.slice(0,-1);
             
             const btnclaimtext="Claim "+ reward1*vmu;
             //alert(btnclaim);
             
             
            // var fecha=
             //alert(info);
// Crea una fila <tr> para el token
  var tr = document.createElement("tr");
  tbodyData.appendChild(tr);
  
  // Crea una celda <td> para el ID del token
  var tdId = document.createElement("td");
  tdId.textContent = token;
  tr.appendChild(tdId);

  // Crea una celda <td> para el nombre del NFT
  var tdName = document.createElement("td");
  tdName.textContent ='TEXNFT ('+ catnft+')' ;
  tr.appendChild(tdName);

   // Crea una celda <td> para el Vmu
   var tdvmu = document.createElement("td");
   tdvmu.textContent = vmu ;
   tr.appendChild(tdvmu);

    // Crea una celda <td> para el Term
  var tdterm = document.createElement("td");
  tdterm.textContent = term ;
  tr.appendChild(tdterm);

  // Crea una celda <td> para el botón de CLAIM
  var tdClaim = document.createElement("td");
  tr.appendChild(tdClaim);
  // Crea un botón para el elemento
  var btnClaim = document.createElement("button");
  btnClaim.type = "button";
  btnClaim.id = token;
  btnClaim.textContent = btnclaimtext;
  if(redeemed==true){
    btnClaim.textContent="Redeemed";
    btnClaim.disabled=true;
    
  }
  
  btnClaim.style.width = "180px"; // Establece el ancho del botón
  btnClaim.style.height = "45px"; // Establece la altura del botón
  btnClaim.classList.add("btnclaim");
  tdClaim.appendChild(btnClaim);
  // Agrega un evento click al botón y llama a la función claim() con el número de token del elemento
  btnClaim.onclick = function() {
    ClaimNft(this.id);
  };

  // Crea una celda <td> para el tiempo
  var tdTime = document.createElement("td");
  tdTime.textContent = fecha;
  if(redeemed==true){
    tdTime.textContent = "Redeemed";
    
  }
  tr.appendChild(tdTime);

/*// Crea una celda <td> para la imagen
var tdImage = document.createElement("td");
tr.appendChild(tdImage);

// Crea un elemento <img> para la imagen
var imgElement = document.createElement("img"); 
imgElement.src = Nfturi;
var tdImage = document.createElement("td");
tr.appendChild(tdImage);

fetch(Nfturi)
  .then(response => response.text())
  .then(svgContent => {
    // Crear un elemento <svg> y asignar el contenido del SVG
    const svgElement = document.createElement("svg");
    svgElement.innerHTML = svgContent;

    // Agregar el elemento <svg> a la celda de la tabla
    tdImage.appendChild(svgElement);
  });*/
  
 

}
calculateTotalPages();
  showPage(currentPage);
  createPaginationButtons();
 

      }


     async function ClaimNft(idNFT){
      
      
      TestConection();

       
        address = (await web3.eth.getAccounts())[0];
        const contract = new web3.eth.Contract(JSON.parse(nftabi), nftcontrato);   
            await contract.methods.bulkClaimMintReward(idNFT,address).send({
              from: address,
              //gas: 200000, // límite de gas para la transacción
              //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
              //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
              //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
            }); 

      }

      async function MintNFT(){
      
        TestConection();
        const  vmu= document.getElementById('vmu');
        const  term= document.getElementById('term');
         const vmunft=parseInt(vmu.value);
         const termnft=parseInt(term.value);
        
         
          address = (await web3.eth.getAccounts())[0];
          const contract = new web3.eth.Contract(JSON.parse(nftabi), nftcontrato);   
              await contract.methods.bulkClaimRank(vmunft,termnft).send({
                from: address,
                //gas: 200000, // límite de gas para la transacción
                //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
                //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
                //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
              }); 
  
        }
        async function MintNFTLimit(amountBurn){
      
          TestConection();
          const  vmu= document.getElementById('vmu');
         vmu.value=60;
          const  term= document.getElementById('term');
           var vmunft=parseInt(vmu.value);
           var termnft=parseInt(term.value);
          var amount=parseInt(amountBurn);
         
          
           
            address = (await web3.eth.getAccounts())[0];
            const contract = new web3.eth.Contract(JSON.parse(nftabi), nftcontrato);   
                await contract.methods.bulkClaimRankLimited(vmunft,termnft,amount).send({
                  from: address,
                  //gas: 200000, // límite de gas para la transacción
                  //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
                  //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
                  //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
                }); 
    
          }

       async function NftCatClass(){
          TestConection();
          const  vmu= document.getElementById('vmu');
          vmu.value=60;
          const selcatg=document.getElementById('selectcat');
          const selclass=document.getElementById('selectclass');
          const burntext=document.getElementById('texBurn');
          const btnmint=document.getElementById('nftmint');
          
          
            if(selcatg.value==='collector'){
              selclass.disabled=true;
              burntext.value=0;
              btnmint.textContent="Mint TEXNFT";
             
            }
            else if(selcatg.value==='limited'){
              selclass.disabled=true;
              burntext.value=250000000;
              
              
            }
            else{
              selclass.disabled=false;
              
            }
            if(selclass.value==='rare' && selclass.disabled===false){
              burntext.value=500000000;
            }
            else if(selclass.value==='epic' && selclass.disabled===false){
              burntext.value=1000000000;
            }
            else if(selclass.value==='legendary' && selclass.disabled===false){
              burntext.value=2500000000;
            }
            else if(selclass.value==='exotic' && selclass.disabled===false){
              burntext.value=5000000000;
            }
            else if(selclass.value==='xunicorn' && selclass.disabled===false){
              burntext.value=10000000000;
            }
            
            address = (await web3.eth.getAccounts())[0];
             const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
             const allowancedaux=await contract.methods.allowance(address,nftcontrato).call({from : address});
             const texlabalanceaux=await contract.methods.balanceOf(address).call({from : address});
             const allowanced=allowancedaux/(10**18);
             const texlabalance=texlabalanceaux/(10**18);
             //alert(allowanced);
             //alert(texlabalance);
             if(selcatg.value==='limited'||selcatg.value==='apex'){
             if(texlabalance === 0){
              btnmint.textContent="Need TEX";
             }
             else if(texlabalance<burntext.value){
              btnmint.textContent="Need TEX";
             }
             else if(texlabalance>=burntext.value){

              if (allowanced === 0) {
                btnmint.textContent = "Approve TEX";
                
                
                    
              } else if (allowanced < burntext.value) {
                btnmint.textContent = "Approve TEX"; 
                
                 
                
              } else if (allowanced >= burntext.value) {
                btnmint.textContent = "Mint TEXNFT"; 
                 
                 
                    
              } 
              
             }
            }
            else if (selcatg.value === 'collector') {
              btnmint.textContent = "Mint TEXNFT";
           }


        }
        async function EjecutarMint(){
          
          
          TestConection();

          const selcatg=document.getElementById('selectcat');
          const selclass=document.getElementById('selectclass');
          const burntext=document.getElementById('texBurn');
          const btnmint=document.getElementById('nftmint');
          
          
            if(selcatg.value==='collector'){
              selclass.disabled=true;
              burntext.value=0;
              btnmint.textContent="Mint TEXNFT";
             
            }
            else if(selcatg.value==='limited'){
              selclass.disabled=true;
              burntext.value=250000000;
              
              
            }
            else{
              selclass.disabled=false;
              
            }
            if(selclass.value==='rare' && selclass.disabled===false){
              burntext.value=500000000;
            }
            else if(selclass.value==='epic' && selclass.disabled===false){
              burntext.value=1000000000;
            }
            else if(selclass.value==='legendary' && selclass.disabled===false){
              burntext.value=2500000000;
            }
            else if(selclass.value==='exotic' && selclass.disabled===false){
              burntext.value=5000000000;
            }
            else if(selclass.value==='xunicorn' && selclass.disabled===false){
              burntext.value=10000000000;
            }
            
            address = (await web3.eth.getAccounts())[0];
             const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
             const allowancedaux=await contract.methods.allowance(address,nftcontrato).call({from : address});
             const texlabalanceaux=await contract.methods.balanceOf(address).call({from : address});
             const allowanced=allowancedaux/(10**18);
             const texlabalance=texlabalanceaux/(10**18);
             //alert(allowanced);
             //alert(texlabalance);
             if(selcatg.value==='limited'||selcatg.value==='apex'){
             if(texlabalance === 0){
              btnmint.textContent="Need TEX";
             }
             else if(texlabalance<burntext.value){
              btnmint.textContent="Need TEX";
             }
             else if(texlabalance>=burntext.value){

              if (allowanced === 0) {
                btnmint.textContent = "Approve TEX";
                
                const amount=burntext.value;
                Approve(amount);
                
                    
              } else if (allowanced < burntext.value) {
                btnmint.textContent = "Approve TEX"; 
                const amount=burntext.value;
                Approve(amount);
                 
                
              } else if (allowanced >= burntext.value) {
                btnmint.textContent = "Mint TEXNFT"; 
                const amount=burntext.value;
                MintNFTLimit(amount);
                 
                    
              } 
              
             }
            }
            else if (selcatg.value === 'collector') {
              btnmint.textContent = "Mint TEXNFT";
              MintNFT();
            }

           
        }
        
        function calculateTotalPages() {
          const tableRows = document.getElementById("nftlistado").rows.length - 1;
          totalPages = Math.ceil(tableRows / rowsPerPage);
        }
        function showPage(page) {
          const tableRows = document.getElementById("nftlistado").rows;
          const startIndex = (page - 1) * rowsPerPage + 1;
          const endIndex = startIndex + rowsPerPage - 1;
        
          for (let i = 1; i < tableRows.length; i++) {
            if (i >= startIndex && i <= endIndex) {
              tableRows[i].style.display = "table-row";
            } else {
              tableRows[i].style.display = "none";
            }
          }
        }
        function createPaginationButtons() {
          const pagination = document.getElementById("pagination");
        
          for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.onclick = function() {
              currentPage = i;
              showPage(currentPage);
            };
            pagination.appendChild(button);
          }
        }

        function ListarNFT()
        {
          const chkclaim= document.getElementById('checkclaim');
          if(chkclaim.checked){
            OnlyCalimable();
          }
          else{
            ListadoTEXNFT();
          }
        }
        async function OnlyCalimable(){
          TestConection();
          address = (await web3.eth.getAccounts())[0];
          
          const tbody=document.getElementById('nftlistado');
         
          tbody.innerHTML = "";
// Crear la fila del encabezado (<thead>)
var thead = document.createElement("thead");
tbody.appendChild(thead);

// Crear la fila de datos (<tbody>)
var tbodyData = document.createElement("tbody");
tbody.appendChild(tbodyData);

// Agregar los títulos de las columnas en la fila del encabezado
var trHead = document.createElement("tr");
thead.appendChild(trHead);

var thId = document.createElement("th");
thId.textContent = "ID";
trHead.appendChild(thId);

var thNFT = document.createElement("th");
thNFT.textContent = "NFT";
trHead.appendChild(thNFT);

var thvmu = document.createElement("th");
thvmu.textContent = "VMU";
trHead.appendChild(thvmu);

var thterm = document.createElement("th");
thterm.textContent = "TERM";
trHead.appendChild(thterm);

var thClaim = document.createElement("th");
thClaim.textContent = "TEX TO CLAIM";
trHead.appendChild(thClaim);

var thTime = document.createElement("th");
thTime.textContent = "TIME TO CLAIM";
trHead.appendChild(thTime);

var thImg = document.createElement("th");
thImg.textContent = "IMAGE";
trHead.appendChild(thImg);

          const contract = new web3.eth.Contract(JSON.parse(nftabi), nftcontrato);   
          const receipt = await contract.methods.ownedTokens().call({ from: address });            
          
         
         


          
          for (var i = 0; i < receipt.length; i++) {
            var token = receipt[i];
            const contract1 = new web3.eth.Contract(JSON.parse(nftabi),nftcontrato );   
            const info = await contract1.methods.mintInfo(token).call();
            var Nfturi = await contract1.methods.tokenURI(token).call();
            var vmu = await contract1.methods.vmuCount(token).call();
            const contract2 = new web3.eth.Contract(JSON.parse(abiMintInfo),MintInfocontract );   
            const term = await contract2.methods.getTerm(info).call();
            const maturity = await contract2.methods.getMaturityTs(info).call();
            const cRankk = await contract2.methods.getRank(info).call();
            const Amplifierr = await contract2.methods.getAMP(info).call();
            const EAARR = await contract2.methods.getEAA(info).call();
            const nftcat = await contract2.methods.getClass(info).call();
            const redeemed = await contract2.methods.getRedeemed(info).call();
           
            var apex=nftcat[1];
            var limited=nftcat[2];
            let catnft = 'Collector';
            
           if (apex == true) {
               catnft = 'Apex';
           } else if (limited == true) {
               catnft = 'Limited';
           } else {
               catnft = 'Collector';
               
           }
           const fecha= calculateTimeLeft(maturity);
           
           

           var reward=calculateMintReward(cRankk,term,maturity,Amplifierr,EAARR);
      
           const reward1=((await reward).toString());
          
           //const reward2=reward1.slice(0,-1);
           
           const btnclaimtext="Claim "+ reward1*vmu;
           //alert(btnclaim);
          if(fecha=="Can Claim" && redeemed==false){
 // var fecha=
           //alert(info);
// Crea una fila <tr> para el token
var tr = document.createElement("tr");
tbodyData.appendChild(tr);

// Crea una celda <td> para el ID del token
var tdId = document.createElement("td");
tdId.textContent = token;
tr.appendChild(tdId);

// Crea una celda <td> para el nombre del NFT
var tdName = document.createElement("td");
tdName.textContent ='TEXNFT ('+ catnft+')' ;
tr.appendChild(tdName);

 // Crea una celda <td> para el Vmu
 var tdvmu = document.createElement("td");
 tdvmu.textContent = vmu ;
 tr.appendChild(tdvmu);

  // Crea una celda <td> para el Term
var tdterm = document.createElement("td");
tdterm.textContent = term ;
tr.appendChild(tdterm);

// Crea una celda <td> para el botón de CLAIM
var tdClaim = document.createElement("td");
tr.appendChild(tdClaim);
// Crea un botón para el elemento
var btnClaim = document.createElement("button");
btnClaim.type = "button";
btnClaim.id = token;
btnClaim.textContent = btnclaimtext;
if(redeemed==true){
  btnClaim.textContent="Redeemed";
  btnClaim.disabled=true;
  
}

btnClaim.style.width = "180px"; // Establece el ancho del botón
btnClaim.style.height = "45px"; // Establece la altura del botón
btnClaim.classList.add("btnclaim");
tdClaim.appendChild(btnClaim);
// Agrega un evento click al botón y llama a la función claim() con el número de token del elemento
btnClaim.onclick = function() {
  ClaimNft(this.id);
};

// Crea una celda <td> para el tiempo

  
  var tdTime = document.createElement("td");
tdTime.textContent = fecha;
if(redeemed==true){
  tdTime.textContent = "Redeemed";
  
}
tr.appendChild(tdTime);


/*// Crea una celda <td> para la imagen
var tdImage = document.createElement("td");
tr.appendChild(tdImage);

// Crea un elemento <img> para la imagen
var imgElement = document.createElement("img"); 
imgElement.src = Nfturi;
var tdImage = document.createElement("td");
tr.appendChild(tdImage);

fetch(Nfturi)
.then(response => response.text())
.then(svgContent => {
  // Crear un elemento <svg> y asignar el contenido del SVG
  const svgElement = document.createElement("svg");
  svgElement.innerHTML = svgContent;

  // Agregar el elemento <svg> a la celda de la tabla
  tdImage.appendChild(svgElement);
});*/

          }
           
         


}
calculateTotalPages();
showPage(currentPage);
createPaginationButtons();


        }