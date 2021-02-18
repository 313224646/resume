<template>
  <div class="page">
    <van-divider>预估收益</van-divider>
    <div class="income" :class="fundsDate.preIncome >= 0 ? 'red' : 'green'">
      <ICountUp :delay="1000" :endVal="fundsDate.preIncome" />
    </div>
    <van-divider><van-count-down class="count" :time="20000" format="ss" millisecond ref="countDown" /></van-divider>

    <div class="funds">
      <div class="funds-tools">
        <base-icon icon="icon-zichanguanli" size="1.8" @click.native="$router.push('fund/set')" />
      </div>
      <div 
        v-for="(item, index) in myFunds" 
        :key="index"
        class="fund" 
        :class="item.expectGrowth >= 0 ? 'red' : 'green'">
        <div class="fund-name">{{item.name}}</div>
        <div class="fund-expect"><ICountUp :delay="1000" :endVal="Number(item.expectGrowth)" :options="options" />%</div>
      </div>
    </div>
  </div>
</template>

<script>
import { CountDown, Divider } from "vant"
import { fetchFund } from "@/api/fund"
import ICountUp from "vue-countup-v2"
import local from 'localforage'
export default {
  name: "fund",
  components: {
    ICountUp,
    [CountDown.name]: CountDown,
    [Divider.name]: Divider,
  },
  data() {
    return {
      fundsDate: {
        preIncome: 0,
        totIncome: 0
      },
      myFunds: [],
      options: {
        decimalPlaces: 2
      },
      status: false
    };
  },
  methods: {
    finish () {
      this.$refs.countDown.reset()
    },
    inOpeningTime () {
      const date = new Date()
      let m = date.getHours() * 60 + date.getMinutes()
      return (570 <= m && m <= 690) || (780 <= m && m <= 900)
    },
    setFundsData() {
      let totIncome = 0,
        preIncome = 0;
      for (const fund of this.myFunds) {
        totIncome += fund.totIncome;
        preIncome += fund.preIncome;
      }
      this.fundsDate.totIncome = +totIncome.toFixed(2);
      this.fundsDate.preIncome = +preIncome.toFixed(2);
    },
    fetchFunds() {
      let code = this.myFunds.map(item => item.code).join(",");
      fetchFund({ code }).then(res => {
        for (let index = 0; index < res.length; index++) {
          let fund = Object.assign({}, this.myFunds[index], res[index]);
          fund.totIncome = +(fund.hold * (fund.netWorth - fund.cost)).toFixed(2)
          fund.preIncome = +(fund.hold * (fund.expectWorth - fund.netWorth)).toFixed(2);
          this.myFunds[index] = fund;
        }
        this.setFundsData();
      });
    }
  },
  mounted() {

    local.getItem('myFunds').then(
      res => {
        this.myFunds = res || []
        this.fetchFunds()
      }
    )

    setInterval(() => {
      if (this.inOpeningTime()) {
        this.fetchFunds()
        this.$refs.countDown.reset()
        this.status = true
      } else {
        this.$refs.countDown.pause()
        this.status = false
      }
    }, 20000)
  }
}
</script>

<style scoped lang="stylus">
.income {
  text-align: center;
  font-size: 60px;
  font-weight: bold;
}
.funds
  padding 0 20px
  margin-top 20px
.funds-tools
  text-align right
.fund
  display flex
  margin 10px 0
  font-size 18px
  .fund-name
    flex auto
.red {
  color: red;
}

.green {
  color: green;
}

.count {
  color: #cccccc;
}
</style>