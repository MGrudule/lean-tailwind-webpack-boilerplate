# lean-tailwind-webpack-boilerplate

## Getting Started

1. Clone the repo:

   `git@github.com:MGrudule/lean-tailwind-webpack-boilerplate.git`

2. Enter the cloned directory

   `cd lean-tailwind-webpack-boilerplate`

3. Install required dependencies

   `npm install`

4. To start live development server

   `run npm develop`

   or use shorthand

   `run npm dev`

5. To generate project build
   `run npm build`

   it will generate `/dist` folder

6. Happy coding 🎉🙌

## Reload settings

To adjust the speed of live change tracking, change the `poll` option in `watchOptions` located in `webpack.config.js`

<pre><code>
    //settings for watching file changes
    watchOptions: {
        aggregateTimeout: 600,
        poll: 1000, // Check for changes every second
        ignored: /node_modules/ // ignore node modules to reduce CPU usage
    }
    </code> </pre>

## Tailwind config

You can replace replace the default config with your `tailwind.config.js`
