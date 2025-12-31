import { Category, Topic, LessonContent } from './types';
import { 
  BookOpen, 
  Cpu, 
  Network, 
  Monitor, 
  Zap, 
  Layers,
  LineChart,
  Activity,
  BarChart3,
  Percent,
  PieChart,
  BoxSelect,
  Box,
  MousePointer2,
  HardDrive
} from 'lucide-react';

export const CATEGORY_ICONS: Record<Category, any> = {
  [Category.STARTER]: BookOpen,
  [Category.ADVANCED]: Zap,
  [Category.ML]: Layers,
  [Category.CV]: Monitor,
  [Category.NETWORK]: Network,
  [Category.UI]: Cpu,
  [Category.SCIENTIFIC]: Activity,
};

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  [Category.STARTER]: "Master the fundamentals: Variables, Control Flow, and Functions.",
  [Category.ADVANCED]: "Deep dive into Decorators, Generators, and Concurrency.",
  [Category.ML]: "Explore Data Science, Neural Networks, PyTorch, and Predictive Models.",
  [Category.CV]: "Learn Image Processing, Face Detection, and Object Tracking with OpenCV.",
  [Category.NETWORK]: "Understand Sockets, TCP/IP, and Asynchronous I/O.",
  [Category.UI]: "Build modern GUIs with PyQt and Web Apps with Flask or Streamlit.",
  [Category.SCIENTIFIC]: "Numerical analysis and visualization with NumPy, SciPy, Matplotlib, Seaborn, and Plotly."
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
  
  // Scientific Computing
  { id: 'sci_np1', category: Category.SCIENTIFIC, title: 'NumPy: Broadcasting', description: 'Mastering array math without explicit loops.' },
  { id: 'sci_np2', category: Category.SCIENTIFIC, title: 'NumPy: Linear Algebra', description: 'Matrix multiplication, determinants, and inverses.' },
  { id: 'sci_sp1', category: Category.SCIENTIFIC, title: 'SciPy: Optimization', description: 'Finding function minima and curve fitting.' },
  { id: 'sci_sp2', category: Category.SCIENTIFIC, title: 'SciPy: Integration', description: 'Solving calculus problems numerically.' },
  { id: 'sci_plt1', category: Category.SCIENTIFIC, title: 'Matplotlib: Plotting', description: 'Creating professional line and scatter plots.' },
  { id: 'sci_plt2', category: Category.SCIENTIFIC, title: 'Matplotlib: Subplots', description: 'Designing multi-panel visualizations.' },
  { id: 'sci_sns1', category: Category.SCIENTIFIC, title: 'Seaborn: Statistical Viz', description: 'Visualizing statistical relationships with ease.' },
  { id: 'sci_sns2', category: Category.SCIENTIFIC, title: 'Seaborn: Distributions', description: 'Boxplots, violinplots, and categorical data.' },
  { id: 'sci_3d', category: Category.SCIENTIFIC, title: '3D Visualization', description: 'Creating 3D surfaces and scatter plots with Matplotlib.' },
  { id: 'sci_pl1', category: Category.SCIENTIFIC, title: 'Plotly: Interactive Charts', description: 'Creating zoomable and hoverable scatter and line plots.' },
  { id: 'sci_pl2', category: Category.SCIENTIFIC, title: 'Plotly: Statistical Charts', description: 'Advanced bar charts and histograms with Plotly Express.' },

  // Machine Learning
  { id: 'm1', category: Category.ML, title: 'NumPy Basics', description: 'High-performance multidimensional array object.' },
  { id: 'm2', category: Category.ML, title: 'Pandas DataFrames', description: 'Data manipulation and analysis.' },
  { id: 'm3', category: Category.ML, title: 'Linear Regression', description: 'Predicting continuous values using Scikit-Learn.' },
  { id: 'm4', category: Category.ML, title: 'PyTorch Tensors', description: 'The building blocks of Deep Learning models.' },
  { id: 'm5', category: Category.ML, title: 'Neural Networks (PyTorch)', description: 'Creating and training simple layers.' },
  { id: 'm6', category: Category.ML, title: 'GPU Acceleration (PyTorch)', description: 'CUDA availability and moving tensors to hardware.' },

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

  // --- Scientific Computing ---
  'sci_np1': {
    title: 'NumPy: Broadcasting',
    explanation: "**Broadcasting** describes how NumPy treats arrays with different shapes during arithmetic operations. Subject to certain constraints, the smaller array is 'broadcast' across the larger array so that they have compatible shapes.\n\nThis is a powerful concept that allows you to perform operations on arrays of different shapes without having to create multiple copies of data.",
    codeExample: `import numpy as np

# 1D array
a = np.array([1.0, 2.0, 3.0])
# Scalar
b = 2.0

# Broadcasting scalar to array
print(f"Array * Scalar: {a * b}")

# Matrix broadcasting
A = np.array([[11, 12, 13], [21, 22, 23], [31, 32, 33]])
v = np.array([1, 0, 1])

# Adds 'v' to every row of 'A'
print(f"\\nMatrix + Vector:\\n{A + v}")`,
    codeExplanation: "- The scalar `2.0` is effectively stretched to `[2.0, 2.0, 2.0]` to match array `a`.\n- In matrix addition, the vector `[1, 0, 1]` is added to each row of the 3x3 matrix because their trailing dimensions match.",
    challenge: "Create a 2D array of shape (4,3) and add a 1D array of shape (3,) to it using broadcasting.",
    expectedOutput: `Array * Scalar: [2. 4. 6.]

Matrix + Vector:
[[12 12 14]
 [22 22 24]
 [32 32 34]]`,
    quiz: {
      question: "What is the main requirement for NumPy broadcasting between two arrays?",
      options: ["They must have identical shapes", "Their dimensions must be compatible (equal or one is 1)", "They must be 1D arrays", "They must contain integers"],
      correctAnswer: 1,
      explanation: "Broadcasting requires that for each dimension (starting from the last), the sizes must either be equal or one of them must be 1."
    }
  },
  'sci_pl1': {
    title: 'Plotly: Interactive Charts',
    explanation: "**Plotly** is a library for creating interactive, publication-quality graphs. Unlike Matplotlib, Plotly charts allow users to hover for data, zoom in, and toggle categories directly in the browser.\n\n`plotly.express` is the high-level API that makes common plots extremely easy to generate.",
    codeExample: `import plotly.express as px
import pandas as pd

# Sample data
df = pd.DataFrame({
    "Fruit": ["Apples", "Oranges", "Bananas", "Apples", "Oranges", "Bananas"],
    "Amount": [4, 1, 2, 2, 4, 5],
    "City": ["SF", "SF", "SF", "Montreal", "Montreal", "Montreal"]
})

# Create interactive bar chart
fig = px.bar(df, x="Fruit", y="Amount", color="City", barmode="group")

# In a browser: fig.show()
print("Interactive plot object created.")
print("The chart supports grouping by 'City' and hover-tips for 'Amount'.")`,
    codeExplanation: "- `px.bar` automates grouping and coloring based on DataFrame columns.\n- `barmode='group'` places bars for different cities side-by-side instead of stacking them.",
    challenge: "Try creating a scatter plot using `px.scatter(df, x='Amount', y='Fruit', color='City')`.",
    expectedOutput: `Interactive plot object created.
The chart supports grouping by 'City' and hover-tips for 'Amount'.`,
    quiz: {
      question: "What is the main advantage of Plotly over Matplotlib?",
      options: ["It is faster for 1D math", "It generates interactive, browser-based charts", "It is older and more stable", "It does not require NumPy"],
      correctAnswer: 1,
      explanation: "Plotly's core feature is interactivity (hovering, zooming, panning) handled directly in the UI."
    }
  },
  'sci_pl2': {
    title: 'Plotly: Statistical Charts',
    explanation: "Plotly Express also supports sophisticated statistical visualizations like histograms and line charts with automatic axis scaling.",
    codeExample: `import plotly.express as px
import numpy as np

# Generate random data
t = np.linspace(0, 2*np.pi, 100)
y = np.sin(t)

# Create interactive line plot
fig = px.line(x=t, y=y, title='Sine Wave', labels={'x':'Time', 'y':'Amplitude'})

print("Interactive Line Graph generated.")
print("Tooltips will show the exact Amplitude for any given Time.")`,
    codeExplanation: "- `px.line` handles NumPy arrays directly.\n- The `labels` argument allows for clean, human-readable axis titles without complex Matplotlib-style boilerplate.",
    challenge: "Use `px.histogram` to visualize a random distribution of 1000 numbers generated by `np.random.randn(1000)`.",
    expectedOutput: `Interactive Line Graph generated.
Tooltips will show the exact Amplitude for any given Time.`,
    quiz: {
      question: "Which Plotly Express function would you use for a trend-line over time?",
      options: ["px.bar", "px.scatter", "px.line", "px.histogram"],
      correctAnswer: 2,
      explanation: "px.line is the standard choice for time-series or trend visualization."
    }
  },

  // --- Machine Learning ---
  'm6': {
    title: 'GPU Acceleration (PyTorch)',
    explanation: "One of PyTorch's greatest strengths is its ability to offload heavy matrix computations to a **GPU (Graphics Processing Unit)** using NVIDIA's **CUDA** platform.\n\nTo write device-agnostic code, we usually define a `device` object that points to the GPU if available, falling back to the CPU otherwise.",
    codeExample: `import torch

# Check for CUDA availability
cuda_available = torch.cuda.is_available()
device = torch.device("cuda" if cuda_available else "cpu")

print(f"CUDA Available: {cuda_available}")
print(f"Using device: {device}")

# Create a tensor on the selected device
x = torch.randn(3, 3).to(device)

# Move an existing tensor to the device
y = torch.ones(3, 3)
y = y.to(device)

# Calculation happens on the GPU if device is 'cuda'
z = x + y
print(f"\\nResult Device: {z.device}")`,
    codeExplanation: "- `torch.cuda.is_available()` returns a boolean indicating if a compatible GPU and drivers are found.\n- `.to(device)` is the primary way to move tensors between system RAM (CPU) and video RAM (GPU).\n- Calculations involving tensors on different devices will raise an error; they must all be on the same hardware.",
    challenge: "Write a script that creates a large 1000x1000 tensor and checks if it is currently stored on the 'cpu' or 'cuda'.",
    expectedOutput: `CUDA Available: False (Example output on standard machine)
Using device: cpu

Result Device: cpu`,
    quiz: {
      question: "What happens if you try to add a CPU tensor and a CUDA tensor together?",
      options: ["PyTorch moves them automatically", "It results in a runtime error", "The result is stored on the disk", "It works perfectly"],
      correctAnswer: 1,
      explanation: "PyTorch requires all operands in an operation to be on the same device. It will throw a 'RuntimeError: Expected all tensors to be on the same device' otherwise."
    }
  },

  // Remaining lessons preserved for consistency...
  'sci_np2': {
    title: 'NumPy: Linear Algebra',
    explanation: "NumPy provides a dedicated module `linalg` for linear algebra operations. This includes matrix multiplication, solving linear systems, and finding eigenvalues.",
    codeExample: `import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

# Matrix Multiplication (Dot Product)
dot_prod = np.dot(A, B)
# Or use the @ operator (Python 3.5+)
matmul = A @ B

# Inverse of a matrix
A_inv = np.linalg.inv(A)

print(f"Matrix Multiplication:\\n{matmul}")
print(f"\\nInverse of A:\\n{A_inv}")`,
    codeExplanation: "- `np.dot` or the `@` operator performs true matrix multiplication (not element-wise).\n- `np.linalg.inv` computes the multiplicative inverse of a square matrix.",
    challenge: "Calculate the determinant of matrix A using `np.linalg.det(A)`.",
    expectedOutput: `Matrix Multiplication:
[[19 22]
 [43 50]]

Inverse of A:
[[-2.   1. ]
 [ 1.5 -0.5]]`,
    quiz: {
      question: "Which operator is the modern shorthand for matrix multiplication in Python?",
      options: ["*", "**", "@", "&"],
      correctAnswer: 2,
      explanation: "The '@' operator was introduced in Python 3.5 specifically for matrix multiplication."
    }
  },
  'sci_sp1': {
    title: 'SciPy: Optimization',
    explanation: "The `scipy.optimize` module provides algorithms for function minimization (scalar or multi-variate), curve fitting, and root finding.",
    codeExample: `from scipy.optimize import minimize

# Define a simple quadratic function: f(x) = (x - 3)^2
def objective_function(x):
    return (x - 3)**2

# Find the minimum, starting at x = 0
result = minimize(objective_function, x0=0)

print(f"Success: {result.success}")
print(f"Minimum found at x = {result.x[0]:.2f}")
print(f"Function value at minimum: {result.fun:.2f}")`,
    codeExplanation: "- `minimize` takes a function and an initial guess (`x0`).\n- It returns an object containing the optimal values (`x`) and the final function value (`fun`).",
    challenge: "Try to minimize the function f(x) = x^2 + 10*sin(x). Note how the starting point (x0) affects which local minimum is found.",
    expectedOutput: `Success: True
Minimum found at x = 3.00
Function value at minimum: 0.00`,
    quiz: {
      question: "What does the `x0` parameter represent in `scipy.optimize.minimize`?",
      options: ["The target value", "The initial guess for the variable", "The learning rate", "The maximum value"],
      correctAnswer: 1,
      explanation: "`x0` is the starting point from which the optimizer begins its search for the minimum."
    }
  },
  'sci_sp2': {
    title: 'SciPy: Integration',
    explanation: "SciPy's `integrate` sub-package provides several routines for performing numerical integration, such as the `quad` function for single integrals.",
    codeExample: `from scipy.integrate import quad
import numpy as np

# Define function f(x) = x^2
def f(x):
    return x**2

# Integrate f(x) from 0 to 1
area, error = quad(f, 0, 1)

print(f"Integral of x^2 from 0 to 1: {area:.4f}")
print(f"Estimated error: {error:.2e}")`,
    codeExplanation: "- `quad` returns a tuple containing the result of the integral and an estimate of the absolute error in the result.",
    challenge: "Integrate the function `sin(x)` from 0 to PI using `np.sin` and `np.pi`.",
    expectedOutput: `Integral of x^2 from 0 to 1: 0.3333
Estimated error: 3.70e-15`,
    quiz: {
      question: "What is the primary function in SciPy for computing a single definite integral?",
      options: ["integral()", "sum()", "quad()", "trapz()"],
      correctAnswer: 2,
      explanation: "`quad()` (short for quadrature) is the workhorse function for general-purpose numerical integration in SciPy."
    }
  },
  'sci_plt1': {
    title: 'Matplotlib: Basic Plotting',
    explanation: "Matplotlib is the most popular plotting library for Python. The `pyplot` module provides a MATLAB-like interface for simple plotting.",
    codeExample: `import matplotlib.pyplot as plt
import numpy as np

# Generate data
x = np.linspace(0, 10, 100)
y = np.sin(x)

# Create a plot
plt.figure(figsize=(8, 4))
plt.plot(x, y, label='Sine Wave', color='blue', linewidth=2)

# Add styling
plt.title("Simple Sine Plot")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.grid(True)
plt.legend()

# In a script: plt.show()
print("Plot generated: Line chart showing a blue sine wave from 0 to 10.")
print("Labels and grid are applied successfully.")`,
    codeExplanation: "- `np.linspace(0, 10, 100)` creates 100 evenly spaced points between 0 and 10.\n- `plt.plot` creates the actual chart.\n- `plt.grid(True)` adds visual guidelines.",
    challenge: "Modify the plot to add a second line for `cos(x)` in a different color.",
    expectedOutput: `Plot generated: Line chart showing a blue sine wave from 0 to 10.
Labels and grid are applied successfully.`,
    quiz: {
      question: "Which Matplotlib function is used to create a standard line chart?",
      options: ["plt.line()", "plt.draw()", "plt.plot()", "plt.scatter()"],
      correctAnswer: 2,
      explanation: "`plt.plot()` is the primary function used to plot lines and/or markers."
    }
  },
  'sci_plt2': {
    title: 'Matplotlib: Subplots',
    explanation: "Often you need to show multiple charts in a single window. Matplotlib uses a 'figure and axes' approach for this.",
    codeExample: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 100)

