use hotels;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Sally Saunderson",
        arrival_date: "03-03-2021",
        leave_date: "10-03-2021",
        room_number: 73,
        room_type: "Single"
    },
    {
        name: "David Dawson",
        arrival_date: "05-02-2021",
        leave_date: "25-02-2021",
        room_number: 108,
        room_type: "Double"
    },
    {
        name: "Emily Eddison",
        arrival_date: "18-04-2021",
        leave_date: "28-04-2021",
        room_number: 121,
        room_type: "King"
    }
]);