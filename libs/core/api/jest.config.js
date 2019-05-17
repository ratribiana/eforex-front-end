module.exports = {
  name: 'core-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
