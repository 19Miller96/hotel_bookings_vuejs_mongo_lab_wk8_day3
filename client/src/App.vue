<template>
  <div id="app">
    <h1>Bookings</h1>
    <bookings-form></bookings-form>
    <booking-details :bookings="bookings"></booking-details>
    <bookings-list :bookings="bookings"></bookings-list>
  </div>
</template>

<script>
import {eventBus} from './main';
import BookingDetails from './components/BookingDetails.vue';
import BookingsForm from './components/BookingsForm.vue';
import BookingItem from './components/BookingItem.vue';
import BookingsList from './components/BookingsList.vue';
import BookingsService from './services/BookingsService.js';


export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'booking-details': BookingDetails,
    'bookings-list': BookingsList
  },
  data(){
    return {
      bookings: []
    };
  },
  mounted(){
    this.fetchBookings();

    // eventBus.$on('submit_booking', payload => {
    //   BookingsService.
    // })
  },
  methods: {
    fetchBookings() {
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }



}
</script>

<style>

</style>
