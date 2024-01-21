import networkImage from "../../../assets/dashboard/Lessons/network.svg"
import aiImage from "../../../assets/dashboard/Lessons/artificial-intelligence.svg"
import arImage from "../../../assets/dashboard/Lessons/augmented-reality.svg"
import vrImage from "../../../assets/dashboard/Lessons/virtual-reality.svg"
import codingImage from "../../../assets/dashboard/Lessons/coding.svg"
import roboticsImage from "../../../assets/dashboard/Lessons/robotics.svg"
import printingImage from "../../../assets/dashboard/Lessons/3d-printing.svg"
import renewableEnergyImage from "../../../assets/dashboard/Lessons/renewable-energy.svg"
import spaceExplorationImage from "../../../assets/dashboard/Lessons/space-exploration.svg"
import biotechnologyImage from "../../../assets/dashboard/Lessons/space-exploration.svg"
import smartCitiesImage from "../../../assets/dashboard/Lessons/smart-city.svg"

//internet of things lesson
export const firstLesson = {
  title: "Internet of Things (IoT)",
  sections: {
    lessonDetails: {
      image: networkImage,
      topics: ["Basic Meaning of IoT", "Why IoT?", "Applications of IoT"]
    },
    teacherIntroduction: {
      introduction: "Hello Dolapo! Welcome to this lesson. I’m Fearful Red, your teacher for today."
    },
  },
  content: [
    {
      title: "Basic Meaning of IoT",
      description: "Alright, imagine you have a magical worldwhere things can talk to each other and work together without you having to tell them what to do all the time. That's a bit like the Internet of Things, or IoT for short.",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What does IoT stand for?",
        answer: "Internet of Things",
        options: ["Internet of Things", "Internet of Times", "Internet of Terminals", "Internet of Texts"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Why IoT?",
      description: "In our magical world, everyday objects gain a special power – the ability to connect to the internet and share information. They can send messages and work together to simplify tasks.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "Can IoT-enabled devices share information with each other?",
        answer: "Yes, they can.",
        options: ["Yes, they can.", "No, they cannot."],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Applications of IoT",
      description: "Consider a smart teddy bear that communicates with smart lights. The bear knows when it's bedtime and instructs the lights to create a cozy atmosphere. It's like objects becoming friends and helping each other without human intervention!",
      task: {
        type: null
      },
    },
    {
      title: "Smartening Up Everyday Objects",
      description: "IoT gives superpowers to everyday things, allowing them to communicate and enhance convenience. It's a technological magic making our world a bit smarter!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "Choose the correct statement.",
        answer: "IoT makes everyday objects smarter.",
        options: ["IoT makes everyday objects dumber.", "IoT leaves everyday objects as they are.", "IoT makes everyday objects smarter.", "IoT destroys everyday objects."],
        isAnswerCorrect: null,
      },
    },
  ],
};

