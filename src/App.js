import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [textValue, setTextValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const numerals = {M:1000, CM:900, D:500, CD: 400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};

  const getRomanNumeralString = (number) => {
    number = parseInt(number);
    let i, roman = "";
    for ( i in numerals ) {
      while (number >= numerals[i]) {
        roman += i;
        number -= numerals[i];
      }
    }
    return roman;
  }

  const getValue = (val) => {
    if (val.toUpperCase() === 'I') {
      return 1;
    }
    if (val.toUpperCase() === 'V') {
      return 5;
    }
    if (val.toUpperCase() === 'X') {
      return 10;
    }
    if (val.toUpperCase() === 'L') {
      return 50;
    }
    if (val.toUpperCase() === 'C') {
      return 100;
    }
    if (val.toUpperCase() === 'D') {
      return 500;
    }
    if (val.toUpperCase() === 'M') {
      return 1000;
    }
    return 0;
  }

  const getRomanNumeralNumber = (s) => {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
      let s1 = getValue(s.charAt(i));
      if (i + 1 < s.length) {
        let s2 = getValue(s.charAt(i + 1));
        if (s1 >= s2) {
          res += s1;
        } else {
          res += s2 - s1;
          i++;
        }
      } else {
        res += s1;
      }
    }
    return res;
  }

  useEffect(() => {
    const num = getRomanNumeralNumber(textValue);
    setNumberValue(num);
  }, [textValue]);

  useEffect(() => {
    const s = getRomanNumeralString(numberValue);
    setTextValue(s);
  }, [numberValue]);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumberValue(e.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <label for="roman-numeral">Roman Numeral:</label>
        <br />
        <input id="roman-numeral" type="text" value={textValue} onChange={handleTextChange}/>
        <br /><br />
        <label for="number">Number:</label>
        <br />
        <input id="number" type="text" value={numberValue} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

export default App;
