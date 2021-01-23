# React with a live server and No build step

Based on [this great article](https://formidable.com/blog/2019/no-build-step/) by [Luke Jackson](https://twitter.com/lukejacksonn)

I got started writing Vanilla JS first and I hate waiting for Create-React-App to load. 

## Snowpack for imports

[Snowpack](https://www.snowpack.dev/) automagically outputs packages as ESM modules. This boilerplate pulls React and ReactDOM from there,

## Servor for a live dev server 

Just run "npm run serve" for a live dev server using [Servor](https://www.npmjs.com/package/servor). Size on disk is 104kb 😂 too easy.

## JSX 

This pulls in [Jason Miller's](https://twitter.com/_developit) [htm library](https://github.com/developit/htm) for JSX. Unfortunately this doesn't look exactly like normal JSX which would make migrating another app to this style more difficult. However, the benefits of no build step are pretty nice! 


