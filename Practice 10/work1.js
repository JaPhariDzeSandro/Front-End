function f1() {
  let x = prompt("type number/numbers:  ");
  let y = Math.ceil(x);
  document.write(y);
}
// f1();

function f2() {
  let x = prompt("type number/numbers:  ");
  let y = Math.floor(x);
  document.write(y);
}
// f2();

function f3() {
  let x = prompt("type number/numbers:  ");
  let y = Math.round(x);
  document.write(y);
}
// f3();

function f4(x, y) {
  if (y == true) {
    document.write(Math.ceil(x));
  } else {
    document.write(Math.floor(x));
  }
}
// f4(12.3,true)

function f5() {
  document.write(Math.random());
}
// f5();

function f6() {
  max = 50;
  min = 5;
  const result = Math.random() * (max - min) + min;
  document.write(result);
}
// f6();

function f7(a, b) {
  const result = Math.random() * (b - a) + a;
  document.write(result);
}
// f7(2,6);

function f8(a, b) {
  const result = Math.random() * (b - a) + a;
  document.write(Math.floor(result));
}
// f8(2,8);

function f9(a, b) {
  for (var i = 0; i < 10; i++) {
    const result = Math.random() * (b - a) + a;
    let x = Math.floor(result);
    let y = "<span style='font-size: 42px;font-weight: bold' >" + x + "</span>";
    document.write(y + "<br>");
  }
}
// f9(2,12);

function f10() {}
// f10();

function f11() {
  let randomthing = [
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
    "კვირა",
  ];
  let thing = randomthing[Math.floor(Math.random() * randomthing.length)];
  document.write(
    "<span style='font-size: 50px;font-weight:bold;'>" + thing + "</span>"
  );
}
// f11();

function f12() {
  var a = [
    "1.jpg",
    "2.webp",
    "3.webp",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.webp",
    "9.jpg",
    "10.jpg",
  ];
  var imgrn = Math.floor(Math.random() * a.length);
  var rnchoose = a[imgrn];
  var x = (document.getElementById("imageimage1").src = rnchoose);
}
// f12();

function f13() {
  for (var i = 2; i < 6; i++) {
    var a = [
      "1.jpg",
      "2.webp",
      "3.webp",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.webp",
      "9.jpg",
      "10.jpg",
      "11.avif",
      "12.avif",
      "13.avif",
      "14.avif",
      "15.avif",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.avif",
    ];
    var imgrn = Math.floor(Math.random() * a.length);
    var rnchoose = a[imgrn];
    var x = (document.getElementById("imageimage" + i).src = rnchoose);
  }
}
// f13();

function f14() {
  var a = [
    "1.jpg",
    "2.webp",
    "3.webp",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.webp",
    "9.jpg",
    "10.jpg",
    "11.avif",
    "12.avif",
    "13.avif",
    "14.avif",
    "15.avif",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.avif",
  ];
  var imgrn = Math.floor(Math.random() * a.length);
  var rnchoose = a[imgrn];
  var x = (document.getElementById("imageimage6").src = rnchoose);

  let randomthing = [
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
    "კვირა",
  ];
  let thing = randomthing[Math.floor(Math.random() * randomthing.length)];
  document.write(
    "<span style='font-size: 50px;font-weight:bold;'>" + thing + "</span>"
  );
}
// f14();

function f15() {
  var a = ["1.jpg", "2.webp", "3.webp", "4.jpg", "5.jpg"];
  var imgrn = Math.floor(Math.random() * a.length);
  var rnchoose = a[imgrn];
  var x = (document.getElementById("imageimage7").src = rnchoose);

  let randomthing = [
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
    "კვირა",
  ];
  let thing = randomthing[Math.floor(Math.random() * randomthing.length)];
  document.write(
    "<span style='font-size: 50px;font-weight:bold;'>" + thing + "</span>"
  );
}
// f15();

function f16() {
  var monthnum = [];
  for (var i = 1; i < 32; i++) {
    var sas = i;
    monthnum.push(sas);
  }
  var s = monthnum[Math.floor(Math.random() * monthnum.length)];
  var sss = "<span style='font-size:50px;font-weight:bold;'>" + s + "</span>";
  document.write(sss);
}
// f16();

function f17() {
  var monthnum = [];
  for (var i = 1; i < 32; i++) {
    var sas = i;
    monthnum.push(sas);
  }
  var s = monthnum[Math.floor(Math.random() * monthnum.length)];
  var sss = "<span style='font-size:50px;font-weight:bold;'>" + s + "</span>";
  document.write(sss);

  var a = [
    "1.jpg",
    "2.webp",
    "3.webp",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.webp",
    "9.jpg",
    "10.jpg",
  ];
  var imgrn = Math.floor(Math.random() * a.length);
  var rnchoose = a[imgrn];
  var x = (document.getElementById("imageimage1").src = rnchoose);
}
// f17();

function f18() {
  for (var i = 1; i < 13; i++) {
    var a = [
      "1.jpg",
      "2.webp",
      "3.webp",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.webp",
      "9.jpg",
      "10.jpg",
      "11.avif",
      "12.avif",
      "13.avif",
      "14.avif",
      "15.avif",
      "16.jpg",
      "17.jpg",
      "18.jpg",
      "19.jpg",
      "20.avif",
    ];
    var imgrn = Math.floor(Math.random() * a.length);
    var rnchoose = a[imgrn];
    var x = (document.getElementById(i).src = rnchoose);
  }
}
// f18();

function f19() {
  var tD = prompt("number of td ?: ");
  var tR = prompt("number of tr ?: ");

  var tdd = "<td></td>";
  var tdmix = " <td></td>";

  for (var i = 0; i < tD - 1; i++) {
    var tdmix = tdmix + "\n " + tdd;
  }

  var trr = "<tr>\n" + tdmix + "\n</tr>";
  var trmix = " <tr>\n" + tdmix + "\n</tr>";
  for (var i = 0; i < tR - 1; i++) {
    var trmix = trmix + "\n " + trr;
  }

  var table1212 = (document.getElementById("tableti:dd").innerHTML = trmix);
}
// f19(); ?????

function f20() {
  var x = prompt(
    "ჩაწერე რამე და გამოგიტანს სტრიქონის სიგრძის რაოდენობასსსსსსს ???? "
  );
  var y =
    "<span style='font-size:50px; font-weight: bold;'>" + x.length + "</span>";
  document.write(y);
}
// f20();

function f21() {
  var x = prompt(
    "პროგრამა დაგითვლის რამდენი a გაქვს გამოყენებული შენ მიერ გადაცემული სტრინგიდან გამომდინარე ? "
  );
  var countbih = x.match(/a/g).length;
  var x =
    "<span style='font-size: 50px; font-weight: bold;'>" + countbih + "</span>";
  document.write(x);
}
// f21();

function f24() {
  var Word = "";
  for (var i = 0; i < 40; i++) {
    var x = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var y = Math.floor(Math.random() * x.length);
    var yy = x[y];
    Word += yy;
  }
  var Wordd =
    "<span style='font-size: 23px; font-weight: bold;'>" + Word + "</span>";
  document.write(Wordd);
}
// f24();

function f25() {
  var z = prompt(
    "რამდენი ასოსგან გინდა რომ დააგენერიროს სიტყვა პროგრამამ????????? "
  );
  var Word = "";
  for (var i = 0; i < z; i++) {
    var x = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var y = Math.floor(Math.random() * x.length);
    var yy = x[y];
    Word += yy;
  }
  var Wordd =
    "<span style='font-size: 23px; font-weight: bold;'>" + Word + "</span>";
  document.write(Wordd);
}
// f25();
