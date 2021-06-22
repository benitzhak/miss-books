import bookApp from './pages/book-app.js';
import appHeader from './cmps/app-header.js';
import appFooter from './cmps/app-footer.js';
import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import bookDetails from './pages/book-details.js';

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
];

const router = new VueRouter({ routes })


const options = {
    el: '#app',
    router,
    template: `
        <section>
            <app-header />
            <router-view />
            <app-footer />
        </section>
    `,
    components: {
        bookApp,
        appHeader,
        appFooter
    }
};

const app = new Vue(options);