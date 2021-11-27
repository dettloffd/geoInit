



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
  {src: "http://flagpedia.net/data/flags/normal/ar.png", name: "Argentina", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/bs.png", name: "Bahamas", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/bz.png", name: "Belize", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/bo.png", name: "Bolivia", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/br.png", name: "Brazil", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/ca.png", name: "Canada", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/cl.png", name: "Chile", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/co.png", name: "Colombia", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/cr.png", name: "Costa Rica", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/cu.png", name: "Cuba", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/do.png", name: "Dominican Rep.", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/ec.png", name: "Ecuador", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/fk.png", name: "Falkland Is.", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/gl.png", name: "Greenland", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/gt.png", name: "Guatamala", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/gy.png", name: "Guyana", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/hn.png", name: "Honduras", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/ht.png", name: "Haiti", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/jm.png", name: "Jamaica", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/mx.png", name: "Mexico", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/ni.png", name: "Nicaragua", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/pa.png", name: "Panama", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/pe.png", name: "Peru", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/pr.png", name: "Puerto Rico", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/py.png", name: "Paraguay", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/sv.png", name: "El Salvador", region: "Americas"},
  {src: "http://flagpedia.net/data/flags/normal/sr.png", name: "Suriname", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/tt.png", name: "Trinidad and Tobago", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/uy.png", name: "Uruguay", region: "Americas", subregion: "South America"},
  {src: "http://flagpedia.net/data/flags/normal/us.png", name: "United States of America", region: "Americas", subregion: "North America"},
  {src: "http://flagpedia.net/data/flags/normal/ve.png", name: "Venezuela", region: "Americas", subregion: "South America"},


  //AFRICA
  {src: "http://flagpedia.net/data/flags/normal/dz.png", name: "Algeria", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ao.png", name: "Angola", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/bi.png", name: "Burundi", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/bj.png", name: "Benin", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/bf.png", name: "Burkina Faso", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/bw.png", name: "Botswana", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/cf.png", name: "Central African Republic", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/cm.png", name: "Cameroon", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/cd.png", name: "Dem. Rep. Congo", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/td.png", name: "Chad", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/cg.png", name: "Congo", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/dj.png", name: "Djibouti", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/eg.png", name: "Egypt", region: "Africa", subregion2: "Middle East"},
  {src: "http://flagpedia.net/data/flags/normal/er.png", name: "Eritrea", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/et.png", name: "Ethiopia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/gq.png", name: "Eq. Guinea", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ga.png", name: "Gabon", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/gh.png", name: "Ghana", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/gn.png", name: "Guinea", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/gm.png", name: "Gambia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/gw.png", name: "Guinea-Bissau", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ke.png", name: "Kenya", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/lr.png", name: "Liberia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ly.png", name: "Libya", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ls.png", name: "Lesotho", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ma.png", name: "Morocco", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/mg.png", name: "Madagascar", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ml.png", name: "Mali", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/mz.png", name: "Mozambique", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/mr.png", name: "Mauritania", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/mw.png", name: "Malawi", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/na.png", name: "Namibia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ne.png", name: "Niger", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ng.png", name: "Nigeria", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/rw.png", name: "Rwanda", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/sd.png", name: "Sudan", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ss.png", name: "S. Sudan", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/sn.png", name: "Senegal", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/sl.png", name: "Sierra Leone", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/so.png", name: "Somalia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/sz.png", name: "Swaziland", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/tg.png", name: "Togo", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/tn.png", name: "Tunisia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/tz.png", name: "Tanzania", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/ug.png", name: "Uganda", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/za.png", name: "South Africa", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/zm.png", name: "Zambia", region: "Africa"},
  {src: "http://flagpedia.net/data/flags/normal/zw.png", name: "Zimbabwe", region: "Africa"},


  //ASIA
  /////EGYPT ALSO IN AFRICA
  {src: "http://flagpedia.net/data/flags/normal/af.png", name: "Afghanistan", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "http://flagpedia.net/data/flags/normal/am.png", name: "Armenia", region: "Asia", subregion: "Western Asia"},
  {src: "https://flagpedia.net/data/flags/normal/ae.png" , name: "United Arab Emirates", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/az.png" , name: "Azerbaijan", region: "Asia", subregion: "Western Asia"},
  ///{src: "https://flagpedia.net/data/flags/normal/bh.png" , name: "Bahrain", region: "Asia", subregion2: "Middle East"}, too small I think
  {src: "https://flagpedia.net/data/flags/normal/bd.png" , name: "Bangladesh", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/bt.png" , name: "Bhutan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/bn.png" , name: "Brunei", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/kh.png" , name: "Cambodia", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/cn.png" , name: "China", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/ge.png" , name: "Georgia", region: "Asia", subregion: "Western Asia"},
  {src: "https://flagpedia.net/data/flags/normal/in.png" , name: "India", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/id.png" , name: "Indonesia", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/ir.png" , name: "Iran", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/iq.png" , name: "Iraq", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/il.png" , name: "Israel", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/jo.png" , name: "Jordan", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/jp.png" , name: "Japan", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/kz.png" , name: "Kazakhstan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/kw.png" , name: "Kuwait", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/kg.png" , name: "Kyrgyzstan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/kr.png" , name: "South Korea", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/la.png" , name: "Laos", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/lb.png" , name: "Lebanon", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/lk.png" , name: "Sri Lanka", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/my.png" , name: "Malaysia", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/mn.png" , name: "Mongolia", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/mm.png" , name: "Myanmar", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/np.png" , name: "Nepal", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/om.png" , name: "Oman", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/pk.png" , name: "Pakistan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/ps.png" , name: "Palestine", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/ph.png" , name: "Philippines", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/kp.png" , name: "North Korea", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/qa.png" , name: "Qatar", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/sa.png" , name: "Saudi Arabia", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/sy.png" , name: "Syria", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/th.png" , name: "Thailand", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/tj.png" , name: "Tajikistan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/tm.png" , name: "Turkmenistan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/tl.png" , name: "Timor-Leste", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/tr.png" , name: "Turkey", region: "Asia", subregion2: "Middle East"},
  {src: "https://flagpedia.net/data/flags/normal/tw.png" , name: "Taiwan", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/uz.png" , name: "Uzbekistan", region: "Asia"},
  {src: "https://flagpedia.net/data/flags/normal/vn.png" , name: "Vietnam", region: "Asia", subregion: "Eastern Asia"},
  {src: "https://flagpedia.net/data/flags/normal/ye.png" , name: "Yemen", region: "Asia", subregion: "Western Asia", subregion2: "Middle East"},

  


  //EUROPE
  {src: "http://flagpedia.net/data/flags/normal/al.png", name: "Albania", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/at.png", name: "Austria", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/be.png", name: "Belgium", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/bg.png", name: "Bulgaria", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ba.png", name: "Bosnia and Herz.", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/by.png", name: "Belarus", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/hr.png", name: "Croatia", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/cz.png", name: "Czechia", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/de.png", name: "Germany", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/dk.png", name: "Denmark", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ee.png", name: "Estonia", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/fi.png", name: "Finland", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/fr.png", name: "France", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/gr.png", name: "Greece", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/hu.png", name: "Hungary", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ie.png", name: "Ireland", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/is.png", name: "Iceland", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/it.png", name: "Italy", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/rs.png", name: "Kosovo", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/lt.png", name: "Lithuania", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/lu.png", name: "Luxembourg", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/lv.png", name: "Latvia", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/md.png", name: "Moldova", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/mk.png", name: "Macedonia", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/me.png", name: "Montenegro", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/nl.png", name: "Netherlands", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/no.png", name: "Norway", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/pl.png", name: "Poland", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/pt.png", name: "Portugal", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ro.png", name: "Romania", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ru.png", name: "Russia", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/rs.png", name: "Serbia", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/sk.png", name: "Slovakia", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/si.png", name: "Slovenia", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/es.png", name: "Spain", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/se.png", name: "Sweden", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ch.png", name: "Switzerland", region: "Europe"},
  {src: "http://flagpedia.net/data/flags/normal/ua.png", name: "Ukraine", region: "Europe", subregion: "Eastern Europe"},
  {src: "http://flagpedia.net/data/flags/normal/gb.png", name: "United Kingdom", region: "Europe"},

    
  
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


const countryLoader = (regionChoice) => {



  // function filterByRegion(item){
    
  //   /////console.log(item);
  //      if (item.regions.includes(regionChoice)){
  //       return item;
  //     }
  //     else return false;
  //   }
    //////////^^^^THIS NEW ONE WORKS WITH REGIONS ARRAY******
    
    function filterByRegion(item){
      if (item.region == regionChoice || item.subregion == regionChoice || item.subregion2 == regionChoice){
        return item;
      }
      else return false;
    }
    
    if (regionChoice != null){
    
      let filtered = countries.filter(filterByRegion);
      let countryToReturn = filtered[Math.floor(Math.random() * filtered.length)];

      return countryToReturn;
    }else {

      return countries[Math.floor(Math.random() * countries.length)];

    };


  
};


export default countryLoader;
  
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



