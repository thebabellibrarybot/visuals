# visuals
app for looking at houisng data

# Install // Run

sorry if we weren't expecting a react project. but this is a pretty quick run

```
git clone https://github.com/thebabellibrarybot/visuals.git
```

```
npm install
```

```
npm install-client
```

```
npm run dev
```

and that's all folks!

# on Puppeteer
## Overview:

 couldn't figure out the scraping for corcona. You can see the scripts and attempts in uploadBackground.js. if I had to guess they had an iFrame or something that was only allowing me to scrape the first two lots per page, although I was able to click through all the pages by identifying the second largest number from `<li>` elements with a 'page____navigator' asset.

In replacement for this prompt I have also shared the webscrapes I made for my extra viewer modules. The code pretty messy but it wasn't really asked for in the prompt. I've attached a link to that repository anyways. [(https://github.com/thebabellibrarybot/mumbotsPuppies.git)]

Ideals I tried to focus on:

- functions that take prop of very general identifier i.e. <button> or <a> and the text value of that element to click through all necessary pages

- a secondary data scraping function that gets the href from everyplace if the propt (chart is applied) this function can also be directed at a particular <a> elements attribute such as class or ID. Allowing you to only get the hrefs from the <a> elements you want hrefs from.

- a tertiary function that uses puppeteer-cluster to concurrently drape all the text elements you want. Had trouble making this function malleable via props as I tried getting all text and then using string logic to extract desired values. I saw that Seligman has some cool props that could potentially help with this such as 'elementAbove' or 'nearbyElemnts'. 

Fails: 

- I had to loop through a lot of data to do this webscrapping and had to add a fourth function for formatting all the scraped data when I probably should have including a structured compilation of the data in my aforementioned tertiary functions. 

- wasn't sure if the tertiary function should've been just uploading data to a csv to be formatted by a variety of specific calls or if it's a better move to dictate what exactly was scrapped and the format // meta-data accessed would be. 

- I mean I think I have a good grasp of pupeteer but clearly don't know all the ins and outs. Tbh being in an office with a bunch of other developers would quickly allow me to handle a much wider range of functions though. Like I would be stumped for hours wondering why my scrapers are all of a sudden acting weird and could easily access resources for dealing with iframes and interactive page loaders. 

# on D3

Overview:

 couldn't figure out the scraping for corcona. You can see the scripts and attempts in uploadBackground.js. if I had to guess they had an iFrame or something that was only allowing me to scrape the first two lots per page, although I was able to click through all the pages by identifying the second largest number from <li> elements in the page____navigator

In replacement for this prompt I have also shared the webscrapes I made for my extra viewer modules.

Ideals I tried to focus on:

- functions that take prop of very general identifier i.e. <button> or <a> and the text value of that element to click through all necessary pages

- a secondary data scraping function that gets the href from everyplace if the propt (chart is applied) this function can also be directed at a particular <a> elements attribute such as class or ID. Allowing you to only get the hrefs from the <a> elements you want hrefs from.

- a tertiary function that uses puppeteer-cluster to concurrently drape all the text elements you want. Had trouble making this function malleable via props as I tried getting all text and then using string logic to extract desired values. I saw that Seligman has some cool props that could potentially help with this such as 'elementAbove' or 'nearbyElemnts'. 

Fails: 

- I had to loop through a lot of data to do this webscrapping and had to add a fourth function for formatting all the scraped data when I probably should have including a structured compilation of the data in my aforementioned tertiary functions. 

- wasn't sure if the tertiary function should've been just uploading data to a csv to be formatted by a variety of specific calls or if it's a better move to dictate what exactly was scrapped and the format // meta-data accessed would be. 

- I mean I think I have a good grasp of pupeteer but clearly don't know all the ins and outs. Tbh being in an office with a bunch of other developers would quickly allow me to handle a much wider range of functions though. Like I would be stumped for hours wondering why my scrapers are all of a sudden acting weird and could easily access resources for dealing with iframes and interactive page loaders. 




O D3

Overview:

So I really loved this library right off the bat. There's definitely a lot of specific functions, logic, and syntaxes specific to svg interactions but it's also very different from the way I'd, say animate a handrawn svg file. I feel like I could spend hours playing with this though. 
