# Mission typescript

## Introduction
Welcome to the Mission typescript repository. This project to This guide will help you set up and run the project using TypeScript.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).
- **npm (Node Package Manager)**: npm is included with Node.js installation.
- **TypeScript**: You need to install TypeScript globally if you haven't already. Run the following command in your terminal:

    ```sh
    npm install -g typescript
    ```

## How to Run TypeScript in Command Line

### Step 1: Compile TypeScript to JavaScript
TypeScript code needs to be compiled into JavaScript before it can be executed. To compile your TypeScript file (`index.ts`) to JavaScript, follow these steps:

1. **Navigate to your project directory**:
    
    Open your terminal and navigate to the directory where your TypeScript file (`index.ts`) is located. You can use the `cd` command for this:

    ```sh
    cd path/to/your/project
    ```

2. **Compile the TypeScript file**:
    
    Use the TypeScript compiler (`tsc`) to compile `index.ts` into a JavaScript file (`index.js`):

    ```sh
    tsc index.ts
    ```

    After running this command, you should see an `index.js` file generated in your project directory.

### Step 2: Run the JavaScript File
Once you have your JavaScript file (`index.js`), you can run it using Node.js. Follow these steps:

1. **Execute the JavaScript file**:

    In the terminal, run the following command to execute `index.js`:

    ```sh
    node index.js
    ```

    This will run the JavaScript code, and you should see the output in your terminal.

## Example
To illustrate the process, let's walk through a simple example:

1. **Create a TypeScript file (`index.ts`)**:
    
    Open your code editor and create a file named `index.ts`. Add the following TypeScript code:

    ```typescript
    console.log("Hello, TypeScript!");
    ```

2. **Compile the TypeScript file**:

    In your terminal, navigate to the directory containing `index.ts` and run:

    ```sh
    tsc index.ts
    ```

    This will generate an `index.js` file with the compiled JavaScript code.

3. **Run the compiled JavaScript file**:

    Now, run the generated `index.js` file:

    ```sh
    node index.js
    ```

    You should see the following output in your terminal:

    ```sh
    Hello, TypeScript!
    ```

## Additional Information
- **TypeScript Documentation**: For more details on TypeScript, visit the [official TypeScript documentation](https://www.typescriptlang.org/docs/).
- **Node.js Documentation**: For more details on Node.js, visit the [official Node.js documentation](https://nodejs.org/en/docs/).

By following these steps, you should be able to set up and run your TypeScript projects with ease. Happy coding!
