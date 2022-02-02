import { v4 as uuidv4 } from "uuid";

const chillHop = () => {
  return [
    {
      name: "La Zona",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
      artist: "Maydee",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
      color: ["#612e25", "#81735a"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Everlight",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      artist: "Parkbench Epiphany",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27501",
      color: ["#172029", "#657f8c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "The Way We Are",
      cover: "https://f4.bcbits.com/img/a2966482886_16.jpg",
      artist: "MiddleSchool, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22936",
      color: ["#284354", "#bf6645"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Places",
      cover: "https://f4.bcbits.com/img/a2544840814_16.jpg",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
      color: ["#604e74", "#d77e81"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Pie in the Sky",
      cover: "https://f4.bcbits.com/img/a4251697261_16.jpg",
      artist: "Juan Rios",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21652",
      color: ["#d6ae9f", "#5f356c"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "This too shall Pass",
      cover: "https://f4.bcbits.com/img/a0426240839_16.jpg",
      artist: "Smile High, Teddy Roxpin",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=23338",
      color: ["#0e134a", "#357d84"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Viatecutre",
      cover: "https://f4.bcbits.com/img/a2241183772_16.jpg",
      artist: "Leavv, Makzo",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20119",
      color: ["#633a41", "#ae92bc"],
      id: uuidv4(),
      active: false,
    },
  ];
};

export default chillHop;
