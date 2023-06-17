



var address="";
var abiXen='[ { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "approve", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "claimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "other", "type": "address" }, { "internalType": "uint256", "name": "pct", "type": "uint256" } ], "name": "claimMintRewardAndShare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "pct", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "claimMintRewardAndStake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "claimRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" } ], "name": "decreaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" } ], "name": "increaseAllowance", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "stake", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transfer", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GetPower", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "share", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" } ], "name": "GetPowerandShare", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "rewardAmount", "type": "uint256" } ], "name": "MintClaimed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "rank", "type": "uint256" } ], "name": "RankClaimed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" } ], "name": "Withdrawn", "type": "event" }, { "inputs": [], "name": "activeMinters", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "activeStakes", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" } ], "name": "allowance", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "AUTHORS", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "account", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DAYS_IN_YEAR", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [ { "internalType": "uint8", "name": "", "type": "uint8" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_PM_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_PM_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "EAA_RANK_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "GENESIS_RANK", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "genesisTs", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentAMP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentAPY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentEAAR", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getCurrentMaxTerm", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "rankDelta", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "eaa", "type": "uint256" } ], "name": "getGrossReward", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [], "name": "getUserMint", "outputs": [ { "components": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "eaaRate", "type": "uint256" } ], "internalType": "struct TEXLACrypto.MintInfo", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getUserStake", "outputs": [ { "components": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "apy", "type": "uint256" } ], "internalType": "struct TEXLACrypto.StakeInfo", "name": "", "type": "tuple" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "globalRank", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_PENALTY_PCT", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TERM_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_TERM_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MIN_TERM", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "POWER_PER_XEN", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "powerBalances", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REWARD_AMPLIFIER_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REWARD_AMPLIFIER_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SECONDS_IN_DAY", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TERM_AMPLIFIER", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "TERM_AMPLIFIER_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalXenStaked", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userBurns", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userMints", "outputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "rank", "type": "uint256" }, { "internalType": "uint256", "name": "amplifier", "type": "uint256" }, { "internalType": "uint256", "name": "eaaRate", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "", "type": "address" } ], "name": "userStakes", "outputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "maturityTs", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "apy", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "WITHDRAWAL_WINDOW_DAYS", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_DAYS_STEP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_END", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_APY_START", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_MIN_BURN", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "XEN_MIN_STAKE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" } ]';
var nftabi='[ { "inputs": [ { "internalType": "address", "name": "xenCrypto_", "type": "address" }, { "internalType": "uint256[]", "name": "burnRates_", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "tokenLimits_", "type": "uint256[]" }, { "internalType": "uint256", "name": "startBlockNumber_", "type": "uint256" }, { "internalType": "address", "name": "forwarder_", "type": "address" }, { "internalType": "address", "name": "royaltyReceiver_", "type": "address" } ], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" } ], "name": "OperatorNotAllowed", "type": "error" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "to", "type": "address" } ], "name": "EndTorrent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "xenContract", "type": "address" }, { "indexed": true, "internalType": "address", "name": "tokenContract", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "xenAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokenAmount", "type": "uint256" } ], "name": "Redeemed", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "count", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "StartTorrent", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "AUTHORS", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "BLACKOUT_TERM", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "COMMON_CATEGORY_COUNTER", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "LIMITED_CATEGORY_TIME_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "OPERATOR_FILTER_REGISTRY", "outputs": [ { "internalType": "contract IOperatorFilterRegistry", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "POWER_GROUP_SIZE", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "ROYALTY_BP", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "SPECIAL_CATEGORIES_VMU_THRESHOLD", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "trustedForwarder", "type": "address" } ], "name": "addForwarder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" } ], "name": "bulkClaimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "count", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "bulkClaimRank", "outputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "count", "type": "uint256" }, { "internalType": "uint256", "name": "term", "type": "uint256" }, { "internalType": "uint256", "name": "burning", "type": "uint256" } ], "name": "bulkClaimRankLimited", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "to", "type": "address" } ], "name": "callClaimMintReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "term", "type": "uint256" } ], "name": "callClaimRank", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "genesisTs", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "getApproved", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "isApex", "outputs": [ { "internalType": "bool", "name": "apex", "type": "bool" } ], "stateMutability": "pure", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" } ], "name": "isApprovedForAll", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "forwarder", "type": "address" } ], "name": "isTrustedForwarder", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "mintInfo", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "user", "type": "address" }, { "internalType": "uint256", "name": "burned", "type": "uint256" } ], "name": "onTokenBurned", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "ownedTokens", "outputs": [ { "internalType": "uint256[]", "name": "", "type": "uint256[]" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "ownerOf", "outputs": [ { "internalType": "address", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "powerDown", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "salePrice", "type": "uint256" } ], "name": "royaltyInfo", "outputs": [ { "internalType": "address", "name": "receiver", "type": "address" }, { "internalType": "uint256", "name": "royaltyAmount", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "data", "type": "bytes" } ], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" } ], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesBurnRates", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesCounters", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "specialClassesTokenLimits", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startBlockNumber", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" } ], "name": "supportsInterface", "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "tokenIdCounter", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "internalType": "string", "name": "", "type": "string" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" } ], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "vmuCount", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "name": "xenBurned", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "xenCrypto", "outputs": [ { "internalType": "contract TEXLACrypto", "name": "", "type": "address" } ], "stateMutability": "view", "type": "function" } ]';
//const contrato='0x0D6A3F69048D8b49463E8f4Ad3cA4B278E55de67'0xb564a5767a00ee9075cac561c427643286f8f4e1   0x2ab0e9e4ee70fff1fb9d67031e44f6410170d00e  0xC0C5AA69Dbe4d6DDdfBc89c0957686ec60F24389;
let contrato='0xd0Dd0f6220628534Bd4BC31E3dCC93e8bf47d152';

