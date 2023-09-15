function tipCalculate() {
  const billTotal = Number(document.querySelector("#bill").value);
  const peopleTotal = Number(document.querySelector("#people").value);
  const service = document.querySelector("#service").value;

  //   Texte für die Output p tags
  const trinkgeld = "Das Trinkgeld beträgt: ";
  const gesamt = "Die Gesamtsumme beträgt: ";
  const person = "Der Preis pro Person beträgt: ";
  const euro = " €.";

  // -   .toFixed(2) nutze ich, damit mir immer 2 Nachkommastellen
  //   - ausgegeben werden

  //   !Service ist schlecht
  if (service == "Schlecht") {
    document.querySelector(".tip").innerHTML =
      trinkgeld + (billTotal * 0.02).toFixed(2) + euro;
    document.querySelector(".fullBill").innerHTML =
      gesamt + (billTotal + billTotal * 0.02).toFixed(2) + euro;
    document.querySelector(".pizza").innerHTML =
      person + ((billTotal + billTotal * 0.02) / peopleTotal).toFixed(2) + euro;

    //   ! Service ist gut
  } else if (service == "Gut") {
    document.querySelector(".tip").innerHTML =
      trinkgeld + (billTotal * 0.1).toFixed(2) + euro;
    document.querySelector(".fullBill").innerHTML =
      gesamt + (billTotal + billTotal * 0.1).toFixed(2) + euro;
    document.querySelector(".pizza").innerHTML =
      person + ((billTotal + billTotal * 0.1) / peopleTotal).toFixed(2) + euro;

    //   ! Service ist super
  } else {
    document.querySelector(".tip").innerHTML =
      trinkgeld + (billTotal * 0.2).toFixed(2) + euro;
    document.querySelector(".fullBill").innerHTML =
      gesamt + (billTotal + billTotal * 0.2).toFixed(2) + euro;
    document.querySelector(".pizza").innerHTML =
      person + ((billTotal + billTotal * 0.2) / peopleTotal).toFixed(2) + euro;
  }
}
