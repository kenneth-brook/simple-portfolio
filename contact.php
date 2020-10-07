<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/contact-form/simple-php-contact-form.html
*/
require_once("./include/fgcontactform.php");

$formproc = new FGContactForm();


//1. Add your email address here.
//You can add more than one receipients.
$formproc->AddRecipient('kenneth.brook@hotmail.com'); //<<---Put your email address here


//2. For better security. Get a random tring from this link: http://tinyurl.com/randstr
// and put it here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("thank-you.html");
   }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Kenneth Brook Portfolio</title>
    <link rel="stylesheet" href="./css/home.css" />
    <script src="./js/data.js" defer></script>
  </head>
  <body>
    <div id="navbar">
      <div class="upperNav">
        <div class="leftWrap">
          <img id="pic" src="./images/download.png" />
          <a href="#default" id="logo"><h4>Portfolio of Kenneth Brook</h4><p>Fullstack Trained, Seeking Frontend Roll</p></a>
        </div>
        <div id="navbar-right">
          <a class="link" href="./index.html">Home</a>
          <a class="link" id="active" href="./contact.php">Contact</a>
          <a class="link" href="./about.html">About-Me</a>
        </div>
      </div>
      <div id="skillBar">
        <div class="skill">
          <h4 id="skillText1">HTML</h4>
        </div>
        <div class="skill">
          <h4 id="skillText2">CSS</h4>
        </div>
        <div class="skill">
          <h4 id="skillText3">JS</h4>
        </div>
        <div class="skill">
          <h4 id="skillText4">React</h4>
        </div>
        <div class="skill">
          <h4 id="skillText5">Jest</h4>
        </div>
        <div class="skill">
          <h4 id="skillText6">React-Spring</h4>
        </div>
        <div class="skill">
          <h4 id="skillText7">ContextAPI</h4>
        </div>
        <div class="skill">
          <h4 id="skillText8">Node</h4>
        </div>
        <div class="skill">
          <h4 id="skillText9">PostgreSQL</h4>
        </div>
        <div class="skill">
          <h4 id="skillText10">Python</h4>
        </div>
      </div>
    </div>
    <script src="./js/nav.js"></script>
    <div class="push"></div>
<!-- Form Code Start -->
<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
<div class='contactBox'>
<fieldset>
<legend>Contact us</legend>

<input type='hidden' name='submitted' id='submitted' value='1'/>
<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

<div class='short_explanation'>* required fields</div>

<div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>
<div class='container'>
    <label for='name' >Your Full Name*: </label><br/>
    <input type='text' name='name' id='name' value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50" /><br/>
    <span id='contactus_name_errorloc' class='error'></span>
</div>
<div class='container'>
    <label for='email' >Email Address*:</label><br/>
    <input type='text' name='email' id='email' value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50" /><br/>
    <span id='contactus_email_errorloc' class='error'></span>
</div>

<div class='container'>
    <label for='message' >Message:</label><br/>
    <span id='contactus_message_errorloc' class='error'></span>
    <textarea rows="10" cols="50" name='message' id='message'><?php echo $formproc->SafeDisplay('message') ?></textarea>
</div>


<div class='container'>
    <input type='submit' name='Submit' value='Submit' />
</div>

</fieldset>
    </div>
</form>
<!-- client-side Form Validations:
Uses the excellent form validation script from JavaScript-coder.com-->

<script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("name","req","Please provide your name");

    frmvalidator.addValidation("email","req","Please provide your email address");

    frmvalidator.addValidation("email","email","Please provide a valid email address");

    frmvalidator.addValidation("message","maxlen=2048","The message is too long!(more than 2KB!)");

// ]]>
</script>
<footer>
      <div class="foot">
        <h6>&copy;Kennetic Concepts 2010-2020</h6>
        <span class="social">
          <h5>
            follow me on:
            <ul class="links">
              <li>
                <a
                  href="https://www.linkedin.com/in/kenneth-brook/"
                  target="_blank"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a href="https://github.com/kenneth-brook" target="_blank"
                  >Github</a
                >
              </li>
            </ul>
          </h5>
        </span>
      </div>
    </footer>
  </body>
</html>
