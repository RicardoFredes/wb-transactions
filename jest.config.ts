export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: { '^.+\\.js$': 'babel-jest', '^.+\\.tsx?$': 'ts-jest' },
}
