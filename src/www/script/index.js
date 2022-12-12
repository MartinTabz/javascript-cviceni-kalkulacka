$(document).ready(function(){
    $('#jedna').click(function(){
      document.forms.display.value += 1;
    });
    $('#dva').click(function(){
      document.forms.display.value += 2;
    });
    $('#tri').click(function(){
      document.forms.display.value += 3;
    });
    $('#ctyri').click(function(){
      document.forms.display.value += 4;
    });
    $('#pet').click(function(){
      document.forms.display.value += 5;
    });
    $('#sest').click(function(){
      document.forms.display.value += 6;
    });
    $('#sedm').click(function(){
      document.forms.display.value += 7;
    });
    $('#osm').click(function(){
      document.forms.display.value += 8;
    });
    $('#devet').click(function(){
      document.forms.display.value += 9;
    });
    $('#nula').click(function(){
      document.forms.display.value += 0;
    });
    $('#plus').click(function(){
      document.forms.display.value += '+';
    });
    $('#minus').click(function(){
      document.forms.display.value += '-';
    });
    $('#krat').click(function(){
      document.forms.display.value += '*';
    });
    $('#deleno').click(function(){
      document.forms.display.value += '/';
    });
    $('#carka').click(function(){
      document.forms.display.value += '.';
    });
    $('#rovna').click(function(){
      if (display.value == "") {
        alert("Please enter any numbers to calculate!");
      }else{
        document.forms.display.value =
        eval(document.forms.display.value);
      }
    });
    $('#ce').click(function(){
      document.forms.display.value = "";
    });
    $('#c').click(function(){
        document.forms.display.value = "";
    });
    $('#del').click(function(){
    document.forms.display.value = "";
    });
  })