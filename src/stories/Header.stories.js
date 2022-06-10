import { storiesOf } from '@storybook/vue3'
import vueRouter from 'storybook-vue3-router'
import Header from '@/components/Pages/Header.vue'
import MainService from '@/services/main'

storiesOf('pages/Header', module)
  .addDecorator(vueRouter())
  .add('Basic', () => ({
    components: { Header },
    setup: () => {
      const main = new MainService()
      return { main }
    },
    template: `<Header :store="main" />`,
  }))
