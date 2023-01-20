function getVehicleYear() {
  let date = new Date();
  let year = date.getFullYear();

  for (i = year; i >= year - 30; i--) {
    let choice = document.createElement("option");
    document.getElementById("vehicleYear").options.add(choice);
    choice.value = i;
    choice.text = i;
  }
}

function calculateTax() {
  let vehicleType, vehicleTypeFactor;
  let vehiclePower, vehiclePowerFactor;
  let vehicleYear, vehicleYearFactor;
  let vehicleValue = 0,
    vehicleTaxValue;
  let totalTax;

  vehicleValue = document.getElementById("vehicleValue").value;

  console.log(vehicleValue);

  vehicleType = document.getElementById("vehicleType").value;

  console.log(vehicleType);

  if (vehicleType == "motorcycle") {
    vehicleTypeFactor = .2;
  } else if (vehicleType == "car") {
    vehicleTypeFactor = .3;
  }

  for (i = 0; i < document.getElementsByName("vehiclePower").length; i++) {
    if (document.getElementsByName("vehiclePower")[i].checked) {
      vehiclePower = document.getElementsByName("vehiclePower")[i].value;
    }
  }

  if (vehiclePower == "999") {
    vehiclePowerFactor = .2;
  } else if (vehiclePower == "1000&1600") {
    vehiclePowerFactor = .3;
  } else if (vehiclePower == "1601&2000") {
    vehiclePowerFactor = .4;
  } else if (vehiclePower == "2000") {
    vehiclePowerFactor = .5;
  }

  vehicleYear = document.getElementById("vehicleYear").value;

  console.log(vehicleYear);

  if (vehicleYear < 2005) {
    vehicleYearFactor = .2;
  } else {
    vehicleYearFactor = .3;
  }

  vehicleTaxValue = vehicleValue / 1000;

  totalTax = vehicleValue * vehicleTypeFactor * vehiclePowerFactor * vehicleYearFactor;

  document.querySelector("#tax").innerHTML =
    "Tax Amount Payable : " + totalTax.toFixed(2);
}
