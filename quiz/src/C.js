import React, { useState } from 'react';

const questions = [
  {
    id: 'q1',
    question: 'Who wrote C?',
    options: ['Guido van Rossum', 'Dennis Ritchie', 'Brendan Eich', 'Anders Hejlsberg'],
    correctAnswer: 'Dennis Ritchie'
  },
  {
    id: 'q2',
    question: 'Which statement is correct here:',
    options: ['C is an interpreted language', 'C is a high-level language', 'C is an assembled language', 'All of the above'],
    correctAnswer: 'C is a high-level language'
  },
  {
    id: 'q3',
    question: 'Does C support abstraction?',
    options: ['No, C is very straightforward, everything is done directly!', 'Yes, it supports abstraction in many dimensions, hence it is a high-level language', 'Yes, this is the feature at the center of object-oriented programming languages', 'All of the above'],
    correctAnswer: 'Yes, it supports abstraction in many dimensions, hence it is a high-level language'
  },
  {
    id: 'q4',
    question: 'What is a structure in C?',
    options: ['It is a data type that is very important in object-oriented programming. It is a data type that stores components regardless of their type and they can be used thereafter via objects of this structure without directly changing their values. It is user-defined too', 'Everyone knows this, it is the header that guards functions in C', 'It is C linter', 'All of the above'],
    correctAnswer: 'It is a data type that is very important in object-oriented programming. It is a data type that stores components regardless of their type and they can be used thereafter via objects of this structure without directly changing their values. It is user-defined too'
  },
  {
    id: 'q5',
    question: 'What are pointers in C?',
    options: ['They are road signs and all insignia meant to aid driving and visibility', 'They are a data type in C that best describes abstraction and they refer to an object\'s storage and not value. That\'s why we talk of call by reference', 'They are like dictionaries in Python', 'All of the above'],
    correctAnswer: 'They are a data type in C that best describes abstraction and they refer to an object\'s storage and not value. That\'s why we talk of call by reference'
  },
  {
    id: 'q6',
    question: 'Which statement best describes C?',
    options: ['C is a compiled language', 'C is compiled using various tools like gcc and standards like c11, c89', 'Once compiled a C program becomes an executable', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    id: 'q7',
    question: 'What is the entry point of a C program?',
    options: ['The entry point is simply the start of the program, right there on the function signature', 'It is the header file', 'This refers to the main function, under which all declared functions are called', 'All of the above'],
    correctAnswer: 'This refers to the main function, under which all declared functions are called'
  },
  {
    id: 'q8',
    question: 'How would you describe a function in C?',
    options: ['At best, the function could be called a program. It could be one or part of a group that makes up the program or project. It has a particular task that it does and is usually expected to return something when it finishes executing', 'It is C jargon for parenthesized arguments', 'Another name for pointers', 'All of the above'],
    correctAnswer: 'At best, the function could be called a program. It could be one or part of a group that makes up the program or project. It has a particular task that it does and is usually expected to return something when it finishes executing'
  },
  {
    id:'q9',
    question: 'What is linter in programming?',
    options: ['It is a datatype in programming that best describes data structures','It is a guiding principle based on the language meant to test that the programmer abides by the rules and standards of the language','It best describes the nature of arrays in C and how they are related to pointers','All of the above'],
    correctAnswer:'It is a guiding principle based on the language meant to test that the programmer abides by the rules and standards of the language'
  } ,
  { 
    id:'q10',
    question:'Which is the correct statement on the following?',
    options: ['Arrays store same data types', 'In an array, counting of elements or indexing starts at 0', 'The name of the array points to the first element of the array','All of the above'],
    correctAnswer:'All of the above'
  },

   { id: 'q11',
    question:'Is it true that a programmer can traverse through an array from either end?',
    options:['Nope, an array follows a strict traversing pattern which is forward and is chained by the dot operator', 'Yes, and for that the for loop is best it traverses both ends. An index guides this traversing', 'Arrays are for declaring and initializing user defined data types such that it is impossible to traverse these as their size is not readily known', 'All of the above'],
    correctAnswer: 'Yes, and for that the for loop is best it traverses both ends. An index guides this traversing'
   },
  {
    id:'q12',
    question:'What are variadic functions in C?',
    options:['They are functions that have an unknown number of arguments at declaration and use an ellipsis to show this','These are the functions with a strict number of arguments on declaration and they have to be all used','They are a deprecated data type in C that was part of the c89 standard and cannot compile with gcc', 'All of the above'],
    correctAnswer:'They are functions that have an unknown number of arguments at declaration and use an ellipsis to show this'
  },
  {
    id:'q13',
    question:'Why is it important to free allocated memory in C?',
    options:['Such functions as malloc and many resource allocations need to be freed after use to avoid stack overflow and memory leaks','Since c11 the convention is that this is now optional and bears no significance since modern machines have enough memory to run and not exhaust','It now happens automatically isnce c13', 'All of the above'],
    correctAnswer:'Such functions as malloc and many resource allocations need to be freed after use to avoid stack overflow and memory leaks'
  },
    
  {
      id:'q14',
    question:'In loops, what is a prefix and a postfix?',
    options:['These refer to local scope in loops and can be replaced by global space', 'These refer to the behaviour of affecting variables before or after whatever manipulation one intends on them', 'Refers to the art of code layout', 'All of the above'],
    correctAnswer:'These refer to the behaviour of affecting variables before or after whatever manipulation one intends on them'
  },

  {
      id:'q15',
    question:'In C, printf is the only standard output stream function',
    options:['The above assertion is true and the standard way of representing it is STANDARD_OUT','There are many others like free, malloc and type casting','There are others like write function and other variations of printf itself','All of the above'],
    correctAnswer:'There are others like write function and other variations of printf itself'
  },

  { id: 'q16',
    question:'The standard library in C contains functions that the language uses',
    options:['It contains the most important important functions from all libraries in C hence the name standard library','It indeed does and we use #include to import it into our programs','It is a deprecated library and used stblib.h header','All of the above'],
    correctAnswer:'It indeed does and we use #include to import it into our programs'
  },

  {id:'q17',
    question:'Understanding the heap and stack memory is important in C',
    options:['Indeed, this is so because by so doing programmers can know how to manage memory to avoid leaks and overflows','The idea used to be of value in the early days of C, and when one is maintaining legacy code','As a high level language C has no use for these as programmers can abstract to divert issues to do with memory management','All of the above'],
    correctAnswer:'Indeed, this is so because by so doing programmers can know how to manage memory to avoid leaks and overflows'
  },

  { id:'q18',
    question:'',
    options:[]




  }






];

const CQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserAnswers({ ...userAnswers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestion.id];
    if (userAnswer === currentQuestion.correctAnswer) {
      setError('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log('Quiz completed!');
      }
    } else {
      setError('Incorrect answer. Please try again.');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <form onSubmit={handleSubmit}>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="radio"
              name={currentQuestion.id}
              value={option}
              onChange={handleInputChange}
              checked={userAnswers[currentQuestion.id] === option}
            />
            {option}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CQuiz;
