# css布局之三栏布局

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <header>This is header.</header>
  <section>
    <div class="main">
      <h3>This is main section.</h3>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
    </div>
    
    <aside class="left">
      <h3>left menu.</h3>
      <ul>
        <li>
          <a href="">link1</a>
        </li>
        <li>
          <a href="">link2</a>
        </li>
        <li>
          <a href="">link3</a>
        </li>
        <li>
          <a href="">link4</a>
        </li>
      </ul>
    </aside>
    <aside class="right">
      <h3>Right menu.</h3>
      <ul>
        <li>
          <a href="">link1</a>
        </li>
        <li>
          <a href="">link2</a>
        </li>
        <li>
          <a href="">link3</a>
        </li>
        <li>
          <a href="">link4</a>
        </li>
      </ul>
    </aside>
  </section>
</body>
</html>

```

```Css
*{
  box-sizing: border-box;
}

body{
  background: #e1ddd9;
}

header, footer, .main, aside{
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
}

section{
  overflow: hidden;
  padding-left: 210px;
  padding-right: 210px; 
}

section .main, section aside{
  float: left;
}

section .main{
  widows: 100%;
}

section aside.left{
  width: 200px;
  margin-left: -100%;
  position: relative;
  left: -210px;
}

section aside.right{
  width: 200px;
  margin-left: -200px;
  position: relative;
  left: 210px;
}
```

<img :src="$withBase('/threeColumnLayout1.png')" alt="hahaha">

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <header>
    <h1>This is header.</h1>
  </header>
  
  
  <div class="main">
    <div class="main-inner">
      <h3>This is main section.</h3>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
      <p>This is p.</p>
    </div>
  </div>

  <aside class="left">
    <h3>left menu.</h3>
    <ul>
      <li>
        <a href="">link1</a>
      </li>
      <li>
        <a href="">link2</a>
      </li>
      <li>
        <a href="">link3</a>
      </li>
      <li>
        <a href="">link4</a>
      </li>
    </ul>
  </aside>
  <aside class="right">
    <h3>Right menu.</h3>
    <ul>
      <li>
        <a href="">link1</a>
      </li>
      <li>
        <a href="">link2</a>
      </li>
      <li>
        <a href="">link3</a>
      </li>
      <li>
        <a href="">link4</a>
      </li>
    </ul>
  </aside>
  
  <footer>
    <h1>This is footer.</h1>
  </footer>
</body>
</html>
```

```css
*{
  box-sizing: border-box;
}

body{
  background: #e1ddd9;
}

header, footer, .main, aside{
  background: #fff;
  padding: 10px;
  margin-bottom: 10px;
}



.main, aside{
  float: left;
}

.main{
  float: left;
  width: 100%;
  overflow: hidden;
  
}

.main-inner{
  margin: 0 210px;
}


aside.left{
  width: 200px;
  margin-left: -100%;
}

aside.right{
  width: 200px;
  margin-left: -200px;
}
footer{
  clear: both;
}
```
<img :src="$withBase('/threeColumnLayout2.png')" alt="hahaha">

