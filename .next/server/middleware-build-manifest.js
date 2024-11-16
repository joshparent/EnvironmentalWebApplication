self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [
    "static/chunks/webpack.js",
    "static/chunks/main-app.js"
  ],
  "rootMainFilesTree": {},
  "pages": {
    "/": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/index.js"
    ],
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/data": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/data.js"
    ],
    "/project-overview": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/project-overview.js"
    ],
    "/research-team": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/research-team.js"
    ],
    "/study-site": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/study-site.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];