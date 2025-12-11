import { Category, Topic, LessonContent } from './types';
import { 
  BookOpen, 
  Cpu, 
  Network, 
  Monitor, 
  Zap, 
  Layers 
} from 'lucide-react';

export const CATEGORY_ICONS: Record<Category, any> = {
  [Category.STARTER]: BookOpen,
  [Category.ADVANCED]: Zap,
  [Category.ML]: Layers,
  [Category.CV]: Monitor, // Using Monitor as a proxy for visual stuff
  [Category.NETWORK]: Network,
  [Category.UI]: Cpu, // Generic tech icon
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  [Category.STARTER]: "Master the fundamentals: Variables, Control Flow, and Functions.",
  [Category.ADVANCED]: "Deep dive into Decorators, Generators, and Concurrency.",
  [Category.ML]: "Explore Data Science, Neural Networks, and Predictive Models.",
  [Category.CV]: "Learn Image Processing, Face Detection, and Object Tracking.",
  [Category.NETWORK]: "Understand Sockets, TCP/IP, and Asynchronous I/O.",
  [Category.UI]: "Build modern GUIs and Web Applications."
};

export const TOPICS: Topic[] = [
  // Starter
  { id: 's1', category: Category.STARTER, title: 'Variables & Data Types', description: 'Integers, Strings, Booleans, and Floats.' },
  { id: 's2', category: Category.STARTER, title: 'Control Flow', description: 'If, Else, Elif, and conditional logic.' },
  { id: 's3', category: Category.STARTER, title: 'Loops', description: 'For loops, While loops, and iteration.' },
  { id: 's4', category: Category.STARTER, title: 'Functions', description: 'Defining functions, arguments, and return values.' },
  { id: 's5', category: Category.STARTER, title: 'Lists & Dictionaries', description: 'Managing collections of data.' },

  // Advanced
  { id: 'a1', category: Category.ADVANCED, title: 'Decorators', description: 'Modifying function behavior dynamically.' },
  { id: 'a2', category: Category.ADVANCED, title: 'Generators', description: 'Yield, Iterators, and efficient memory usage.' },
  { id: 'a3', category: Category.ADVANCED, title: 'Context Managers', description: 'The "with" statement and resource management.' },
  { id: 'a4', category: Category.ADVANCED, title: 'Concurrency', description: 'Threading vs Multiprocessing vs AsyncIO.' },
  
  // Machine Learning
  { id: 'm1', category: Category.ML, title: 'NumPy Basics', description: 'High-performance multidimensional array object.' },
  { id: 'm2', category: Category.ML, title: 'Pandas DataFrames', description: 'Data manipulation and analysis.' },
  { id: 'm3', category: Category.ML, title: 'Linear Regression', description: 'Predicting continuous values using Scikit-Learn.' },
  { id: 'm4', category: Category.ML, title: 'Basic Neural Network', description: 'Understanding layers, weights, and activation.' },

  // Computer Vision
  { id: 'c1', category: Category.CV, title: 'OpenCV Basics', description: 'Reading, displaying, and writing images.' },
  { id: 'c2', category: Category.CV, title: 'Image Processing', description: 'Blurring, thresholding, and edge detection.' },
  { id: 'c3', category: Category.CV, title: 'Face Detection', description: 'Using Haar Cascades or HOG.' },
  { id: 'c4', category: Category.CV, title: 'Object Tracking', description: 'Tracking moving objects in video.' },

  // Network
  { id: 'n1', category: Category.NETWORK, title: 'Sockets Intro', description: 'Understanding IP, Ports, and Sockets.' },
  { id: 'n2', category: Category.NETWORK, title: 'TCP Client/Server', description: 'Building a basic chat server.' },
  { id: 'n3', category: Category.NETWORK, title: 'HTTP Requests', description: 'Using requests library and handling APIs.' },
  { id: 'n4', category: Category.NETWORK, title: 'Async Networking', description: 'Non-blocking I/O with asyncio.' },

  // UI
  { id: 'u1', category: Category.UI, title: 'Tkinter Basics', description: 'Creating windows, buttons, and labels.' },
  { id: 'u2', category: Category.UI, title: 'PyQt/PySide', description: 'Advanced GUI widgets and layouts.' },
  { id: 'u3', category: Category.UI, title: 'Flask Web App', description: 'Routing and templates for web UI.' },
  { id: 'u4', category: Category.UI, title: 'Streamlit', description: 'Rapid data app development.' },
];

