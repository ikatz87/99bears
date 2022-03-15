//EXPERT but crazy ONE!!! 20+- ms
function k(m) {
  let z = m,
    q = ` more`,
    y = m - 1,
    h = ` bottles of beer`,
    g = h.slice(0, 7) + h.slice(8, h.length),
    s = ` on the wall`,
    a = h + s,
    e = g + s,
    l = `.`,
    n = `,`,
    b = h + l,
    c = " Take 1 down, pass it around,",
    p = ` no${q}`,
    d = `No ${q}${a}${n}${p}${b} Go to the store and buy some${q}, ${m}${a}`;
  while (z >= 0) {
    console.log(
      (z == 0 ? d + l : ``) +
        (z == 1 ? z + e + n + z + g + l + c + p + a + l : ``) +
        (z > 1 && z <= m ? z + a + n + z + b + c + y + a + l : "")
    );
    z--;
    y--;
  }
}

//  ! Beginner  60ms +

function testSpeed() {
  var word = "bottles";
  var count = 99;
  while (count > 0) {
    if (count == 1) {
      var word = "bottle";
    }
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
      if (count == 1) {
        var word = "bottle";
      }
      console.log(count + " " + word + " of beer on the wall.");
    } else {
      if (count < 1) {
        var word = "bottles";
      }
      console.log("No more " + word + " of beer on the wall.");
    }
  }
  console.timeEnd();
}
