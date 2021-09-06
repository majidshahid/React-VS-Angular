var a =document.getElementById('cont');
var react =()=>{
   a.innerHTML=`<h1> What is React ?</h1>
   <h2>

  React is a component base javascript library this is use for create user interface .React create by facebook .Facebook invent React in 'july 2013' React first used in 2013 for facebooks newsfeed feature ,React Made By FACEBOOK Software engineer "Jordan walk " 
   </h2>
   `
}
var SPA =()=>{
    a.innerHTML=`<h1> SPA </h1>
  <ul>
  <li>SPA Stand for single page Application</li>
  <li>spa no page refresh on go to other page</li>
  <li>spa does not reload page entirely whenever the user request a new piece of data</li>
  <li>one of the weakness of SPA is SEO ,SPA are not SEO friendly Because most singlr page application are run on javascript ,which most search engine is not support because search engine CRAWLERS download html file and chack keyword this is easier to ranking your website,but Third party plugin solve this issue  </li>
  </ul>
<h1>MPA</h1>
<ul>
<li>MPA Stand for Multiple page Application</li>
<li>MPA whole page refresh on request</li>
<li>MPA required a page reload everytime the content changes .</li>
<li>MPA is better  positioning  your website beacuse MPA each page can be optimized for different keyword and meta tags ,this is positively impacts google ranking our website</li>
</ul>
    `
 }
 var angular =()=>{
a.innerHTML=`<h1>REACT </h1>
<ul>
    <li>REACT Own by facebook</li>
    <li>React is initial relese in 2013</li>
    <li> ONEWAY data binding</li>
    <li>Open source</li>
</ul>
<h1>ANGULAR</h1>
<ul>
    <li>ANGULAR Own by google</li>
    <li> Angular is initial relese in 2013 </li>
    <li>TWOWAY data binding</li>
    <li>Open source</li>
</ul>`
 }

var angularVsReact=()=>{
a.innerHTML=`<h1>What is Library?</h1>
<ul>
    <li>React is a JavaScript library for building user interfaces.</li>
    <li>A Library is a set of code that was previously written by a developer that you can call when you are building your project.</li>
    <li>In Library, you import or call specific methods that you need for your project.</li>
    <li>library is a bunch of code packed together that can be used repeatedly</li>
    <li>Reusability is one of the main reasons to use libraries</li>
</ul>

<h1>What is Framework?</h1>
<ul>
    <li>Angular is a JavaScript framework for web and mobile development</li>
    <li>A framework is a supporting structure that gives shape to your code</li>
    <li>There is a specific structure for a particular framework that you have to follow</li>
  
</ul>`
}