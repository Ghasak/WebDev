# Fundamentals

[toc]

## Contents

This course is for both beginners and seasoned developers that want to learn
how to build responsive websites and user interfaces with modern HTML5 and
CSS3+ technologies like Flexbox and CSS Grid as well as the Sass pre-compiler.
This course includes hours of both learning & studying sections along with real
life projects. Stop having to rely on frameworks like Bootstrap for your user
interface and learn how to create your own layouts and utility classes to build
custom responsive websites and app UIs.

## My Note

- Basics of How website works
- Setup & Tools
- HTML 5
- CSS Fundamentals
- Responsive Design
- Flexbox
- CSS Grid
- Animation (transitions, keyframes, ... etc.)
- CSS variables, transform, Psedudo slectors,
- Sitcky menus Overlays form styling, landing pages,
- website deployment, Shared Host & Netlifty
- Sass CSS pre-commpiler
-

## Web Server

Websites/ webpages are files stored on computers with run a piece of software called a web server.
Basically you will need two things:
- Hosting companies, provide spce on a server, webServer (Apache, Nginx, ... etc.)
- A Domain names, `TLD`: `Top-level domain`,

`DNS` : is used to map IP addresses to domain names.

## Process of loading a webpages

```shell
DNS (Server): google.com 192.168.1.4 --> 192.168.1.4 <--  Web Browser--> 192.168.1.4 <-- Server
                                                            -> webpage -> www.google.com <- User
```

# HTML Fundamentals
## The Roles of HTML, CSS in WebDev:

- What is HTML?
- Tags & Attributes
- Page & Structure
- Meta Tags
- VSCode Live Server Setup
- Keyboard Shortcuts
- Forms & Inputs &
- Links & Images
- Tables & Lists &Block vs Inline
- Div, Span, ID, Class
- HTML Entities,
- HTML5 Semantic Tags.
## Useful tips and tricks

- [x] In html file use (`!`) and (Inter) to get the direct
- [x] use `p` to use the `emmet` then hit enter to get a paragraph.
- [x] Adding a comment in `HTML`.
    - ```<!--- Adding a comment --- > ```
- [x] You can add new line using (command + enter) at any place in `HTML`
- [x] You can add a dummy text file using (Lorem + enter) or (Lorem 10 + enter) to add only `10` words.
- [x] You can use this trick to add a quick attribute with id ``` <!-- You can write div#about then hit enter to get emmet working -->``` or ```<!-- In case of div you can use directly # + Enter -->```
- [x] `div` is a block separator, used mainly to highlight a block.
- [x] `span` is inline separator, which usually we use to add a style for a specific inline element (e.g, word, paragraph ... etc.).
- [x] We can add a copyright using `&copy` symbol.
- [x] For including space or copyright or other symbols, including `code snippets` or `keyboard` shortcuts, check the `html entities section`.
- [x] You can also download a given section from any html page (like tables or other) by first right click and inspect the element (e.g., table) then see where it is located in the source code to copy it, I use `Google Chrome` to conduct this action.

### Tag Syntax

<br> means **line break**
</>

![Tag Syntax](./Artifcats/Ch01_01.png)


### Doctype & basic Layout
Use (`!`) for getting the code snippet for `Emmet` generator.

### Meta Tags and Search Engines

- for charaset to know the formater of the html file.
    - ``` <meta charset="UTF-8">```
- Responsive design meta, you can add
    - ```name = viewport content = 'width=device-width, initial -scale=1.0```
- http-equiv to check the compatability to which borswer.
    - ```<meta http-equiv="X-UA-Compatible" content="IE=chrome"```

- Adding description that will be shown in the google engine sit under your website link.
    - ```<meta description="description" content="This is my website">```.
- Adding a keywords for your website
    - ```<meta name = "keywords" content="Web development, web design, other keywords">```
- If you want your website to not be shown in `Googel search engine` or not being indexed by any other engine, for example for privacy or other considerations, use:
    - ```<meta name = "robots" content="index, follow">```

### Headings, Paragraphs, Typography.

- You can add new line using (command + enter) at any place in `HTML`
- You can add a dummy text file using (Lorem + enter) or (Lorem 10 + enter) to add only `10` words.

