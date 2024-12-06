# Phi Kappa Alpha Website

Welcome to the official website of Phi Kappa Alpha! This website serves as a central hub for all information related to Phi Kappa Alpha, including details about the club, events, merchandise, and a calendar to keep track of important dates.

## Overview

The Phi Kappa Alpha website is designed to provide members and visitors with easy access to all the information they need about the club. Whether you're looking for the latest events, want to purchase merchandise, or need to check the calendar for upcoming activities, you'll find it all here.

## Why a Website?

I chose to create pkabulldogs.com to solve a few different issues. The first is that before the website, only club members were able to hear about our events. With this website we are able to communicate when our events are to both club members and other students at Freed-Hardeman University and hopefully have some new faces show up. The events page helps showcase our most populare events to display for freshman or transfer students who are thinking about joining our club. Showcasing our events helps show people what we really do as a club. The homepage helps introduce us to people who aren't familiar with Phi Kappa Alpha and lets us keep track of our wins! The most exciting portion of our website is the ability to buy merch, which has unfortunatly been outsourced. I will go more in to detail about the merch link in a seperate section.

## Features

- **Home Page**: Introduction to the club and its mission. Also contains key stats about the club.
- **Merchandise**: Link to the official merchandise store hosted by prinful. Members can now order merch anytime.
- **Events**: Information about our most popular events throughout the year!
- **Calendar**: A calendar to keep track of important dates and events throughout the semester.

## Merch

In Phi Kappa, we are fortunate enough to now have an on-demand merch order system powered by printful. Why did we choose to use a printful quick shop instead of hosting the merch on our own site? Well, we had setup a store page on our own website using the printful api at one point, however this caused more issues than intially thought. The printful api worked great, however we ran into an issue when processing payments. There are many apis that we could use to collect payment on our merch (Stripe, PayPal, etc), but all of these required a social security number or a tax id to setup. As a club at FHU, no member will be here long term to manage the payments. We would not ask someone to put their social security number on a club account. The next best thing was to setup a quickshop on printful which allows us to design, sell, and profit off of merch all through printful's website (without a ssn).

## Order Form

In a recent update, I have created a merch.html page which is not linked to anything on the website, but is for future editors. This page is essentially a template of how we can create a form for merch orders that links to a google sheet. My recommendation is that for mass orders we display a order form for the shirts and then after the mass order ends they can still be purchased on printful or redbubble, or potentially another service that the club finds. To get the merch form to work we need to have a new blank google sheet setup for the data from the form to go into, which is literally just any new google sheet. If you go on that sheet toward the top of the page where it has an extentions button press it and choose Apps Script. We will create a new web service for this project. Under the side tab "Code.gs" we can see the script that will insert data into the spreadsheet. We can set it up to do all CRUD opperations if we wanted to, but for the template this example will work for the code:

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.size]); // Adjust columns as needed
  return ContentService.createTextOutput("Success");
}

In this script, the two variables at the top should ultimately remain the same no matter what, but when we actaully make orders we may
need to change the sheet.appendRow line to match all the data collected. For the example form that collects your name and your shirt size it works perfectly fine. I could see a scenario in the future where we have more of a merch page for orders and there are different shirts that could be passed into the form to go into one ultimate mega sheet, but for an individual shirt this works fine. If anyone decided to implement this process in another way you can try, but this method avoids CORS errors and allows us to opperate all on the frontend without setting anything up for a backend. Google sheets are also easy enough that anyone can read/modify/export the data without interacting with the website at all!

## Navigation

- **Home**: [Home Page](home.html)
- **Merchandise**: [Merch Store](https://pkabulldogs.printful.me/)
- **Events**: [Events Page](events.html)
- **Calendar**: [Calendar Page](calendar.html)

## Future Editors

This section is for anyone who gains edit permissions after my time here. The main things that will need to be updated are our calendar and our homepage statistics. The calendar is designed to pull the events from the events.json file. Each day on the calendar can be marked by an event with json formated like this: { "title": "Club Run", "date": "2024-08-21" }. This format is the only acceptable way to add to our calendar. It is very important that you include the 0s in dates like this: 2024-08-21 instead of 2024-8-21. If you do not include the 0 it will cause issues on the calendar. At the time of posting this I think it would be cool to have the list of events to be added to and never removed. This would be cool so that future club members can see what events we had planned for each semester and the kind of things that we did.

Thank you for visiting the Phi Kappa Alpha website. We hope you find all the information you need and enjoy being a part of our community!