const staticBuses = [
  {
    id: 1,
    source: "Erode",
    destination: "Chennai",
    date: "2024-04-01",
    busType: "Volvo",
    departureTime: "05:30 AM",
    duration: "5 hours",
    arrivalTime: "10:00 AM",
    availableSeats: ["A3", "B1", "B2", "B3"],
    bookedSeats: ["A1", "A2"],
    boardingPoints: ["Erode Bus Stand", "Perundurai"],
    droppingPoints: ["Koyambedu Bus Terminal", "Tambaram"]
  },
  {
    id: 2,
    source: "Erode",
    destination: "Chennai",
    date: "2024-04-01",
    busType: "KPN",
    departureTime: "06:00 AM",
    duration: "6 hours",
    arrivalTime: "12:00 PM",
    availableSeats: ["C1", "C2", "D1", "D2"],
    bookedSeats: ["C3"],
    boardingPoints: ["Erode Bus Stand", "Perundurai"],
    droppingPoints: ["Koyambedu Bus Terminal", "Tambaram"]
  },
  {
    id: 3,
    source: "Chennai",
    destination: "Coimbatore",
    date: "2024-04-02",
    busType: "Scania",
    departureTime: "08:00 AM",
    duration: "7 hours",
    arrivalTime: "3:00 PM",
    availableSeats: ["E1", "E2", "F1", "F2"],
    bookedSeats: [],
    boardingPoints: ["Koyambedu Bus Terminal", "Tambaram"],
    droppingPoints: ["Coimbatore Bus Stand", "Gandhipuram"]
  },
  // Add more buses here
];

export default staticBuses;
