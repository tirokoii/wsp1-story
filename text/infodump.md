## Random info about building static websites


IndexRouter is the initzial route that the site will have

Express is a framework, a sort of add-on to your application it will help you with building your project, without having to do everything from scratch.
Express has alot of built in functions, by calling for the express() function you can get access to all of it's sub functions. 

Nunjucks is also an add-on that will make your life easier.

Morgan is a middleware logger, it will record problems and or other important messages in the log when starting and using the website.

- app.use(morgan("dev"))
Uses express to use and starts morgan as dev?

If the server.js router is called /story the / in the story.js folder automatically becomes /story

A param or parameter is a variable part of a funtion, from my understanding it works close to a argument, except they are only available in the function it was declared.
I the case of the web there is a URL parameter, that is apparently also known as a "query string". It can be used to ad additional information to the URL, for management and sorting on large webpages. You use ? before the parameter. 
- ?variable=value
So technically when you use "req.params.id", you are requesting a param called id that you should be able to use?

res.render, as stated renders the content you put into it.

Hmm, fancy words?

Protocol or swedish (protokoll) is what HTTP and HTTPS is, they all have a port, which is a sequence of numbers they come from binary code, which has 8 slots with a value 8*n when 8 can be 0. Then you add up the numbers and get a finished product which can be 8080 and 5050 or 3000 which is local ports for your computer.
HTTP: 80
HTTPS: 441

