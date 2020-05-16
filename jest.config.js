module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["<rootDir>/setupTest.js"],
  transform: {
    "^.+\\.(ts|tsx|js)?$": "ts-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json",
    },
  },
};
