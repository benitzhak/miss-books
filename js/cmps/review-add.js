export default {
    props: ['book'],
    template: `
    <section class="review-add">
    <h3>Add Review</h3>
    <form @submit.prevent="submitReview">
    <div class="user-name">
        <label for="user-name">Name:</label>
        <input v-model="review.name" type="text" name="user-name" >
        </div>
        <div class="rate">
        <label for="rate">Rate Book:</label>
        <select v-model="review.rate" name="rate">
            <option value="5">🌟🌟🌟🌟🌟</option>
            <option value="4">🌟🌟🌟🌟</option>
            <option value="3">🌟🌟🌟</option>
            <option value="2">🌟🌟</option>
            <option value="1">🌟</option>
        </select>
    </div>
    <div class="read-at">
    <label for="read-at">Read At:</label>
    <input v-model="review.date" type="date" name="read-at">
    </div>
    <div class="free-text">
    <label for="free-text">Enter Free Text:</label>
    <input v-model="review.txt" type="text" name="free-text">
    </div>
    <button class="submit">submit</button>
    </form>
    </section>
    `,
    data() {
        return {
            review: {
                name: 'Book Reader',
                rate: 5,
                date: '',
                txt: ''
            }
        }
    },
    methods: {
        submitReview() {
            console.log(this.review);
            this.$emit('addReview', this.review)
            this.review = {
                name: 'Book Reader',
                rate: 5,
                date: null,
                txt: ''
            }
        }
    }
};