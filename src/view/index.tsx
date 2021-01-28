import { useStore } from 'vuex'
import { Button, Cell, Switch } from 'vant'

export default {
  setup() {
    const store = useStore()

    const SwitchSlots = {
      'right-icon': () => (
        <Switch size="24" />
      ),
    };

    return () => (
      <>
        <Cell title="默认地址" v-slots={SwitchSlots}></Cell>
        <Switch size="24" />
      </>
    )
  }
}
