<h1>Chalkable Example Application Interaction</h1>

<p>These files show an example of an html/css/javascript interaction between the Chalkable API and a web app. The chlk-post-message-api.js file is a necessary component for your web app to interact with Chalkable</p>

<p><b>Your app should include a link to our hosted version of this file (as it is subject to updates):</b></p>
<pre><code>&lt;script type="text/javascript" src="http://chalkable.com/Scripts/api/chlk-post-message-api.js"&gt;&lt;/script&gt;</code></pre>

<p>Feel free to check it out here to see exactly what we're doing behind the scenes. <p>

<p>Your JavaScript code should register a callback that will be called when the teacher clicks ATTACH or SAVE, depending on which View Mode they are in. This will let Chalkable know which function of yours to call.</p>

<p>This is handled by the addYourself and saveAndClose methods</p>
<pre><code>
function saveAndClose(){
        //For saving, finalizing and anything else your app might need to do before closing.
    	//Can be called in mode=edit (when teacher clicks ATTACH) or mode=view (when user clicks SAVE)
        //return true if your app is ready for the iframe to be closed and the app to be attached.
    return true;
}
CHLK_MESSENGER.addYourself(saveAndClose);
    	//Should be called on app start to register a callback for attach and save buttons
 
</code></pre>
<p>Note: Your app should <pre><code>return false</code></pre> if the teacher, for example, deletes a required field after showplus is called and the ATTACH button is active.</p>

<p>After the teacher clicks <strong>ATTACH</strong>, Chalkable calls the callback you registered and your app has the ability to, for example, finish saving before your app returns <span class="monaco">true</span> or <span class="monaco">false</span>. </li>
<p><pre><code>Return true</code></pre>: if your app is ready for the iframe to be closed and the app to be attached.</p>
<p><pre><code>Return false</code></pre>: if your app is NOT ready for the iframe to be closed and the app to be attached.</p>
          
<p><b>The other interaction occurs with our URL Modes</b>. They are appended to the url of your app as the user interacts with it in Chalkable.</p>
<ul>
<li><b>view:</b> example - <pre><code>http://www.EdTechApp.com/?mode=view</code></pre></li>
<li><b>edit</b> example - <pre><code>http://www.EdTechApp.com/?mode=edit</code></pre></li>
<li><b>myView</b> example - <pre><code>http://www.EdTechApp.com/?mode=myview</code></pre> </li>
<li><b>gradingView</b> example - <pre><code>http://www.EdTechApp.com/?mode=gradingview</code></pre></li>
</ul>

<b>For advanced integration, you must prepare your app to handle this interaction. There are simple Javascript methods you can add to take care of this (check out the files)</b>