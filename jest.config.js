module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_documents.tsx',
    '!src/styles/*'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
