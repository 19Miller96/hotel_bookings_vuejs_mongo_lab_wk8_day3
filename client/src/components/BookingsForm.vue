<template lang="html">
    <form id="sightings-form" v-on:submit.prevent="handleSubmit">
        <h2>Add a Booking</h2>
        <div class="formWrap">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name"></input>
        </div>
        <div class="formWrap">
            <label for="arrival_date">Arrival Date:</label>
            <input type="date" id="date" v-model="date"></input>
        </div>
        <div>
            <label for "leave_date">Leave Date:</label>
            <input type="date" id="date" v-model="date"></input>
        </div>
        <div class="formWrap">
            <label for "room_number">Room Number</label>
            <input type="number" id="room_number" v-model="room_number"/>
        </div>

        <input type="submit" value="Save" id="save"></input>
    </form>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: 'bookings-form',
    data() {
        return {
            name: '',
            arrival_date: null,
            leave_date: null,
            room_number: ''
        }
    },
    methods: {
        handleSubmit() {
            const payload = {
                name: this.name,
                arrival_date: this.arrival_date,
                leave_date: this.leave_date,
                room_number: this.room_number
            };

            eventBus.$emit('submit-booking', payload);
            this.name = this.room_number = '';
            this.arrival_date = this.leave_date = '';
        }
    }
}
</script>

<style lang="css" scoped>

h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}

</style>