// Static Lesson Data for Offline Mode
export const LESSON_DATA: Record<string, LessonContent> = {
  // --- Starter ---
  's1': {
    title: 'Variables & Data Types',
    explanation: "**Variables** are containers for storing data values. In Python, you don't need to declare variables with any specific type, and you can even change type after they have been set.\n\nPython has several built-in data types:\n* **Integers (`int`)**: Whole numbers (e.g., `5`, `-10`).\n* **Floats (`float`)**: Decimal numbers (e.g., `3.14`, `0.001`).\n* **Strings (`str`)**: Text enclosed in quotes (e.g., `'Hello'`).\n* **Booleans (`bool`)**: True or False values.",
    codeExample: `name = "Python Master"  # String
age = 25              # Integer
height = 1.75         # Float
is_student = True     # Boolean

print(f"Name: {name} (Type: {type(name)})")
print(f"Age: {age} (Type: {type(age)})")
print(f"Height: {height} (Type: {type(height)})")
print(f"Student: {is_student} (Type: {type(is_student)})")`,
    codeExplanation: "- We assign values to variables using the `=` operator.\n- `type()` is a built-in function that tells you the data type of a variable.\n- `f\"...\"` strings (f-strings) allow us to embed variables directly into text.",
    challenge: "Create a variable called `year` with the current year, and a string `goal` with your learning goal. Print them in one sentence.",
    expectedOutput: `Name: Python Master (Type: <class 'str'>)
Age: 25 (Type: <class 'int'>)
Height: 1.75 (Type: <class 'float'>)
Student: True (Type: <class 'bool'>)`,
    quiz: {
      question: "Which data type would best represent the number 3.14?",
      options: ["Integer", "Boolean", "Float", "String"],
      correctAnswer: 2,
      explanation: "3.14 is a decimal number, so it is represented as a Float (floating-point number). Integers represent whole numbers."
    }
  },
  's2': {
    title: 'Control Flow',
    explanation: "Control flow allows your program to make decisions. The most common statement is the **if...elif...else** block.\n\nPython uses **indentation** (whitespace at the beginning of a line) to define the scope of the code block. Standard indentation is 4 spaces.",
    codeExample: `score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

print("Grading complete.")`,
    codeExplanation: "- `if` checks the first condition.\n- `elif` (else if) checks subsequent conditions if the previous ones were False.\n- `else` runs if none of the above conditions were met.\n- The final `print` statement is unindented, so it runs regardless of the outcome.",
    challenge: "Write an if-statement that checks if a variable `temperature` is above 30. If so, print 'Hot', otherwise print 'Nice'.",
    expectedOutput: `Grade: B
Grading complete.`,
    quiz: {
      question: "Which keyword allows you to check an alternative condition if the initial 'if' statement is False?",
      options: ["else", "elif", "check", "otherwise"],
      correctAnswer: 1,
      explanation: "'elif' (short for else if) allows you to check a new condition if the previous 'if' or 'elif' conditions were False."
    }
  },
  's3': {
    title: 'Loops',
    explanation: "**Loops** allow you to repeat a block of code multiple times.\n\n* **For Loop**: Ideal for iterating over a sequence (like a list or a range of numbers).\n* **While Loop**: Continues as long as a condition remains True.",
    codeExample: `print("--- For Loop ---")
for i in range(1, 4):
    print(f"Count: {i}")

print("\n--- While Loop ---")
countdown = 3
while countdown > 0:
    print(f"T-minus {countdown}")
    countdown -= 1
print("Liftoff!")`,
    codeExplanation: "- `range(1, 4)` generates numbers starting at 1 and up to (but not including) 4.\n- `while countdown > 0` keeps running as long as the variable is positive.\n- `countdown -= 1` is crucial to prevent an infinite loop.",
    challenge: "Use a for loop to print the square of numbers from 1 to 5.",
    expectedOutput: `--- For Loop ---
Count: 1
Count: 2
Count: 3

--- While Loop ---
T-minus 3
T-minus 2
T-minus 1
Liftoff!`,
    quiz: {
      question: "If you want to run a loop exactly 10 times, which construct is most appropriate?",
      options: ["while loop", "for loop with range()", "if statement", "def statement"],
      correctAnswer: 1,
      explanation: "A 'for' loop combined with 'range()' is the standard way to iterate a specific number of times in Python."
    }
  },
  's4': {
      title: 'Functions',
      explanation: "Functions are reusable blocks of code. They help organize your program and prevent repetition. You define a function using the `def` keyword.",
      codeExample: `def greet_user(name, time_of_day="Day"):
    return f"Good {time_of_day}, {name}!"

# Calling the function
msg1 = greet_user("Alice", "Morning")
msg2 = greet_user("Bob") # Uses default value

print(msg1)
print(msg2)`,
      codeExplanation: "- `def greet_user(...)`: Defines the function name and parameters.\n- `time_of_day=\"Day\"`: This is a default parameter. If the caller doesn't provide it, it defaults to \"Day\".\n- `return`: Sends data back to where the function was called.",
      challenge: "Write a function `calculate_area(width, height)` that returns the area of a rectangle.",
      expectedOutput: `Good Morning, Alice!
Good Day, Bob!`,
    quiz: {
      question: "Which keyword is used to define a new function in Python?",
      options: ["function", "func", "def", "define"],
      correctAnswer: 2,
      explanation: "The 'def' keyword (short for define) is used to declare a function in Python."
    }
  },
  's5': {
      title: 'Lists & Dictionaries',
      explanation: "Python provides powerful structures to hold collections of data.\n\n* **List (`[]`)**: Ordered, mutable sequence of items.\n* **Dictionary (`{}`)**: Unordered collection of Key-Value pairs.",
      codeExample: `# List
fruits = ["Apple", "Banana", "Cherry"]
fruits.append("Date")
print(f"Fruits: {fruits[0]} and {fruits[-1]}")

# Dictionary
user = {
    "name": "Alex",
    "role": "Admin",
    "id": 55
}
print(f"User {user['name']} is an {user['role']}")`,
      codeExplanation: "- `fruits[0]` accesses the first item, `fruits[-1]` accesses the last.\n- `append()` adds an item to the end of the list.\n- Dictionaries are accessed via keys, e.g., `user['name']`.",
      challenge: "Create a list of 3 colors. Then create a dictionary representing a 'Car' with keys 'brand' and 'color'.",
      expectedOutput: `Fruits: Apple and Date
User Alex is an Admin`,
    quiz: {
      question: "How do you access the value associated with the key 'age' in a dictionary named 'person'?",
      options: ["person.age", "person['age']", "person(age)", "person.get_age()"],
      correctAnswer: 1,
      explanation: "Dictionary values are accessed using square brackets with the key inside: person['age']."
    }
  },

  // --- Advanced ---
  'a1': {
      title: 'Decorators',
      explanation: "Decorators are a powerful way to modify or enhance functions without changing their source code. They are often used for logging, access control, or timing.",
      codeExample: `def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()`,
      codeExplanation: "- `@my_decorator` is syntactic sugar. It's equivalent to `say_hello = my_decorator(say_hello)`.\n- The `wrapper` function surrounds the original function logic.",
      challenge: "Write a decorator that prints 'Start' before a function runs and 'End' after it finishes.",
      expectedOutput: `Something is happening before the function is called.
Hello!
Something is happening after the function is called.`,
    quiz: {
      question: "What symbol is used to apply a decorator to a function?",
      options: ["#", "&", "@", "$"],
      correctAnswer: 2,
      explanation: "The '@' symbol is placed above a function definition to apply a decorator."
    }
  },
  'a2': {
      title: 'Generators',
      explanation: "Generators are a simple way of creating iterators. Instead of returning all results at once (which uses memory), they `yield` one result at a time.",
      codeExample: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

# Using the generator
for number in countdown(3):
    print(number)`,
      codeExplanation: "- When the function hits `yield`, it pauses and saves its state.\n- The next time it's called (by the loop), it resumes right where it left off.",
      challenge: "Create a generator function `squares(n)` that yields square numbers up to n.",
      expectedOutput: `3
2
1`,
    quiz: {
      question: "Which keyword distinguishes a generator function from a normal function?",
      options: ["return", "yield", "generate", "emit"],
      correctAnswer: 1,
      explanation: "'yield' produces a value and pauses the function's execution, saving its state for the next iteration."
    }
  },
  'a3': {
    title: 'Context Managers',
    explanation: "Context managers allow you to allocate and release resources precisely when you want to. The most widely used example is the `with` statement.",
    codeExample: `class FileManager:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        print(f"Opening {self.filename}")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Closing {self.filename}")

with FileManager("test.txt") as f:
    print("Writing to file...")`,
    codeExplanation: "- `__enter__` is executed when entering the `with` block.\n- `__exit__` is executed when leaving the block, even if an error occurs. This ensures cleanup (like closing files).",
    challenge: "Use `with open('myfile.txt', 'w') as f:` to safely write a string to a file.",
    expectedOutput: `Opening test.txt
Writing to file...
Closing test.txt`,
    quiz: {
      question: "What is the primary benefit of using the 'with' statement for file handling?",
      options: ["It makes the file read-only", "It automatically closes the file, even if errors occur", "It speeds up file writing", "It encrypts the file"],
      correctAnswer: 1,
      explanation: "The 'with' statement ensures that cleanup code (like closing a file) runs automatically when the block is exited."
    }
  },
  'a4': {
      title: 'Concurrency',
      explanation: "Concurrency allows programs to handle multiple tasks at once. `asyncio` is Python's library for writing concurrent code using the async/await syntax.",
      codeExample: `import asyncio

async def say_after(delay, what):
    await asyncio.sleep(delay)
    print(what)

async def main():
    print(f"started")
    await say_after(1, 'hello')
    await say_after(1, 'world')
    print(f"finished")

# In a real script: asyncio.run(main())
# For simulation:
print("Output simulated for async execution:")
print("started")
print("... (1 sec delay) ...")
print("hello")
print("... (1 sec delay) ...")
print("world")
print("finished")`,
      codeExplanation: "- `async def` defines a coroutine.\n- `await` pauses execution of the coroutine until the awaited result is ready, letting other tasks run in the meantime.",
      challenge: "Write an async function that simulates downloading a file by sleeping for 2 seconds.",
      expectedOutput: `Output simulated for async execution:
started
... (1 sec delay) ...
hello
... (1 sec delay) ...
world
finished`,
    quiz: {
      question: "Which keywords are used to define and call a coroutine in Python?",
      options: ["def / call", "async def / await", "coroutine / yield", "thread / start"],
      correctAnswer: 1,
      explanation: "`async def` defines a coroutine function, and `await` is used to pause execution until the coroutine completes."
    }
  },

  // --- ML ---
  'm1': {
      title: 'NumPy Basics',
      explanation: "NumPy is the fundamental package for scientific computing in Python. It provides high-performance multidimensional array objects.",
      codeExample: `import numpy as np

# Create a 1D array
arr = np.array([1, 2, 3, 4, 5])

# Mathematical operations
doubled = arr * 2
mean_val = np.mean(arr)

print(f"Original: {arr}")
print(f"Doubled:  {doubled}")
print(f"Mean:     {mean_val}")`,
      codeExplanation: "- NumPy arrays are much faster and more memory efficient than standard Python lists.\n- Operations like `arr * 2` apply element-wise (vectorization).",
      challenge: "Create a numpy array of numbers 1-10 and calculate their sum.",
      expectedOutput: `Original: [1 2 3 4 5]
Doubled:  [ 2  4  6  8 10]
Mean:     3.0`,
    quiz: {
      question: "What is the main advantage of NumPy arrays over Python lists?",
      options: ["They can hold different data types", "They are faster and more memory efficient", "They are built-in to Python", "They are easier to print"],
      correctAnswer: 1,
      explanation: "NumPy arrays are stored in contiguous memory blocks, making operations significantly faster and more memory efficient."
    }
  },
  'm2': {
      title: 'Pandas DataFrames',
      explanation: "Pandas provides the DataFrame, a 2D labeled data structure akin to a SQL table or Excel spreadsheet.",
      codeExample: `import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'Paris', 'London']
}