# Create 2 subplots (1 row, 2 columns)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

ax1.plot(x, np.sin(x), 'r')
ax1.set_title('Sine')

ax2.plot(x, np.cos(x), 'g')
ax2.set_title('Cosine')

print("Multi-panel figure created.")
print("Left panel: Red sine wave.")
print("Right panel: Green cosine wave.")`,
    codeExplanation: "- `plt.subplots(rows, cols)` returns a Figure object and an array of Axes objects.\n- You interact with `ax1` and `ax2` individually to build your layout.",
    challenge: "Create a 2x2 grid of subplots and plot different functions in each (x, x^2, x^3, sqrt(x)).",
    expectedOutput: `Multi-panel figure created.
Left panel: Red sine wave.
Right panel: Green cosine wave.`,
    quiz: {
      question: "What does `plt.subplots(2, 2)` return?",
      options: ["A single image", "A figure and a 2x2 array of axes", "4 separate windows", "A list of 4 numbers"],
      correctAnswer: 1,
      explanation: "It returns a Figure object and a 2D NumPy array containing the 4 Axes objects, allowing you to plot in each specific quadrant."
    }
  },
  'sci_sns1': {
    title: 'Seaborn: Statistical Viz',
    explanation: "**Seaborn** is built on top of Matplotlib and integrates closely with Pandas data structures. It provides high-level functions for creating beautiful statistical graphics.\n\nKey advantages include:\n* Built-in themes for better aesthetics.\n* Functions that visualize patterns in complex datasets automatically.\n* Native support for DataFrames.",
    codeExample: `import seaborn as sns