//artificial intelligence lesson
export const aiLesson = {
  title: "Artificial Intelligence (AI)",
  sections: {
    lessonDetails: {
      image: aiImage,
      topics: ["What is AI?", "AI in Daily Life", "Friendly AI Helpers", "AI in Games", "AI and Creativity"]
    },
    teacherIntroduction: {
      introduction: "Hi there! I'm Byte Blue, your guide to the amazing world of AI!"
    },
  },
  content: [
    {
      title: "What is AI?",
      description: "Imagine a robot that can learn, think, and solve puzzles just like you! AI is like giving a computer or robot a brain. It can learn things, make decisions, and even understand what people say.",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What can AI do?",
        answer: "Learn and make decisions",
        options: ["Sing songs", "Learn and make decisions", "Draw pictures", "Eat snacks"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "AI in Daily Life",
      description: "AI is not just in robots; it's also in our computers and smartphones. It helps us find information, gives directions, and even recommends our favorite songs and videos.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "Where can you find AI?",
        answer: "In computers and smartphones",
        options: ["Only in space", "In computers and smartphones", "Under the sea", "Inside books"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Friendly AI Helpers",
      description: "AI can be your buddy! Think of voice assistants who answer questions, or smart toys that can talk and play games with you. They listen and learn to help you better.",
      task: {
        type: null
      },
    },
    {
      title: "AI in Games",
      description: "Ever played a game where the computer seems smart? That's AI! It makes game characters smarter and can even learn to play the game better over time.",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What does AI do in games?",
        answer: "Makes game characters smarter",
        options: ["Draws pictures", "Makes game characters smarter", "Writes stories", "Plays music"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "AI and Creativity",
      description: "AI isn't just about logic and numbers; it can be creative too! It can help create music, draw paintings, or even write stories. Sometimes, it works with artists to make new kinds of art.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Can AI be creative?",
        answer: "Yes, it can help create art",
        options: ["No, it cannot", "Yes, it can help create art", "It only does math", "It can only play games"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Safety with AI",
      description: "It's important to use AI safely. Just like you don't talk to strangers, you should be careful when talking to AI and always ask your parents or teacher if you're unsure.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Should you always be careful when using AI?",
        answer: "Yes, you should.",
        options: ["Yes, you should.", "No, it's not necessary."],
        isAnswerCorrect: null,
      },
    }, 
  ],
};

//augmented reality
export const arLesson = {
  title: "Augmented Reality (AR)",
  sections: {
    lessonDetails: {
      image: arImage,
      topics: ["Exploring AR", "AR in Games", "AR for Learning", "Creating with AR", "Being Safe in AR"]
    },
    teacherIntroduction: {
      introduction: "Hey kiddos! I'm Pixel Pink, your buddy in the magical world of AR!"
    },
  },
  content: [
    {
      title: "Exploring AR",
      description: "AR is like magic glasses that show you fun things in the real world. It mixes real things with pretend things!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What does AR stand for?",
        answer: "Augmented Reality",
        options: ["Augmented Reality", "Amazing Race", "Animal Rescue", "Awesome Robots"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "AR in Games",
      description: "Imagine playing a game where cartoon animals appear in your room! AR makes this possible by adding fun things to what you see around you.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "Can you see cartoon animals in your room with AR games?",
        answer: "Yes, you can.",
        options: ["Yes, you can.", "No, you cannot."],
        isAnswerCorrect: null,
      },
    },
    {
      title: "AR for Learning",
      description: "AR can help you learn in a fun way. It can show you dinosaurs or planets right in your classroom!",
      task: {
        type: null
      },
    },
    {
      title: "Creating with AR",
      description: "With AR, you can create your own stories and games. It lets you add your own drawings and characters to the world around you!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "Can you create your own games with AR?",
        answer: "Yes, you can.",
        options: ["Yes, you can.", "No, you cannot."],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Being Safe in AR",
      description: "While using AR, it's important to stay safe. Always play in a safe space and be aware of your surroundings so you don't bump into things!",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Is it important to be aware of your surroundings when using AR?",
        answer: "Yes, it is.",
        options: ["Yes, it is.", "No, it's not important."],
        isAnswerCorrect: null,
      },
    },
  ],
};

//virtual reality lesson
export const vrLesson = {
  title: "Virtual Reality (VR)",
  sections: {
    lessonDetails: {
      image: vrImage,
      topics: ["What is VR?", "VR Adventures", "VR for Fun and Learning", "Creating in VR", "Staying Safe in VR"]
    },
    teacherIntroduction: {
      introduction: "Hello, little explorers! I'm Vivi Vision, here to guide you through the amazing world of Virtual Reality!"
    },
  },
  content: [
    {
      title: "What is VR?",
      description: "Virtual Reality is like a magic helmet that takes you to different worlds. You can visit space, underwater, or even imaginary places without leaving your room!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What does VR stand for?",
        answer: "Virtual Reality",
        options: ["Virtual Reality", "Very Rapid", "Vibrant Rainbows", "Valuable Resources"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "VR Adventures",
      description: "In VR, you can go on adventures like a space explorer or a deep-sea diver. It's like being in a story where you are the hero!",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "Can you go on space adventures with VR?",
        answer: "Yes, you can.",
        options: ["Yes, you can.", "No, you cannot."],
        isAnswerCorrect: null,
      },
    },
    {
      title: "VR for Fun and Learning",
      description: "VR is not just for play; it's a cool way to learn too! You can visit historical places, see dinosaurs, or explore the human body, all while having fun.",
      task: {
        type: null
      },
    },
    {
      title: "Creating in VR",
      description: "Imagine painting or building things in a world where anything is possible. In VR, you can create art, design buildings, or even make new games!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "Can you create art in VR?",
        answer: "Yes, you can.",
        options: ["Yes, you can.", "No, you cannot."],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Staying Safe in VR",
      description: "While VR is super fun, staying safe is important. Always play in an open space and take breaks. Remember, the real world is just as important as the virtual one!",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Should you take breaks and stay safe while using VR?",
        answer: "Yes, you should.",
        options: ["Yes, you should.", "No, it's not necessary."],
        isAnswerCorrect: null,
      },
    },
  ],
};

//coding lesson
export const codingLesson = {
  title: "Coding and Programming Basics",
  sections: {
    lessonDetails: {
      image: codingImage, // Image depicting coding or children programming
      topics: ["What is Coding?", "Creating with Code", "Fun with Programming", "Languages of Computers", "My First Code", "Being Safe and Respectful Online"]
    },
    teacherIntroduction: {
      introduction: "Hello, young creators! I'm Cody the Coder, your guide to the fantastic world of coding!"
    },
  },
  content: [
    {
      title: "What is Coding?",
      description: "Imagine you could tell your computer or tablet to play a song, draw a picture, or open a game. That's what coding is! It's like teaching your computer to understand and follow your commands.",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What is coding?",
        answer: "Teaching a computer to follow commands",
        options: ["Teaching a computer to follow commands", "Playing video games", "Drawing pictures", "Reading a book"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Creating with Code",
      description: "With coding, you can be a creator! You can build your own games, tell stories, or even make animations. It's like using building blocks to create something amazing on your computer.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "What can you create with coding?",
        answer: "Games, stories, animations",
        options: ["Sandwiches", "Games, stories, animations", "A real car", "A treehouse"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Fun with Programming",
      description: "Programming is another name for coding. It's fun because you can see your ideas come to life on the screen! You could program a cat to meow, a car to race, or even make a puzzle game.",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What is programming?",
        answer: "Another name for coding",
        options: ["A type of exercise", "Another name for coding", "A drawing technique", "A math problem"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Languages of Computers",
      description: "Just like we speak different languages, computers understand different coding languages. Some of these are called Python, Scratch, and JavaScript. They are used to create different types of fun activities on the computer.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "What are Python, Scratch, and JavaScript?",
        answer: "Coding languages",
        options: ["Types of games", "Coding languages", "Computer parts", "Science experiments"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "My First Code",
      description: "Let's start coding with a simple code! For example, we can use Scratch to make a character move. This is your first step into being a coder, where you tell the computer exactly what to do.",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "What is the first step in learning to code?",
        answer: "Writing a simple code",
        options: ["Writing a simple code", "Buying a new computer", "Playing a video game", "Reading a big book"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Being Safe and Respectful Online",
      description: "When we code and share our projects online, it's important to be safe and respectful. This means protecting our personal information and being kind and supportive of what others create too!",
      task: {
        id: 6,
        type: "MultipleChoiceQuestion",
        question: "How should we behave online?",
        answer: "Safely and respectfully",
        options: ["Safely and respectfully", "Loudly and wildly", "Only talking to strangers", "Ignoring everyone"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//robotics lesson
export const roboticsLesson = {
  title: "Introduction to Robotics",
  sections: {
    lessonDetails: {
      image: roboticsImage, // Image depicting robots or robotics in action
      topics: ["What are Robots?", "Types of Robots", "Robots in Daily Life", "Building Simple Robots", "Robots and Emotions", "Robot Safety"]
    },
    teacherIntroduction: {
      introduction: "Hi there, I'm Robo Ray! Let's embark on an exciting journey to the world of Robotics!"
    },
  },
  content: [
    {
      title: "What are Robots?",
      description: "Robots are machines that can move and do tasks, sometimes like humans or animals. They can be programmed to do jobs like helping in factories, exploring space, or cleaning up your room!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What are robots?",
        answer: "Machines that can move and do tasks",
        options: ["Toys that never move", "Machines that can move and do tasks", "Cartoons on TV", "Storybooks"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Types of Robots",
      description: "There are many types of robots! Some are big, some are tiny. Some can walk or roll, and some can even fly! Robots come in all shapes and sizes for different tasks.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "Are all robots the same?",
        answer: "No, they come in different shapes and sizes",
        options: ["Yes, they are all the same", "No, they come in different shapes and sizes", "Robots only look like humans", "Robots are only found in books"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Robots in Daily Life",
      description: "Robots are not just in movies; they are all around us! Some robots help doctors in hospitals, some help in making cars, and others can even vacuum your house!",
      task: {
        type: null
      },
    },
    {
      title: "Building Simple Robots",
      description: "Did you know you can build a simple robot with everyday items? With a little help, you can create a robot that moves or even draws pictures!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "Can you build a simple robot?",
        answer: "Yes, with everyday items",
        options: ["No, it's impossible", "Yes, with everyday items", "Only with magic", "Only in dreams"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Robots and Emotions",
      description: "Some robots are being made to understand and react to human emotions. They can read facial expressions or tones of voice to interact better with people.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Can some robots understand emotions?",
        answer: "Yes, they can",
        options: ["Yes, they can", "No, they can't", "Robots can only laugh", "Robots only get angry"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Robot Safety",
      description: "While robots are helpful, it's important to use them safely. We should always follow instructions and be careful when interacting with robots, especially the big ones!",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "Is it important to be safe around robots?",
        answer: "Yes, it's very important",
        options: ["No need to be safe", "Yes, it's very important", "Only with small robots", "Only with big robots"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//3d printing lesson
export const printingLesson = {
  title: "Fun with 3D Printing",
  sections: {
    lessonDetails: {
      image: printingImage, // Image depicting 3D printing or printed objects
      topics: ["What is 3D Printing?", "3D Printers at Work", "What Can Be 3D Printed?", "3D Printing in Medicine", "3D Printing in Space", "Being Creative with 3D Printing"]
    },
    teacherIntroduction: {
      introduction: "Greetings, young inventors! I'm Printy Pete, and I'll be your guide in the fantastic world of 3D Printing!"
    },
  },
  content: [
    {
      title: "What is 3D Printing?",
      description: "3D printing is like magic! It's a way to make real objects from digital designs. A 3D printer adds material layer by layer to create shapes that can be toys, tools, and more!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What is 3D printing?",
        answer: "Making real objects from digital designs",
        options: ["Drawing pictures on paper", "Making real objects from digital designs", "Baking cakes", "Planting flowers"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "3D Printers at Work",
      description: "A 3D printer works by following a computer's instructions to build an object. It's like a high-tech glue gun, laying down material in exact places to create cool shapes!",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "How does a 3D printer work?",
        answer: "By laying down material to create shapes",
        options: ["By using magic wands", "By laying down material to create shapes", "By painting pictures", "By cutting paper"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "What Can Be 3D Printed?",
      description: "Almost anything can be 3D printed! From toys, jewelry, and cups to parts for cars and houses. Scientists are even working on 3D printing organs for medical use!",
      task: {
        type: null
      },
    },
    {
      title: "3D Printing in Medicine",
      description: "3D printing is not just for fun; it also helps save lives. Doctors use 3D printing to make replacement body parts and models to plan surgeries!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "Can 3D printing be used in medicine?",
        answer: "Yes, to make body parts and models",
        options: ["No, it's only for toys", "Yes, to make body parts and models", "Only for making food", "Only in cartoons"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "3D Printing in Space",
      description: "Astronauts use 3D printers in space to make tools and parts. This is really helpful because it means they don't have to take as many supplies from Earth!",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "Do astronauts use 3D printers in space?",
        answer: "Yes, to make tools and parts",
        options: ["No, they use magic", "Yes, to make tools and parts", "They only make food", "They only make toys"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Being Creative with 3D Printing",
      description: "3D printing lets you bring your imagination to life. You can design and create your own toys, decorations, or inventions. The possibilities are endless!",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "Can you be creative with 3D printing?",
        answer: "Yes, you can design and create many things",
        options: ["No, you can't create anything", "Yes, you can design and create many things", "It's only for reading books", "Only for watching TV"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Exploring 3D Printing Materials",
      description: "Different materials can be used for 3D printing, such as plastic, metal, and even food ingredients! Engineers and designers choose materials based on what they want to create.",
      task: {
        id: 6,
        type: "MultipleChoiceQuestion",
        question: "What are some materials used in 3D printing?",
        answer: "Plastic, metal, and food ingredients",
        options: ["Wood and leaves", "Glass and stones", "Plastic, metal, and food ingredients", "Feathers and fur"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Environmental Impact of 3D Printing",
      description: "While 3D printing is amazing, we need to think about its impact on the environment. Choosing eco-friendly materials and recycling printed objects can help reduce waste.",
      task: {
        id: 7,
        type: "MultipleChoiceQuestion",
        question: "How can we reduce the environmental impact of 3D printing?",
        answer: "Choosing eco-friendly materials and recycling",
        options: ["Printing more objects", "Throwing away printed items", "Using any materials available", "Ignoring environmental impact"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Future of 3D Printing",
      description: "Scientists are constantly finding new ways to use 3D printing. From printing houses to creating artificial organs, the future holds exciting possibilities for this innovative technology.",
      task: {
        id: 8,
        type: "MultipleChoiceQuestion",
        question: "What does the future hold for 3D printing?",
        answer: "Exciting possibilities, such as printing houses and artificial organs",
        options: ["No more advancements", "Only printing toys", "Staying the same forever", "Exciting possibilities, such as printing houses and artificial organs"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//renewable energy lesson
export const renewableEnergyLesson = {
  title: "Renewable Energy",
  sections: {
    lessonDetails: {
      image: renewableEnergyImage, // Image showing various renewable energy sources
      topics: ["What is Renewable Energy?", "The Power of the Sun", "Wind Energy", "Water Energy", "Geothermal Energy", "Bioenergy", "The Future of Energy", "Conserving Energy"]
    },
    teacherIntroduction: {
      introduction: "Hi there, young energy explorers! I'm Sunny the Sunbeam, ready to shine a light on the world of Renewable Energy!"
    },
  },
  content: [
    {
      title: "What is Renewable Energy?",
      description: "Renewable energy comes from natural sources that never run out, like the sun, wind, and water. It's a clean way to make power without harming our planet!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What is renewable energy?",
        answer: "Energy from sources that never run out",
        options: ["Energy from toys", "Energy from sources that never run out", "Energy from batteries", "Energy from magic"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "The Power of the Sun",
      description: "The sun is like a giant battery in the sky. Solar panels capture sunlight and turn it into electricity. Imagine powering your home with sunbeams!",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "What do solar panels use to make electricity?",
        answer: "Sunlight",
        options: ["Moonlight", "Water", "Sunlight", "Candy"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Wind Energy",
      description: "Wind turbines look like giant fans, but they work in reverse! They use the wind's power to make electricity. It's like flying a kite to light up your house!",
      task: {
        type: null
      },
    },
    {
      title: "Water Energy",
      description: "Water can also create energy! Hydroelectric power stations use flowing water, like rivers or waterfalls, to generate electricity. It's like using a water slide to turn on lights!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What does hydroelectric power use to make electricity?",
        answer: "Flowing water",
        options: ["Sand", "Rocks", "Trees", "Flowing water"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Geothermal Energy",
      description: "Deep underground, the Earth is very hot. Geothermal energy uses this heat to make electricity or to warm buildings. It's like using the Earth as a cozy blanket!",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "What does geothermal energy use to generate power?",
        answer: "Heat from inside the Earth",
        options: ["Heat from inside the Earth", "Ice from mountains", "Leaves from trees", "Water from the ocean"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Bioenergy",
      description: "Bioenergy comes from organic materials like plants and animal waste. It's turning things that were once alive into power. Imagine running a car on old vegetable oil!",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "What is bioenergy made from?",
        answer: "Organic materials like plants and waste",
        options: ["Rocks and minerals", "Plastic toys", "Organic materials like plants and waste", "Sunlight and water"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "The Future of Energy",
      description: "Renewable energy is important for our future. It helps us take care of our planet by reducing pollution and preserving nature for generations to come.",
      task: {
        type: null
      },
    },
    {
      title: "Conserving Energy",
      description: "Saving energy is as important as making it. Turning off lights when you leave a room, using energy-saving appliances, and walking instead of driving are great ways to help!",
      task: {
        id: 6,
        type: "MultipleChoiceQuestion",
        question: "How can we help save energy?",
        answer: "Turning off lights and using less power",
        options: ["Leaving lights on", "Using more water", "Playing video games", "Turning off lights and using less power"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//space exploration lesson
export const spaceExplorationLesson = {
  title: "Space Exploration",
  sections: {
    lessonDetails: {
      image: spaceExplorationImage, // Image showing space exploration themes
      topics: ["What is Space Exploration?", "The Solar System", "Astronauts", "Rockets and Spacecraft", "Living in Space", "Robots in Space", "Studying Other Planets", "The Future of Space Travel"]
    },
    teacherIntroduction: {
      introduction: "Hello, star travelers! I'm Astro Alex, your guide to the incredible journey of Space Exploration!"
    },
  },
  content: [
    {
      title: "What is Space Exploration?",
      description: "Space exploration is like going on the biggest adventure across the universe! It's about studying space, stars, planets, and discovering the mysteries of the cosmos.",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What is space exploration?",
        answer: "Studying space and discovering the universe",
        options: ["Swimming in the ocean", "Studying space and discovering the universe", "Gardening", "Playing sports"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "The Solar System",
      description: "Our solar system is a big family of planets, moons, asteroids, and the sun. Each member has its own special story, like Earth, our home in this vast universe!",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "What is in our solar system?",
        answer: "Planets, moons, asteroids, and the sun",
        options: ["Only Earth", "Only the sun", "Planets, moons, asteroids, and the sun", "Candy and ice cream"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Astronauts",
      description: "Astronauts are like space explorers. They train hard to go on missions to space, study the universe, and sometimes even walk on other planets!",
      task: {
        type: null
      },
    },
    {
      title: "Rockets and Spacecraft",
      description: "Rockets are the vehicles that carry astronauts and equipment into space. Spacecraft can be small like a car or big like a house, traveling to planets or even stars!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What do rockets do?",
        answer: "Carry astronauts and equipment into space",
        options: ["Swim in the ocean", "Dig holes in the ground", "Carry astronauts and equipment into space", "Drive on roads"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Living in Space",
      description: "Living in space is very different! Astronauts float in their space stations, eat special space food, and do lots of experiments to learn about life in space.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "What is one thing astronauts do in space?",
        answer: "Float in space stations",
        options: ["Play video games all day", "Go shopping", "Float in space stations", "Ride bicycles"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Robots in Space",
      description: "Robots are great helpers in space. They can go places too dangerous for astronauts, like the surface of Mars, and send back important information to Earth.",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "What do robots do in space?",
        answer: "Explore places and send information",
        options: ["Make pizzas", "Dance", "Watch TV", "Explore places and send information"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Studying Other Planets",
      description: "Space missions help us learn about other planets. We can find out if there's water on Mars or what the rings of Saturn are made of. It's like being a space detective!",
      task: {
        type: null
      },
    },
    {
      title: "The Future of Space Travel",
      description: "The future of space travel is exciting! We might build cities on Mars, travel to distant galaxies, or discover life on other planets. Who knows what we'll find out there?",
      task: {
        id: 6,
        type: "MultipleChoiceQuestion",
        question: "What might happen in the future of space travel?",
        answer: "Building cities on Mars and exploring galaxies",
        options: ["Staying only on Earth", "Swimming in the ocean", "Building cities on Mars and exploring galaxies", "Sleeping all day"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//biotechnology lesson
export const biotechnologyLesson = {
  title: "Discovering Biotechnology",
  sections: {
    lessonDetails: {
      image: biotechnologyImage, // Image illustrating biotechnology concepts
      topics: ["What is Biotechnology?", "DNA and Genetics", "Medicine and Health", "Agriculture and Food", "Environmental Biotech", "Biotech in Everyday Life", "Ethics in Biotechnology", "The Future of Biotech"]
    },
    teacherIntroduction: {
      introduction: "Hi, young scientists! I'm Biotina, your guide to the amazing world of Biotechnology!"
    },
  },
  content: [
    {
      title: "What is Biotechnology?",
      description: "Biotechnology is like a toolbox that lets us change living things to solve problems or make products. It's like being a wizard with plants, animals, and tiny cells!",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What is biotechnology?",
        answer: "Using living things to solve problems and make products",
        options: ["Cooking food", "Using living things to solve problems and make products", "Building robots", "Painting pictures"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "DNA and Genetics",
      description: "DNA is like a recipe book inside every living thing. It tells cells what to do. Biotechnology lets us read and sometimes change this book for better health or crops!",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "What does DNA do?",
        answer: "Tells cells how to act and grow",
        options: ["Makes food taste good", "Tells cells how to act and grow", "Plays music", "Creates rainbows"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Medicine and Health",
      description: "Biotech helps make medicines and treatments for diseases. It's like having a superpower to fight illnesses and keep people healthy!",
      task: {
        type: null
      },
    },
    {
      title: "Agriculture and Food",
      description: "In agriculture, biotech can create stronger or healthier crops. Imagine plants that can grow in tough conditions or give more nutrition!",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What can agricultural biotech do?",
        answer: "Create stronger and healthier crops",
        options: ["Fly", "Sing songs", "Create stronger and healthier crops", "Turn invisible"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Environmental Biotech",
      description: "Biotechnology can also help the environment, like cleaning polluted areas or making energy from waste. It's using nature to protect nature!",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "How can biotech help the environment?",
        answer: "Cleaning pollution and making energy from waste",
        options: ["Making toys", "Watching TV", "Cleaning pollution and making energy from waste", "Playing sports"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Biotech in Everyday Life",
      description: "Biotech is part of everyday life, from the yeast in bread to the bacteria that clean water. It's tiny helpers making our lives better!",
      task: {
        type: null
      },
    },
    {
      title: "Ethics in Biotechnology",
      description: "Biotech is powerful, so we must use it carefully and think about its effects on people, animals, and the planet. It's science with responsibility!",
      task: {
        type: null
      },
    },
    {
      title: "The Future of Biotech",
      description: "The future of biotech holds exciting possibilities, like curing diseases or growing organs for transplants. Who knows what amazing things we'll see next?",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "What could be a future use of biotechnology?",
        answer: "Curing diseases and growing organs for transplants",
        options: ["Building skyscrapers", "Curing diseases and growing organs for transplants", "Making clothes", "Time travel"],
        isAnswerCorrect: null,
      },
    },
  ],
};

//smart cities lesson
export const smartCitiesLesson = {
  title: "Smart Cities & Transportation",
  sections: {
    lessonDetails: {
      image: smartCitiesImage, // Image depicting elements of smart cities and future transportation
      topics: ["What are Smart Cities?", "Smart Technology in Daily Life", "Sustainable Transportation", "Smart Energy Solutions", "Urban Planning and the Environment", "Smart City Safety and Security", "Challenges and Solutions", "Imagining the Future City"]
    },
    teacherIntroduction: {
      introduction: "Hello, future city planners! I'm CitySmart, ready to guide you through the world of Smart Cities and Future Transportation!"
    },
  },
  content: [
    {
      title: "What are Smart Cities?",
      description: "Smart cities use technology to make life better for everyone. They manage traffic, save energy, and make sure everything runs smoothly.",
      task: {
        id: 1,
        type: "MultipleChoiceQuestion",
        question: "What do smart cities use to improve life?",
        answer: "Technology",
        options: ["Magic wands", "Technology", "Ancient maps", "Superheroes"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Smart Technology in Daily Life",
      description: "In a smart city, technology helps in everyday tasks. From apps that show the fastest way to commute, to sensors that reduce water waste, it's all about smart living!",
      task: {
        type: null
      },
    },
    {
      title: "Sustainable Transportation",
      description: "Future transportation is not just faster, but also cleaner. Electric cars, solar-powered buses, and self-driving vehicles can reduce pollution and make travel safer.",
      task: {
        id: 2,
        type: "MultipleChoiceQuestion",
        question: "What is a feature of sustainable transportation?",
        answer: "Reducing pollution and improving safety",
        options: ["Flying cars only", "Time travel", "Reducing pollution and improving safety", "Only using bicycles"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Smart Energy Solutions",
      description: "Smart cities use renewable energy like solar and wind power. They also use technology to save energy in buildings, streets, and public spaces.",
      task: {
        id: 3,
        type: "MultipleChoiceQuestion",
        question: "What energy solutions do smart cities use?",
        answer: "Renewable energy and energy-saving technology",
        options: ["Only coal and oil", "Magic energy", "Renewable energy and energy-saving technology", "Batteries only"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Urban Planning and the Environment",
      description: "Planning a smart city means thinking about green spaces, clean air, and a healthy environment for everyone.",
      task: {
        type: null
      },
    },
    {
      title: "Smart City Safety and Security",
      description: "Safety is key in smart cities. Technologies like surveillance cameras and emergency response systems help keep citizens safe.",
      task: {
        id: 4,
        type: "MultipleChoiceQuestion",
        question: "How do smart cities enhance safety?",
        answer: "Using technology for surveillance and emergency response",
        options: ["Superheroes", "Using technology for surveillance and emergency response", "Magic spells", "Giant robots"],
        isAnswerCorrect: null,
      },
    },
    {
      title: "Challenges and Solutions",
      description: "Building a smart city isn't easy. It requires solving problems like privacy, cost, and making sure technology benefits everyone.",
      task: {
        type: null
      },
    },
    {
      title: "Imagining the Future City",
      description: "What will cities look like in the future? Maybe there will be flying cars, robot helpers, or buildings that clean the air!",
      task: {
        id: 5,
        type: "MultipleChoiceQuestion",
        question: "What might future cities include?",
        answer: "Flying cars, robot helpers, and eco-friendly buildings",
        options: ["Dinosaurs as pets", "Castles and knights", "Flying cars, robot helpers, and eco-friendly buildings", "Underwater homes"],
        isAnswerCorrect: null,
      },
    },
  ],
};

