var MarcoCMYK = ['GreatLeaderC.svg','GreatLeaderM.svg','GreatLeaderY.svg','GreatLeaderK.svg','GreatLeaderR.svg','GreatLeaderG.svg','GreatLeaderB.svg']
var MarcoSVGimg = MarcoCMYK[Math.floor(Math.random() * MarcoCMYK.length)];

MarcoSrc = 'http://asl-origin.stanford.edu/img/'+MarcoSVGimg

document.getElementById("Chairman").src = MarcoSrc
