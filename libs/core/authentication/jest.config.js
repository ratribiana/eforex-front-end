module.exports = {
  name: 'core-authentication',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/core/authentication',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
