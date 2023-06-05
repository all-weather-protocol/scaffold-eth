// 每個投資標的都用 etc 4626 vault 去存，例如 convex ohm frax LP,然後他的上層再用一個 portfolio etc 4626 contract 來記錄使用者佔這個投資組合的幾趴。不同投資組合但是有同樣標的物的話，他們在那個 child erc4626, aka vault 都會佔有股份
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "hardhat/console.sol";
import "./radiant/ILendingPool.sol";
import "./gmx-contracts/IRewardRouterV2.sol";


contract RadiantArbitrumVault is ERC4626 {
    IERC20 private immutable _underlying;
    ILendingPool public radiantLending;
    IRewardRouterV2 public gmxRouter;
    constructor(string memory name_, string memory symbol_, IERC20Metadata underlying_, address radiantLending_, address gmx_) 
        ERC4626(underlying_)
        ERC20(name_, symbol_) 
    {
        _underlying = underlying_;
        radiantLending = ILendingPool(radiantLending_);
        gmxRouter = IRewardRouterV2(gmx_);
    }
    function deposit(uint256 amount, address receiver) public override returns (uint256) {
        uint256 shares = super.deposit(amount, receiver);
        require(shares > 0, "erc4626 deposit failed");
        _underlying.approve(address(gmxRouter), amount);
        // gmxRouter.mintAndStakeGlp(address(_underlying), amount, 0, (amount * 90) / 100);
        // gmxRouter.mintAndStakeGlpETH(0, (msg.value * 90) / 100);
        // TODO(david): radiant doesn't work for now
        _underlying.approve(address(radiantLending), amount);
        radiantLending.deposit(address(_underlying), amount, address(this), 0);
        return shares;
    }

    function withdraw(uint256 amount, address receiver, address owner) public override returns (uint256) {
        radiantLending.withdraw(address(_underlying), amount, address(this));
        uint256 shares = super.withdraw(amount, receiver, owner);
        return shares;
    }

    // function claim(){
        // https://arbiscan.io/tx/0x13ded9cd77e5918bb7b51484c94b0676a6f05dd83506a73924a76cf43e2ce530
    // }
}
