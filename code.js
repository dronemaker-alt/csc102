//set a fucnction//
function updatetext(){

    //button input and change output//
    function init(){
        imgObj = document.getElementById('myImage');
        imgObj.style.position= 'relative';
        imgObj.style.left = '0px';
        }
        
        function startStop(){
        moveRight();
        change();
        }
        
        function moveRight(){
        imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
        animate = setTimeout(moveRight,50); 
        }
        
        function change(){
        var elem = document.getElementById("startButton");
        if (elem.value=="Stop") elem.value = "Start";
        else elem.value = "Stop";
        }
        
        function stop(){
        clearTimeout(animate);
        }
        
        window.onload =init;
    document.getElementById("heading").innerHTML = "javascript is awesome"
}