```html
<!--Definition and Usage -- >
<!--The <div> tag defines a division or a section in an HTML document. -->
<!-- The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.-->
<!-- The <div> tag is easily styled by using the class or id attribute.-->
<!--Any sort of content can be put inside the <div> tag!  -->
<!-- Note: By default, browsers always place a line break before and after the <div> element.-->

<h1> Welcome to my World </h1>
<h2>Welcome to my World </h2>
<h3>Welcome to my World </h3>
<h4>Welcome to my World </h4>
<h5>Welcome to my World </h5>
<h6>Welcome to my World </h6>
<p>Welcome to my Second World </p>
<p>Welcome to my Third World </p>
<!-- Adding a line break -->
<br></br>
<p> Welcome to my World </p>
<!-- Adding a horizontal line -->
<hr></>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea tempore eaque, cumque nemo dolores minima illum distinctio saepe necessitatibus totam amet maxime dignissimos atque dicta explicabo veritatis blanditiis, ullam debitis </p>

<! -- The tag of b, s, u and others are deprecated in HTML5 browsers -- >
<! -- The purpose is that styling now exlucsively is done using css -- >
<! -- the only exception is the tag for deleting called <del> --- >

```

### Links, images & attributes

For the current file system you can follow the ideal issue

```html

    <!-- External Link -->
    <h1>External Link</h1>
    <p> Here we can add some links to our current script </p>
    <!-- This will jump to google and leave your website -->
    <h2> This will jump to google and leave your website </h2>
    <p> Here we add a link that will jump and leave your current website. </p>
    <a href="http://www.google.com">Google</a>

    <hr>
    <!-- This will open the link in a new tab  -->
    <h2> This will open the link in a new tab </h2>
    <p> Here we add a link that will open in a new tab. </p>
    <a href="http://www.google.com" target="_blank">Google</a> </a>
    <br></br>
    <! -- Internal link ---- >
    <a href="./01_basic_layout.html">Internal internally to the basic layout Link</a>
    <br></br>

    <!-- Local image -->
    <!-- Alternative text, if the image is not there, the text will be shown -->
    <!-- we can add attribute called with for contorlling the image width, hight, although it is not recommneded as we will do all these in css -->
    <img src = "../Artifcats/Ch01_01.png" alt="My Image from local repository" width = "400">
    <br></br>

    <!-- External image -->
    <img src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="My Image from external repository" width = "400">
    <br></br>
    <img src="https://i.stack.imgur.com/TXvLy.png" alt="My Image from external repository" width = "400">

```

### Lists and tables

```html

<!-- Tables -->
<!-- Tables are used to display data in a structured way, Tables are used for tabulated data -->
<!-- we can use the style attribute but we will not use it for now as we will use later the css to control the table layout -->
<h2> Tables </h2>
<table style="width:500px">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email Address</th>
        </th>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>John@example.com</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>32</td>
            <td>Jane@example.com</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>18</td>
            <td>Mary@example.com</td>
        </tr>

</table>
```

### Forms and Inputs Fields

The forms and input fields are going to be displayed with  `HTML5` while the arg to refere to which language to be used in the `back-end` are passed using `action` attribute such as, `action="process.phd"`.
- Notice that the reset button can clear all the fields nested under the given form tag.