import matplotlib.pyplot as plt

# Loading a conceptual 'tips' dataset
# sns.load_dataset("tips")

# Creating a scatter plot with a linear regression line
sns.set_theme(style="darkgrid")
# sns.regplot(x="total_bill", y="tip", data=tips)

print("Visualizing Relationship:")
print("- X-axis: Total Bill ($)")
print("- Y-axis: Tip ($)")
print("- Observations: Positive correlation shown via regression line.")`,
    codeExplanation: "- `sns.set_theme()` changes the look of all subsequent plots.\n- `regplot` creates a scatter plot and fits a regression model to the data automatically.",
    challenge: "Use `sns.lineplot` to visualize a time-series dataset like the 'flights' dataset (passengers vs months).",
    expectedOutput: `Visualizing Relationship:
- X-axis: Total Bill ($)
- Y-axis: Tip ($)
- Observations: Positive correlation shown via regression line.`,
    quiz: {
      question: "Which library is Seaborn built on top of?",
      options: ["NumPy", "TensorFlow", "Matplotlib", "PyQt"],
      correctAnswer: 2,
      explanation: "Seaborn is built on top of Matplotlib, providing a simpler, more high-level interface for statistical visualization."
    }
  },
  'sci_sns2': {
    title: 'Seaborn: Distributions',
    explanation: "When dealing with categorical data, Seaborn excels at showing how variables are distributed. **Box plots** and **Violin plots** are essential tools for identifying outliers and understanding the spread of data.",
    codeExample: `import seaborn as sns
