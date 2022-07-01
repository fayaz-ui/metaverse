require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/QpJH_cI613UDLhOnXWT4aglFnpawxfl9',
      accounts: ['cab707c75149e3e7d44a69bc2f82501fa2cbb1be4daa2c52635b297d57913fdd'],
    },
  },
};
