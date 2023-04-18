class Printclass {
  doPrint() {
    console.log("I have a Ford");
  }
}
class gfg extends Printclass {
  doPrint() {
    super.doPrint();
    obj = "I have a Ford, it is a Mustang ";
    console.log("it is a Mustang.");
  }
}
var obj = new gfg();
obj.doPrint();
