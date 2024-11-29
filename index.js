
const SearchText = document.getElementById("Search");
document.getElementsId("ResponseText").hidden=true;



function search() {
    const SearchText = document.getElementById("Search");
    const searchbutton = document.getElementById("EARCH");
    console.log(SearchText.value);
    document.getElementById("SearchResultText").textContent = SearchText.value;
   document.getElementsId("ResponseText").hidden=false;
   }
