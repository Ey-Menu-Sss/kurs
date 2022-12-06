function jj() {

  // convert
  let h2 = document.querySelector(".h2");
  // convert end..

  let f_sel = document.querySelector(".f-select").value;
  let s_sel = document.querySelector(".s-select").value;
  //   input
  let input = document.querySelector(".input").value;
  console.log(input);

//   from rubl
  if (f_sel == "rub" && s_sel == "uzs") {
    let uzs = 178.93;
    let rub = 1;
    rub *= input;
    h2.textContent = `${rub * uzs} so'm`;
  } else if (f_sel == "rub" && s_sel == "usd") {
    let usd = 0.016;
    let rub = 1;
    rub *= input;
    h2.textContent = `${rub * usd}$`;
  } else if (f_sel == "rub" && s_sel == "eu") {
    let eu = 0.015;
    let rub = 1;
    rub *= input;
    h2.textContent = `${rub * eu} euro`;
  }
  // from dollar
  else if (f_sel == "usd" && s_sel == "rub") {
    let usd = 1;
    let rub = 63.08;
    usd *= input;
    h2.textContent = `${usd * rub} rub`;
  }
  else if (f_sel == "usd" && s_sel == "uzs") {
    let usd = 1;
    let uzs = 11286.13;
    usd *= input;
    h2.textContent = `${usd * uzs} so'm`;
  }
  else if (f_sel == "usd" && s_sel == "eu") {
    let usd = 1;
    let eu = 0.96;
    usd *= input;
    h2.textContent = `${usd * eu} eu`;
  }
//   from uzs
else if (f_sel == "uzs" && s_sel == "usd") {
    let uzs = 1;
    let usd = 0.000089;
    uzs *= input;
    h2.textContent = `${uzs * usd}$`;
  }
else if (f_sel == "uzs" && s_sel == "rub") {
    let uzs = 1;
    let rub = 0.0056;
    uzs *= input;
    h2.textContent = `${uzs * rub} rub`;
  }
else if (f_sel == "uzs" && s_sel == "eu") {
    let uzs = 1;
    let eu = 0.000085;
    uzs *= input;
    h2.textContent = `${uzs * eu} eu`;
  }
//   from eu
else if (f_sel == "eu" && s_sel == "usd") {
    let eu = 1;
    let usd = 1.05;
    eu *= input;
    h2.textContent = `${eu * usd}$`;
  }
else if (f_sel == "eu" && s_sel == "rub") {
    let eu = 1;
    let rub = 66.33;
    eu *= input;
    h2.textContent = `${eu * rub} rub`;
  }
else if (f_sel == "eu" && s_sel == "uzs") {
    let eu = 1;
    let uzs = 11809.47;
    eu *= input;
    h2.textContent = `${eu * uzs} so'm`;
  }
}
