[Toyota.com Clone] </br>


### About the Project</br>

The Toyota.com Clone(partial clone of the real site) is a full stack application focused on allowing a user to click on a vehicle from the build and price tab(on top right of real site). Currently the demo only allows for the user to click on a 2017 Toyota Tacoma. You are able to choose a grade, cab & bed, configuration(motor), color, package, and accessories. The summary tab shows all of your selections with the total price at the bottom.  You can select 'request a quote' and send the info to a dealer.  The dealer info is not currently hooked up but everything else is functional. 
</br></br>


### 1. Technical Description</br>
###### 1.1 Front-end</br>
HTML/SASS</br>
AngularJS</br>
Javscript </br>

###### 1.2 Back-end</br>
Node.js</br>
MassiveJS</br>
Express</br>
Express-sessions</br>
SQL Postgres (ElephantSQL)</br>

###### 1.3 Other tools</br>
GULP/Babel</br></br>


### 2.  Features and How I did it</br>
###### 2.1 Back-end</br>
I first used some Google Chorme extensions to scrape the site for photos and data on the vehicles. I used Elephant SQL to host 7 tables of data.</br>

###### 2.2 Views/Components </br>
I built out 7 separate views using anuglar custom directives(components).  Using ng-show/hide with ng-init to initiate the grades pages as the first view, users can go back and forth between pages seamlessly with no reloading.  My site is much faster than Toyota's site. </br>  

###### 2.3 ng-repeat</br>
For each view you see nice boxes with all the possible options to select from.  I used ng-repeat to display data from teh back-end and then generate all the remaining boxes with that info.  This was useful but did cause some interesting challenges.  Some of the bullet points had 5 options and some 4 or 6.  I used ng-if to basically not have empty slots. </br> 

###### 2.4 Dynamic Data</br>
The dynamic changes that occur throughout the site were the hardest part.  First of all, scope became an issue.  You can select options on each page view and so I had to isolate the scope using custom directive scope isolation.  I used teh controller scope to start off with the base information of the SR-5 grade then updated scope to whatever the user clicks on. In this case I hooked up the TRD with photos too.  </br>

###### 2.5 Select Button</br>
The select button changes classes and adds new content, the blue checkmark, upon clicking a specific option. This actually was tricky because I was using ng-repeat. To make it work I used the $index and ng-class to change only one at a time.</br>

###### 2.6 Summary </br>
On each item selection I sent a post to the summary page on the back-end so that it functions similar to a cart. I ng-repeated over the sumary object to display the info. There was some really tricky stuff I had to do to get the totals to show up right and show up at all.  I had to use a controller that was over all the views to track all the data.  The numbers were strings from the database and the commas caused them to not be easy to work with in terms of math functions.  So I had to turn them into a number, do the math, then back to a string for display. </br>

###### 2.7 Truck Color Changes OnClick</br>
Reverse engineering Toyota's site was not easy as I thought it would be.  This part was a challange mainly because my tables were not set up properly to handle the photos in a different way than I origianlly set up the carousel to handle them. </br>

###### 2.8 Carousel and Modal</br>
I decided not to use Bootstrap but then later realized I needed it. Instead of being able to use it later which caused major styling problems I had to build the carousel and modal from the ground up.  They are literaly straight JS.  </br>


### 3. Screenshots - Shows the Flow of the Site</br>

###### [Build and Price - All Vehicles Page1]
![pasted image at 2017_07_14 04_42 pm](https://user-images.githubusercontent.com/25558342/28834250-fa393fd4-769e-11e7-966b-43451e7eac44.png)</br>
###### [Build and Price - All Vehicles Page2] 
![pasted image at 2017_08_01 09_27 am](https://user-images.githubusercontent.com/25558342/28834147-bd4b0a6c-769e-11e7-8635-be0942faae28.png)</br>
###### [Select Build and Price a 2017 Tacoma ]
![pasted image at 2017_07_14 04_46 pm](https://user-images.githubusercontent.com/25558342/28834370-4970f222-769f-11e7-93fc-eb0783712273.png)</br>
###### [Select Build and Price a 2017 Tacoma Carousel has 5 total 360 degree views and  3 interior ]
![pasted image at 2017_08_01 09_58 am](https://user-images.githubusercontent.com/25558342/28834656-1b978964-76a0-11e7-8c39-3835ee5cd2c0.png)</br>
###### [Select a Grade] 
![pasted image at 2017_08_01 09_29 am](https://user-images.githubusercontent.com/25558342/28834431-6f3b9f3e-769f-11e7-9150-22e774367d2a.png)</br>
###### [Selecting TRD Grade   - changes the pictures dynamically from backend along with price/title on the carousel]
![pasted image at 2017_08_01 09_30 am](https://user-images.githubusercontent.com/25558342/28834460-88099a34-769f-11e7-9212-ea6db2ea6b15.png)</br>

###### [Select Cab & Bed - All built with dynamic info using ng-repeat]
![pasted image at 2017_08_01 11_07 am](https://user-images.githubusercontent.com/25558342/28837322-9a264398-76a9-11e7-8b3f-fb3d9efc1403.png)</br>

###### [Select a Configuration]
![pasted image at 2017_08_01 09_31 am](https://user-images.githubusercontent.com/25558342/28834886-d5633e56-76a0-11e7-995e-c0707f5bf4ba.png)</br>

###### [Select a Color ] 
![pasted image at 2017_08_01 09_32 am](https://user-images.githubusercontent.com/25558342/28834899-e1cb1e0c-76a0-11e7-9a77-0aeef4f4a2c7.png)</br>
###### [Select a Package]
![pasted image at 2017_08_01 09_33 am](https://user-images.githubusercontent.com/25558342/28834921-f43ab926-76a0-11e7-9d37-6580031faf95.png)</br>

###### [Select Accessories] 
![pasted image at 2017_08_01 09_33 am 1](https://user-images.githubusercontent.com/25558342/28834933-fd5ffc3c-76a0-11e7-8fbf-f12650522ea0.png)</br>
###### [View a Summary] 
![pasted image at 2017_08_01 10_49 am](https://user-images.githubusercontent.com/25558342/28836681-337dd860-76a7-11e7-8020-5386de0afc75.png)</br>
###### [Click on Request a Quote]
![pasted image at 2017_08_01 10_49 am 1](https://user-images.githubusercontent.com/25558342/28836692-3ea01e88-76a7-11e7-8d7c-54a9c2871481.png)

