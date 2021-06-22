import longText from "../cmps/long-text.js";
import { bookService } from "../services/book-service.js";
import reviewAdd from "../cmps/review-add.js";

// step 1 - send from review add emit to add review
// step 2 - add review in service and update local storage
// step 3 - load relevant book again to update dom

export default {
    template: `
    <section v-if="book" class="book-details" >
        <div  class="details-container">
        <button class="close"><router-link to="/book">Back</router-link></button>
        <h3 v-if="showOnSellSign" class="sale">now on sale</h3> 
        <p><span class="key">Title:</span> {{book.title}}</p>
        <p><span class="key">Subtitle:</span> {{book.subtitle}}</p>
        <p><span class="key">price:</span> <span class="book-price" :class="getCurrPrice">{{book.listPrice.amount}}{{showCurrency}}</span></p>
        <p><span class="key">Authors:</span> {{book.authors[0]}}</p>
        <p><span class="key">Published Date:</span> {{book.publishedDate}} {{showBookAge}}</p>
        <p><span class="key">Categories:</span> {{showBookCategories}}</p>
        <p><span class="key">Language:</span> {{book.language}}</p>
        <p><span class="key">PageCount:</span> {{book.pageCount}} {{showReadingTime}}</p>
        <p><span class="key">Book Id:</span> {{book.id}}</p>
        <p><span class="key">Description:</span> <long-text :txt="book.description"/></p>
        <review-add :book="book" @addReview="addBookReviews"></review-add>
        <img :src="book.thumbnail"/>
        </div>
    </section>
    `,
    data() {
        return {
            book: null
        }
    },
    created() {
        const { bookId } = this.$route.params
        bookService.getById(bookId)
            .then(book => this.book = book)
    },
    computed: {
        showBookCategories() {
            return this.book.categories.join(', ')
        },
        showReadingTime() {
            if (this.book.pageCount > 500) return 'Lond Reading';
            else if (this.book.pageCount > 200) return 'Decent Reading';
            else if (this.book.pageCount < 100) return 'Light Reading'
        },
        showBookAge() {
            const currYear = (new Date()).getFullYear();
            if (currYear - this.book.publishedDate > 10) return 'Veteran Book';
            else if (currYear - this.book.publishedDate < 1) return 'new'
        },
        showCurrency() {
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
            else if (this.book.listPrice.currencyCode === 'USD') return '$';
            else if (this.book.listPrice.currencyCode === 'EUR') return '€';
        },
        showOnSellSign() {
            return this.book.listPrice.isOnSale
        },
        getCurrPrice() {
            return {
                red: this.book.listPrice.amount > 150,
                green: this.book.listPrice.amount < 20,
            }
        },
    },
    methods: {
        addBookReviews(review) {
            console.log(review);
        }
    },
    components: {
        longText,
        reviewAdd
    },

}