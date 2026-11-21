let hotelRoom = {
  location: "Aberdeen",
  pricePerNight: 200,
  guestName: "Mohamed Kargbo",
  niight: 3,

  amenities: ["Wi-Fi", "Ac", "Ocean View", "BreakFast"],
  bathRoom: {
    count: 2,
    hasJacuzzi: true,
  },
};

console.log(hotelRoom.amenities);

console.log(hotelRoom.bathRoom.hasJacuzzi);

console.log(`***********************`);
console.log(`Guest Name: ${hotelRoom.guestName}`);
console.log(`Location: ${hotelRoom.location}`);
console.log(`Number of night: ${hotelRoom.niight}`);
console.log(`Total bills: $${hotelRoom.pricePerNight * hotelRoom.niight}`);
