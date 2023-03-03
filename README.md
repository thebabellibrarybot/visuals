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

I couldn't figure out the scraping for corcona. You can see the code attempts in the repository linked below. If I had to guess they had an iFrame or something that was only allowing me to scrape the first two lots per page, although I was able to click through all the pages by identifying the second largest number from `<li>` elements with a 'page____navigator' id attribute.

In replacement for this prompt I have also shared the webscrapes I made for my custom visual (the barchart of library data). The code is pretty messy but it wasn't really asked for in the prompt. I've attached a link to that repository anyways. https://github.com/thebabellibrarybot/mumbotsPuppies.git

###### Ideals I tried to focus on:

- functions that take prop of very general identifier i.e. like `<button>` or `<a>` and the text value of that element to click through all necessary pages. This is suppose to make the functions more re-useable.

- minimizing await and looping through data to restructure scraped data by using `page.evaulate()`. Then using the evaulate functiont to both scrape and format data. 


###### pitfalls: 

- wasn't sure if the scraped data should've been just uploaded to a csv file that includes a lot of nunwanted noise or if it's better to dictate what exactly was scrapped and what the format // meta-data // and upload database would be. 

- Being in an office with a bunch of other developers would quickly allow me to handle a much wider range of functions though.  I would be stumped for hours wondering why my scrapers are all of a sudden acting weird and could easily access resources for dealing with iframes and interactive page loaders. 

# on D3

###### Ideals I tried to focus on:
 
- integrating DOM with react state and functional calls
 
- filtering, searching, and reusability of components


###### Overview:
 
- Right off the bat I think this library is really cool and really want to try to play around with it more in the future. I mostly used source material from chatGPT and D3.js Graph gallery https://d3-graph-gallery.com/ to come up with the responses to these prompts but I think that with a little time I could really go off rail from these basic graphs and really customize it. For this exersize I wanted to focus on integration with react and making the graphes re-usable via props.  
 
 # code locations
 ###### geoMap 
 `frontend/src/pgcomponents/geoMap`: https://github.com/thebabellibrarybot/visuals/blob/main/frontend/src/pgComponents/geoMap.js
 
 ###### data table 
 `frontend/src/pgcomponenets/basictable`: https://github.com/thebabellibrarybot/visuals/blob/main/frontend/src/pgComponents/basicTable.js
 
 ###### bar chart 
 `frontend/scr/pgcomopnenets/chartII`: https://github.com/thebabellibrarybot/visuals/blob/main/frontend/src/pgComponents/chartII.js
 
###### pitfalls: 
 
- I sent you all a whole react project here. I'm not sure if you just wanted an html file or if this is okay too, so I apologize if this is a little over the top. I am also unsure if it's a little underdone since I'm really unsure of the context here.. I can probably just turn this into three htmls filtes if that's preferred
 
