import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.js';
import booksFilter from '../cmps/books-filter.js';

export default {
    template: `
        <section class="book-app">
            <books-filter @filtered="setFilter"/>
            <book-list :books="booksToShow" ></book-list>
        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
        };
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchStr = this.filterBy.name.toLowerCase();
            const minPrice = this.filterBy.fromPrice
            let maxPrice = this.filterBy.toPrice
            if (!maxPrice) maxPrice = Infinity
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount > minPrice && book.listPrice.amount < maxPrice;
            });
            return booksToShow;
        }
    },
    components: {
        bookList,
        booksFilter
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    }
};