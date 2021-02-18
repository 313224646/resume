<template>
  <div class="page">
    <div class="funds">
      <van-swipe-cell v-for="(item, index) in myFunds" :key="index">
        <div class="funds-item">
          <div class="funds-item-name">{{item.name}}</div>
          <div class="funds-item-other">
            <span>成本价: {{item.cost}}</span>
            <span>持有份额: {{item.hold}}</span>
          </div>
        </div>
        <template #right>
          <div class="funds-item-tools">
            <div @click="modifyOneFund(index)"><base-icon icon="icon-shezhi" size="2" /></div>
            <div @click="delectOneFund(index)"><base-icon icon="icon-shanchu" size="2" /></div>
          </div>
        </template>
      </van-swipe-cell>
    </div>

    <div class="tools">
      <base-icon icon="icon-tianjia" size="2.5" @click.native="addOneFund" />
    </div>

    <van-popup round v-model="addFundActive" class="fund-popup">
      <van-form @submit="save">
        <van-field
          v-model="fund.code"
          type="number"
          name="code"
          placeholder="基金代码"
        />
        <van-field
          v-model="fund.cost"
          type="number"
          name="cost"
          placeholder="成本价"
        />
        <van-field
          v-model="fund.hold"
          type="number"
          name="hold"
          placeholder="持有份额"
        />
        <div style="margin: 16px;">
          <van-button round block size="small" type="info" native-type="save">
            保存
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
import local from 'localforage'
import { fetchFund } from "@/api/fund"
import { SwipeCell, Form, Field, Button, Popup, Notify } from 'vant'
export default {
  name: 'fund-set',
  components: {
    [SwipeCell.name]: SwipeCell,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button,
    [Popup.name]: Popup,
  },
  data () {
    return {
      addFundActive: false,
      myFunds: [],
      fund: {
        code: '',
        cost: '',
        hold: ''
      }
    }
  },
  methods: {
    cleanFundData () {
      this.fund = {
        code: '',
        cost: '',
        hold: ''
      }
    },
    async save (info) {
      let code = info.code, cost = Number(info.cost), hold = Number(info.hold)
      let myFunds = await local.getItem('myFunds') || []
      let res = await fetchFund({ code }) // 获取基金信息
      if (res.length === 0) {
        Notify({ type: 'danger', message: '没有找到基金' })
        return
      }
      let fund = res[0]
      fund.cost = cost
      fund.hold = hold

      let findIndexMyFunds = myFunds.findIndex(item => item.code === fund.code)

      if (findIndexMyFunds === -1) {
        myFunds.push(fund)
      } else {
        myFunds[findIndexMyFunds] = fund
      }
      
      await local.setItem('myFunds', myFunds)
      this.myFunds = myFunds
      this.addFundActive = false
      this.cleanFundData()
    },
    addOneFund () {
      this.cleanFundData()
      this.addFundActive = true
    },
    delectOneFund (index) {
      this.myFunds.splice(index, 1)
      local.setItem('myFunds', this.myFunds)
    },
    modifyOneFund (index) {
      this.fund = this.myFunds[index]
      this.addFundActive = true
    }
  },
  mounted () {
    local.getItem('myFunds').then(
      res => {
        this.myFunds = res || []
      }
    )
  }
}
</script>

<style scoped lang="stylus">
.page
  background-color #f7f8fa
  min-height 100vh
.tools
  text-align right
  padding 10px
.funds
  .funds-item
    padding 10px
    background-color #fff
    margin-bottom 10px
    height 80px
    .funds-item-name
      line-height 36px
      font-size 20px
      color #222222
    .funds-item-other
      span
        margin-right 16px
        font-size 14px
        color #666666
  .funds-item-tools
    background-color #fff
    width 50px
    height 80px
    div
      height 50%
      display: flex;
      justify-content: center;
      align-items: center;
.fund-popup
  padding 10px 0 0
</style>