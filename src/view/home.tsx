import { useStore } from 'vuex'
import { Button, Cell, Switch } from 'vant'
import MNav from '../components/MNav'

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
        <MNav />
        <div>HOME</div>
        <h2>{store.state.title}</h2>
        <Button>这是vant按钮</Button>

        <Cell title="默认地址" v-slots={SwitchSlots}></Cell>
        <Switch size="24" />
      </>
    )
  }
}
