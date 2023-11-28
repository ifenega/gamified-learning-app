import networkImage from "../../../assets/dashboard/Lessons/network.svg"

export const firstLesson = {
  title: "Introduction to the Internet of Things (IoT)",
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
      description: "Imagine a magical world where things can communicate and collaborate without constant human intervention. That's the essence of the Internet of Things, or IoT for short.",
      task: {
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
      task: null,
    },
    {
      title: "Smartening Up Everyday Objects",
      description: "IoT gives superpowers to everyday things, allowing them to communicate and enhance convenience. It's a technological magic making our world a bit smarter!",
      task: {
        type: "MultipleChoiceQuestion",
        question: "Choose the correct statement.",
        answer: "IoT makes everyday objects smarter.",
        options: ["IoT makes everyday objects dumber.", "IoT leaves everyday objects as they are.", "IoT makes everyday objects smarter.", "IoT destroys everyday objects."],
        isAnswerCorrect: null,
      },
    },
  ],
};