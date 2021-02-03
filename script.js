let manualData = {
  115: { artist: "Kendrick Lamar", title: '"good kid, m.A.A.d city"' },
  161: { artist: '"Crosby, Stills & Nash"', title: '"Crosby, Stills & Nash"' },
  220: { artist: '"Crosby, Stills, Nash, and Young"', title: "Déjà Vu" },
  240: { artist: "Sam Cooke", title: '"Live at the Harlem Square Club, 1963"' },
  262: { artist: "New Order", title: '"Power, Corruption & Lies"' },
  313: {
    artist: "PJ Harvey",
    title: '"Stories From the City, Stories From the Sea"',
  },
  345: {
    artist: "Bruce Springsteen",
    title: '"The Wild, the Innocent & the E Street Shuffle"',
  },
  388: { artist: "Aretha Franklin", title: '"Young, Gifted and Black"' },
  397: {
    artist: "Billie Eilish",
    title: '"When We All Fall Asleep, Where Do We Go?"',
  },
  420: {
    artist: '"Earth, Wind and Fire"',
    title: "That’s the Way of the World",
  },
  434: { artist: "Pavement", title: '"Crooked Rain, Crooked Rain"' },
  477: { artist: "Howlin’ Wolf", title: "Moanin’ in the Moonlight" },
  493: { artist: "Marvin Gaye", title: '"Here, My Dear"' },
  499: { artist: "Rufus Featuring Chaka Khan", title: "Ask Rufus" },
};

let allAlbums = Array.from(
  document.getElementsByClassName("c-gallery-vertical-album")
).map(function (album) {
  const ranking = Array.from(
    album.getElementsByClassName("c-gallery-vertical-album__number")
  )[0].innerText;
  const artistTitle = Array.from(
    album.getElementsByClassName("c-gallery-vertical-album__title")
  )[0].innerText;
  const [artist, title] = artistTitle.split(",").map((partial) => {
    return partial.trim();
  });
  const subtitle = Array.from(
    album.getElementsByClassName("c-gallery-vertical-album__subtitle")
  )[0].innerText;
  const [publisher, year] = subtitle.split(",").map((subtitlePart) => {
    return subtitlePart.trim();
  });
  const description = Array.from(
    album.getElementsByClassName("c-gallery-vertical-album__description")
  )[0].innerText;

  let cleanTitle;
  let cleanArtist;
  if (Object.keys(manualData).includes(ranking)) {
    cleanTitle = manualData[ranking].title;
    cleanArtist = manualData[ranking].artist;
  } else {
    cleanTitle = title.match(/^'(.*)'$/)[1];
    cleanArtist = artist;
  }

  if (!title || !artist) {
    console.log("Bad title or artist", ranking);
  }

  return `${ranking}, ${cleanTitle}, ${cleanArtist}, ${year}, ${publisher}, "${description}"\n`;
});

console.log(allAlbums.join(""));
