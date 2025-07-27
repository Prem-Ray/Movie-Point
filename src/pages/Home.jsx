import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { useState } from "react";
import { Nothing } from "./Nothing";
import { movies } from "../services/Movies";

export function Home() {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - (windowWidth - position.x - 240),
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: windowWidth - (e.clientX - offset.x) - 240,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // object to hold movie data
  // const movies = [
  //   {
  //     id: 1,
  //     title: "Uri: The Surgical Strike",
  //     release_date: "2019-01-11",
  //     url: "https://i.pinimg.com/736x/2d/65/68/2d65688fad834a82113a2c27b98938f8.jpg",
  //     description:
  //       "Based on true events, this gripping action thriller chronicles India's retaliation after a deadly attack. 'Uri' delivers intense performances and fierce patriotism with the iconic line: 'How's the Josh?'",
  //   },
  //   {
  //     id: 2,
  //     title: "Hi Nanna",
  //     release_date: "2023-12-07",
  //     url: "https://i.pinimg.com/736x/02/c6/10/02c61053618cb134b26cf90992123b20.jpg",
  //     description:
  //       "A single father and his daughter’s quiet life is shaken by a woman with a shared past. Hi Nanna is a heartwarming romantic drama exploring relationships, forgiveness, and new beginnings.",
  //   },

  //   {
  //     id: 3,
  //     title: "HIT: The Third Case",
  //     release_date: "2025-12-20",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1cTcWRGUEJB82zYOx9v1WtIk6Pk-KTHtM8g&s.jpg",
  //     description:
  //       "In the third installment of the HIT franchise, a new officer is drawn into a chilling serial murder case with links to the past. 'Hit 3' promises a darker, more intense psychological thriller that tests the limits of justice and duty.",
  //   },

  //   {
  //     id: 4,
  //     title: "Sirf Ek Bandaa Kaafi Hai",
  //     release_date: "2023-05-23",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZXpDlT7CfcbH93xoDXN0iF6ePePWrBE4UA&s",
  //     description:
  //       "Based on a real courtroom battle, this gripping legal drama follows a resolute lawyer who challenges a powerful spiritual leader accused of heinous crimes. With determination and courage, he fights against all odds to bring justice for the victim, proving that one man can make a difference.",
  //   },
  //   {
  //     id: 5,
  //     title: "Spider-Man: Across the Spider-Verse",
  //     release_date: "2023-06-02",
  //     url: "https://i.pinimg.com/736x/46/7d/94/467d9422c34a27a813e84d4da80a0cb1.jpg",
  //     description:
  //       "Miles Morales embarks on a mind-bending journey through the multiverse, encountering alternate Spider-People and facing a villain who threatens all realities. As friendships are tested and identities challenged, Miles learns what it truly means to wear the mask.",
  //   },
  //   {
  //     id: 6,
  //     title: "Bholaa",
  //     release_date: "2023-03-30",
  //     url: "https://i.pinimg.com/originals/f6/9d/f4/f69df4bea3cd63cce1c83f0175988375.jpg",
  //     description:
  //       "After being released from prison, Bholaa is on a mission to reunite with his young daughter. But his journey turns into a night of chaos as he faces deadly gangsters and corrupt cops, revealing a past soaked in violence and resilience.",
  //   },
  //   {
  //     id: 7,
  //     title: "Pushpa: The Rise",
  //     release_date: "2021-12-17",
  //     url: "https://i.pinimg.com/736x/86/2d/97/862d973886fa8f816066485df506eee2.jpg",
  //     description:
  //       "Set in the seedy underworld of red sandalwood smuggling, Pushpa’s rise from a lowly laborer to a feared don is riddled with betrayal, ambition, and bloodshed. A raw and powerful story of grit, survival, and rebellion.",
  //   },
  //   {
  //     id: 8,
  //     title: "Pathaan",
  //     release_date: "2023-01-25",
  //     url: "https://i.pinimg.com/736x/4d/47/3d/4d473d1edded9306190ec66c0c1c4628.jpg",
  //     description:
  //       "A once-retired elite spy is forced back into action when a global terrorist threat looms over India. With adrenaline-pumping action, exotic locations, and a high-stakes mission, Pathaan redefines patriotism and espionage in a modern world.",
  //   },
  //   {
  //     id: 9,
  //     title: "Animal",
  //     release_date: "2023-12-01",
  //     url: "https://i.pinimg.com/originals/bc/fe/47/bcfe47b4b2fbcb1dd40cef44569d6d81.jpg",
  //     description:
  //       "An intense emotional thriller that explores the complexities of a father-son relationship set against a violent criminal backdrop. As secrets unravel, love turns into obsession, and innocence gives way to savagery, turning man into a beast.",
  //   },
  //   {
  //     id: 10,
  //     title: "Jailer",
  //     release_date: "2023-08-10",
  //     url: "https://i.pinimg.com/236x/5d/d7/0d/5dd70d800cea20a50b82f7c2e1a922d6.jpg",
  //     description:
  //       "A calm and retired jailer is pulled back into the world of crime to protect his family. Beneath his composed exterior lies a brutal past, and as danger escalates, his hidden fury ignites in this action-packed tale of redemption.",
  //   },

  //   {
  //     id: 11,
  //     title: "Dunki",
  //     release_date: "2023-12-21",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPECV6BzXCj6lnvdDgHhKXXAcJymXnZpj1w&s",
  //     description:
  //       "A heartwarming story of illegal immigration told through the lens of humor and humanity. Dunki highlights the struggles of Indians trying to reach foreign lands using backdoor methods and the price they pay for chasing dreams.",
  //   },
  //   {
  //     id: 12,
  //     title: "Rocky Aur Rani Kii Prem Kahaani",
  //     release_date: "2023-07-28",
  //     url: "https://i.pinimg.com/736x/57/cd/61/57cd61ead27cd42a46adf2554e554545.jpg",
  //     description:
  //       "An extravagant romantic drama where cultures collide and love finds its way amid chaos. Rocky and Rani, from drastically different backgrounds, navigate family feuds and societal expectations to write their own love story.",
  //   },
  //   {
  //     id: 13,
  //     title: "Leo",
  //     release_date: "2023-10-19",
  //     url: "https://i.pinimg.com/736x/6e/14/bb/6e14bba46138d467e17f68f423f3e4e4.jpg",
  //     description:
  //       "Leo leads a peaceful life until his past catches up with him. What follows is a tale of dual identities, gang wars, and psychological trauma as Leo is forced to confront a violent alter ego and protect his family.",
  //   },
  //   {
  //     id: 14,
  //     title: "OMG 2",
  //     release_date: "2023-08-11",
  //     url: "https://i.pinimg.com/736x/f1/53/38/f153387cef370244b3cbbc6de382eabe.jpg",
  //     description:
  //       "A spiritual sequel to the original, this thought-provoking film explores the Indian education system and sexual awareness in society through the story of a teenager, his father, and divine intervention.",
  //   },
  //   {
  //     id: 15,
  //     title: "Gadar 2",
  //     release_date: "2023-08-11",
  //     url: "https://i.pinimg.com/736x/36/4a/55/364a55c50b236dd957f1ba9eb1e9ee1a.jpg",
  //     description:
  //       "Tara Singh returns in this emotionally charged sequel that crosses borders and hearts. With love, patriotism, and action, Gadar 2 is a tale of loyalty and the unbreakable bond of a father and son in war-torn times.",
  //   },
  //   {
  //     id: 16,
  //     title: "Tu Jhoothi Main Makkaar",
  //     release_date: "2023-03-08",
  //     url: "https://i.pinimg.com/736x/95/2a/08/952a08c338a29e0157f6f7f9c888711e.jpg",
  //     description:
  //       "A hilarious romantic rollercoaster where love becomes a game of lies and tricks. When a breakup artist falls in love, he must face the consequences of his own schemes in this quirky battle of hearts and egos.",
  //   },
  //   {
  //     id: 17,
  //     title: "Jawan",
  //     release_date: "2023-09-07",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtdHaLWHTSSs2RIR5s_3lLRkoaLNT0xYTWg&s",
  //     description:
  //       "A vigilante with a mysterious past takes on corruption, injustice, and powerful enemies. Jawan is a high-octane action saga with a social message and multiple avatars of a man on a mission for redemption and justice.",
  //   },
  //   {
  //     id: 18,
  //     title: "Mission Raniganj",
  //     release_date: "2023-10-06",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2R4XqTmcnbO0BtgNojktSh7NYdBP1G9oiqw&s",
  //     description:
  //       "Inspired by a real-life mining disaster, this gripping tale follows a brave engineer who defies all odds to rescue trapped miners. A tribute to resilience, heroism, and human spirit under the most crushing pressure.",
  //   },
  //   {
  //     id: 19,
  //     title: "Zara Hatke Zara Bachke",
  //     release_date: "2023-06-02",
  //     url: "https://i.pinimg.com/1200x/39/c3/16/39c316806e54042395f09a38ee2b6d9b.jpg",
  //     description:
  //       "A small-town couple fakes a divorce to qualify for government housing, but soon their lies entangle them in a hilarious and emotional mess. A lighthearted story with sharp commentary on middle-class aspirations.",
  //   },
  //   {
  //     id: 20,
  //     title: "Bhola Shankar",
  //     release_date: "2023-08-11",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-aECGZzfj48DlFm1eqsigrBWmiRLtqOv3w&s",
  //     description:
  //       "A loving brother turns into a ruthless avenger when his sister's life is endangered. This mass action drama delivers punches, emotional moments, and a powerful sibling bond.",
  //   },
  //   {
  //     id: 21,
  //     title: "Tiger 3",
  //     release_date: "2023-11-12",
  //     url: "https://i.pinimg.com/564x/cf/14/bf/cf14bf5d63461e73ce3040082204841a.jpg",
  //     description:
  //       "Tiger is back with a vengeance. As a RAW agent on a dangerous mission, he faces betrayal, fierce enemies, and global stakes. A high-octane spy thriller filled with action, emotion, and patriotism.",
  //   },
  //   {
  //     id: 22,
  //     title: "Fighter",
  //     release_date: "2024-01-25",
  //     url: "https://i.pinimg.com/736x/cc/61/68/cc61688a82c5ce7a5de92e11cd85646f.jpg",
  //     description:
  //       "India's first aerial action film, Fighter brings high-octane dogfights, valor, and patriotism to the skies. Starring Hrithik Roshan and Deepika Padukone, it's a visually thrilling tribute to the Indian Air Force.",
  //   },
  //   {
  //     id: 23,
  //     title: "Kisi Ka Bhai Kisi Ki Jaan",
  //     release_date: "2023-04-21",
  //     url: "https://i.pinimg.com/736x/4e/4c/d7/4e4cd7dbec7182139ebf4e40138f8c77.jpg",
  //     description:
  //       "A rugged protector with a heart of gold tries to settle into a peaceful life but must unleash his fury when his love interest and her family face danger. A blend of family drama, action, and romance.",
  //   },
  //   {
  //     id: 24,
  //     title: "Shehzada",
  //     release_date: "2023-02-17",
  //     url: "https://i.pinimg.com/736x/11/ee/38/11ee38138ac9f93b4656909bc38d8d0c.jpg",
  //     description:
  //       "A carefree young man discovers he’s the heir to a wealthy family and must confront villains, responsibilities, and a shocking truth. Shehzada is a masala entertainer packed with comedy and action.",
  //   },
  //   {
  //     id: 25,
  //     title: "Selfiee",
  //     release_date: "2023-02-24",
  //     url: "https://i.pinimg.com/736x/d7/b3/d0/d7b3d04f68ac7da7008e41a616b921cf.jpg",
  //     description:
  //       "A clash between a superstar and his biggest fan turns into a battle of egos. Selfiee is a satire on celebrity culture, media hype, and the thin line between admiration and obsession.",
  //   },
  //   {
  //     id: 26,
  //     title: "Satyaprem Ki Katha",
  //     release_date: "2023-06-29",
  //     url: "https://i.pinimg.com/474x/5c/be/07/5cbe074a9fa02d23b893fad15f21728d.jpg",
  //     description:
  //       "A romantic drama about healing, acceptance, and love beyond trauma. When Satyaprem marries Katha, he learns her painful secret and helps her rediscover life and herself. An emotional journey of self-worth and support.",
  //   },
  //   {
  //     id: 27,
  //     title: "Adipurush",
  //     release_date: "2023-06-16",
  //     url: "https://i.pinimg.com/736x/8c/29/f7/8c29f78f2791b2294486450c3285986d.jpg",
  //     description:
  //       "A modern retelling of the Ramayana, where Prabhas stars as Raghav battling the demon king Lankesh. Adipurush is a grand mythological epic with intense visuals, divine values, and legendary conflict.",
  //   },
  //   {
  //     id: 28,
  //     title: "Bholaa",
  //     release_date: "2023-03-30",
  //     url: "https://i.pinimg.com/564x/94/3b/6e/943b6efa44ddbfa179e72e40fc417e34.jpg",
  //     description:
  //       "A former convict on a mission to reunite with his daughter ends up saving police officers from a drug cartel. Bholaa is a spiritual action drama inspired by Shiva’s fury, determination, and divine force.",
  //   },
  //   {
  //     id: 29,
  //     title: "The Kerala Story",
  //     release_date: "2023-05-05",
  //     url: "https://i.pinimg.com/736x/88/be/fe/88befe0a0fde5e484db2dc08ff0977b8.jpg",
  //     description:
  //       "Based on true events, the film tells the story of women trapped in a radicalization scheme and their transformation. The Kerala Story is a bold, controversial narrative about identity, manipulation, and escape.",
  //   },
  //   {
  //     id: 30,
  //     title: "Maaveeran",
  //     release_date: "2023-07-14",
  //     url: "https://i.pinimg.com/736x/f4/82/7f/f4827f1749e4bd941c623d6f950087ef.jpg",
  //     description:
  //       "A timid cartoonist starts hearing a voice that guides him toward becoming a fearless savior of his community. Maaveeran is a gripping tale of inner courage, resistance, and standing up against corruption.",
  //   },
  //   {
  //     id: 31,
  //     title: "Mark Antony",
  //     release_date: "2023-09-15",
  //     url: "https://i.pinimg.com/736x/96/c5/74/96c57478be477eaed6e3f0b84502fa3b.jpg",
  //     description:
  //       "In a retro-futuristic gangster world, a phone allows its users to change the past. Mark Antony is a quirky, time-travel action film filled with chaos, guns, and unpredictable twists.",
  //   },
  //   {
  //     id: 32,
  //     title: "Vaathi",
  //     release_date: "2023-02-17",
  //     url: "https://i.pinimg.com/236x/88/eb/e8/88ebe82549adc32855637e6a3f59c27d.jpg",
  //     description:
  //       "A young teacher fights against privatization in the education system. Vaathi is a socially driven drama about reform, resistance, and the power of one teacher’s passion to change lives.",
  //   },
  //   {
  //     id: 33,
  //     title: "Viduthalai Part 1",
  //     release_date: "2023-03-31",
  //     url: "https://i.pinimg.com/736x/5e/c1/77/5ec177c368af041ddf5834a22e0a7803.jpg",
  //     description:
  //       "A police recruit uncovers the dark side of law enforcement while chasing a rebel leader. Viduthalai is a gritty political drama exploring freedom, morality, and systemic abuse.",
  //   },
  //   {
  //     id: 34,
  //     title: "Thunivu",
  //     release_date: "2023-01-11",
  //     url: "https://i.pinimg.com/736x/1c/24/b2/1c24b256d8e862c704b0da3a1ed5f078.jpg",
  //     description:
  //       "A group of criminals rob a bank, but their plan is hijacked by a mysterious man with a mission. Thunivu is a heist thriller filled with suspense, action, and hidden motives.",
  //   },
  //   {
  //     id: 35,
  //     title: "Dasara",
  //     release_date: "2023-03-30",
  //     url: "https://i.pinimg.com/736x/74/58/90/745890648bb43926221274634c96b219.jpg",
  //     description:
  //       "Set in a coal mining village, Dasara is the tale of a man who fights against injustice and alcoholism. A raw and emotional drama blending folklore, friendship, and fury.",
  //   },
  //   {
  //     id: 36,
  //     title: "Custody",
  //     release_date: "2023-05-12",
  //     url: "https://i.pinimg.com/736x/2c/ce/8d/2cce8d5fdf5b38652ab5f9d70273bcaa.jpg",
  //     description:
  //       "A constable finds himself protecting a key witness in a politically explosive case. Custody is a fast-paced action thriller about survival, loyalty, and uncovering buried truths.",
  //   },
  //   {
  //     id: 37,
  //     title: "Gaslight",
  //     release_date: "2023-03-31",
  //     url: "https://i.pinimg.com/474x/9c/50/5a/9c505ac3423606e456a0d75611552298.jpg",
  //     description:
  //       "A woman returns to her ancestral palace, only to suspect foul play in her father's mysterious absence. As she uncovers hidden secrets, she is manipulated by those around her, questioning her sanity in a twisted psychological thriller where nothing is what it seems.",
  //   },
  //   {
  //     id: 38,
  //     title: "Salaar: Part 1 – Ceasefire",
  //     release_date: "2023-12-22",
  //     url: "https://i.pinimg.com/736x/64/62/ba/6462ba3a6d249bd836a3bc5840102bfc.jpg",
  //     description:
  //       "From the makers of KGF, Salaar follows a violent hero who returns to protect a kingdom in chaos. This mass action drama is loaded with intensity, betrayal, and breathtaking scale.",
  //   },
  //   {
  //     id: 39,
  //     title: "Guntur Kaaram",
  //     release_date: "2024-01-12",
  //     url: "https://i.pinimg.com/736x/6f/f8/cf/6ff8cfe4798b01c566252322ab4d76bb.jpg",
  //     description:
  //       "Mahesh Babu stars in this fiery drama about family, politics, and personal vengeance. Guntur Kaaram combines local flavor with action-packed storytelling and emotional resonance.",
  //   },
  //   {
  //     id: 40,
  //     title: "Captain Miller",
  //     release_date: "2023-12-15",
  //     url: "https://i.pinimg.com/736x/ff/5d/22/ff5d2218f0470c1dae8c816cc47f8e94.jpg",
  //     description:
  //       "Set in pre-independence India, a rebel leader fights colonial powers with guerrilla tactics. Captain Miller is a period action drama about bravery, rebellion, and sacrifice.",
  //   },
  //   {
  //     id: 41,
  //     title: "Jersey",
  //     release_date: "2022-04-22",
  //     url: "https://i.pinimg.com/originals/61/fd/ac/61fdac34a3c1ec89cdd31a3c0347b7a8.jpg",
  //     description:
  //       "A once-promising cricketer battles age, personal struggles, and societal pressure as he makes an inspiring comeback for his son. Jersey is an emotional sports drama about dreams, redemption, and fatherhood.",
  //   },
  //   {
  //     id: 42,
  //     title: "Mahanati",
  //     release_date: "2018-05-09",
  //     url: "https://i.pinimg.com/736x/ee/51/95/ee5195bef8b68e3678d2246933994732.jpg",
  //     description:
  //       "A poignant retelling of the life of legendary South Indian actress Savitri. 'Mahanati' is a powerful biopic celebrating her stardom, struggles, and timeless legacy in Indian cinema.",
  //   },
  //   {
  //     id: 43,
  //     title: "The Flash",
  //     release_date: "2023-06-14",
  //     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe9W5865ljiH5jTnrkkPGhWuyLjFk-C4XrQ&s",
  //     description:
  //       "Barry Allen uses his super speed to change the past, but his actions create unintended consequences in the multiverse. As he teams up with alternate versions of heroes to set things right, he must face emotional challenges, alternate timelines, and a powerful enemy that threatens the fabric of reality.",
  //   },
  //   {
  //     id: 44,
  //     title: "Thug Life",
  //     release_date: "2024-12-20",
  //     url: "https://i.pinimg.com/736x/ff/3e/46/ff3e4606b4b90a1f5003f068d3e8bd79.jpg",
  //     description:
  //       "In a gritty underworld ruled by fear and betrayal, one man rises to reclaim his identity and rewrite the rules. 'Thug Life' is an intense crime saga directed by Mani Ratnam and led by Kamal Haasan.",
  //   },
  //   {
  //     id: 45,
  //     title: "Family Star",
  //     release_date: "2024-04-05",
  //     url: "https://www.sakshi.com/gallery_images/2024/04/2/Tollywood%20Hero%20Vijay%20Devarakonda%20Family%20star%20HD%20Stills-7.jpg",
  //     description:
  //       "A middle-class man balances his love life and family responsibilities, only to find that both worlds are deeply connected. 'Family Star' blends romance and emotion with moments of charm and heartache.",
  //   },
  // ];

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [show, setShow] = useState(true);
  useEffect(() => {
    if (filteredMovies.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [filteredMovies]);

  return (
    <div className="Home w-full bg-black overflow-x-hidden" draggable={false}>
      <div className="relative z-10">
        <h1 className="select-none text-3xl sm:text-4xl md:text-5xl font-black text-center py-6 sm:py-8 text-white drop-shadow-2xl">
          Find Your Movies
        </h1>

        <div className="search-form flex justify-center items-center mb-6 sm:mb-8 px-4">
          <div className="relative w-full max-w-xl sm:max-w-2xl">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-1 flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center shadow-2xl">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search for movies..."
                className="select-none bg-gray-800 text-white placeholder-gray-500 rounded-lg p-3 w-full sm:mr-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:bg-gray-700 transition-all duration-300 border border-gray-700"
              />
              <button
                onClick={handleSearch}
                type="submit"
                className="select-none bg-gray-800 text-white rounded-lg px-6 py-3 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-lg border border-gray-700 font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Mobile TV Section */}
        <div className="block xl:hidden my-4 w-[240px] h-[130px] mx-auto">
          <div className="relative w-full h-full">
            <img
              src="/tv.png"
              alt="tv"
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
            <video
              autoPlay
              loop
              muted
              className="object-cover absolute top-[12px] left-[30px] w-[178px] h-[100px] -z-20"
            >
              <source src="/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Only visible on desktop */}
        <div
          className={`absolute top-[40px] right-[15px] z-50 w-[275px] h-[150px] hidden xl:block ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src="/tv.png"
              alt="tv"
              className="w-full h-full object-cover pointer-events-none select-none"
             
            />
            <video
              autoPlay
              loop
              muted
              className="object-cover absolute top-[14px] left-[36px] w-[200px] h-[116px] -z-20"
            >
              <source src="/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 sm:gap-6 sm:p-6 w-full">
  {filteredMovies.length > 0 ? (
    filteredMovies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))
  ) : (
    <Nothing />
  )}
</div>

      </div>
    </div>
  );
}
