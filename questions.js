const questions = [
    {
      id: '1',
      text: "What does HTML stand for?",
      imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1000",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Hybrid Text Making Language"
      ],
      correctAnswer: 0,
      explanation: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      id: '2',
      text: "Which of these is NOT a JavaScript data type?",
      options: [
        "String",
        "Boolean",
        "Float",
        "Symbol"
      ],
      correctAnswer: 2,
      explanation: "Float is not a distinct data type in JavaScript. Numbers in JavaScript are always stored as double precision floating point numbers."
    },
    {
      id: '3',
      text: "What is the correct way to declare a variable in modern JavaScript?",
      options: [
        "var x = 5",
        "let x = 5",
        "const x = 5",
        "Both let and const are correct"
      ],
      correctAnswer: 3,
      explanation: "In modern JavaScript, both 'let' and 'const' are preferred over 'var' for variable declarations."
    },
    {
      id: '4',
      text: "Which CSS property is used to make text bold?",
      options: [
        "text-weight: bold",
        "font-bold: true",
        "font-weight: bold",
        "bold: true"
      ],
      correctAnswer: 2,
      explanation: "The CSS property 'font-weight' with the value 'bold' is used to make text bold."
    },
    {
      id: '5',
      text: "What is the time complexity of binary search?",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
      options: [
        "O(n)",
        "O(log n)",
        "O(n²)",
        "O(1)"
      ],
      correctAnswer: 1,
      explanation: "Binary search has a time complexity of O(log n) because it divides the search interval in half each time."
    },
    {
      id: '6',
      text: "Which HTTP method is idempotent?",
      options: [
        "POST",
        "GET",
        "PATCH",
        "DELETE"
      ],
      correctAnswer: 1,
      explanation: "The GET method is idempotent, meaning it does not alter server data when called multiple times."
    },
    {
      id: '7',
      text: "What is the purpose of the 'useEffect' hook in React?",
      options: [
        "To handle state in functional components",
        "To perform side effects in components",
        "To create custom hooks",
        "To optimize component rendering"
      ],
      correctAnswer: 1,
      explanation: "useEffect is a React Hook used to perform side effects in functional components."
    },
    {
      id: '8',
      text: "Which of these is a valid way to center a div using Flexbox?",
      options: [
        "display: flex; align: center;",
        "display: flex; align-items: center; justify-content: center;",
        "display: flex; margin: auto;",
        "display: flex; text-align: center;"
      ],
      correctAnswer: 1,
      explanation: "The properties 'align-items: center' and 'justify-content: center' center elements in Flexbox."
    },
    {
      id: '9',
      text: "What is the primary purpose of Redis?",
      imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000",
      options: [
        "In-memory data structure store",
        "Relational database",
        "Message queue",
        "File storage system"
      ],
      correctAnswer: 0,
      explanation: "Redis is primarily used as an in-memory data structure store, commonly for caching."
    },
    {
      id: '10',
      text: "Which security measure helps prevent SQL injection attacks?",
      options: [
        "Using prepared statements",
        "Enabling CORS",
        "Setting HTTP headers",
        "Using HTTPS"
      ],
      correctAnswer: 0,
      explanation: "Using prepared statements helps prevent SQL injection by sanitizing inputs."
    },
    {
      id: '11',
      text: "What is the purpose of the 'key' prop in React lists?",
      options: [
        "To style list items",
        "To help React track list items efficiently",
        "To make lists sortable",
        "To add event listeners"
      ],
      correctAnswer: 1,
      explanation: "The 'key' prop helps React identify and track items in lists efficiently."
    },
    {
      id: '12',
      text: "Which of these is NOT a valid HTTP status code?",
      options: [
        "200",
        "404",
        "600",
        "500"
      ],
      correctAnswer: 2,
      explanation: "600 is not a valid HTTP status code. Standard codes are typically between 100 and 599."
    }
  ];
  