df = pd.DataFrame(data)

# Filter for Age > 28
older_users = df[df['Age'] > 28]

print(older_users)`,
      codeExplanation: "- `pd.DataFrame(data)` creates the table.\n- `df['Age'] > 28` creates a boolean filter.\n- `df[...]` applies that filter to return rows where the condition is true.",
      challenge: "Create a DataFrame with columns 'Product' and 'Price', then filter for prices under $10.",
      expectedOutput: `      Name  Age    City
1      Bob   30   Paris
2  Charlie   35  London`,
    quiz: {
      question: "Which Pandas data structure represents tabular data with rows and columns?",
      options: ["Series", "Panel", "DataFrame", "Table"],
      correctAnswer: 2,
      explanation: "A DataFrame is the primary Pandas structure for 2D tabular data."
    }
  },
  'm3': {
      title: 'Linear Regression',
      explanation: "Linear Regression models the relationship between a dependent variable (Y) and one or more independent variables (X) using a straight line.",
      codeExample: `from sklearn.linear_model import LinearRegression
import numpy as np

# Data: Hours Studied vs Test Score
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([50, 60, 70, 80, 90])

model = LinearRegression()
model.fit(X, y)

# Predict for 6 hours
prediction = model.predict([[6]])
print(f"Predicted score for 6 hours: {prediction[0]}")`,
      codeExplanation: "- `fit(X, y)` trains the model to find the best fit line.\n- `predict(...)` uses that line to estimate values for new data points.",
      challenge: "Predict the output for input 10 given the pattern X=[1,2,3], y=[2,4,6].",
      expectedOutput: `Predicted score for 6 hours: 100.0`,
    quiz: {
      question: "In Scikit-Learn, which method is used to train the model on data?",
      options: ["train()", "fit()", "learn()", "optimize()"],
      correctAnswer: 1,
      explanation: "The `fit(X, y)` method is used to train the model by fitting it to the provided data."
    }
  },
  'm4': {
      title: 'Basic Neural Network',
      explanation: "A neural network consists of layers of nodes (neurons). It learns by adjusting weights to minimize error between predictions and actual targets.",
      codeExample: `import tensorflow as tf
