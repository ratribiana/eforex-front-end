module.exports = {
  name: 'static-pages',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/static-pages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
