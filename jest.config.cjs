/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom", // Changed to jsdom for React testing
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { 
      useESM: true,
      tsconfig: {
        jsx: "react-jsx"  // Enable JSX support
      }
    }],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Added .tsx extension
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // Handle ESM imports
  },
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
