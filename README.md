# Amazon Web Scraper

## Setup

- Using Next.js 13 Syntax
- Look at next.config.js
- create new app folder for homepage

All pages in app directory are server components, to make it a client component put "use client" on the top, if you have click events

## BrightData

https://brightdata.com/cp/data_collector?collector_id=c_let2syvr18q771n5yt

Integrate to your system => Delievery Preferences => When finished, notify me by => Webhook

## Firebase

Cloud functions to create a Webhook
Instructions in package.json of CLI commands have to be in /functions folder
Switched to Node 18
npm run serve

Ngrok - Tunneling
Allows you to create a public endpoint for a local host ednpoint
Helpful so you don't have to keep deploying

Create new folder (mkdir)

```
git init
firebase init
```

Database

Service Accounts => Generate New Private Key

```
npm i firebase-admin
```

## NPM Instals

```
npm install @heroicons/react
npm install firebase-admin --save
npm install firebase
npm install react-firebase-hooks
npm install react-spinkit
npm i --save-dev @types/react-spinkit
npm install react-hot-toast
```

## Backend URL

https://console.firebase.google.com/project/brightdata-scraper/overview

## Credit

- Project based on video by Sonny Sangha
- https://www.youtube.com/watch?v=FJb8xOhX3ZE&list=PLxgWUhmKUPYMPQKf_08JUCcjzu6bBKKHZ&index=3&ab_channel=SonnySangha