import matplotlib.pyplot as plt

# sns.boxplot(x="day", y="total_bill", data=tips)

print("Distribution Analysis (Box Plot):")
print("- Categorical groups: Thursday, Friday, Saturday, Sunday")
print("- Numerical range: Bill amounts from $3 to $50")
print("- Features: Medians, quartiles, and outliers are clearly marked.")`,
    codeExplanation: "- `sns.boxplot` shows the distribution of quantitative data in a way that facilitates comparisons between variables.\n- It displays the five-number summary: minimum, first quartile, median, third quartile, and maximum.",
    challenge: "Swap `sns.boxplot` for `sns.violinplot` in your script. How does the visual representation change?",
    expectedOutput: `Distribution Analysis (Box Plot):
- Categorical groups: Thursday, Friday, Saturday, Sunday
- Numerical range: Bill amounts from $3 to $50
- Features: Medians, quartiles, and outliers are clearly marked.`,
    quiz: {
      question: "What is the primary purpose of a Violin plot compared to a Box plot?",
      options: ["It is smaller", "It shows the density/probability of the data", "It only works with integers", "It uses more colors"],
      correctAnswer: 1,
      explanation: "Violin plots combine a box plot with a kernel density estimation, showing the 'shape' of the data's distribution."
    }
  },
  'sci_3d': {
    title: '3D Visualization',
    explanation: "Matplotlib includes the `mplot3d` toolkit, which allows you to create 3D axes. This is useful for visualizing three-variable relationships or complex mathematical surfaces.",
    codeExample: `import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Create spiral data
