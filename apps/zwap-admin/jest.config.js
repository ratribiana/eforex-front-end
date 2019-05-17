module.exports = {
  name: 'zwap-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/zwap-admin/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
