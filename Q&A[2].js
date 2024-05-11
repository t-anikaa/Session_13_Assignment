// Use this landcover data set  and calculate the sum of each class of the band 
// `LC_Type1` for your Upazila for the year 2021. Upload the code, code link, 
// and screenshot in your GitHub repo. Submit the repo link.

var adm3 = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/BGD_adm3");
// Filtering desired region:
var myRegion = adm3.filter(ee.Filter.eq("NAME_3", "Teknaf"));
print(myRegion);
Map.addLayer(myRegion,{}, "Tekaf");
Map.centerObject(myRegion);

// Using MODIS Image collection:
var imgCol = ee.ImageCollection("MODIS/061/MCD12Q1")
              .first()
              .clip(myRegion)
              .select('LC_Type1')
print(imgCol);
Map.addLayer(imgCol, {min: 0, max: 17}, "Image Collection");

// Creating Static image & visualizing it on the map:
var areaImg = ee.Image.pixelArea().addBands(imgCol)
print(areaImg)
// calculate the sum of each class of the band `LC_Type1`:
var classArea = areaImg.reduceRegion({
  geometry: myRegion,
  scale: 500,
  reducer: ee.Reducer.sum().group({
    groupField: 1,
    groupName: "Class"
  })
});
print("Class wise area for LC_Type1 band", classArea);


