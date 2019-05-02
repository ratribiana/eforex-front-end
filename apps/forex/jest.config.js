module.exports = {
  name: "forex",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/forex/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
