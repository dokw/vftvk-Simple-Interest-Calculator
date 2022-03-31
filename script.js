function compute()
{
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;

    if (principal =="") {
      alert ('Please input a valid number or amount cannot be null!');
      document.getElementById('principal').focus()
      return false;
    }
    else {
      if(principal <= 0){
        alert('Please enter a positive number!');
        document.getElementById('principal').focus()
        return false;
      }
    }
    var interest = principal * years * rate/100;
    var tt = new Date().getFullYear();
    var year = parseInt(tt,10) + parseInt(years,10);
    var result = 'If you deposit <mark>' + principal + '</mark>,<br> at an interest rate of <mark>' + rate + '</mark> % <br> You will receive an amount of <mark>' + interest + '</mark>,<br> in the year <mark>' + year + '</mark>';
    document.getElementById("result").innerHTML=result;

}

function updateRate(newVal)
{
  document.getElementById('rate_val').innerText = newVal + "%"
}
