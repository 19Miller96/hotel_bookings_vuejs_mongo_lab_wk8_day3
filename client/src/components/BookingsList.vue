<template>
  <div>
      <h2>List of bookings</h2>
        <booking-item v-for="(booking, index) in bookings" :key="index" :booking="booking"/>
  </div>
</template>

<script>
import BookingItem from './BookingItem.vue'

export default {
    name: 'bookings-list',
    props: ['bookings'], 
    components: { 'booking-item': BookingItem }

}
</script>

<style>

</style>
