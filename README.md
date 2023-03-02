# visuals
app for looking at housing data

# Install // Run

sorry if we weren't expecting a react project. but this is a pretty quick run

```
git clone https://github.com/thebabellibrarybot/visuals.git
```

```
npm install
```

```
npm run install-client
```

```
npm run dev
```

and that's all folks!

# on Puppeteer
## Overview:

 couldn't figure out the scraping for corcona. You can see the scripts and attempts in the repository linked below. if I had to guess they had an iFrame or something that was only allowing me to scrape the first two lots per page, although I was able to click through all the pages by identifying the second largest number from `<li>` elements with a 'page____navigator' asset.

In replacement for this prompt I have also shared the webscrapes I made for my extra viewer modules. The code is pretty messy but it wasn't really asked for in the prompt. I've attached a link to that repository anyways. https://github.com/thebabellibrarybot/mumbotsPuppies.git

###### Ideals I tried to focus on:

- functions that take prop of very general identifier i.e. <button> or <a> and the text value of that element to click through all necessary pages

- a secondary data scraping function that gets the href from everyplace if the prop (chart is applied) this function can also be directed at a particular `<a>` element's attribute such as class or ID. Allowing you to only get the hrefs from the `<a>` elements you want hrefs from.

- a tertiary function that uses puppeteer-cluster to concurrently drape all the text elements you want. Had trouble making this function malleable via props as I tried getting all text and then using string logic to extract desired values. I saw that Seligman has some cool props that could potentially help with this such as 'elementAbove' or 'nearbyElemnts'. 

###### Fails: 

- I had to loop through a lot of data to do this web scraping and had to add a fourth function for formatting all the scraped data when I probably should have included a structured compilation of the data in the aforementioned tertiary functions. 

- wasn't sure if the tertiary function should've been just uploading data to a csv to be formatted by a variety of specific calls or if it's better to dictate what exactly was scrapped and what the format // meta-data accessed would be. 

- Being in an office with a bunch of other developers would quickly allow me to handle a much wider range of functions though.  I would be stumped for hours wondering why my scrapers are all of a sudden acting weird and could easily access resources for dealing with iframes and interactive page loaders. 

# on D3

###### Ideals I tried to focus on:
 
- integrating DOM with react state and functional calls
 
- filtering, searching, and reusability of components
 
- user actions and customization


###### Overview:
 
- Right off the bat I think this library is really cool and really want to try to play around with it more in the future. I mostly used source material from chatGPT and D3.js Graph gallery https://d3-graph-gallery.com/ to come up with the responses to these prompts but I think that with a little time I could really go off rail from these basic graphs and just use it as a really great library to interact with the DOM or a custom svg even. 
 
- There was a bit of a learning curve and adjustment period I had to go through to get use to this library. The syntax is a little intimidating and the functionality seems very abstract at first. After having only really used D3 for a week I feel very confident that I would be able to quickly build my skills with this library.
 
- I can't believe how great the community of tools for geoJSON and D3 are so just taking a moment to appreciate that.

 
###### Fails: 
 
- I sent you all a whole react project here. I'm not sure if you just wanted an html file or if this is okay too, so I apologize if this is a little over the top. I am also unsure if it's a little underdone since I didn't spend time applying every style and interaction event possible but focused more on interacting with user manipulated state. If it helps at all I'd be happy to re-render just the graphs as html.
 
- I probably didn't spend enough time making the styles for this project look really nice. I kinda just wanted to focus on understanding the functionality better first and then get into styles more but as the week progressed I never really got around to it.
