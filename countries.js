let search = document.querySelector(".searchvalue");
async function countries() {
  if (search.value == "") {
    document.querySelector(".invalidchoice").innerHTML = "Invalid Choice";
  } else {
    try {                                                           //TRY and Catch Method 
      document.querySelector(".invalidchoice").innerHTML =(search.value).toUpperCase();  
      let respond = await fetch(
        `https://restcountries.com/v3.1/name/${search.value}`  //fetching data from API
      );
      let data = await respond.json();                                           
      document.querySelector(".countryname").innerHTML =           //Assigning values
        search.value.toUpperCase();
      document.querySelector(".countryflag").src = data[0].flags.png;
      document.querySelector(".subregion").innerHTML = data[0].subregion;
      document.querySelector(".capital").innerHTML = data[0].capital;
      document.querySelector(".continent").innerHTML = data[0].region;
      document.querySelector(".areas").innerHTML = data[0].area;
      document.querySelector(".population").innerHTML = data[0].population;
      document.querySelector(".currency").innerHTML = Object.values(
        data[0].currencies
      ).map((z) => z.name);
      document.querySelector(".neighbours").innerHTML = data[0].borders.map(
        (z) => z
      );
      document.querySelector(".languages").innerHTML = Object.values(
        data[0].languages
      ).map((z) => z);
    } catch (error) {
      console.log(error);
    }
  }
}
