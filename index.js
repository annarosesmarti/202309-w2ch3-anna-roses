const artist = [
  {
    id: 1,
    title: "I say a little prayer",
    artist: "Aretha Franklin",
    genre: "R&B/Soul",
    lengthInSeconds: 294,
    yearOfRelease: 1968,
    isHit: false,
  },
  {
    id: 2,
    title: "DESPECHÁ",
    artist: "Rosalia",
    genre: "pop",
    lengthInSeconds: 157,
    yearOfRelease: 2022,
    isHit: true,
  },
  {
    id: 3,
    title: "Flowers",
    artist: "Miley Cyrus",
    genre: "pop",
    lengthInSeconds: 200,
    yearOfRelease: 2023,
    isHit: true,
  },
  {
    id: 4,
    title: "Shakira: Bzrp Music Sessions, Vol. 53",
    artist: "Shakira & Bizarrap",
    genre: "latino urbano",
    lengthInSeconds: 214,
    yearOfRelease: 2023,
    isHit: false,
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
    isHit: false,
  })
);

const deleteSongFromList = (title) =>
  artist.splice(
    artist.indexOf(
      (deletedSong) => deletedSong.title.toLowerCase() === title.toLowerCase()
    ),
    1
  );

deleteSongFromList("Flowers");

const getFullSong = (title) =>
  artist.find((song) => song.title.toLowerCase() === title.toLowerCase());

getFullSong("despechá");

const getGenreSongs = (artist, genre) =>
  artist.filter((song) => song.genre.toLowerCase() === genre.toLowerCase());

getGenreSongs(artist, "R&B/Soul");

const getAllHits = (artist) => artist.filter((song) => song.isHit === true);

getAllHits(artist);

const sortedSongYears = (artist) =>
  artist.toSorted((songA, songB) => songA.yearOfRelease - songB.yearOfRelease);

console.log(sortedSongYears(artist));
