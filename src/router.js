import { createRouter, createWebHistory } from "vue-router"

import Home from './components/Home.vue'
import About from './components/About.vue'
import Metro from './components/Metro.vue'
import Recipes from './components/recipes/Recipes.vue'
import Basics from './components/recipes/Basics.vue'
import Coleslaw from './components/recipes/Coleslaw.vue'
import Focaccia from './components/recipes/Focaccia.vue'
import KombuchaBBQ from './components/recipes/KombuchaBBQ.vue'
import MascarponeGnocchi from './components/recipes/MascarponeGnocchi.vue'
import OnePotPasta from './components/recipes/OnePotPasta.vue'
import OnionRings from './components/recipes/OnionRings.vue'
import Overview from './components/recipes/Overview.vue'
import PizzaDough from './components/recipes/PizzaDough.vue'
import Sauces from './components/recipes/Sauces.vue'
import SDTPasta from './components/recipes/SDTPasta.vue'
import Seitan from './components/recipes/Seitan.vue'
import SourdoughFocaccia from './components/recipes/SourdoughFocaccia.vue'
import VeganBuffaloDip from './components/recipes/VeganBuffaloDip.vue'
import VeggieStock from './components/recipes/VeggieStock.vue'
import WheatBread from './components/recipes/WheatBread.vue'
import OilRice from './components/recipes/OilRice.vue'
import SesameCookies from './components/recipes/SesameCookies.vue'
import Kimchi from './components/recipes/Kimchi.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            component: Home
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/metro',
            component: Metro
        },
        {
            path:'/recipes',
            component: Recipes
        },
        {
            path:'/recipes/basics',
            component: Basics
        },
        {
            path:'/recipes/coleslaw',
            component: Coleslaw
        },
        {
            path:'/recipes/focaccia',
            component: Focaccia
        },
        {
            path:'/recipes/kombucha-bbq',
            component: KombuchaBBQ
        },
        {
            path:'/recipes/mascarpone-gnocchi',
            component: MascarponeGnocchi
        },
        {
            path:'/recipes/one-pot-pasta',
            component: OnePotPasta
        },
        {
            path:'/recipes/onion-rings',
            component: OnionRings
        },
        {
            path:'/recipes/overview',
            component: Overview
        },
        {
            path:'/recipes/pizza-dough',
            component: PizzaDough
        },
        {
            path:'/recipes/sauces',
            component: Sauces
        },
        {
            path:'/recipes/sdt-pasta',
            component: SDTPasta
        },
        {
            path:'/recipes/seitan',
            component: Seitan
        },
        {
            path:'/recipes/sourdough-focaccia',
            component: SourdoughFocaccia
        },
        {
            path:'/recipes/vegan-buffalo-dip',
            component: VeganBuffaloDip
        },
        {
            path:'/recipes/veggie-stock',
            component: VeggieStock
        },
        {
            path:'/recipes/wheat-bread',
            component: WheatBread
        },
        {
            path:'/recipes/glutinous-oil-rice',
            component: OilRice
        },
        {
            path:'/recipes/black-sesame-cookies',
            component: SesameCookies
        },
        {
            path:'/recipes/kimchi',
            component: Kimchi
        }
    ]
})