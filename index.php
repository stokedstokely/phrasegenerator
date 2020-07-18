
<!DOCTYPE html>
<html>
  <head>
    <title>shaymclaughlin.com</title>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="main.css">
    <!--<input type="file" id="fileinput" />-->

  </head>
  <body>
    <section class="container">
      <div class="title"><h3>Verb/Adj/Noun</h3></div>
      <div>
          <button class="left-Col-Btn btn-tenth btn-Purple gen-Word-Btn" id="generateWord">Generate All Three</button>
          <button class="left-Col-Btn btn-tenth btn-Red gen-Word-Btn" id="generateWordNoun">Generate Verb</button>
          <button class="left-Col-Btn btn-tenth btn-Green gen-Word-Btn" id="generateWordAdj">Generate Adjective</button>
          <button class="left-Col-Btn btn-tenth btn-Blue gen-Word-Btn" id="generateWordNoun">Generate Noun</button>
      </div>
      <div class="words-container">
        <span class="word-span" id="verb"></span><span class="word-span" id="adjective"></span><span class="word-span" id="noun"></span>
      </div>
      <div class="other-options">
        
      <button class="left-Col-Btn btn-tenth btn-DarkBlue" id="resetBtn">Reset</button>
      <button class="left-Col-Btn btn-tenth btn-Gray" id="clearBtn">Clear</button>
      <button class="left-Col-Btn btn-tenth btn-Magenta" id="noVowelsBtn">No Vowels</button>
      <button class="left-Col-Btn btn-tenth btn-Teal" id="addRBtn">Add R</button>
      </div>
    </section>
    
  </body>

      <script src="main.js" type="text/javascript"></script>
</html>
