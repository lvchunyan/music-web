import CommonIcon from '_c/common-icon'
import { util } from '@/libs/common'
export default {
  components: {
    CommonIcon
  },
  methods: {
    showTitle (item) {
      return util.showTitle(item, this)
    },
    showChildren (item) {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
    },
    getNameOrHref (item, children0) {
      return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
    }
  }
}
