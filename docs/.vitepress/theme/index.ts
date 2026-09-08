import { h } from 'vue'
import Theme from 'vitepress/theme'
import { useData } from 'vitepress'
import Landing from './Landing.vue'
import './style/var.css'
import './style/landing.css'

export default {
    ...Theme,
    // Pages with `layout: landing` in their frontmatter render the custom
    // homepage instead of the default theme shell (which brings its own
    // nav/sidebar/footer). Everything else falls through untouched.
    Layout() {
        const { frontmatter } = useData()
        return frontmatter.value.layout === 'landing'
            ? h(Landing)
            : h(Theme.Layout)
    }
}
