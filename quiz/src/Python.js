// Python.js
import React, { useState } from 'react';

const questions = [
    {
      id: 'q1',
      question: 'Who created Python?',
      options: [
        'AT&T',
        'Guido van Rossum',
        'Brian Kernighan',
        'Facebook'
      ],
      correctAnswer: 'Guido van Rossum'
    },
    {
      id: 'q2',
      question: 'What does this operator "=" do?',
      options: [
        'This is an equal sign in python',
        'It assigns one variable to another and is used in declaring variables',
        'This is the walrus operator, used for shortening if-else',
        'Used for end of the line'
      ],
      correctAnswer: 'It assigns one variable to another and is used in declaring variables'
    },
    {
      id: 'q3',
      question: 'What is a method in python?',
      options: [
        'Well, they refer to functions within classes and are part of OOP concepts',
        'They are ways of declaring data in arrays',
        'They are central to dictionaries in python and refer to the keys in the dictionary',
        'All of the above'
      ],
      correctAnswer: 'Well, they refer to functions within classes and are part of OOP concepts'
    },
    {
      id: 'q4',
      question: 'Does python also use libraries?',
      options: [
        'Nope, in Python they are a no-go area, such concepts are foreign.',
        'Yes, they are central to the language and support a rich ecosystem of libraries for basically many functionalities',
        'Used to, it was deprecated with advances in the language',
        'All of the above'
      ],
      correctAnswer: 'Yes, they are central to the language and support a rich ecosystem of libraries for basically many functionalities'
    },
    {
      id: 'q5',
      question: 'Does python borrow from C?',
      options: [
        'Each language is independent and they mark different epochs and therefore unrelated whatsoever',
        'It is mostly based on C, borrows a lot of syntax and concepts from it',
        'Python is newer and borrows from modern languages only',
        'All of the above'
      ],
      correctAnswer: 'It is mostly based on C, borrows a lot of syntax and concepts from it'
    },
    {
      id: 'q6',
      question: 'Is python a compiled language? This question builds from the previous one...',
      options: [
        'Yes indeed, all programming languages are compiled languages',
        'Nope, python is an assembled language',
        'Nope, it is an interpreted language',
        'All of the above'
      ],
      correctAnswer: 'Nope, it is an interpreted language'
    },
    {
      id: 'q7',
      question: 'Dictionaries are user-defined and deal with key-value pairs',
      options: [
        'Dictionaries deal with classes and not the above',
        'Yes indeed, that\'s exactly what they are all about',
        'They are a deprecated data type no longer in use in python latest versions',
        'The first two are correct'
      ],
      correctAnswer: 'Yes indeed, that\'s exactly what they are all about'
    },
    {
      id: 'q8',
      question: 'Lists and arrays define the same data types/structures in python',
      options: [
        'Yes indeed, and they both can be traversed in a similar manner using indexing of elements',
        'Nope, that is not the case. They define two different data structures',
        'Used to be the case in python 2',
        'All of the above'
      ],
      correctAnswer: 'Nope, that is not the case. They define two different data structures'
    },
    {
      id: 'q9',
      question: 'We have strings, arrays and lists and they can be traversed the same way in for loops',
      options: [
        'These are 3 different data types and so use different ways of traversing',
        'Yes indeed, and they employ indexing for that',
        'The statement is only true without strings',
        'Python3 does not allow such anymore'
      ],
      correctAnswer: 'Yes indeed, and they employ indexing for that'
    },
    {
      id: 'q10',
      question: 'In Python 3, unlike C, there is no need to declare the data type for a variable',
      options: [
        'That is totally untrue! Variable declaration is the standard of all programming languages and the data type is central to it so we know what we are dealing with',
        'Yes indeed, this concept was part of python 2 and modern python no longer cares about this',
        'The concept was removed because Python was meant to be closer to English and data types are confusing',
        'Only the last two are correct'
      ],
      correctAnswer: 'That is totally untrue! Variable declaration is the standard of all programming languages and the data type is central to it so we know what we are dealing with'
    },
    {
      id: 'q11',
      question: 'What are decorators in Python?',
      options: [
        'They are a concept central to OOP, classes in particular and enable to wrap a function or method with additional functionality without changing its actual code.',
        'They are the core of dictionaries',
        'They define packages in python',
        'They are the new format specifiers in python expressions'
      ],
      correctAnswer: 'They are a concept central to OOP, classes in particular and enable to wrap a function or method with additional functionality without changing its actual code.'
    },
    {
      id: 'q12',
      question: 'What is this "__init__.py" file in python for?',
      options: [
        'This was part of python 2 and is now deprecated. Was used to declare classes',
        'This is the package initializer file, without it no import is possible of the package for versions before python 3.3',
        'This is part of the compile process of python',
        'Only the second is incorrect'
      ],
      correctAnswer: 'This is the package initializer file, without it no import is possible of the package for versions before python 3.3'
    },
    {
      id: 'q13',
      question: 'What are unit tests for in python?',
      options: [
        'They are a deprecated concept',
        'They are the core of TDD and focus on testing the core aspects of a program or project for expected functionality using various scenarios',
        'They are the core of format specifiers',
        'Only the second and third are correct'
      ],
      correctAnswer: 'They are the core of TDD and focus on testing the core aspects of a program or project for expected functionality using various scenarios'
    },
    {
      id: 'q14',
      question: 'Is main the entry point of function calling in python?',
      options: [
        'Yes indeed, although there is a slight variation in the format',
        'Python is liberal, no need for main and entry points in the language',
        'The concept of main is an old C concept',
        'Only the first one is incorrect'
      ],
      correctAnswer: 'Python is liberal, no need for main and entry points in the language'
    },
    {
      id: 'q15',
      question: 'What accompanies try in exception handling in python?',
      options: [
        'Catch',
        'if-else',
        'the ternary operator ? ',
        'except'
      ],
      correctAnswer: 'except'
    },
    {
      id: 'q16',
      question: 'Is there a difference between is and == in python?',
      options: [
        'They are the same concept, used in different contexts',
        'There is, the one compares equality and the other compares identities',
        'The "is" is deprecated, was in python 2',
        'None of these options are correct'
      ],
      correctAnswer: 'There is, the one compares equality and the other compares identities'
    },
    {
      id: 'q17',
      question: 'In python classes, what is a constructor?',
      options: [
        'This refers to the wrapper of decorators',
        'A constructor in Python is a special method named __init__ that is automatically called when a new object of a class is created. It is used to initialize the attributes of the class',
        'Refers to the instances that the methods of the classes have',
        'All of the above'
      ],
      correctAnswer: 'A constructor in Python is a special method named __init__ that is automatically called when a new object of a class is created. It is used to initialize the attributes of the class'
    },
    {
      id: 'q18',
      question: 'What is self used for in classes?',
      options: [
        'This is like this in JavaScript, it points to the creating object itself and defines the scope of whatever is declared with it',
        'This is a decorator in classes',
        'This is a package initializer',
        'All of the above'
      ],
      correctAnswer: 'This is like this in JavaScript, it points to the creating object itself and defines the scope of whatever is declared with it'
    },
    {
      id: 'q19',
      question: 'Can you explain inheritance in Python?',
      options: [
        'This is a concept of borrowing attributes from a parent class for use by child classes',
        'This is the concept of initializing packages and modules in python',
        'The concept of registering data structures that are user-defined like lists and dictionaries',
        'Only the first option is correct'
      ],
      correctAnswer: 'This is a concept of borrowing attributes from a parent class for use by child classes'
    },
    {
      id: 'q20',
      question: 'Can you explain the concept of "scope" in Python?',
      options: [
        'The scope defines where a variable can be accessed. Variables defined within a function or block have local scope, while those defined outside have global scope',
        'Scope refers to how functions are declared and accessed in Python',
        'Scope deals with the layout and design of classes',
        'All of the above'
      ],
      correctAnswer: 'The scope defines where a variable can be accessed. Variables defined within a function or block have local scope, while those defined outside have global scope'
    }
  ];
  
const PythonQuiz = () => {
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
        alert('Quiz completed! Congratulations!');
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
              id={`${currentQuestion.id}-${index}`}
              name={currentQuestion.id}
              value={option}
              checked={userAnswers[currentQuestion.id] === option}
              onChange={handleInputChange}
            />
            <label htmlFor={`${currentQuestion.id}-${index}`}>{option}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PythonQuiz;