from tensorflow import keras
import numpy as np

# Simple model: y = 2x - 1
model = keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
model.compile(optimizer='sgd', loss='mean_squared_error')

xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
ys = np.array([-3.0, -1.0, 1.0, 3.0, 5.0, 7.0], dtype=float)

# Train the model (simulated output for brevity)
# model.fit(xs, ys, epochs=500)

print("Model trained.")
print("Predicting for x = 10.0 (Expected ~19.0)")
print("Prediction: [[18.987]]")`,
      codeExplanation: "- `Dense(units=1)` creates a single neuron layer.\n- `sgd` (Stochastic Gradient Descent) is the optimizer that adjusts weights.\n- The model learns the relationship `2x - 1`.",
      challenge: "Define a Sequential model with one Dense layer.",
      expectedOutput: `Model trained.
Predicting for x = 10.0 (Expected ~19.0)
Prediction: [[18.987]]`,
    quiz: {
      question: "Which Keras layer type connects every neuron in one layer to every neuron in the next?",
      options: ["Conv2D", "Dense", "Flatten", "Dropout"],
      correctAnswer: 1,
      explanation: "A `Dense` layer (fully connected layer) connects every input to every output within that layer."
    }
  },

  // --- CV ---
  'c1': {
      title: 'OpenCV Basics',
      explanation: "OpenCV is the standard library for Computer Vision. Images are essentially grids of pixels (matrices).",
      codeExample: `import cv2
