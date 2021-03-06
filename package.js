Package.describe({
  name: 'verron:autosize',
  summary: 'Automatically adjust textarea height based on user input.',
  version: '3.0.8',
  git: "https://github.com/DeDeSt/meteor-autosize.git",
  documentation: 'README.md'
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.add_files(['lib/autosize.js'], 'client');
});