z = np.linspace(0, 1, 100)
x = z * np.sin(25 * z)
y = z * np.cos(25 * z)

ax.plot(x, y, z, label='3D Parametric Curve')
ax.legend()

print("3D Scene Rendered:")
print("- Parametric curve spiraling upwards in 3D space.")
print("- Projection: Perspective 3D axes.")`,
    codeExplanation: "- `projection='3d'` is the key argument that enables 3D capabilities for an axes object.\n- `ax.plot(x, y, z)` works just like the 2D version but requires a third dimension of data.",
    challenge: "Try creating a 3D surface plot using `ax.plot_surface(X, Y, Z)`. You will need to use `np.meshgrid` to generate the X and Y coordinate grids.",
    expectedOutput: `3D Scene Rendered:
- Parametric curve spiraling upwards in 3D space.
- Projection: Perspective 3D axes.`,
    quiz: {
      question: "Which projection type must be specified to create 3D plots in Matplotlib?",
      options: ["'isometric'", "'flat'", "'3d'", "'perspective'"],
      correctAnswer: 2,
      explanation: "You must pass `projection='3d'` when creating an axes to enable 3D plotting functions."
    }
  },

  // --- ML Topics ---
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
      explanation: "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool. The DataFrame is a primary data structure.",
      codeExample: `import pandas as pd

