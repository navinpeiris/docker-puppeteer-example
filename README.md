# Docker puppeteer example

The app is a simple express server that uses puppeteer to query a website and return that page's title.

This is a example of how to use puppeteer in a docker container. The code is pretty shite, and it's only meant as a demonstration.

## Running the app

1. Build the docker image:

   ```bash
   docker build . -t pup-example:latest
   ```

1. Run the container:

   ```bash
   docker run -it -p 3000:3000 pup-example
   ```

1. Visit: [http://localhost:3000/?url=https://www.stackoverflow.com](http://localhost:3000/?url=https://www.stackoverflow.com), for example. You should be able to see something like:

   ```json
   {
     "pageTitle": "Stack Overflow - Where Developers Learn, Share, & Build Careers"
   }
   ```

1. You can change the URL param above to any web page you want to query.
