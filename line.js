// array of fragments to include
// all are from 'time is the thing a body moves through'
var words = [
    "A waterfall freezes while the water still flows, so first there is a drop-off of ice, hidden at the top of the trickle.",
    "And the ice, accruing in all directions, appears as a permanent froth and rage, suggestive of movement, yet calm, great ice waves formed hard at earth.",
    "I lift ice off the sides of",
    "I hold the ice in my-",
    "and the vast expanses of unseen ice cool us.",
    "just a clear ice and a clear ice."
]

var lineLength = 24000;

// JavaScript to create a vertical line dynamically
document.addEventListener('DOMContentLoaded', function() {
    var line = document.createElement('div');
    line.style.width = '1px';
    line.style.height = lineLength + 'px';
    line.style.backgroundColor = 'blue';
    line.style.margin = '50px auto';
    document.body.appendChild(line);


    for (var i = 0; i < words.length; i++) {
        if (i%2==0){
            var leftText = document.createElement('div');
            leftText.className = 'text';
            leftText.style.top = ((lineLength/(words.length +1))*i + 50) + 'px';
            var para = document.createElement('p');
            para.textContent = words[i];
            leftText.appendChild(para);
            line.appendChild(leftText);
        }
        else{
            var rightText = document.createElement('div');
            rightText.className = 'text right';
            rightText.style.top = ((lineLength/(words.length +1))*i + 50) + 'px';
            var para = document.createElement('p');
            para.textContent = words[i];
            rightText.appendChild(para);
            line.appendChild(rightText);
        }
}});