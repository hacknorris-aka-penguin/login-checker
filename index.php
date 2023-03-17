<html>
  <head>
  <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <form id="meterform" method="post">
      <input type="text" id="nick" placeholder="your nick:" autocomplete="on" required><br>
      <input type="email" id="mail" placeholder="mail:" autocomplete="on" required><br>
      <input type="password" id="password" placeholder="password:" required><br>
      <input type="submit" id="enter" value="LOGIN"> 
    </form>
  </body>
</html>

<html>
  <head>
  <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div>pro tip: </div><br>
    <?php
      echo "<script>document.writeln(meter.tip);</script>";
    ?>
    <div>security meter: </div><br>
    <meter onload="this.value=meter.general();">
    <div>password meter: </div><br>
    <meter onload="this.value=meter.strength();">
    <div>social security meter:</div><br>
    <meter onload="this.value=meter.social();">
    <div>email security: </div><br>
    <?php 
      echo "<script>document.writeln(meter.email);</script>";
    ?>
    <div>full list of accounts: </div><br>
    <?php 
      echo "<script>document.writeln(meter.accounts);</script>";
    ?>
  </body>
</html>