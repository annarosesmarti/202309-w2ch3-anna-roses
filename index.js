const artist = [
  {
    id: 1,
    title: "I say a little prayer",
    artist: "Aretha Franklin",
    genre: "R&B/Soul",
    lengthInSeconds: 294,
    yearOfRelease: 1968,
    success: false,
  },
  {
    id: 2,
    title: "DESPECHÁ",
    artist: "Rosalia",
    genre: "pop",
    lengthInSeconds: 157,
    yearOfRelease: 2022,
    success: true,
  },
  {
    id: 3,
    title: "Flowers",
    artist: "Miley Cyrus",
    genre: "pop",
    lengthInSeconds: 200,
    yearOfRelease: 2023,
    success: true,
  },
  {
    id: 4,
    title: "Shakira: Bzrp Music Sessions, Vol. 53",
    artist: "Shakira & Bizarrap",
    genre: "latino urbano",
    lengthInSeconds: 214,
    yearOfRelease: 2023,
    success: false,
  },
];

const addNewSong = (song) => artist.push(song);

console.log(
  addNewSong({
    id: 5,
    title: "You can't hurry love",
    artist: "The supremes",
    genre: "R&B/Soul",
    lengthInSeconds: 314,
    yearOfRelease: 1966,
    success: false,
  })
);
