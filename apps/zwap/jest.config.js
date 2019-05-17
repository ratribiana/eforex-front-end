module.exports = {
  name: "zwap",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/zwap/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
