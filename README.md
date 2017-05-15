#AB Testing


##Getting Started

install node modules and run grunt:
```
Install node.js from https://nodejs.org/en/download/
Change to the project's root directory => cd ExternalContacts
npm install -g grunt-cli
npm install
npm install grunt if grunt command is not found
grunt build
grunt http-server:dev to have http server serve the static files.
grunt test

```
You can also run this command to watch files for edits:
```
grunt watch
```

Grunt will:<br>
1. Process the LESS files and minify the CSS into one minified CSS file.<br>
2. Lint javascript for issues with JSHint.<br>
3. Minify and compile javascript into one minified javascript file.

