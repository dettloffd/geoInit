// https://stackoverflow.com/questions/35099779/javascript-if-a-value-exists-in-an-object
// https://stackoverflow.com/questions/35948669/how-to-check-if-a-value-exists-in-an-object-using-javascript

/// mess with this from last post.. maybe obj.keys(someobject.regions).foreach?? 

// var obj = {
//   "a": "test1",
//   "b": "test2"
// };

// Object.keys(obj).forEach(function(key) {
//  if (obj[key] == 'test1') {
//    alert('exists');
//  }
// });
/// or even better probably...

// var obj = {
//   "a": "test1",
//   "b": "test2"
// };

// if (Object.values(obj).includes('test1')) {
//  alert('exists');
// }

///////NVM:
////////////This works, but have to go through and change regions in this way.. 
//every country will need a "regions" value which contains an array with the regions.. 

// for (i = 0; i < countries.length; i++) {

//   if (countries[i].regions.includes("SomeRegion")) {
//     console.log("very cool");
//   } else {
//     console.log("not cool");
//   }


// }



const countries = [
  //AMERICAS
  {src: "http://flagpedia.net/data/flags/normal/ar.png", name: "Argentina", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/bs.png", name: "Bahamas", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/bz.png", name: "Belize", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/bo.png", name: "Bolivia", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/br.png", name: "Brazil", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/ca.png", name: "Canada", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/cl.png", name: "Chile", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/co.png", name: "Colombia", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/cr.png", name: "Costa Rica", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/cu.png", name: "Cuba", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/do.png", name: "Dominican Rep.", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/ec.png", name: "Ecuador", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/fk.png", name: "Falkland Is.", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/gl.png", name: "Greenland", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/gt.png", name: "Guatamala", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/gy.png", name: "Guyana", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/hn.png", name: "Honduras", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/ht.png", name: "Haiti", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/jm.png", name: "Jamaica", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/mx.png", name: "Mexico", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/ni.png", name: "Nicaragua", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/pa.png", name: "Panama", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/pe.png", name: "Peru", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/pr.png", name: "Puerto Rico", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/py.png", name: "Paraguay", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/sv.png", name: "El Salvador", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/sr.png", name: "Suriname", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/tt.png", name: "Trinidad and Tobago", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/uy.png", name: "Uruguay", regions: ["Americas", "South America"]},
  {src: "http://flagpedia.net/data/flags/normal/us.png", name: "United States of America", regions: ["Americas", "North America"]},
  {src: "http://flagpedia.net/data/flags/normal/ve.png", name: "Venezuela", regions: ["Americas", "South America"]},


  //AFRICA
   
  {src: "http://flagpedia.net/data/flags/normal/dz.png", name: "Algeria", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ao.png", name: "Angola", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/bi.png", name: "Burundi", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/bj.png", name: "Benin", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/bf.png", name: "Burkina Faso", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/bw.png", name: "Botswana", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/cf.png", name: "Central African Republic", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/cm.png", name: "Cameroon", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/cd.png", name: "Dem. Rep. Congo", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/td.png", name: "Chad", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/cg.png", name: "Congo", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/dj.png", name: "Djibouti", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/eg.png", name: "Egypt", regions: ["Africa", "Middle East"]},
  {src: "http://flagpedia.net/data/flags/normal/er.png", name: "Eritrea", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/et.png", name: "Ethiopia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/gq.png", name: "Eq. Guinea", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ga.png", name: "Gabon", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/gh.png", name: "Ghana", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/gn.png", name: "Guinea", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/gm.png", name: "Gambia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/gw.png", name: "Guinea-Bissau", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ke.png", name: "Kenya", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/lr.png", name: "Liberia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ly.png", name: "Libya", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ls.png", name: "Lesotho", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ma.png", name: "Morocco", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/mg.png", name: "Madagascar", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ml.png", name: "Mali", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/mz.png", name: "Mozambique", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/mr.png", name: "Mauritania", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/mw.png", name: "Malawi", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/na.png", name: "Namibia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ne.png", name: "Niger", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ng.png", name: "Nigeria", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/rw.png", name: "Rwanda", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/sd.png", name: "Sudan", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ss.png", name: "S. Sudan", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/sn.png", name: "Senegal", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/sl.png", name: "Sierra Leone", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/so.png", name: "Somalia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/sz.png", name: "Swaziland", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/tg.png", name: "Togo", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/tn.png", name: "Tunisia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/tz.png", name: "Tanzania", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/ug.png", name: "Uganda", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/za.png", name: "South Africa", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/zm.png", name: "Zambia", regions: ["Africa"]},
  {src: "http://flagpedia.net/data/flags/normal/zw.png", name: "Zimbabwe", regions: ["Africa"]},


  //ASIA
  
  
  {src: "http://flagpedia.net/data/flags/normal/af.png", name: "Afghanistan", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "http://flagpedia.net/data/flags/normal/am.png", name: "Armenia", regions: ["Asia", "Western Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/ae.png" , name: "United Arab Emirates", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/az.png" , name: "Azerbaijan", regions: ["Asia", "Western Asia"]},
  ///{src: "https://flagpedia.net/data/flags/normal/bh.png" , name: "Bahrain", region: "Asia", subregion2: "Middle East"}, too small I think
  {src: "https://flagpedia.net/data/flags/normal/bd.png" , name: "Bangladesh", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/bt.png" , name: "Bhutan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/bn.png" , name: "Brunei", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/kh.png" , name: "Cambodia", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/cn.png" , name: "China", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/ge.png" , name: "Georgia", regions: ["Asia", "Western Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/in.png" , name: "India", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/id.png" , name: "Indonesia", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/ir.png" , name: "Iran", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/iq.png" , name: "Iraq", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/il.png" , name: "Israel", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/jo.png" , name: "Jordan", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/jp.png" , name: "Japan", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/kz.png" , name: "Kazakhstan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/kw.png" , name: "Kuwait", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/kg.png" , name: "Kyrgyzstan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/kr.png" , name: "South Korea", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/la.png" , name: "Laos", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/lb.png" , name: "Lebanon", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/lk.png" , name: "Sri Lanka", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/my.png" , name: "Malaysia", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/mn.png" , name: "Mongolia", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/mm.png" , name: "Myanmar", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/np.png" , name: "Nepal", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/om.png" , name: "Oman", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/pk.png" , name: "Pakistan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/ps.png" , name: "Palestine", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/ph.png" , name: "Philippines", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/kp.png" , name: "North Korea", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/qa.png" , name: "Qatar", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/sa.png" , name: "Saudi Arabia", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/sy.png" , name: "Syria", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/th.png" , name: "Thailand", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/tj.png" , name: "Tajikistan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/tm.png" , name: "Turkmenistan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/tl.png" , name: "Timor-Leste", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/tr.png" , name: "Turkey", regions: ["Asia", "Western Asia", "Middle East"]},
  {src: "https://flagpedia.net/data/flags/normal/tw.png" , name: "Taiwan", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/uz.png" , name: "Uzbekistan", regions: ["Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/vn.png" , name: "Vietnam", regions: ["Asia", "Eastern Asia"]},
  {src: "https://flagpedia.net/data/flags/normal/ye.png" , name: "Yemen", regions: ["Asia", "Western Asia", "Middle East"]},

  

  //EUROPE
  {src: "http://flagpedia.net/data/flags/normal/al.png", name: "Albania", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/at.png", name: "Austria", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/be.png", name: "Belgium", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/bg.png", name: "Bulgaria", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ba.png", name: "Bosnia and Herz.", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/by.png", name: "Belarus", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/hr.png", name: "Croatia", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/cz.png", name: "Czechia", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/de.png", name: "Germany", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/dk.png", name: "Denmark", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ee.png", name: "Estonia", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/fi.png", name: "Finland", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/fr.png", name: "France", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/gr.png", name: "Greece", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/hu.png", name: "Hungary", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ie.png", name: "Ireland", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/is.png", name: "Iceland", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/it.png", name: "Italy", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/xk.png", name: "Kosovo", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/lt.png", name: "Lithuania", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/lu.png", name: "Luxembourg", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/lv.png", name: "Latvia", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/md.png", name: "Moldova", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/mk.png", name: "Macedonia", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/me.png", name: "Montenegro", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/nl.png", name: "Netherlands", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/no.png", name: "Norway", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/pl.png", name: "Poland", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/pt.png", name: "Portugal", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ro.png", name: "Romania", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ru.png", name: "Russia", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/rs.png", name: "Serbia", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/sk.png", name: "Slovakia", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/si.png", name: "Slovenia", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/es.png", name: "Spain", regions: ["Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/se.png", name: "Sweden", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ch.png", name: "Switzerland", regions: ["Europe", "Western Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/ua.png", name: "Ukraine", regions: ["Europe", "Eastern Europe"]},
  {src: "http://flagpedia.net/data/flags/normal/gb.png", name: "United Kingdom", regions: ["Europe", "Western Europe"]},

    
  
  //



  // {src: "http://flagpedia.net/data/flags/normal/al.png", name: "Albania", region: "Europe"},
  // {src: "http://flagpedia.net/data/flags/normal/dz.png", name: "Algeria"},
  // {src: "http://flagpedia.net/data/flags/normal/ad.png", name: "Andorra"},
  // {src: "http://flagpedia.net/data/flags/normal/ao.png", name: "Angola"},
  // {src: "http://flagpedia.net/data/flags/normal/ag.png", name: "Antigua and Barbuda"},
  // {src: "http://flagpedia.net/data/flags/normal/ar.png", name: "Argentina"},
  // {src: "http://flagpedia.net/data/flags/normal/au.png", name: "Australia", region: "Oceania"},
  // {src: "http://flagpedia.net/data/flags/normal/at.png", name: "Austria", region: "Europe"},


]


export const countryLoader = (regionChoice) => {



  function filterByRegion(item){
    
    /////console.log(item);
       if (item.regions.includes(regionChoice)){
        return item;
      }
      else return false;
    }
    //////////^^^^THIS NEW ONE WORKS WITH REGIONS ARRAY******
    
    // function filterByRegion(item){
    //   if (item.region == regionChoice || item.subregion == regionChoice || item.subregion2 == regionChoice){
    //     return item;
    //   }
    //   else return false;
    // }
    
    if (regionChoice != null){
    
      let filtered = countries.filter(filterByRegion);
      let countryToReturn = filtered[Math.floor(Math.random() * filtered.length)];

      return countryToReturn;
    }else {

      return countries[Math.floor(Math.random() * countries.length)];

    };


  
};

export const countriesByRegionArray = (regionChoice) => {

  function filterByRegion(item){
    
    /////console.log(item);
       if (item.regions.includes(regionChoice)){
        return item;
      }
      else return false;
    }

    
    if (regionChoice != null){
    
      let filtered = countries.filter(filterByRegion);
      //console.log(filtered);
      let countryNamesArray =[];

      for (let i = 0; i < filtered.length; i++){
        countryNamesArray.push(filtered[i].name);
      }
      //let countryToReturn = filtered[Math.floor(Math.random() * filtered.length)];

      return countryNamesArray;
    }else {

      return countries;

    };

  
}


//export default countryLoader;
  
  //countryLoading("Asia");


// const countries = [
//     {src: "http://flagpedia.net/data/flags/normal/af.png", name: "Afghanistan", REGION: "Asia"},
//     {src: "http://flagpedia.net/data/flags/normal/al.png", name: "Albania", REGION: "Asia"},
//     {src: "http://flagpedia.net/data/flags/normal/dz.png", name: "Algeria"},
//     {src: "http://flagpedia.net/data/flags/normal/ad.png", name: "Andorra"},
//     {src: "http://flagpedia.net/data/flags/normal/ao.png", name: "Angola"},
//     {src: "http://flagpedia.net/data/flags/normal/ag.png", name: "Antigua and Barbuda"},
//     {src: "http://flagpedia.net/data/flags/normal/ar.png", name: "Argentina"},
//     {src: "http://flagpedia.net/data/flags/normal/am.png", name: "Armenia"},
//     {src: "http://flagpedia.net/data/flags/normal/au.png", name: "Australia", REGION: "Asia"},
//     {src: "http://flagpedia.net/data/flags/normal/at.png", name: "Austria", REGION: "Europe"},
    


// ]


// const countryLoading = (regionChoice) => {
//   let returnStuff = {
//   randomCountry: "",
//   countryArray: []
//   };


//   function filterByRegion(item){
//     if (item.REGION == regionChoice){
//       return item;
//     }
//     else return false;
//   }
  
//   if (regionChoice != null){

//     let filtered = countries.filter(filterByRegion);
//     returnStuff.randomCountry = filtered[Math.floor(Math.random() * filtered.length)];
//     returnStuff.countryArray = filtered;
//   }

//   returnStuff.randomCountry = countries[Math.floor(Math.random() * countries.length)];
//   returnStuff.countryArray = countries;
  
  
  
  
// };

// // function filterByRegion(countries, region){
// //   if (item.region )
// // }

// function randomCountry(param) {

//   function filterByRegion(item){
//     if (item.REGION == param){
//       return item;
//     }
//     else return false;
//   }

//   if (param != null){

//     let filtered = countries.filter(filterByRegion); 
//     return filtered[Math.floor(Math.random() * countries.length)];
    
//   }

//     return countries[Math.floor(Math.random() * countries.length)];
//   }

//   function countryLoader() {
//     if (param != null){

//       let filtered = countries.filter(filterByRegion);
//       return filtered;
      
//     }


//     return countries;
//   }


// //   let arr = [1,2,3];

// // for (let i = 0; i < arr.length(); i++){
// // console.log(arr[i]);

// // }
  
//   export default countries;
//   export { randomCountry };
//   export { countryLoader };



