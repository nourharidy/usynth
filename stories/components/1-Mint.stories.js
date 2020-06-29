import Mint from '../../src/components/Mint.vue';

export default {
  title: 'Mint',
  component: Mint,
};

export const Default = () => ({
  components: { Mint },
  data: () => {
    return {
      time: Date.now() + 10000000
    }
  },
  template: `
  <div class="container">
    <Mint 
      name="ETHBTC-AUG20" 
      priceFeed="ETH/BTC"
      price="0.025238 BTC"
      usdPrice=243.52
      :expirationTimestamp="time"
      creq=120
      daiBalance="100000000000000000000"
      synthBalance="0"/>
  </div>
  
  `
});