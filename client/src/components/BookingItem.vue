<template>
  <div>
      
      <h2>Name: {{booking.name}}</h2>
      <p>Arrival date: {{booking.arrival_date}}</p>
      <p>Leave date: {{booking.leave_date}}</p>
      <p>Room Number: {{booking.room_number}}</p>
      <p>Room Type: {{booking.room_type}}</p>
        
  </div>
</template>

<script>

export default {
    name: 'booking-item',
    props: ['booking']
}
</script>