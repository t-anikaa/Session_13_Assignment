# Session_13_Assignment

**Q[1]:** Download this dummy data set from here. Reduce any three column, and group division. Upload the code, code link, and screenshot in your GitHub repo. Submit the repo link.
**Ans:** At first, I imported a feature collection named "bgd_admpop_adm3_2022" and printed its information table using the print() function. Then, I reduced three columns ("F_TL", "M_TL", "T_TL") by taking their mean values and grouped them by the "ADM1_NAME" field. Finally, I printed the reduced values, which include the mean values of the three columns grouped by district names.
*   [GEE Script](https://code.earthengine.google.com/0877738df04054107609a28eabb7e63b)
*   [Code file](https://github.com/t-anikaa/Session_13_Assignment/blob/main/Q%26A%5B1%5D.js)
![13 1](https://github.com/t-anikaa/Session_13_Assignment/assets/161161157/6160c2ad-6f69-452d-9f4c-9c417b499e5a)

**Q[2]:** Use this landcover data set  and calculate the sum of each class of the band `LC_Type1` for your Upazila for the year 2021. Upload the code, code link, and screenshot in your GitHub repo. Submit the repo link. 

**Ans:** At first, I began by importing a feature collection named "BGD_adm3" and filtered it to select the Upazila "Teknaf". Then, I added this region to the map for visualization. After that, I used the MODIS Image Collection to obtain land cover data for the year 2021, specifically selecting the band "LC_Type1". I clipped the image to my defined region, added it to the map, and created a static image for visualization. Finally, I calculated the sum of each land cover class within the "LC_Type1" band for my Upazila using the reduceRegion() function, grouping the results by land cover class.


*   [GEE Script](https://code.earthengine.google.com/127e045274cbab5de310ece021be441b)
*   [Code file](https://github.com/t-anikaa/Session_13_Assignment/blob/main/Q%26A%5B2%5D.js)
![13 2](https://github.com/t-anikaa/Session_13_Assignment/assets/161161157/f2d90616-3d5f-4c07-88d8-91af0bfba5d2)

**Q[3]:** Watch this tutorial, and make a map of your district by using QGIS. Upload the map in your github repo, share your map in Geospatial Programming Learners fb group. Give hashtags: #assignment13,  #QGISMapping, #geospatialProgramming in your post. Submit the link of your Facebook post.

**Ans:**
![CTG](https://github.com/t-anikaa/Session_13_Assignment/assets/161161157/c7831aa9-4704-4756-92d5-bff9b8425a02)