data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['New York', 'London', 'Paris']
}

df = pd.DataFrame(data)

# Filtering
older_than_30 = df[df['Age'] >= 30]

print("Full DataFrame:")
print(df)
print("\\nFiltered (Age >= 30):")
print(older_than_30)`,
      codeExplanation: "- DataFrames are essentially spreadsheets in memory.\n- You can filter data using boolean indexing.",
      challenge: "Add a new column 'Salary' to the DataFrame with values [50000, 60000, 70000].",
      expectedOutput: `Full DataFrame:
      Name  Age      City
0    Alice   25  New York
1      Bob   30    London
2  Charlie   35     Paris

Filtered (Age >= 30):
      Name  Age    City
1      Bob   30  London
2  Charlie   35   Paris`,
    quiz: {
      question: "What is a Pandas DataFrame?",
      options: ["A single column of data", "A 2D tabular data structure", "A list of strings", "A dictionary of integers"],
      correctAnswer: 1,
      explanation: "A DataFrame is a 2-dimensional labeled data structure with columns of potentially different types, similar to a spreadsheet or SQL table."
    }
  },
  'm3': {
    title: 'Linear Regression',
    explanation: "**Linear Regression** is a fundamental ML algorithm used to predict continuous numerical values. It assumes a linear relationship between input features and the output target.",
    codeExample: `from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data: Hours studied vs Exam Score
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([50, 60, 70, 80, 90])