import numpy as np

# Create a black image (100x100 pixels)
image = np.zeros((100, 100, 3), dtype="uint8")

# Draw a diagonal blue line
# (start_point, end_point, color, thickness)
cv2.line(image, (0, 0), (99, 99), (255, 0, 0), 5)

print(f"Image shape: {image.shape}")
print("Pixel at (50,50) - BGR:", image[50, 50])`,
      codeExplanation: "- `np.zeros` creates a black canvas.\n- OpenCV uses BGR (Blue, Green, Red) format, not RGB.\n- `(255, 0, 0)` is pure Blue.",
      challenge: "Create a generic image and draw a red rectangle on it.",
      expectedOutput: `Image shape: (100, 100, 3)
Pixel at (50,50) - BGR: [255   0   0]`,
    quiz: {
      question: "What color channel order does OpenCV use by default?",
      options: ["RGB (Red, Green, Blue)", "BGR (Blue, Green, Red)", "CMYK", "Grayscale"],
      correctAnswer: 1,
      explanation: "OpenCV uses the BGR (Blue-Green-Red) format by default, unlike most other libraries which use RGB."
    }
  },
  'c2': {
      title: 'Image Processing',
      explanation: "Processing involves applying filters to images. Blurring helps reduce noise, while edge detection finds boundaries.",
      codeExample: `import cv2

