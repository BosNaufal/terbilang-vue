/*! Copyright (c) 2016 Naufal Rabbani (https://github.com/BosNaufal/terbilang-vue)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
* Terbilang Vue (https://github.com/BosNaufal/terbilang-vue)
* Terbilang.js (https://github.com/BosNaufal/terbilang-js)
*/
Vue.filter('terbilang', function (value) {
	function terbilang(a){var c=" Satu Dua Tiga Empat Lima Enam Tujuh Delapan Sembilan Sepuluh Sebelas".split(" ");if(12>a)var b=c[a];else 20>a?b=c[a-10]+" Belas":100>a?(b=parseInt(String(a/10).substr(0,1)),b=c[b]+" Puluh "+c[a%10]):200>a?b="Seratus "+terbilang(a-100):1E3>a?(b=parseInt(String(a/100).substr(0,1)),b=c[b]+" Ratus "+terbilang(a%100)):2E3>a?b="Seribu "+terbilang(a-1E3):1E4>a?(b=parseInt(String(a/1E3).substr(0,1)),b=c[b]+" Ribu "+terbilang(a%1E3)):1E5>a?(b=parseInt(String(a/100).substr(0,2)),
	a%=1E3,b=terbilang(b)+" Ribu "+terbilang(a)):1E6>a?(b=parseInt(String(a/1E3).substr(0,3)),a%=1E3,b=terbilang(b)+" Ribu "+terbilang(a)):1E8>a?(b=parseInt(String(a/1E6).substr(0,4)),a%=1E6,b=terbilang(b)+" Juta "+terbilang(a)):1E9>a?(b=parseInt(String(a/1E6).substr(0,4)),a%=1E6,b=terbilang(b)+" Juta "+terbilang(a)):1E10>a?(b=parseInt(String(a/1E9).substr(0,1)),a%=1E9,b=terbilang(b)+" Milyar "+terbilang(a)):1E11>a?(b=parseInt(String(a/1E9).substr(0,2)),a%=1E9,b=terbilang(b)+" Milyar "+terbilang(a)):
	1E12>a?(b=parseInt(String(a/1E9).substr(0,3)),a%=1E9,b=terbilang(b)+" Milyar "+terbilang(a)):1E13>a?(b=parseInt(String(a/1E10).substr(0,1)),a%=1E10,b=terbilang(b)+" Triliun "+terbilang(a)):1E14>a?(b=parseInt(String(a/1E12).substr(0,2)),a%=1E12,b=terbilang(b)+" Triliun "+terbilang(a)):1E15>a?(b=parseInt(String(a/1E12).substr(0,3)),a%=1E12,b=terbilang(b)+" Triliun "+terbilang(a)):1E16>a&&(b=parseInt(String(a/1E15).substr(0,1)),a%=1E15,b=terbilang(b)+" Kuadriliun "+terbilang(a));a=b.split(" ");c=[];for(b=0;b<a.length;b++)""!=a[b]&&c.push(a[b]);return c.join(" ")};
	return terbilang(value);
});
