/**
 * Created by kyla.hudson432 on 11/15/16.
 */
var numberOfFaces = 5;
var theLeftSide; // = document.getElementById("leftSide");
var repeat;
var theRightSide; // = document.getElementById("rightSide");

function generateFaces() {
    theLeftSide = document.getElementById("leftSide");
    theRightSide = document.getElementById("rightSide");


    var nodes = theRightSide.childNodes;
    for (var i = 0; i < nodes.length; i++)
    {
        theRightSide.removeChild(nodes[i]);
    }

    nodes = theLeftSide.childNodes;
    for (var i = 0; i < nodes.length; i++)
    {
        theLeftSide.removeChild(nodes[i]);
    }


    for (repeat = 0; repeat < numberOfFaces; repeat++) {
        var Image = document.createElement("img");
        //Image.src = "http://www.rainbowtrail.org/wp-content/uploads/2011/10/Thanksgiving-Clip-Art.png";
        Image.src = "images/Thanksgiving-Clip-Art.png";
        //Image.setAttribute("src","http://www.rainbowtrail.org/wp-content/uploads/2011/10/Thanksgiving-Clip-Art.png");
        var rndm = Math.floor((Math.random() * 400) + 100);
        //Image.style.top=Math.floor((Math.random()* 400)+ 100);
        //Image.style.left=Math.floor((Math.random()* 400)+ 100);
        Image.style.top = rndm.toString() + "px";
        rndm = Math.floor((Math.random() * 400) + 100);
        Image.style.left = rndm.toString() + "px";

        // Image.appendChild(theLeftSide);
        theLeftSide.appendChild(Image);
    } //end for

    //leftSideImages.removeChild(leftSideImages.lastChild);
    var leftSideImages=theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);



    var theBody=document.getElementsByTagName("body")[0];
    theLeftSide.lastChild.onclick=
        function nextLevel(event) {
            event.stopPropagation();
            //while (theLeftSide.firstChild) {
            //    theLeftSide.removeChild(theLeftSide.firstChild);
            //}
            //while (theRightSide.firstChild) {
            //    theRightSide.removeChild(theRightSide.firstChild);
                numberOfFaces += 5;
                generateFaces();
            //}

            theBody.onclick = function gameOver() {
                alert("Game Over!");
                theBody.onclick = null;
                theLeftSide.lastChild.onclick = null;
            };
        }; //end next level function


}// end function