```html

    <h1 inputs and forms >Inputs and forms</h1>
    <!-- If you add the for and the id you can get the feature of clicking on the name (Name), then it will highligh your input form for same name you give "INPUTX", while the (VARX) will be grabbed to be used in the back-end server as a value to play with -->
    <form action="">
        <div>
            <label for="INPUTX">Name</label><br>
            <input type="text" name="VARX" id="INPUTX", placeholder="input your name">
        </div>

        <div>
            <label for="INPUTY">Email</label><br>
            <input type="email" name="VARY" id="INPUTY", placeholder= "your email address">

        </div>

        <div>

            <label for="INPUTZ">Password</label><br>
            <input type="password" name="VARZ" id="INPUTZ", placeholder="your password">
        </div>

        <div>

        <label for="message">Message</label><br>
            <textarea name="message" id="message" cols="30" rows="10">Here is a default message.
            </textarea>
        </div>
        <!-- Select form -->
        <h1> Select form </h1>
        <div>
            <label for="select">Select from the down menu</label><br>
            <select name="select" id="select">
                <option value="1">First option in our list</option>
                <option value="2" selected>Second option in our list</option>
                <option value="3">Third option in our list</option>
            </select>
        </div>

        <!-- Number form -->
        <h1> Number form </h1>
        <div>
        <label for = "age"> Age</label><br>
        <input type = "number" name = "age" id = "age", placeholder= "Specificy your age">
        </div>
        <!-- date form -->
        <h1> Date form </h1>
        <div>
        <label for = "date"> BirthDate</label><br>
        <input type = "date" name = "date" id = "date">
        </div>
        <!-- Radio form -->
        <!-- adding the attribute checked will be the default -->
        <h1> Radio form </h1>
        <div>
            <label for="membership">Select your Membership</label><br>
            <input type = "radio" name = "membership" value = "simple" id = "membership"> Simple<br>
            <input type = "radio" name = "membership" value = "simple" id = "membership" checked> Standard<br>
            <input type = "radio" name = "membership" value = "simple" id = "membership"> Super<br>
        </div>

        <!-- Checkbox form -->
        <h1> Checkbox form </h1>
        <div>
            <label for="checkbox">Select your Membership</label><br>
            <input type = "checkbox" name = "checkbox" value = "Simple" id = "checkbox"> Simple<br>
            <input type = "checkbox" name = "checkbox" value = "Standard" id = "checkbox" checked> Standard<br>
            <input type = "checkbox" name = "checkbox" value = "Super" id = "checkbox"> Super<br>
        </div>

        <!-- Submit button -->
        <h1>Using button tag</h1>
        <h2> submit button</h2>
        <div>
            <input type="submit" value="Submit">
        </div>
        <div>
            <h2>submit with tag</h2>
            <button type="submit">Submit</button>

        </div>

    </form>
```




### Block & Inline Level Elements

#### Block Elements
spand across the html,

