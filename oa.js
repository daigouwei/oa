// ==UserScript==
// @name         OA
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       daigouwei
// @match        http://172.26.10.41/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...


    document.getElementById("Label11").addEventListener("click", display);
    function display() {
        var iframeDocument = window.frames["CalFrame"].document;
        var outYearMonth = iframeDocument.getElementById("yyyymm").innerHTML;
        //alert(outYearMonth);
        var day;
        for(var i=1;i<=42;i++)
        {
            var de=iframeDocument.getElementById("d"+i);
            if(de.getAttribute("bgcolor")=="Orange")
            {
                day = de.innerHTML;
                if(day<10)
                    day = "0"+day;
                break;
            }
        }
        var date = outYearMonth.slice(0,4)+"-"+outYearMonth.slice(5,7)+"-"+day;
        document.getElementById("TextBoxDATE_TO").setAttribute("value",date);

        //alert(day);
        //alert(date);

        alert("hahha0");

        alert(document.getElementById("GridViewPUNCH_CARD_INFO_ctl04_lblKQ_DATE").innerHTML);

        var forWorkId;
        for(var j=1;j<=31;j++)
        {
            if(j<10)
                j = "0"+j;
            alert("hahha1");
            var dc=document.getElementById("GridViewPUNCH_CARD_INFO_ctl"+j+"_lblKQ_DATE");
            alert("hahha2");
            if(dc.innerHTML==date)
            {
                alert("hahha3");
                forWorkId = j;
                break;
            }
            alert("hahha4");
        }
        alert(forWorkId);
        alert("hahha");

        var timeFrom = document.getElementById("DropDownListTIME_FROM");
        timeFrom.options[timeFrom.selectedIndex].text = "18:20";
        var timeTo = document.getElementById("DropDownListTIME_TO");
        timeTo.options[timeTo.selectedIndex].text = "22:00";
        document.getElementById("TextBoxREASON").setAttribute("value","work");
    }
})();
