export default {
    template: `
    <section class="books-filter">
        <label>book name:</label>
        <input v-model="filterBy.name" type="text" @input="filter" placeholder="Search by name...">
        <label>price from:</label>
        <input v-model="filterBy.fromPrice" type="number" @input="filter" >
        <label>price to:</label>
        <input v-model="filterBy.toPrice" type="number" @input="filter" placeholder="max price..">
    </section>
    `,
    data() {
        return {
            filterBy: {
                name: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};