export default {
    props: ['book'],
    template: `
    <div class="book-preview">
        <p><span class="key">title:</span> {{book.title}}</p>
        <p><span class="key">price:</span> {{book.listPrice.amount}}{{showCurrency}}</p>
    </div>
    `,
    computed: {
        showCurrency() {
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
            else if (this.book.listPrice.currencyCode === 'USD') return '$';
            else if (this.book.listPrice.currencyCode === 'EUR') return '€';
        }
    }
};