module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/fileMock.js',
    '\\.(css|sass|less)$': '<rootDir>/config/jest/styleMock.js',
    'Root-assets(.*)$': '<rootDir>/static/$1',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|jsx)?$',
  moduleFileExtensions: ['js', 'jsx', 'json'],
  testEnvironment: 'node',
};