model = LinearRegression()
model.fit(X, y)

# Predict for 6 hours
prediction = model.predict([[6]])
print(f"Predicted score for 6 hours: {prediction[0]:.2f}")`,
    codeExplanation: "- `X` must be a 2D array (samples, features).\n- `fit()` trains the model on the data.\n- `predict()` uses the learned coefficients to calculate new values.",
    challenge: "Calculate the R-squared score of the model using `model.score(X, y)`.",
    expectedOutput: `Predicted score for 6 hours: 100.00`,
    quiz: {
      question: "What type of problem is Linear Regression typically used for?",
      options: ["Classification", "Clustering", "Regression", "Association"],
      correctAnswer: 2,
      explanation: "Linear Regression is used for Regression problems, which involve predicting a continuous numerical value (like a score, price, or height)."
    }
  },
  'm4': {
    title: 'PyTorch Tensors',
    explanation: "Tensors are the multi-dimensional arrays used by PyTorch, similar to NumPy arrays but with the ability to run on GPUs and support automatic differentiation.",
    codeExample: `import torch

# Create from list
t1 = torch.tensor([1, 2, 3])

# Create random 2x2 tensor
t2 = torch.randn(2, 2)

# Matrix multiplication
res = torch.matmul(t2, t2)

print(f"Tensor 1: {t1}")
print(f"Random 2x2:\\n{t2}")
print(f"Matrix Multiply Result:\\n{res}")`,
    codeExplanation: "- `torch.tensor` converts standard Python data to tensors.\n- `torch.randn` generates values from a normal distribution.\n- `torch.matmul` performs matrix multiplication.",
    challenge: "Create a 3x3 tensor of zeros using `torch.zeros((3,3))`.",
    expectedOutput: `Tensor 1: tensor([1, 2, 3])
Random 2x2:
tensor([[...]])
Matrix Multiply Result:
tensor([[...]])`,
    quiz: {
      question: "Which library's arrays are PyTorch tensors most similar to?",
      options: ["Pandas", "NumPy", "TensorFlow", "Matplotlib"],
      correctAnswer: 1,
      explanation: "PyTorch tensors are designed to be API-compatible with NumPy arrays, sharing many similar function names and behaviors."
    }
  },
  'm5': {
    title: 'Neural Networks (PyTorch)',
    explanation: "Building a Neural Network in PyTorch involves creating a class that inherits from `torch.nn.Module`. You define layers in the constructor and the logic in the `forward` method.",
    codeExample: `import torch.nn as nn
import torch.nn.functional as F

class SimpleNet(nn.Module):
    def __init__(self):
        super(SimpleNet, self).__init__()
        self.fc1 = nn.Linear(10, 5) # Input 10, Output 5
        self.fc2 = nn.Linear(5, 1)  # Input 5, Output 1

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.fc2(x)
        return x

net = SimpleNet()
print(net)`,
    codeExplanation: "- `nn.Linear` defines a fully connected (dense) layer.\n- `F.relu` applies the Rectified Linear Unit activation function.\n- `forward` defines how data flows through the network.",
    challenge: "Add a third layer to the network that reduces the output from 5 to 3 before reaching the final output layer.",
    expectedOutput: `SimpleNet(
  (fc1): Linear(in_features=10, out_features=5, bias=True)
  (fc2): Linear(in_features=5, out_features=1, bias=True)
)`,
    quiz: {
      question: "Which method must you implement to define how data moves through a PyTorch network?",
      options: ["train()", "fit()", "forward()", "predict()"],
      correctAnswer: 2,
      explanation: "The `forward()` method defines the actual computation/data flow of the model."
    }
  }
};
