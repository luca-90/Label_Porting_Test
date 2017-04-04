var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib=Object.assign(com.fc.JavaScriptDistLib,{getProperty:function(objName,property){try{var elem=$('[obj-name= "'+objName+'"]');var value=null;switch(property){case"width":value=elem.width();break;case"height":value=elem.height();break;case"x":value=Math.round(parseFloat(elem.css("transform").split(",")[4]));break;case"y":value=Math.round(parseFloat(elem.css("transform").split(",")[5]));break;case"Alpha":value=elem.css("opacity");break;case"Background color":value=elem.css("background-color");break;case"Horizontal scroll":value=elem.css("overflow-x");break;case"Vertical scroll":value=elem.css("overflow-y");break}return value}catch(e){throw e}},setProperty:function(objName,property,value){try{var elem=$('[obj-name= "'+objName+'"]');switch(property){case"width":elem.css("width",value+"px");break;case"height":elem.css("height",value+"px");break;case"x":var yPos=Math.round(parseFloat(elem.css("transform").split(",")[5]));elem.css("transform","translate("+value+"px,"+yPos+"px)");break;case"y":var xPos=Math.round(parseFloat(elem.css("transform").split(",")[4]));elem.css("transform","translate("+xPos+"px,"+value+"px)");break;case"Alpha":elem.css("opacity",value/100);break;case"Background color":elem.css("background-color",value);break;case"Horizontal scroll":var code=elem.css("overflow-x","hidden");if(value){code=elem.css("overflow-x","scroll")}break;case"Vertical scroll":var code=elem.css("overflow-y","hidden");if(value){code=elem.css("overflow-y","scroll")}break}}catch(e){throw e}},removeGesture:function(objName,gesture){try{var elem=$('[obj-name= "'+objName+'"]');switch(gesture){case"CLICK":return elem.unbind("click");break}}catch(e){throw e}},actionHide:function(block){var object_name=block.getFieldValue("OBJECT");var elemSelector='[obj-name="'+object_name+'"]';var code="  $('"+elemSelector+"').hide();";return code},actionShow:function(block){var object_name=block.getFieldValue("OBJECT");var elemSelector='[obj-name="'+object_name+'"]';var code="  $('"+elemSelector+"').show();";return code},sensorIsVisible:function(block){var object_name=block.getFieldValue("OBJECT");var elemSelector='[obj-name="'+object_name+'"]';var code="  $('"+elemSelector+"').is(':visible')";return[code,Blockly.JavaScript.ORDER_NONE]},handleExceptionNative:function(e){console.warn("Exception: ",e);if(window.parent){window.parent.com.fc.JavaScriptGenerator.handleExceptionNative(e)}},reset:function(){var thisObject=this;Object.keys(thisObject).forEach(function(key){if(typeof thisObject[key].reset==="function")thisObject[key].reset()})}});var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.MapContainer={maps:{},reset:function(){if(com.fc.JavaScriptDistLib.distMode==="deploy")this.maps={}},setProperty:function(objName,property,value){},getProperty:function(objName,property){},mapViewSetZoom:function(mapName,zoom){return this.maps[mapName].setZoom(zoom)},toggleMapUserInteraction:function(mapName,interaction){var options={draggable:false,scrollwheel:false,panControl:false,zoom:this.maps[mapName].getZoom()};if(interaction){var options={draggable:true,scrollwheel:true,panControl:true,zoom:this.maps[mapName].getZoom()}}var newOptions=this.maps[mapName].setOptions(options);return newOptions},setLocationForMarker:function(marker,location){var latlng=new google.maps.LatLng(location.lat,location.lng);marker.setPosition(latlng)},createMarkerWithImage:function(image,label){var marker=new google.maps.Marker({title:label,icon:image});return marker},addMarkerToMap:function(mapName,marker){marker.setMap(this.maps[mapName])},setMarkerLabel:function(text,marker){return marker.setTitle(text)},setMarkerImage:function(image,marker){return marker.setIcon(image)},removeMarker:function(marker){return marker.setMap(null)},mapViewSetLocation:function(mapName,location,animation){var latlng=new google.maps.LatLng(location.lat,location.lng);this.maps[mapName].setCenter(latlng)},MapException:function(snappMessage,msg){this.name="MapException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.MapContainer.MapException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.MapContainer.MapException.prototype.constructor=com.fc.JavaScriptDistLib.MapContainer.MapException;var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.GraphContainer={setProperty:function(objName,property,value){try{var elemSelector='[obj-name="'+objName+'"]';var elem=$(elemSelector);var graph;$(elemSelector).find(".c3").each(function(){graph=$(this).data("c3-chart")});switch(property){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(objName,property,value);break;case"Type":graph.transform(value);break;case"BG Color":$(elemSelector).find("#fcLine").css("background-color",value);break;case"Legends":var show="visible";if(!value){show="hidden"}d3.select(elemSelector).selectAll("g.c3-legend-item").style("visibility",show);break;case"Grid":var show="visible";if(!value){show="hidden"}d3.select(elemSelector).selectAll("g.c3-grid").style("visibility",show);break;case"X Axis Color":d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("path").style("stroke",value);break;case"Y Axis Color":d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("path").style("stroke",value);break;case"X Axis Text Color":d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("fill",value);break;case"Y Axis Text Color":d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("fill",value);break;case"X Axis Line Width":d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width",value);break;case"Y Axis Line Width":d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("path").style("stroke-width",value);break;case"Legend Text":d3.select(elemSelector).selectAll("text.c3-axis-x-label").style("stroke",value);d3.select(elemSelector).selectAll("text.c3-axis-y-label").style("stroke",value);d3.select(elemSelector).selectAll("g.c3-legend-item").selectAll("text").style("stroke",val);break;case"Fill Alpha":d3.select(elemSelector).selectAll(".c3-area ").style("opacity",value/100);d3.select(elemSelector).selectAll("g.c3-chart-bars ").selectAll("path").style("opacity",value/100);break;case"Line Width":d3.select(elemSelector).selectAll("g.c3-chart-lines").selectAll("path").style("stroke-width",value);break;case"Line Circle Color":d3.select(elemSelector).selectAll("circle").style("stroke",value);d3.select(elemSelector).selectAll("circle").style("fill",value);break;case"Circle Radius":d3.select(elemSelector).selectAll("circle").attr("r",value);break;case"X Axis Text":graph.axis.labels({x:value});break;case"Y Axis Text":graph.axis.labels({y:value});break;case"Fill Color":d3.select(elemSelector).selectAll(".c3-area ").style("fill",value);break;case"Bar Color":d3.select(elemSelector).selectAll("g.c3-chart-bar").selectAll("path").style("fill",value);break;case"Draw Line Values":var show="visible";if(!value){show="hidden"}d3.select(elemSelector).selectAll("g.c3-chart-text").selectAll("text").style("visibility",show);break;case"Axis Font Size":d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("font-size",value);d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("font-size",value);d3.select(elemSelector).selectAll("text.c3-text").style("font-size",value);break;case"Line Filled":if(value){graph.transform("area")}else{graph.transform("line")}break;case"Smooth Line":if(value){graph.transform("area-spline")}else{graph.transform("area")}break}}catch(e){throw new GraphException(e)}},getProperty:function(objName,property){try{var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var value;var graph;$(elemSelector).find(".c3").each(function(){graph=$(this).data("c3-chart")});switch(property){case"width":case"height":case"x":case"y":value=com.fc.JavaScriptDistLib.getProperty(objName,property);break;case"Type":value=graph.type;break;case"BG Color":value=$(elemSelector).find("#fcLine").css("background-color");break;case"Legends":value=d3.select(elemSelector).selectAll("g.c3-legend-item").style("visibility");break;case"Grid":value=d3.select(elemSelector).selectAll("g.c3-grid").style("visibility");break;case"X Axis Color":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("path").style("stroke");break;case"Y Axis Color":value=d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("path").style("stroke");break;case"X Axis Text Color":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("fill");break;case"Y Axis Text Color":value=d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("text").selectAll("tspan").style("fill");break;case"X Axis Line Width":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width");break;case"Y Axis Line Width":value=d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("path").style("stroke-width");break;case"Legend Text":value=d3.select(elemSelector).selectAll("text.c3-axis-x-label").style("stroke");break;case"Fill Alpha":value=d3.select(elemSelector).selectAll(".c3-area ").style("opacity")*100;break;case"Line Width":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("path").style("stroke-width");break;case"Line Circle Color":value=d3.select(elemSelector).selectAll("circle").style("stroke");break;case"Circle Radius":value=d3.select(elemSelector).selectAll("circle").attr("r");break;case"X Axis Text":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("text").html();break;case"Y Axis Text":value=d3.select(elemSelector).selectAll("g.c3-axis-y").selectAll("text").html();break;case"Fill Color":value=d3.select(elemSelector).selectAll(".c3-area ").style("fill");break;case"Bar Color":value=d3.select(elemSelector).selectAll("g.c3-chart-bar").selectAll("path").style("fill");break;case"Draw Line Values":value=d3.select(elemSelector).selectAll("g.c3-chart-text").style("opacity");break;case"Axis Font Size":value=d3.select(elemSelector).selectAll("g.c3-axis-x").selectAll("text").selectAll("tspan").style("font-size");break}return value}catch(e){throw new GraphException(e)}},createChartWithList:function(objName,xArr,yArr,name){var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var value;var graph;$(elemSelector).find(".c3").each(function(){graph=$(this).data("c3-chart")});var xAxisData=[];var yAxisData=[];if(yArr!=null){var populateXAxis=false;if(xArr!=null){for(var xIndex=0;xIndex<xArr.length;xIndex++){xAxisData.push(xArr[xIndex])}}else{populateXAxis=true}yAxisData.push(name);for(var i=0;i<yArr.length;i++){yAxisData.push(yArr[i]);if(populateXAxis){xAxisData.push(i)}}var chartData={};chartData.columns=[];chartData.columns.push(yAxisData);chartData.categories=xAxisData;chartData.unload=true;var updatedChart=graph.load(chartData);return updatedChart}else{throw new GraphException(e)}},addChartTransition:function(objName,x,y){var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var value;var graph;$(elemSelector).find(".c3").each(function(){graph=$(this).data("c3-chart")});var dataArr=[graph.data()[0].id];var graphInitArr=[graph.data()[0].id];for(var i=0;i<graph.data()[0].values.length;i++){graphInitArr.push(0)}for(var i=0;i<graph.data()[0].values.length;i++){dataArr.push(graph.data()[0].values[i].value)}var initGraph=graph.load({columns:[graphInitArr]});var updatedGraph=setTimeout(function(){graph.load({columns:[dataArr]})},x);return[initGraph,updatedGraph]},addValuesToChart:function(objName,xVal,yVal,name){var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var value;var graph;$(elemSelector).find(".c3").each(function(){graph=$(this).data("c3-chart")});var xAxisArr=graph.categories();xAxisArr.push(xVal);var yAxisArr=[name];var graphData=graph.data()[0].values;for(var i=0;i<graphData.length;i++){yAxisArr.push(graphData[i].value)}yAxisArr.push(yVal);console.log(xAxisArr+yAxisArr);var chartData={};chartData.columns=[];chartData.columns.push(yAxisArr);chartData.categories=xAxisArr;chartData.unload=true;var updatedChart=graph.load(chartData);return updatedChart},GraphException:function(snappMessage,msg){this.name="GraphException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.GraphContainer.GraphException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.GraphContainer.GraphException.prototype.constructor=com.fc.JavaScriptDistLib.GraphContainer.GraphException;var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.Image={createImageFromUrl:function(url,successCallBack){successCallBack(url)},setProperty:function(objName,property,value){try{var elemSelector='[obj-name="'+objName+'"]';var elem=$(elemSelector);console.log(value);switch(property){case"Image":elem.find("img").attr("src",value);break;case"width":case"height":case"Alpha":case"Background color":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(objName,property,value);break;case"Scaling":switch(value){case"stretch":$(elemSelector+" img").css("width","inherit");$(elemSelector+" img").css("height","inherit");$(elemSelector+" img").attr("scale-type","stretch");break;case"fit":$(elemSelector+" img").css("width","inherit");$(elemSelector+" img").css("height","initial");$(elemSelector+" img").attr("scale-type","fit");break;case"crop":$(elemSelector+" img").css("width","initial");$(elemSelector+" img").css("height","initial");$(elemSelector+" img").attr("scale-type","crop");break}break}}catch(e){throw new com.fc.JavaScriptDistLib.Image.ImageException(e)}},getProperty:function(objName,property){try{var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var value;switch(property){case"Image":value=elem.attr("src");break;case"width":case"height":case"x":case"y":case"Alpha":case"Background color":value=com.fc.JavaScriptDistLib.getProperty(objName,property);break;case"Scaling":value=elem.attr("scale-type");break}return value}catch(e){throw new com.fc.JavaScriptDistLib.Image.ImageException(e)}},ImageException:function(snappMessage,msg){this.name="ImageException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.Image.ImageException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.Image.ImageException.prototype.constructor=com.fc.JavaScriptDistLib.Image.ImageException;function setTextValue(id,val){try{return $("#"+id+" input").val(val)}catch(e){throw new TextBoxException(e)}}function setTextFontSize(id,val){try{return $("#"+id+" input").css("font-size",val+"px")}catch(e){throw new TextBoxException(e)}}function setTextAlpha(id,val){try{return $("#"+id+" input").css("opacity",val/100)}catch(e){throw new TextBoxException(e)}}function setTextWidth(id,val){try{$("#"+id+" input").css("width",val+"px")}catch(e){throw new TextBoxException(e)}}function setTextHeight(id,val){try{$("#"+id+" input").css("height",val+"px")}catch(e){throw new TextBoxException(e)}}function setTextXPos(id,val){try{var yPos=Math.round($("#"+id).position().top);var changedXPos=$("#"+id).css("transform","translate("+val+"px,"+yPos+"px)");return changedXPos}catch(e){throw new TextBoxException(e)}}function setTextYPos(id,val){try{var xPos=Math.round($("#"+id).position().left);var changedYPos=$("#"+id).css("transform","translate("+xPos+"px,"+val+"px)");return changedYPos}catch(e){throw new TextBoxException(e)}}function setTextAlignment(id,val){try{if(val.toLowerCase()=="left"||val.toLowerCase()=="center"||val.toLowerCase()=="right"){return $("#"+id+" input").css("text-align",val.toLowerCase())}else{throw new TextBoxException("Alignment shoube be 'left' / 'center","right")}}catch(e){throw new TextBoxException(e)}}function setTextVerticalAlignment(id,val){try{if(val.toLowerCase()=="top"||val.toLowerCase()=="middle"||val.toLowerCase()=="bottom"){return $("#"+id+" input").css("vertical-align",val.toLowerCase())}else{throw new TextBoxException("Alignment shoube be 'top' / 'middle","bottom")}}catch(e){throw new TextBoxException(e)}}function setTextFontStyle(id,val){try{if(val.toLowerCase()=="normal"||val.toLowerCase()=="italic"||val.toLowerCase()=="oblique"||val.toLowerCase()=="bold"){return $("#"+id+" input").css("font-style",val.toLowerCase())}else{throw new TextBoxException("Font Style should be 'normal' / 'italic","oblique")}}catch(e){throw new TextBoxException(e)}}function setTextFontFamily(id,val){try{return $("#"+id+" input").css("font-family",val)}catch(e){throw new TextBoxException(e)}}function setTextbackgroundColor(id,val){try{return $("#"+id+" input").css("background-color",val)}catch(e){throw new TextBoxException(e)}}function setTextColor(id,val){try{return $("#"+id+" input").css("color",val)}catch(e){throw new TextBoxException(e)}}function toggleTextEnabled(id,val){try{$("#"+id+" input").attr("disabled",!val)}catch(e){throw new TextBoxException(e)}}function setPasswordChars(id,val){try{var inputType="text";if(val)inputType="password";$("#"+id+" input").attr("type",inputType)}catch(e){throw new TextBoxException(e)}}function setMaxChars(id,val){try{$("#"+id+" input").attr("maxlength",val)}catch(e){throw new TextBoxException(e)}}function setMaxLines(id,val){try{}catch(e){throw new TextBoxException(e)}}function setInputType(id,val){try{switch(val){case"numeric":case"number":var inputType="number";break;case"email":var inputType="email";break;default:var inputType="text";break}return $("#"+id+" input").attr("type",inputType)}catch(e){throw new TextBoxException(e)}}function setNavigationOrder(id,val){try{}catch(e){throw new TextBoxException(e)}}function getTextValue(id){try{return $("#"+id+" input").val()}catch(e){throw new TextBoxException(e)}}function getTextFontSize(id){try{return $("#"+id+" input").css("font-size")}catch(e){throw new TextBoxException(e)}}function getTextAlpha(id){try{return $("#"+id+" input").css("opacity")*100}catch(e){throw new TextBoxException(e)}}function getTextWidth(id){try{return $("#"+id+" input").width()}catch(e){throw new TextBoxException(e)}}function getTextHeight(id){try{return $("#"+id+" input").height()}catch(e){throw new TextBoxException(e)}}function getTextXPos(id){try{return Math.round($("#"+id).position().left)}catch(e){throw new TextBoxException(e)}}function getTextYPos(id){try{return Math.round($("#"+id).position().top)}catch(e){throw new TextBoxException(e)}}function getTextAlignment(id){try{return $("#"+id+" input").css("text-align")}catch(e){throw new TextBoxException(e)}}function getTextVerticalAlignment(id){try{return $("#"+id+" input").css("vertical-align")}catch(e){throw new TextBoxException(e)}}function getTextFontStyle(id){try{return $("#"+id+" input").css("font-style")}catch(e){throw new TextBoxException(e)}}function getTextFontFamily(id){try{return $("#"+id+" input").css("font-family")}catch(e){throw new TextBoxException(e)}}function getTextbackgroundColor(id){try{return $("#"+id+" input").css("background-color")}catch(e){throw new TextBoxException(e)}}function getTextColor(id){try{return $("#"+id+" input").css("color")}catch(e){throw new TextBoxException(e)}}function getTextEnabled(id){try{var disabled=$("#"+id+" input").attr("disabled");return!disabled}catch(e){throw new TextBoxException(e)}}function getPasswordChars(id){try{var inputType=$("#"+id+" input").attr("type");var isPassword=false;if(inputType=="password")isPassword=true;return isPassword}catch(e){throw new TextBoxException(e)}}function getMaxChars(id){try{return $("#"+id+" input").attr("maxlength")}catch(e){throw new TextBoxException(e)}}function getInputType(id){try{return $("#"+id+" input").attr("type")}catch(e){throw new TextBoxException(e)}}function getNavigationOrder(id){try{}catch(e){throw new TextBoxException(e)}}function TextBoxException(snappMessage,msg){this.name="TextBoxException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}TextBoxException.prototype=Object.create(Error.prototype);TextBoxException.prototype.constructor=TextBoxException;var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.Location={locationCreate:function(lat,lng){var locationObj={lat:lat,lng:lng};return locationObj},locationGetLatitude:function(loc){return loc.lat},locationGetLongitude:function(loc){return loc.lng},createLocationFromText:function(text,successCallback,errorCallback){console.log("createLocationFromText "+text);var locationArr=text.split(",");if(locationArr.length==2){console.log(locationArr);var latitude=locationArr[0];var longitude=locationArr[1];var locationObj={lat:latitude,lng:longitude};successCallback(locationObj)}else{errorCallback("Invalid Location")}}};var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.TimeLibrary={createTime:function(time){var t=time.match(/^(\d{2}):(\d{2})(\s)(\w{2})(\s)(\d{2})\/(\d{2})\/(\d{4})$/);if(t===null)return null;var d=+t[6],m=+t[7],y=+t[8],sub=t[4],h=+t[1],min=+t[2];if(sub.toString().toLowerCase().localeCompare("pm")==0)h=h+12;else if(sub.toString().toLowerCase().localeCompare("am")!=0)return sub;return new Date(y,m-1,d,h,min)},createTimeNow:function(){return new Date},createTimeFromTimestamp:function(timestamp){return new Date(Number(timestamp))},createTimestampFromTime:function(time){return new Date(time).getTime()},textFromTime:function(time,op){var dateTime=new Date(time);switch(op){case"DATE_TIME_12":var H=dateTime.getHours();var M=dateTime.getMinutes();var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();var a="AM";if(H>12){H=H-12;a="PM"}if(M.toString().length==1){M="0"+M}return H+":"+M+" "+a+" "+d+"/"+m+"/"+y;case"DATE_TIME_12_US":var H=dateTime.getHours();var M=dateTime.getMinutes();var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();var a="AM";if(H>12){H=H-12;a="PM"}if(M.toString().length==1){M="0"+M}return H+":"+M+" "+a+" "+m+"/"+d+"/"+y;case"DATE_TIME_24":var H=dateTime.getHours();var M=dateTime.getMinutes();var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();if(M.toString().length==1){M="0"+M}return H+":"+M+" "+d+"/"+m+"/"+y;case"DATE_TIME_24_US":var H=dateTime.getHours();var M=dateTime.getMinutes();var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();if(M.toString().length==1){M="0"+M}return H+":"+M+" "+m+"/"+d+"/"+y;case"TIME_12":var H=dateTime.getHours();var M=dateTime.getMinutes();var a="AM";if(H>12){H=H-12;a="PM"}return H+":"+M+" "+a;case"TIME_24":var H=dateTime.getHours();var M=dateTime.getMinutes();return H+":"+M;case"DATE":var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();return d+"/"+m+"/"+y;case"DATE_US":var m=dateTime.getMonth()+1;var d=dateTime.getDate();var y=dateTime.getFullYear();return m+"/"+d+"/"+y;default:return""}},elapsedComponent:function(timestamp,num){return Math.floor(timestamp/num)},elapsedComponentsFromTime:function(time,components){var dateTime=new Date(time.getTime());var dateZeroTime=new Date(0);var y=dateTime.getUTCFullYear()-dateZeroTime.getUTCFullYear();var m=dateTime.getUTCMonth()-dateZeroTime.getUTCMonth();var d=dateTime.getUTCDate()-dateZeroTime.getUTCDate();var h=dateTime.getUTCHours()-dateZeroTime.getUTCHours();var M=dateTime.getUTCMinutes()-dateZeroTime.getUTCMinutes();var s=dateTime.getUTCSeconds()-dateZeroTime.getUTCSeconds();switch(components){case"S":return[s];case"SM":return[M,s];case"SMH":return[h,M,s];case"SMHD":return[d,h,M,s];case"SMHDM":return[m,d,h,M,s];case"SMHDMY":return[y,m,d,h,M,s];default:return[]}},componentsFromTime:function(time,components){var dateTime=new Date(time);switch(components){case"S":return[dateTime.getSeconds()];case"SM":return[dateTime.getMinutes(),dateTime.getSeconds()];case"SMH":return[dateTime.getHours(),dateTime.getMinutes(),dateTime.getSeconds()];case"SMHD":return[dateTime.getDate(),dateTime.getHours(),dateTime.getMinutes(),dateTime.getSeconds()];case"SMHDM":return[dateTime.getMonth()+1,dateTime.getDate(),dateTime.getHours(),dateTime.getMinutes(),dateTime.getSeconds()];case"SMHDMY":return[dateTime.getFullYear(),dateTime.getMonth()+1,dateTime.getDate(),dateTime.getHours(),dateTime.getMinutes(),dateTime.getSeconds()];default:return[]}},numberDayOfWeekFromDate:function(time){var dateTime=new Date(time);if(dateTime.getDay()==0)return 7;return dateTime.getDay()},stringDayOfWeekFromDate:function(time){var dateTime=new Date(time);var ar=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");return ar[dateTime.getDay()]},createTimeInterval:function(sec,min,hou,day,mon,yea){return[sec,min,hou,day,mon,yea]},addIntervalFromTime:function(time,timeInt){if(timeInt.constructor!==Array||timeInt.length!=6){return new Date(time)}var elap=this.componentsFromTime(time,"SMHDMY");var year=elap[0]+Number(timeInt[5]);var month=elap[1]-1+Number(timeInt[4]);var day=elap[2]+Number(timeInt[3]);var hours=elap[3]+Number(timeInt[2]);var min=elap[4]+Number(timeInt[1]);var sec=elap[5]+Number(timeInt[0]);return new Date(year,month,day,hours,min,sec)},subtractIntervalFromTime:function(time,timeInt){if(timeInt.constructor!==Array||timeInt.length!=6){return time}var elap=this.componentsFromTime(time,"SMHDMY");var year=elap[0]-Number(timeInt[5]);var month=elap[1]-1-Number(timeInt[4]);var day=elap[2]-Number(timeInt[3]);var hours=elap[3]-Number(timeInt[2]);var min=elap[4]-Number(timeInt[1]);var sec=elap[5]-Number(timeInt[0]);return new Date(year,month,day,hours,min,sec)},dateFormat:function(dateObj,format){var keys={yyyy:"1",yy:"2",y:"3",MMMM:"4",MMM:"5",MM:"6",M:"7",dd:"8",d:"9",EEEE:"10",EEE:"11",HH:"12",H:"13",hh:"14",h:"15",mm:"16",m:"17",ssss:"18",ss:"19",s:"20",a:"21"};var result=format;var fullyear=dateObj.getFullYear();var year2dgt=String(fullyear%100);var month=String(dateObj.getMonth()+1);var monthLit=["January","February","March","April","May","June","July","August","September","October","November","December"][dateObj.getMonth()];var day=String(dateObj.getDate());var weekday=String(dateObj.getDay());var weekdayLit=["Sunday","Monday","Thursday","Wednesday","Tuesday","Friday","Saturday"][dateObj.getDay()];var min=String(dateObj.getMinutes());var hour24=String(dateObj.getHours());var hour12=(Number(dateObj.getHours())%12).toString();var sc=String(dateObj.getSeconds());var msec=String(dateObj.getMilliseconds());var am_pm=Number(dateObj.getHours())>=12?"PM":"AM";var escChar="%";while(format.search(escChar)>=0)escChar+="%";if(year2dgt.length==1)year2dgt="0"+year2dgt;if(month.length==1)month="0"+month;if(day.length==1)day="0"+day;if(min.length==1)min="0"+min;if(hour24.length==1)hour24="0"+hour24;if(hour12.length==1)hour12="0"+hour12;if(sc.length==1)sc="0"+sc;if(msec.length==1)msec="00"+msec;if(msec.length==2)msec="0"+msec;if(Number(hour12)==0)hour12="12";var escapeKey=function(string,key){return string.replace(key,escapedKey(key))};var escapedKey=function(key){return escChar+keys[key]+escChar};var isolateKeys=function(format){var isolated=format;isolated=escapeKey(isolated,"yyyy");isolated=escapeKey(isolated,"yy");isolated=escapeKey(isolated,"y");isolated=escapeKey(isolated,"MMMM");isolated=escapeKey(isolated,"MMM");isolated=escapeKey(isolated,"MM");isolated=escapeKey(isolated,"M");isolated=escapeKey(isolated,"dd");isolated=escapeKey(isolated,"d");isolated=escapeKey(isolated,"EEEE");isolated=escapeKey(isolated,"EEE");isolated=escapeKey(isolated,"HH");isolated=escapeKey(isolated,"H");isolated=escapeKey(isolated,"hh");isolated=escapeKey(isolated,"h");isolated=escapeKey(isolated,"mm");isolated=escapeKey(isolated,"m");isolated=escapeKey(isolated,"ssss");isolated=escapeKey(isolated,"ss");isolated=escapeKey(isolated,"s");isolated=escapeKey(isolated,"a");return isolated};result=isolateKeys(result);result=result.replace(escapedKey("yyyy"),fullyear);result=result.replace(escapedKey("yy"),year2dgt);result=result.replace(escapedKey("y"),Number(fullyear));result=result.replace(escapedKey("MMMM"),monthLit);result=result.replace(escapedKey("MMM"),monthLit.substr(0,3));result=result.replace(escapedKey("MM"),month);result=result.replace(escapedKey("M"),Number(month));result=result.replace(escapedKey("dd"),day);result=result.replace(escapedKey("d"),Number(day));result=result.replace(escapedKey("EEEE"),weekdayLit);result=result.replace(escapedKey("EEE"),weekdayLit.substr(0,3));result=result.replace(escapedKey("HH"),hour24);result=result.replace(escapedKey("H"),Number(hour24));result=result.replace(escapedKey("hh"),hour12);result=result.replace(escapedKey("h"),Number(hour12));result=result.replace(escapedKey("mm"),min);result=result.replace(escapedKey("m"),Number(min));result=result.replace(escapedKey("ssss"),msec);result=result.replace(escapedKey("ss"),sc);result=result.replace(escapedKey("s"),Number(sc));result=result.replace(escapedKey("a"),am_pm);return result},TimeLibException:function(snappMessage,msg){this.name="TimeLibException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException.prototype.constructor=com.fc.JavaScriptDistLib.TimeLibrary.TimeLibException;var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.MathLibrary={toNumber:function(num){if(this.isNumber(num)){return Number(num)}return null},isNumber:function(o){return!isNaN(o-0)&&o!==null&&o!==""&&o!==false&&o!==true},mathCompare:function(num1,comp,num2){switch(comp){case"EQ":return this.toNumber(num1)==this.toNumber(num2);case"NEQ":return this.toNumber(num1)!=this.toNumber(num2);case"LT":return this.toNumber(num1)<this.toNumber(num2);case"LTE":return this.toNumber(num1)<=this.toNumber(num2);case"GT":return this.toNumber(num1)>this.toNumber(num2);case"GTE":return this.toNumber(num1)>=this.toNumber(num2);default:return false}},mathMinMax:function(num1,comp,num2){switch(comp){case"MIN":return Math.min(this.toNumber(num1),this.toNumber(num2));case"MAX":return Math.max(this.toNumber(num1),this.toNumber(num2));default:return 0}},mathModulo:function(num1,comp,num2){switch(comp){case"MODULO":return this.toNumber(num1)%this.toNumber(num2);case"QUOTIENT":return Math.floor(this.toNumber(num1)/this.toNumber(num2));default:return 0}},mathConversionRadDeg:function(comp,num){switch(comp){case"DEGTORAD":return this.toNumber(num)*(Math.PI/180);case"RADTODEG":return this.toNumber(num)*(180/Math.PI);default:return 0}},mathRoundPrecision:function(num,percision){return Math.round(this.toNumber(num)*Math.pow(10,this.toNumber(percision)))/Math.pow(10,this.toNumber(percision))},MathLibException:function(snappMessage,msg){this.name="MathLibException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.MathLibrary.MathLibException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.MathLibrary.MathLibException.prototype.constructor=com.fc.JavaScriptDistLib.MathLibrary.MathLibException;com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.TextLib={textComparison:function(text1,comp,text2){switch(comp){case"LESS":return text1.toString()<text2.toString();case"EQUAL":return text1.toString()==text2.toString();case"GREATER":return text1.toString()>text2.toString();default:return false}},textTrim:function(text){return text.toString().trim()},textChangeCase:function(text,comp){switch(comp){case"UPPERCASE":return text.toString().toUpperCase();case"LOWERCASE":
return text.toString().toLowerCase();default:return""}},textSubstring:function(text,from,length){return text.toString().substring(toNumber(from),toNumber(from)+toNumber(length))},textContains:function(string,substring){return string.toString().indexOf(substring)!==-1},textIndexOf:function(string,substring){return string.toString().indexOf(substring)},textSplitAt:function(text,index){return[text.toString().substring(0,toNumber(index)),text.toString().substring(toNumber(index))]},textSplitWith:function(string,separator){return string.toString().split(separator.toString())},textReplace:function(textFrom,textTo,textSource){var returnText=textSource.toString();while(returnText.indexOf(textFrom.toString())!==-1){returnText=returnText.toString().replace(textFrom.toString(),textTo.toString())}return returnText},isText:function(text){return typeof text==="string"||text instanceof String},convertToText:function(data){if(jQuery.isXMLDoc(data)){return(new XMLSerializer).serializeToString(data)}else if(jQuery.isArray(data)){return data.toString()}else if(typeof data=="string"){return data}else{return JSON.stringify(data)}}};var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.Dictionary={createEmptyDictionary:function(){var dict={};return dict},removeAllKeys:function(dictionary){for(var key in dictionary){delete dictionary[key]}},getKeys:function(dictionary){var keys=[];for(var key in dictionary){keys.push(key)}return keys},getDictValue:function(dictionary,key){return dictionary[key]},setDictValue:function(dictionary,key,value){return dictionary[key]=value},removeDictKey:function(dictionary,key){return delete dictionary[key]},conatinedInDict:function(dictionary,key){return dictionary[key]!=undefined?true:false}};var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.Gauge={setProperty:function(objName,property,value){try{var elemSelector='[obj-name="'+objName+'"]';var elem=$(elemSelector);var gauge;$(elemSelector).find(".c3").each(function(){gauge=$(this).data("c3-chart")});switch(property){case"width":case"height":case"x":case"y":com.fc.JavaScriptDistLib.setProperty(objName,property,value);break;case"Alpha":d3.selectAll(elemSelector).style("opacity",value/100);break;case"Background color":$(elemSelector+" svg").css("background-color",value);break;case"Current Value":gauge.load({columns:[["data",value]]});break;case"Maximum Value":gauge.internal.config.gauge_max=value;var gaugeData=gauge.data();var gaugeCurrVal=gaugeData[0].values[0].value;gauge.load({columns:[["data",gaugeCurrVal]]});break;case"Minimum Value":gauge.internal.config.gauge_min=value;var gaugeData=gauge.data();var gaugeCurrVal=gaugeData[0].values[0].value;gauge.load({columns:[["data",gaugeCurrVal]]});break;case"track color":d3.selectAll(elemSelector+" path.c3-chart-arcs-background").style("fill",value);break;case"pointer color":d3.selectAll(elemSelector).select("path.c3-arc-data").style("fill",value);break;case"track width":gauge.internal.config.gauge_width=value;var gaugeData=gauge.data();var gaugeCurrVal=gaugeData[0].values[0].value;gauge.load({columns:[["data",gaugeCurrVal]]});break}}catch(e){throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(e)}},getProperty:function(objName,property){try{var elemSelector='[obj-name= "'+objName+'"]';var elem=$(elemSelector);var gauge;$(elemSelector).find(".c3").each(function(){gauge=$(this).data("c3-chart")});var value;switch(property){case"width":case"height":case"x":case"y":value=com.fc.JavaScriptDistLib.getProperty(objName,property);break;case"Alpha":value=$(elemSelector).css("opacity")*100;break;case"Background color":value=$(elemSelector).find("#fcGauge").css("background-color");break;case"Current Value":value=gauge.data()[0].values[0].value;break;case"Maximum Value":value=gauge.internal.config.gauge_max;break;case"Minimum Value":value=gauge.internal.config.gauge_min;break;case"track color":value=d3.selectAll(elemSelector+" path.c3-chart-arcs-background").style("fill");break;case"pointer color":value=d3.selectAll(elemSelector).select("path.c3-arc-data").style("fill");break;case"track width":value=gauge.internal.config.gauge_width;break}return value}catch(e){throw new com.fc.JavaScriptDistLib.Gauge.GaugeException(e)}},GaugeException:function(snappMessage,msg){this.name="GaugeException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.Gauge.GaugeException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.Gauge.GaugeException.prototype.constructor=com.fc.JavaScriptDistLib.Gauge.GaugeException;var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.ListLibrary={listAdd:function(list,item){return list.push(item)},listContains:function(list,item){return list.indexOf(item)>-1?true:false},listAppend:function(list1,list2){return list1.concat(list2)},listCheck:function(list){return list instanceof Array?true:false},listEmpty:function(list){return list.length=0},listOrder:function(list,order){list.sort(function(a,b){if(order=="ASCENDING"){return a-b}else{return b-a}})},ListLibException:function(snappMessage,msg){this.name="ListLibException";this.snappMessage=snappMessage;this.message=msg||snappMessage;this.stack=(new Error).stack}};com.fc.JavaScriptDistLib.ListLibrary.ListLibException.prototype=Object.create(Error.prototype);com.fc.JavaScriptDistLib.ListLibrary.ListLibException.prototype.constructor=com.fc.JavaScriptDistLib.ListLibrary.ListLibException;class ConnioCore{constructor(){this.config={BaseURL:null,App:null,KEY:null,Secret:null,MQTTHost:null,MQTTPort:null,MQTTCientID:null,MQTTUsername:null,MQTTPassword:null,MQTTTopic:null}}configure(config){let properties;if(config){properties=JSON.parse(config)}else if(!this.config.BaseURL){let connioSO=Creator.currentProject.serviceModel.getServiceObject("Connio");properties=connioSO.attributes.attrs}if(properties){this.config.BaseURL=properties.api.url;this.config.App=properties.api.app;this.config.KEY=properties.api.key;this.config.Secret=properties.api.secret;this.config.MQTTHost=properties.mqtt.host;this.config.MQTTPort=Number(properties.mqtt.port);this.config.MQTTCientID=properties.mqtt.clientId;this.config.MQTTUsername=properties.mqtt.username;this.config.MQTTPassword=properties.mqtt.password;this.config.MQTTTopic="connio/apps/"+this.config.App+"/devices/#"}}connioConfigure(key,secret,callback){this.configure();this.config.KEY=key;this.config.Secret=secret}connioGetDeviceProfiles(successcallback){let parent=this;this.configure();let url=this.config.BaseURL+"/v2/deviceprofiles";$.ajax({url:url,type:"GET",headers:{Authorization:"Basic "+btoa(this.config.KEY+":"+this.config.Secret)},success:response=>{successcallback(response)},error:(xhr,code,msg)=>{console.log("Could not get the profiles. Could be network error")}})}connioGetDevices(filter,successcallback){let parent=this;this.configure();let url=this.config.BaseURL+"/v2/devices?profile="+filter;$.ajax({url:url,type:"GET",headers:{Authorization:"Basic "+btoa(this.config.KEY+":"+this.config.Secret)},success:response=>{successcallback(response)},error:(xhr,code,msg)=>{console.log("Could not get the devices.")}})}connioGetProperties(profile,successcallback){let parent=this;this.configure();let url=this.config.BaseURL+"/v2/deviceprofiles/"+profile+"/properties";$.ajax({url:url,type:"GET",headers:{Authorization:"Basic "+btoa(this.config.KEY+":"+this.config.Secret)},success:response=>{successcallback(response)},error:(xhr,code,msg)=>{console.log("Could not get the properties.")}})}}var com=com||{};com.fc=com.fc||{};com.fc.JavaScriptDistLib=com.fc.JavaScriptDistLib||{};com.fc.JavaScriptDistLib.ConnioCore=ConnioCore;
//# sourceMappingURL=DistLibLegacy.js.map