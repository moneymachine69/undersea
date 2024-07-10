// array of fragments to include
// all are from 'time is the thing a body moves through'
var wordsV0 = [
    "A waterfall freezes while the water still flows, so first there is a drop-off of ice, hidden at the top of the trickle.",
    "And the ice, accruing in all directions, appears as a permanent froth and rage, suggestive of movement, yet calm, great ice waves formed hard at earth.",
    "I lift ice off the sides of",
    "I hold the ice in my-",
    "and the vast expanses of unseen ice cool us.",
    "just a clear ice and a clear ice."
]

var words = [
    "The Internet is often considered intangible and digital space a disembodied one. Yet the Internet is, fundamentally, wired.",
    "Every internet connection passes through cables, connected to other cables, connected to modems, connected to devices. Every call and response travels via light and electricity along the network.",
    "The material passage is literal, but also historic. The contemporary Internet relies on the infrastructure of the transatlantic telecommunications cables, first laid in 1858.",
    "The cable was laid as part of the 'Western' globalist project to connect the world. From Walt Whitman, in 'Passage to India':",
    "'The seas inlaid with eloquent gentle wires; Yet first to sound, and ever sound, the cry with thee O soul, The Past! the Past! the Past!",
    "The Past—the dark unfathom'd retrospect! The teeming gulf—the sleepers and the shadows! The past—the infinite greatness of the past! For what is the present after all but a growth out of the past?'",
    "The routes that the cables trace along the Atlantic floor follow, almost perfectly, the trade ship paths who vesseled for the infamous Triangular Trade.",
    "From the 16th to 19th centuries, Africans were forcibly enslaved and sent to the Americas, where they labored on plantations to produce raw material (like sugar and tobacco). These goods were then exported to New England, and the then the manufactured products were sent to England. This ‘triangle’ of labor, manufacturing, and products is colloquially termed the ‘Triangular Trade.’",
    "This route was impacted by the North Atlantic Gyre, which causes a circular current around the center of the Atlantic.",
    "The contemporary cables, though carrying an immaterial realm, are still laid by ships. And those ships are dependent on the current.",
    "Underneath the opaque sea, almost all of the world's data passes, at the speed of light, along fibrous networks.",
    "And I sit in Chicago and look out at the lake (though many mistake it for an ocean, given its size).",
    "In the winter, the ice acts (though passive) to obscure further. When waves crash, the ice freezes in movement's shape.",
    "From T Fleischmann: 'the ice, ... appears as a permanent froth and rage, suggestive of movement, yet calm,...'",
    "I cannot help but mourn when I see it.",
    "Under the ocean, light burns through ceramic and metal cables. Speed! Speed! Speed!",
    "But on the surface, the ice shifts and glints. Clicks, softly, against the open sky.",
    "What will the world be when no one remembers the ice?",
	"And further forgets what unforgiving plots heralded the cables?"


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