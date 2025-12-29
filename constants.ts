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
  [Category.CV]: Monitor,
  [Category.NETWORK]: Network,
  [Category.UI]: Cpu,
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  [Category.STARTER]: "Master the fundamentals: Variables, Control Flow, and Functions.",
  [Category.ADVANCED]: "Deep dive into Decorators, Generators, and Concurrency.",
  [Category.ML]: "Explore Data Science, Neural Networks, PyTorch, and Predictive Models.",
  [Category.CV]: "Learn Image Processing, Face Detection, and Object Tracking with OpenCV.",
  [Category.NETWORK]: "Understand Sockets, TCP/IP, and Asynchronous I/O.",
  [Category.UI]: "Build modern GUIs with PyQt and Web Apps with Flask or Streamlit."
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
  { id: 'm4', category: Category.ML, title: 'PyTorch Tensors', description: 'The building blocks of Deep Learning models.' },
  { id: 'm5', category: Category.ML, title: 'Neural Networks (PyTorch)', description: 'Creating and training simple layers.' },

  // Computer Vision
  { id: 'c1', category: Category.CV, title: 'OpenCV Basics', description: 'Reading, displaying, and writing images.' },
  { id: 'c2', category: Category.CV, title: 'Image Processing', description: 'Blurring, thresholding, and edge detection.' },
  { id: 'c3', category: Category.CV, title: 'Face Detection', description: 'Using Haar Cascades or HOG.' },
  { id: 'c4', category: Category.CV, title: 'Feature Matching', description: 'Matching keypoints between different images.' },

  // Network
  { id: 'n1', category: Category.NETWORK, title: 'Sockets Intro', description: 'Understanding IP, Ports, and Sockets.' },
  { id: 'n2', category: Category.NETWORK, title: 'TCP Client/Server', description: 'Building a basic chat server.' },
  { id: 'n3', category: Category.NETWORK, title: 'HTTP Requests', description: 'Using requests library and handling APIs.' },
  { id: 'n4', category: Category.NETWORK, title: 'Async Networking', description: 'Non-blocking I/O with asyncio.' },

  // UI
  { id: 'u1', category: Category.UI, title: 'Tkinter Basics', description: 'Creating windows, buttons, and labels.' },
  { id: 'u2', category: Category.UI, title: 'PyQt Signals & Slots', description: 'The core mechanism of Qt for handling events.' },
  { id: 'u3', category: Category.UI, title: 'Flask Web App', description: 'Routing and templates for web UI.' },
  { id: 'u4', category: Category.UI, title: 'Streamlit Interactivity', description: 'Widgets, session state, and rapid data apps.' },
];

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
      explanation: "Pandas is perfect for data manipulation. The **DataFrame** is the core structure for tabular data.",
      codeExample: `import pandas as pd

data = {
    'Product': ['A', 'B', 'A', 'C', 'B'],
    'Sales': [100, 200, 150, 300, 250]
}
df = pd.DataFrame(data)

# Advanced: GroupBy
summary = df.groupby('Product').sum()

print("Full DataFrame:")
print(df)
print("\nSales Summary by Product:")
print(summary)`,
      codeExplanation: "- `pd.DataFrame` creates a table.\n- `groupby('Product')` clusters rows by the Product column.\n- `.sum()` aggregates the numerical data for each group.",
      challenge: "Create a DataFrame with 'City' and 'Population' and find the city with the maximum population.",
      expectedOutput: `Full DataFrame:
  Product  Sales
0       A    100
1       B    200
2       A    150
3       C    300
4       B    250

Sales Summary by Product:
         Sales
Product       
A          250
B          450
C          300`,
    quiz: {
      question: "Which function allows you to aggregate data based on categories in a Pandas column?",
      options: ["aggregate()", "sum_by()", "groupby()", "filter()"],
      correctAnswer: 2,
      explanation: "`groupby()` is used to split the data into groups based on some criteria."
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
      title: 'PyTorch Tensors',
      explanation: "PyTorch is a leading deep learning framework. A **Tensor** is a multi-dimensional matrix, similar to NumPy's ndarray, but can run on a GPU.",
      codeExample: `import torch

# Create a tensor from a list
t = torch.tensor([1, 2, 3])

# Create a random tensor
rand_t = torch.rand(2, 3)

# Arithmetic is similar to NumPy
sum_t = t + 10

print(f"1D Tensor: {t}")
print(f"2x3 Random Tensor:\\n{rand_t}")
print(f"Addition result: {sum_t}")`,
      codeExplanation: "- `torch.tensor` converts Python data to PyTorch format.\n- `torch.rand(rows, cols)` generates values between 0 and 1.\n- Operations are optimized for mathematical computation.",
      challenge: "Create a 3x3 PyTorch tensor filled with ones using `torch.ones()`.",
      expectedOutput: `1D Tensor: tensor([1, 2, 3])
2x3 Random Tensor:
tensor([[0.23, 0.45, 0.67],
        [0.12, 0.89, 0.34]])
Addition result: tensor([11, 12, 13])`,
    quiz: {
      question: "What is a PyTorch Tensor most similar to in the NumPy library?",
      options: ["list", "ndarray", "DataFrame", "Series"],
      correctAnswer: 1,
      explanation: "Tensors are very similar to NumPy ndarrays, but with the added ability to run on GPUs and support automatic differentiation."
    }
  },
  'm5': {
      title: 'Neural Networks (PyTorch)',
      explanation: "Neural networks are built using layers. In PyTorch, we typically inherit from `torch.nn.Module` to define our model structure.",
      codeExample: `import torch.nn as nn
import torch

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        # 1 input, 5 hidden, 1 output
        self.layer1 = nn.Linear(1, 5)
        self.layer2 = nn.Linear(5, 1)

    def forward(self, x):
        x = torch.relu(self.layer1(x))
        x = self.layer2(x)
        return x

model = SimpleNet()
print("Model Architecture:")
print(model)

# Simulated Forward Pass
x = torch.tensor([[10.0]])
output = model(x)
print(f"Input: {x.item()} -> Output shape: {output.shape}")`,
      codeExplanation: "- `nn.Linear` defines a fully connected layer.\n- `forward()` defines the data flow.\n- `torch.relu` is an activation function used to introduce non-linearity.",
      challenge: "Add a third layer to the network that has 2 output neurons.",
      expectedOutput: `Model Architecture:
SimpleNet(
  (layer1): Linear(in_features=1, out_features=5, bias=True)
  (layer2): Linear(in_features=5, out_features=1, bias=True)
)
Input: 10.0 -> Output shape: torch.Size([1, 1])`,
    quiz: {
      question: "Which base class must you inherit from when creating a neural network in PyTorch?",
      options: ["torch.Network", "nn.Linear", "nn.Module", "torch.Model"],
      correctAnswer: 2,
      explanation: "`nn.Module` is the base class for all neural network modules in PyTorch."
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
      title: 'Feature Matching',
      explanation: "Feature matching finds common points between two different images (e.g., a logo vs. a photo of a store). Algorithms like SIFT or ORB are used.",
      codeExample: `import cv2

orb = cv2.ORB_create()

# keypoints1, descriptors1 = orb.detectAndCompute(img1, None)
# keypoints2, descriptors2 = orb.detectAndCompute(img2, None)

# Matcher using Brute Force
# bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
# matches = bf.match(descriptors1, descriptors2)

print("ORB Detector initialized.")
print("Keypoints detected in both images.")
print("Matching points found via Brute Force Matcher.")`,
      codeExplanation: "- ORB (Oriented FAST and Rotated BRIEF) is a fast alternative to SIFT.\n- `detectAndCompute` finds unique 'landmarks' in an image.\n- `BFMatcher` pairs landmarks between images based on similarity.",
      challenge: "Search for 'Scale Invariant Feature Transform' (SIFT) and find out why it was patented for so long.",
      expectedOutput: `ORB Detector initialized.
Keypoints detected in both images.
Matching points found via Brute Force Matcher.`,
    quiz: {
      question: "Which OpenCV algorithm is commonly used as a fast, open-source alternative to SIFT for finding image features?",
      options: ["Canny", "ORB", "Haar Cascade", "Gaussian"],
      correctAnswer: 1,
      explanation: "ORB is an efficient, free alternative to SIFT and SURF for detecting and matching feature points."
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
      title: 'PyQt Signals & Slots',
      explanation: "PyQt uses a mechanism called **Signals & Slots** to handle events. A Signal is emitted when an event occurs, and a Slot is a function called in response.",
      codeExample: `from PyQt6.QtWidgets import QPushButton, QApplication
import sys

def handle_click():
    print("Button clicked!")

# app = QApplication(sys.argv)
button = QPushButton("Click Me")

# Connect the signal (clicked) to the slot (handle_click)
button.clicked.connect(handle_click)

print("PyQt button created.")
print("Signal 'clicked' connected to function 'handle_click'.")
# button.show()
# app.exec()`,
      codeExplanation: "- `button.clicked` is the Signal.\n- `handle_click` is the Slot.\n- `.connect()` is how you link them. This decoupling makes Qt apps very flexible.",
      challenge: "Search how to pass arguments to a Slot using a lambda function in PyQt.",
      expectedOutput: `PyQt button created.
Signal 'clicked' connected to function 'handle_click'.`,
    quiz: {
      question: "What is the name of the mechanism PyQt uses to handle communication between objects (e.g., buttons and functions)?",
      options: ["Input & Output", "Action & Reaction", "Signals & Slots", "Call & Response"],
      correctAnswer: 2,
      explanation: "Signals and Slots is the core mechanism of the Qt framework for handling events and object communication."
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
      title: 'Streamlit Interactivity',
      explanation: "Streamlit apps rerender the entire script when a user interacts with a widget. To store data between these rerenders, we use **Session State**.",
      codeExample: `import streamlit as st

st.title("Counter App")

# Initialize session state
if 'count' not in st.session_state:
    st.session_state.count = 0

if st.button('Increment'):
    st.session_state.count += 1

st.write(f"Current Count: {st.session_state.count}")

print("Streamlit app running...")
print("Button 'Increment' rendered.")
print(f"Session State 'count': {st.session_state.count if 'count' in st.session_state else 0}")`,
      codeExplanation: "- `st.session_state` is a dictionary-like object shared between rerenders.\n- Without session state, the `count` variable would reset to 0 every time a button is clicked.",
      challenge: "How do you add a sidebar to a Streamlit app?",
      expectedOutput: `Streamlit app running...
Button 'Increment' rendered.
Session State 'count': 0`,
    quiz: {
      question: "Which object is used in Streamlit to persist data when the user interacts with the app?",
      options: ["st.persist", "st.session_state", "st.cache", "st.memory"],
      correctAnswer: 1,
      explanation: "`st.session_state` is designed to store variables that need to persist across multiple reruns of the script."
    }
  }
};