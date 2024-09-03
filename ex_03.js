function changebackground() {
var magicNumber = 1
  if (magicNumber === 1) {
    paintYellowRectangle(); magicNumber = 2
  }

  if (magicNumber === 2) { 
    paintGreenRectangle(); magicNumber = 3
  }
 
  if (magicNumber === 3) {
    paintRedRectangle();
  }
}

changebackground();