var uterm="";
var maturityTs="";
var crank="";
var amplifier="";
var eaaRate="";
var globalrank=null;


ethereum.on('accountsChanged', function () {
    // Recargar la página automáticamente
    
    location.reload();
    ObtenerMetamaskId();
    ActualizarDasboard();

  });
window.addEventListener('load', () => {
  ObtenerMetamaskId();
    ActualizarDasboard();
    ConectarMetamask();
    
  });


document.addEventListener("DOMContentLoaded", function() {
     conectar = document.getElementById("conectar");
     ObtenerMetamaskId();
    conectar.addEventListener("click", ConectarMetamask);
    ActualizarDasboard();

  });

  const netw=document.getElementById('selectnet');
  netw.addEventListener("change", function() {
    // Llamar a la función deseada
    ObtenerMetamaskId();
    ConectarMetamask();
    ActualizarDasboard();
  });
  
  window.onload = function() {
    ObtenerMetamaskId();
    ActualizarDasboard();
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
  let netid='111';
  
  if(netw.value==='velas'){
    //alert(netw.value);
      netid ='111';
      contrato = '0xd6688259A6F9656dc6b29f14CD8562f288870505';
      symb.textContent='VLX';
  }
  if(netw.value==='moonbeam'){
    //alert(netw.value);
      netid ='1284';
      contrato = '0x282FB260AD754d42e2b554Ba409ee6bFd6aB5928';
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
  if(netw.value==='tlos'){
    //alert(netw.value);
      netid='40';
      contrato = '0xe06d5F6ce8a51EC0296a90B10ceA2fc66C0E0f5A';
      symb.textContent='TLOS';
      
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
      ActualizarDasboard();
      ObtenerCuenta();
      GlobaRank();

    } else {
      alert('Please connect  Metamask to ' + netw.value + ' Blockchain');
      var conectar = document.getElementById("conectar");          
            // Cambia el valor del botón
            conectar.value = "Connect " + netw.value + " Chain";
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
      var  pow = document.getElementById("power");
     const pwer=await GetPowerAmount();
     
     pow.textContent=pwer.toString();
    
  
      
        var primeros =  address.substring(0,6);
        var ultimos = address.slice(-6);
            var conectar = document.getElementById("conectar");          
            // Cambia el valor del botón
            conectar.value = primeros + "........."+ ultimos;    


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
    ObtenerCuenta();
    GlobaRank();
    UserMints();
    LiquidSupply();
    UserStakes();
   
}
async function ClaimRewards()
{ 
      TestConection();

   
    const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
    const receipt = await contract.methods.claimMintReward().send({
        from: address,
        gas: 600000, // límite de gas para la transacción
        //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
        //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
        //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
      });
    ActualizarDasboard();
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
        
        document.getElementById("claimr").value=reward1 +" TEX369 to Claim";
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
      count.textContent='El tiempo ha expirado';
  } else {
    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / 1000 / 60 / 60) % 24);
    const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
    const maturityDateFormatted = maturityDate.toLocaleDateString();
    count.textContent=`Calim in ${days} Days, ${hours} Hours, ${minutes} Min and ${seconds} Sec (${maturityDateFormatted})`;
  }
}

  function Limpiar(){

    const walletShare=document.getElementById('textShare').value;
    if(!(/^(0x)?[0-9a-fA-F]{40}$/.test(walletShare))){
    document.getElementById('textShare').value="";}


    document.getElementById('amountStake').value="";
    
  }
  async function ClaimShare(){
         
        TestConection();       
            
    const walletShare=document.getElementById('textShare').value;
    const porcent=document.getElementById('textPorcent').value;
   //
    if (/^(0x)?[0-9a-fA-F]{40}$/.test(walletShare)) {
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.claimMintRewardAndShare(walletShare,porcent).send({
            from: address,
            gas: 300000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();
    } else {
      alert('La direccion no es valida');
    }
    
        
      }
      
      
      
      async function Stake(){
         
        TestConection();       
            
    const AmountStake=document.getElementById('amountStake').value;
    const TermStake=document.getElementById('termStake').value;
   //
    const AmountStake1=BigInt( AmountStake * (10 ** 18));
    //alert(AmountStake1);
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.stake(AmountStake1,TermStake).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();           
      }

      async function UserStakes(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
      const userStaked=document.getElementById('userstaked');
      
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt =await contract.methods.userStakes(address).call();
        //alert(receipt);
        userStaked.textContent= receipt[2]/10**18;
                  
      }
      async function ClaimStaked(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
      const userStaked=document.getElementById('userstaked');
      
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt =await contract.methods.withdraw().send({
          from: address,
          gas: 200000, // límite de gas para la transacción
          //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
          //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
          //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
        });
        //alert(receipt);
        ActualizarDasboard();
                  
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
      async function PowerandShare(){
         
        TestConection();       
        address = (await web3.eth.getAccounts())[0];
    const amountBurn=document.getElementById('amountburn').value;
    const wallettoshare=document.getElementById('tpowerShare').value;
   
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.GetPowerandShare(address,wallettoshare,amountBurn).send({
            from: address,
            gas: 200000, // límite de gas para la transacción
            //gasPrice: web3.utils.toWei('10', 'gwei'), // precio de gas en wei
            //maxFeePerGas: web3.utils.toWei('20', 'gwei'), // precio máximo de gas en wei
            //maxPriorityFeePerGas: web3.utils.toWei('10', 'gwei') // precio máximo de gas prioritario en wei
          });
        ActualizarDasboard();           
      }
      async function Approve(){
         
        TestConection();    
        address = (await web3.eth.getAccounts())[0];
    const amountBurn=document.getElementById('tapprove').value;
    const wallettoshare=document.getElementById('tpowerShare').value;
    const toapprove=BigInt( amountBurn * (10 ** 18));
        const contract = new web3.eth.Contract(JSON.parse(abiXen), contrato);   
        const receipt = await contract.methods.approve(contrato,toapprove).send({
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
              contrato = '0x29CD7F889cD8891020DfA6C7EA4b811ae29AA607';
              symb.textContent='VLX';
              ConectarMetamask();
          }
          if(currentNetwork==='1284'){
            //alert(netw.value);
              netw.value='moonbeam';
              contrato = '0xfdE37824F9Dc448180CC6e38E0fd373493BA5eE4';
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
          if(currentNetwork==='40'){
            //alert(netw.value);
              netw.value='tlos';
             
              symb.textContent='TLOS';
              ConectarMetamask();
          }
          
      
        
         
      }