// ==UserScript==
// @name         OA加班申请
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       daigouwei
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    document.getElementById("Label11").addEventListener("click", display);
    function display() {
        document.getElementById("TextBoxREASON").setAttribute("value","工作需要");

        //document.getElementById("TextBoxDATE_TO").setAttribute("value",document.getElementById("TextBoxDATE_FROM").getAttribute("value"));
        document.getElementById("TextBoxDATE_TO").setAttribute("value","hhahah");

        var timeFrom = document.getElementById("DropDownListTIME_FROM");
        timeFrom.options[timeFrom.selectedIndex].text = "18:20";
        var timeTo = document.getElementById("DropDownListTIME_TO");
        timeTo.options[timeTo.selectedIndex].text = "22:00";
    }

})();