[block and inline elements in html](https://www.w3schools.com/html/html_blocks.asp)
```html
Here are the block-level elements in HTML:

<address><article><aside><blockquote><canvas><dd><div><dl><dt>
<fieldset><figcaption><figure><footer><form><h1>-<h6><header>
<hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>
```
#### Inline Elements
on line spaning and will will contiue the next element on right side of the previous inline element.

```html
<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i>
<img><input><kbd><label><map><object><output><q><samp><script>
<select><small><span><strong><sub><sup><textarea><time><tt><var>
```

for example `div` is pushing things down and it’s a block element
### Divs & Spans, Classes & ids

Difference between `ids` and `classes` is that `ids` are unique to a given html element, while class can be repeated multiple elements. This will be explained more in details later in `css` section.

- [x] `div` is a block separator, used mainly to highlight a block.
- [x] `span` is inline separator, which usually we use to add a style for a specific inline element (e.g, word, paragraph ... etc.).
- [x] We can add a copyright using `&copy` symbol.

```html

<body>
    <!-- Adding style here is not desrivable and its for demonstration purposes only-->
    <style>
        .card{
            border: 1px solid black;
            background-color: #f4f4f4;
            padding:20px;
            margin-bottom: 10px;
        }
        .enhance{
            color : red;
            background-color: yellow;
            padding:1px;
            margin-bottom: 10px;

        }
    </style>
    <div id = "main-header">
        <h1>My Website</h1>
        <p>A site about me, here is how to use the div</p>
    </div>
    <!-- Adding a navigation menu -->
    <ul id="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>

    </ul>
    <!-- You can write div#about then hit enter to get emmet working -->
    <!-- In case of div you can use direclty # + Enter -->
    <div id="about" class="card">
        <h3 id="about">About</h3>
        <p1 id="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor earum doloremque tempore molestiae numquam minima beatae sunt inventore quibusdam. Nisi aperiam dolorem inventore debitis nesciunt, natus magni veniam rem illo.
        </p1>
    </div>
    <div id="contact" class = "card">
        <h3> Contact Me</h3>
        <ul>
            <li><b>Address</b></li>
            <p1>123 Main Street</p1>
            <p1>Anytown, USA</p1>
            <li><b>Phone</b></li>
            <p1>(555)123-456-7890</p1>
            <li><b>Email</b></li>
            <p1>Johe_Doe@example.com</td>

        </ul>
        <p>Copyright (c) 2022 John Doe</p>
    </div>

    <!-- Span as a line element not block element  -->
    <div>
        <h1>Adding span to a given element on line </h1>
        <p1>
            lets see an example here, where we are adding a span <span class = 'enhance'> Here We can add our enhancement for current working directory</span>to the h1 element. lets see an example here, where we are adding a span to the h1 element. Lorem ipsum dolor sit amet consectetur adipisicing elit.<div class="enhance">Here we added a div which is a block element not inline element</div> Non doloribus iusto aperiam aliquid nam deleniti in dolorem dicta commodi recusandae, soluta deserunt porro quas amet. Maiores suscipit cupiditate exercitationem ullam!
        </p1>
    </div>
    <div id="footer">
        <p>Copyright &copy 2020 <span class ="enhance">John Doe</span></p>
    </div>

</body>

```

### HTML Entities

Check the page `htmlSandbox/10_entities.html` it contains most of these elements, for example `&copy;` will add the copy right icon to your `html`. Or adding `&gt;` for `greater than >` symobl, also the most important one is to add a specific space `&nbsp;` which can be used in some sepecial cases.

```html

<h1>HTML entities examples</h1>
<p>Adding the following HTML code to your &nbsp; &nbsp; &nbsp; page will display the following text:</p>
<!-- Comparison -->
<p>5 &gt; 2</p>
<p>5 &lt; 2</p>
<p>5 &#62;= 2</p>
<p>5 &#60;= 2</p>
<!-- Copy rights-->
<p>&reg;</p>
<p>&copy;</p>
<!-- Suits -->
<p>&spades;</p>
<p>&clubs;</p>
<p>&hearts;</p>
<p>&diams;</p>

<!-- Computer code -->
<code>
    &lt;?php echo 'Hello World' ?&gt;
</code>


```
[Some useful HTML Character Entities](https://www.w3schools.com/html/html_entities.asp)


### Semantic Tags

These semantics tags are used as a customary seperation among all the elemetns in the HTML5. Before `HTML5` all the elements were included inside `div` section. But, as for now, there is a customary seperation that will show and organize all your elements of a given web-page or several web-pages.

- These are only general rules and most developers are using.

![HTML5 Semantic Tags](./Artifcats/Ch01_02.png)


# CSS Fundamentals

Things to be covered here:
- [x] Implementing CSS styles
- [x] Using Selectors
- [x] Fonts, Colors, etc.
- [x] Background & Boarders.
- [x] Box Model / Margin & Padding.
- [x] Floating & Alignment.
- [x] Display Property.
- [x] Link & Button Styling.
- [x] Creating menus
- [x] Postioning
- [x] Form Styling
- [x] Dev Tools

### CSS Implementation

#### The CSS Syntax
![CSS Syntax](./Artifcats/CH02_01.png)

There are mainly three methods to implement `CSS` style to the `HTML` webpage. These are;
#### A.1 Inline CSS with the tags

This is not a good practice, and certainly should be avoided.

```html
<h1 style="color: lightcoral"> Heading One</h1>
```
#### A.2 Internal CSS
This is also not a good practice, but better than the first one. Under the  `title` tag add a tag called `style` and specify which tag you want to address in your style (can be also, classes, ids, or divs)
```html
    <style>
        h2{
            color:aqua;

        }
    </style>

  <body>
    <h2> Heading Two</h2>
  </body>

```

#### A.3 External
This is the most common used, and it will separate all the `HTML` elements from their styles `CSS` using `style.css`.

```html

<!-- External CSS -->
<link rel="stylesheet" href="style.css">

```
And create afile called `style.css` in same directory with the following

```css

h3 {
    color : blue;
    }
```

### Dev Tools Introduction
For sake of learning the `css` we will use the second method `A.2` to keep things all in one file `index.html` file.