# Convert to grayscale
# gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Apply Gaussian Blur
# blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Canny Edge Detection
# edges = cv2.Canny(blurred, 50, 150)

print("Applied Grayscale conversion.")
print("Applied Gaussian Blur.")
print("Detected Edges with Canny algorithm.")`,
      codeExplanation: "- `cvtColor` changes color spaces (e.g., BGR to Gray).\n- `Canny` is a popular edge detection algorithm that uses gradients.",
      challenge: "Research how to rotate an image using OpenCV.",
      expectedOutput: `Applied Grayscale conversion.
Applied Gaussian Blur.
Detected Edges with Canny algorithm.`,
    quiz: {
      question: "Which algorithm is commonly used for edge detection in OpenCV?",
      options: ["Gaussian Blur", "Canny", "Resize", "Threshold"],
      correctAnswer: 1,
      explanation: "Canny Edge Detection is a popular multi-stage algorithm used to detect a wide range of edges in images."
    }
  },
  'c3': {
      title: 'Face Detection',
      explanation: "Face detection usually involves pre-trained classifiers like Haar Cascades or Histogram of Oriented Gradients (HOG).",
      codeExample: `import cv2

# Load the pre-trained Haar Cascade classifier
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

# Detect faces
# faces = face_cascade.detectMultiScale(gray, 1.1, 4)

# Draw rectangles around faces
# for (x, y, w, h) in faces:
#     cv2.rectangle(img, (x, y), (x+w, y+h), (255, 0, 0), 2)

print("Classifier loaded.")
print("Found 2 faces.")
print("Drew rectangles at detected coordinates.")`,
      codeExplanation: "- `detectMultiScale` scans the image at different scales to find faces of varying sizes.\n- It returns a list of rectangles (x, y, width, height).",
      challenge: "What file do you need to load to detect eyes instead of faces?",
      expectedOutput: `Classifier loaded.
Found 2 faces.
Drew rectangles at detected coordinates.`,
    quiz: {
      question: "What does `detectMultiScale` return?",
      options: ["The number of faces found", "A list of rectangles (x, y, w, h) for detected objects", "A new image with faces cropped", "True if a face is found"],
      correctAnswer: 1,
      explanation: "It returns a list of rectangles, where each rectangle contains the coordinates and dimensions of a detected object."
    }
  },
  'c4': {
      title: 'Object Tracking',
      explanation: "Tracking involves locating a moving object across frames in a video. Common algorithms include CSRT and KCF.",
      codeExample: `import cv2

tracker = cv2.TrackerCSRT_create()
# tracker.init(frame, bbox)

# In a loop:
# success, box = tracker.update(new_frame)

print("Tracker initialized with bounding box.")
print("Processing Frame 1: Tracking success.")
print("Processing Frame 2: Tracking success.")`,
      codeExplanation: "- Tracking is generally faster than detecting objects in every single frame.\n- You detect once, then track for subsequent frames.",
      challenge: "Look up the difference between KCF (fast) and CSRT (accurate) trackers.",
      expectedOutput: `Tracker initialized with bounding box.
Processing Frame 1: Tracking success.
Processing Frame 2: Tracking success.`,
    quiz: {
      question: "What is the primary advantage of Object Tracking over Object Detection in video?",
      options: ["It is more accurate for static images", "It is generally faster than running detection on every frame", "It can identify the name of the object", "It works in 3D"],
      correctAnswer: 1,
      explanation: "Tracking algorithms locate an object in subsequent frames based on its previous position, which is computationally cheaper than detecting it from scratch every time."
    }
  },

  // --- Network ---
  'n1': {
      title: 'Sockets Intro',
      explanation: "Sockets are endpoints for communication between two machines. Python's `socket` module provides access to the BSD socket interface.",
      codeExample: `import socket

# Create a socket object
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# Get local machine name
host = socket.gethostname()
print(f"Hostname: {host}")

# Connect to a remote server (e.g., google.com on port 80)
# s.connect(("www.google.com", 80))
print("Socket created successfully.")`,
      codeExplanation: "- `AF_INET` means IPv4.\n- `SOCK_STREAM` means TCP (reliable, connection-based).",
      challenge: "Find out what port number standard HTTP traffic uses.",
      expectedOutput: `Hostname: localhost
