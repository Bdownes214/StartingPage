var $ = function(sel){
    var elem = document.querySelectorAll(sel);
    
    var text = function(str){
        for(var i = 0; i < elem.length; i++){
            elem[i].innerText = str;
        }
    }
    var addClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].ClassList.add(className);
        }
    }
    var removeClass = function(className){
        for(var i = 0; i < elem.length; i++){
            elem[i].ClassList.remove(className);
        }
    }
    var toggleClass = function(className){
        for(var i = 0; i < elem.length; i++){
            if(elem[i].className.includes(className)){
                elem[i].ClassList.remove(className);
            }
            else{
                elem[i].ClassList.add(className);
            }
        }
    }
    var html = function(newHtml){
        for(var i = 0; i < elem.length; i++){
            elem[i].innerHTML = newHtml;
        }
    }
    var publicAPI = {
        element: elem,
        text: text,
        addClass: addClass,
        html: html
    }

    return publicAPI;
};
