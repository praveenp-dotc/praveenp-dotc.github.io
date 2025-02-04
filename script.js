// script.js
function filterTable() {
  let village = document.getElementById("village").value;
  let propertyType = document.getElementById("propertyType").value;
    let company = document.getElementById("company").value;

  let rows = document.querySelectorAll("tbody tr");
  let siteCount = 0;
  let totalAcres = 0, totalGuntas = 0;
  let agrSiteCount=0, nonagrSiteCount =0;

  rows.forEach(row => {
    let rowVillage = row.getAttribute("data-village");
    let rowProperty = row.getAttribute("data-property");
	let rowCompany = row.getAttribute("data-company");

    let acres = parseFloat(row.querySelector(".acres").textContent) || 0;
    let guntas = parseFloat(row.querySelector(".guntas").textContent) || 0;

    if ((village === "all" || rowVillage === village) && 
        (propertyType === "all" || rowProperty === propertyType) &&
		(company === "all" || rowCompany === company)
		) 
	{
      row.style.display = "table-row";
      siteCount++;
      totalAcres += acres;
      totalGuntas += guntas;
	  
	  
	  if (rowProperty === "Agricultural") {
			agrSiteCount++;

	  }
	  else {
		  		  nonagrSiteCount++;

	  }
	  
    } else {
      row.style.display = "none";
    }
  });

  document.getElementById("siteCount").textContent = siteCount;
  document.getElementById("totalArea").textContent = `${totalAcres} Acres ${totalGuntas} Guntas`;
  document.getElementById("agrSites").textContent = agrSiteCount;
  document.getElementById("nonagrSites").textContent = nonagrSiteCount;
  
}

document.getElementById("village").addEventListener("change", filterTable);
document.getElementById("propertyType").addEventListener("change", filterTable);
document.getElementById("company").addEventListener("change", filterTable);


// Initial filter on page load
filterTable();