Socket created successfully.`,
    quiz: {
      question: "Which socket type constant represents TCP (reliable, connection-based protocol)?",
      options: ["SOCK_DGRAM", "SOCK_STREAM", "SOCK_RAW", "SOCK_RDM"],
      correctAnswer: 1,
      explanation: "`SOCK_STREAM` indicates a TCP socket, while `SOCK_DGRAM` indicates UDP."
    }
  },
  'n2': {
      title: 'TCP Client/Server',
      explanation: "A server listens for connections; a client initiates them. This is the basis of most network apps.",
      codeExample: `# Server Side Code (Concept)
import socket

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.bind(('localhost', 12345))
server_socket.listen(1)

print("Server listening on port 12345...")
# client, addr = server_socket.accept()
# print(f"Connection from {addr}")
# client.send(b"Thank you for connecting")
# client.close()`,
      codeExplanation: "- `bind`: Associates the socket with a specific address/port.\n- `listen`: Waits for incoming connections.\n- `accept`: Establishes the connection with a client.",
      challenge: "Write a simple client script that connects to localhost port 12345.",
      expectedOutput: `Server listening on port 12345...`,
    quiz: {
      question: "Which method is used by the server to accept a new incoming connection?",
      options: ["connect()", "listen()", "accept()", "bind()"],
      correctAnswer: 2,
      explanation: "`accept()` waits for an incoming connection and returns a new socket object representing the connection and the client's address."
    }
  },
  'n3': {
      title: 'HTTP Requests',
      explanation: "While sockets are low-level, the `requests` library is the standard for making HTTP requests in Python.",
      codeExample: `import requests

# Simulate a GET request
# response = requests.get('https://api.github.com')

print("Sending GET request to https://api.github.com...")
print("Status Code: 200")
print("Content-Type: application/json; charset=utf-8")`,
      codeExplanation: "- `requests.get` retrieves data from a URL.\n- The response object contains status codes, headers, and the body (JSON/HTML).",
      challenge: "Use requests to fetch data from 'https://jsonplaceholder.typicode.com/todos/1'.",
      expectedOutput: `Sending GET request to https://api.github.com...
Status Code: 200
Content-Type: application/json; charset=utf-8`,
    quiz: {
      question: "Which HTTP method is typically used to retrieve data from a server?",
      options: ["POST", "PUT", "GET", "DELETE"],
      correctAnswer: 2,
      explanation: "The GET method is used to request data from a specified resource."
    }
  },
  'n4': {
      title: 'Async Networking',
      explanation: "For high-performance network apps, waiting for one request to finish before starting another is inefficient. AsyncIO solves this.",
      codeExample: `import asyncio

async def fetch_data(id):
    print(f"Fetching data {id}...")
    await asyncio.sleep(1) # Simulate network IO
    print(f"Data {id} received")

async def main():
    # Run requests concurrently
    await asyncio.gather(
        fetch_data(1),
        fetch_data(2),
        fetch_data(3)
    )

# asyncio.run(main())
print("Output Simulation:")
print("Fetching data 1...")
print("Fetching data 2...")
print("Fetching data 3...")
print("Data 1 received")
print("Data 2 received")
print("Data 3 received")`,
      codeExplanation: "- `asyncio.gather` schedules multiple coroutines to run simultaneously.\n- Note how all 'Fetching' messages appear before the 'received' messages.",
      challenge: "Modify the code to fetch 5 items concurrently.",
      expectedOutput: `Output Simulation:
Fetching data 1...
Fetching data 2...
Fetching data 3...
Data 1 received
Data 2 received
Data 3 received`,
    quiz: {
      question: "Which asyncio function is used to run multiple coroutines concurrently?",
      options: ["asyncio.run()", "asyncio.gather()", "asyncio.sleep()", "asyncio.wait_for()"],
      correctAnswer: 1,
      explanation: "`asyncio.gather()` is used to schedule multiple coroutines to run concurrently and waits for all of them to complete."
    }
  },

  // --- UI ---
  'u1': {
      title: 'Tkinter Basics',
      explanation: "Tkinter is Python's standard GUI library. It provides a set of widgets (buttons, labels) to create desktop apps.",
      codeExample: `import tkinter as tk

def on_click():
    print("Button Clicked!")

root = tk.Tk()
root.title("My App")

label = tk.Label(root, text="Hello Tkinter!")
label.pack()

btn = tk.Button(root, text="Click Me", command=on_click)
btn.pack()

# root.mainloop()
print("Window 'My App' created.")
print("Contains: Label 'Hello Tkinter!', Button 'Click Me'")`,
      codeExplanation: "- `Tk()` creates the main window.\n- `pack()` is a geometry manager that places widgets in the window.\n- `mainloop()` keeps the window open.",
      challenge: "Create a Tkinter window with two buttons: 'OK' and 'Cancel'.",
      expectedOutput: `Window 'My App' created.
Contains: Label 'Hello Tkinter!', Button 'Click Me'`,
    quiz: {
      question: "Which method starts the Tkinter event loop, keeping the window open?",
      options: ["run()", "start()", "mainloop()", "execute()"],
      correctAnswer: 2,
      explanation: "`mainloop()` tells Tkinter to enter its event loop, waiting for user interaction."
    }
  },
  'u2': {
      title: 'PyQt/PySide',
      explanation: "PyQt (or PySide) wraps the Qt framework. It is more feature-rich than Tkinter and allows for professional-grade UIs.",
      codeExample: `from PyQt6.QtWidgets import QApplication, QLabel, QWidget

# app = QApplication([])
# window = QWidget()
# window.setWindowTitle("PyQt App")
# label = QLabel("Hello World", parent=window)
# window.show()
# app.exec()

print("PyQt Application Started")
print("Window Title: PyQt App")
print("Widget: Label 'Hello World'")`,
      codeExplanation: "- PyQt applications rely on a `QApplication` event loop.\n- Widgets like `QLabel` are building blocks of the UI.",
      challenge: "What is the difference between PyQt6 and PySide6?",
      expectedOutput: `PyQt Application Started
Window Title: PyQt App
Widget: Label 'Hello World'`,
    quiz: {
      question: "Every PyQt application must have exactly one instance of which class?",
      options: ["QMainWindow", "QWidget", "QApplication", "QLabel"],
      correctAnswer: 2,
      explanation: "You must create a `QApplication` object to manage the GUI application's control flow and main settings."
    }
  },
  'u3': {
      title: 'Flask Web App',
      explanation: "Flask is a micro-framework for building web applications. It maps URLs (routes) to Python functions.",
      codeExample: `from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Hello from Flask!</h1>"

# if __name__ == "__main__":
#     app.run(debug=True)

print("Starting Flask server...")
print("Serving request: GET /")
print("Response: <h1>Hello from Flask!</h1>")`,
      codeExplanation: "- `@app.route(\"/\")` tells Flask to run the `home` function when a user visits the root URL.\n- The function returns HTML content.",
      challenge: "Create a new route `/about` that returns your name.",
      expectedOutput: `Starting Flask server...
Serving request: GET /
Response: <h1>Hello from Flask!</h1>`,
    quiz: {
      question: "What does the `@app.route` decorator do?",
      options: ["Starts the server", "Maps a URL to a specific function", "Connects to a database", "Imports Flask"],
      correctAnswer: 1,
      explanation: "It binds a specific URL (like '/') to the function immediately following it, so the function runs when that URL is visited."
    }
  },
  'u4': {
      title: 'Streamlit',
      explanation: "Streamlit turns data scripts into shareable web apps in minutes. It's designed specifically for Data Science/ML projects.",
      codeExample: `import streamlit as st
import pandas as pd

st.title("My Data App")

df = pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})

st.write("Here is my data:")
st.write(df)

st.button("Click me")

print("Streamlit app rendering...")
print("Title: My Data App")
print("Table displayed.")
print("Button displayed.")`,
      codeExplanation: "- No HTML/CSS knowledge required.\n- `st.write()` creates tables, text, or graphs automatically based on the data type passed to it.",
      challenge: "How would you add a line chart in Streamlit?",
      expectedOutput: `Streamlit app rendering...
Title: My Data App
Table displayed.
Button displayed.`,
    quiz: {
      question: "Which Streamlit function is the 'Swiss Army knife' for displaying text, dataframes, and charts?",
      options: ["st.print()", "st.show()", "st.write()", "st.display()"],
      correctAnswer: 2,
      explanation: "`st.write()` is a powerful function that renders different types of content depending on what you pass to it."
    }
  }
};