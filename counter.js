function counter(counterElement, num, digit) {
  elementThis = document.querySelector(counterElement);
  num = num.toString();
  try {
    numberBefore = document.querySelector(counterElement + ' > .countBefNum').innerText;
  } catch {
    befNum = document.createElement('div');
    befNumText = document.createTextNode('0');
    befNum.appendChild(befNumText);
    befNum.className += "countBefNum";
    befNum.style.cssText = "display: none;";
    elementThis.appendChild(befNum);
  }
  if (num.length != digit) {
    loopCount = digit-num.length;
    for (var i = 0; i < loopCount; i++) {
      num = '0' + num;
    }
  }
  try {
    for (var i = 0; i < digit; i++) {
      digitThis = document.querySelector(counterElement + ' > .counterNumArea > .counterNumFrame:nth-child(' + (i+1) + ') > div');
      digitThis.style.top = '-' + num[i]*6 + 'vh';
    }
  } catch {
    numArea = document.createElement('div');
    numArea.className += "counterNumArea";
    elementThis.appendChild(numArea);
    numAreaElement = document.querySelector(counterElement + ' > .counterNumArea');
    for (var i = 0; i < digit; i++) {
      frameThis = document.createElement('span');
      frameThis.className += "counterNumFrame";
      numAreaElement.appendChild(frameThis);
      frameThis = document.querySelector(counterElement + ' > .counterNumArea > .counterNumFrame:nth-child(' + (i+1) + ')');
      digitThis = document.createElement('div');
      digitTxt = document.createTextNode('0\ \ 1\ \ 2\ \ 3\ \ 4\ \ 5\ \ 6\ \ 7\ \ 8\ \ 9');
      digitThis.appendChild(digitTxt);
      digitThis.className += "counterNum";
      digitThis.style.top = '-' + num[i]*6 + 'vh';
      frameThis.appendChild(digitThis);
    }
  }
  document.querySelector(counterElement + ' > .countBefNum').innerText = num;
}
