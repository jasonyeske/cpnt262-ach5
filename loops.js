const sports = [
    'baseball',
    'football',
    'soccer',
    'basketball',
    'badminton',
    'tennis',
    'table tennis',
    'hockey',
    'vollyball',
    'fencing',
    'swimming',
    'water skiing',
    'water polo',
    'skating' ,
    'speed skating',
    'bobsled',
    'jet skiing'
  ];

 let output = "";
 
  for (let i = 0; i < 17; i++ ){

    output += sports[i] = sports[i].charAt(0).toUpperCase() + sports[i].substr(1) + "<br>";
  }

  console.log(output)
  document.getElementById("list").innerHTML = output;
  