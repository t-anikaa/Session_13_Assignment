// Download this dummy data set from here. Reduce any three column, and group 
// division. Upload the code, code link, and screenshot in your GitHub repo. 
// Submit the repo link.

// Printing the info table:
var info = ee.FeatureCollection("projects/ee-atahsinhaque20/assets/bgd_admpop_adm3_2022");
print(info);

// Reducing & printing three columns & group division:
var reducedVal = info.reduceColumns({
  selectors:["F_TL", "M_TL","T_TL","ADM1_NAME"],
  reducer: ee.Reducer.mean().repeat(3).group({
    groupField: 3,
    groupName: "District"
  })
})
print(reducedVal)