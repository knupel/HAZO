!function(r){var e={};function n(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=e,n.d=function(r,e,t){n.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},n.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},n.t=function(r,e){if(1&e&&(r=n(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var o in r)n.d(t,o,function(e){return r[e]}.bind(null,o));return t},n.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(e,"a",e),e},n.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},n.p="",n(n.s=1)}([,function(r,e){!function(){function r(){}r.circle=function(r,e){for(var n=new Array,t=0;t<360;t+=9){var o=p5.Vector.fromAngle(r.radians(t-135));o.mult(e),n.push(o)}return n},r.square=function(r,e){for(var n=new Array,t=-e;t<e;t+=10)n.push(new p5.Vector(t,-e));for(var o=-e;o<e;o+=10)n.push(new p5.Vector(e,o));for(t=e;t>-e;t-=10)n.push(new p5.Vector(t,e));for(o=e;o>-e;o-=10)n.push(new p5.Vector(-e,o));return n},r.star=function(r,e,n,t,o,u){for(var c=r.TWO_PI/u,f=c/2,i=new Array,a=0;a<r.TWO_PI;a+=c){var p=e+r.cos(a)*o,l=n+r.sin(a)*o;i.push(new p5.Vector(p,l)),p=e+r.cos(a+f)*t,l=n+r.sin(a+f)*t,i.push(new p5.Vector(p,l))}return i}}()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXBlcy50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIlNoYXBlcyIsImNpcmNsZSIsInNpemUiLCJwb2ludHMiLCJBcnJheSIsImFuZ2xlIiwidiIsInA1IiwiVmVjdG9yIiwiZnJvbUFuZ2xlIiwicmFkaWFucyIsIm11bHQiLCJwdXNoIiwic3F1YXJlIiwieCIsInkiLCJzdGFyIiwicmFkaXVzMSIsInJhZGl1czIiLCJucG9pbnRzIiwiVFdPX1BJIiwiaGFsZkFuZ2xlIiwiYSIsInN4IiwiY29zIiwic3kiLCJzaW4iXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFB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QUlqQixFQUFFNEIsSUFBSUosRUFBRUQsR0FBYUosRUFDOUJkLEVBQU9TLEtBQUssSUFBSUwsR0FBR0MsT0FBT2UsRUFBSUUsSUFHaEMsT0FBT3RCLEdBdERYIiwiZmlsZSI6InNoYXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImNsYXNzIFNoYXBlcyB7XG4gICAgc3RhdGljIGNpcmNsZShwOnA1LCBzaXplOiBudW1iZXIpOiBwNS5WZWN0b3JbXSB7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgY2lyY2xlIHVzaW5nIHZlY3RvcnMgcG9pbnRpbmcgZnJvbSBjZW50ZXJcbiAgICBjb25zdCBwb2ludHMgPSBuZXcgQXJyYXk8cDUuVmVjdG9yPigpO1xuICAgIGZvciAodmFyIGFuZ2xlID0gMDsgYW5nbGUgPCAzNjA7IGFuZ2xlICs9IDkpIHtcbiAgICAgIC8vIE5vdGUgd2UgYXJlIG5vdCBzdGFydGluZyBmcm9tIDAgaW4gb3JkZXIgdG8gbWF0Y2ggdGhlXG4gICAgICAvLyBwYXRoIG9mIGEgY2lyY2xlLiAgXG4gICAgICB2YXIgdiA9IHA1LlZlY3Rvci5mcm9tQW5nbGUocC5yYWRpYW5zKGFuZ2xlLTEzNSkpO1xuICAgICAgdi5tdWx0KHNpemUpO1xuICAgICAgcG9pbnRzLnB1c2godik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxuXG4gIHN0YXRpYyBzcXVhcmUocDpwNSwgc2l6ZTogbnVtYmVyKTogcDUuVmVjdG9yW10ge1xuICAgIGNvbnN0IHBvaW50cyA9IG5ldyBBcnJheTxwNS5WZWN0b3I+KCk7XG4gICAgLy8gQSBzcXVhcmUgaXMgYSBidW5jaCBvZiB2ZXJ0aWNlcyBhbG9uZyBzdHJhaWdodCBsaW5lc1xuICAgIC8vIFRvcCBvZiBzcXVhcmVcbiAgICBmb3IgKHZhciB4ID0gLXNpemU7IHggPCBzaXplOyB4ICs9IDEwKSB7XG4gICAgICBwb2ludHMucHVzaChuZXcgcDUuVmVjdG9yKHgsIC1zaXplKSk7XG4gICAgfVxuICAgIC8vIFJpZ2h0IHNpZGVcbiAgICBmb3IgKHZhciB5ID0gLXNpemU7IHkgPCBzaXplOyB5ICs9IDEwKSB7XG4gICAgICBwb2ludHMucHVzaChuZXcgcDUuVmVjdG9yKHNpemUsIHkpKTtcbiAgICB9XG4gICAgLy8gQm90dG9tXG4gICAgZm9yICh2YXIgeCA9IHNpemU7IHggPiAtc2l6ZTsgeCAtPSAxMCkge1xuICAgICAgcG9pbnRzLnB1c2gobmV3IHA1LlZlY3Rvcih4LCBzaXplKSk7XG4gICAgfVxuICAgIC8vIExlZnQgc2lkZVxuICAgIGZvciAodmFyIHkgPSBzaXplOyB5ID4gLXNpemU7IHkgLT0gMTApIHtcbiAgICAgIHBvaW50cy5wdXNoKG5ldyBwNS5WZWN0b3IoLXNpemUsIHkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9pbnRzO1xuICB9XG5cbiAgLy8gc3RhcigwLCAwLCAzMCwgNzAsIDUpOyBcbiAgc3RhdGljIHN0YXIocDpwNSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czE6IG51bWJlciwgcmFkaXVzMjogbnVtYmVyLCBucG9pbnRzOiBudW1iZXIpOiBwNS5WZWN0b3JbXSB7XG4gICAgdmFyIGFuZ2xlID0gcC5UV09fUEkgLyBucG9pbnRzO1xuICAgIHZhciBoYWxmQW5nbGUgPSBhbmdsZS8yLjA7XG4gICAgXG4gICAgY29uc3QgcG9pbnRzID0gbmV3IEFycmF5PHA1LlZlY3Rvcj4oKTtcbiAgICBmb3IgKHZhciBhID0gMDsgYSA8IHAuVFdPX1BJOyBhICs9IGFuZ2xlKSB7XG4gICAgICB2YXIgc3ggPSB4ICsgcC5jb3MoYSkgKiByYWRpdXMyO1xuICAgICAgdmFyIHN5ID0geSArIHAuc2luKGEpICogcmFkaXVzMjtcbiAgICAgIHBvaW50cy5wdXNoKG5ldyBwNS5WZWN0b3Ioc3gsIHN5KSk7XG4gICAgICBzeCA9IHggKyBwLmNvcyhhK2hhbGZBbmdsZSkgKiByYWRpdXMxO1xuICAgICAgc3kgPSB5ICsgcC5zaW4oYStoYWxmQW5nbGUpICogcmFkaXVzMTtcbiAgICAgIHBvaW50cy5wdXNoKG5ldyBwNS5WZWN0b3Ioc3gsIHN5KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvaW50cztcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=