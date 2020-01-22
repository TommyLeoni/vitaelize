module.exports = {
  first: function(content, pic) {
    const settings = content.settings;
    console.log(content);
    return `
    <html>

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style>
    .test {
      padding: 0 4cm 0 0!important;
      height: 100vh;
    }

    .title-color-blue {
      color: #42A3B8 !important;
    }

    .title-color-red {
      color: #DC4245 !important;
    }

    .title-color-green {
      color: #4FA746 !important;
    }

    .title-color-yellow {
      color: #F9C132 !important;
    }

    .title-color-grey {
      color: #6C757D !important;
    }

    .blue {
      border-color: #42A3B8 !important;
    }

    .red {
      border-color: #DC4245 !important;
    }

    .green {
      border-color: #4FA746 !important;
    }

    .yellow {
      border-color: #F9C132 !important;
    }

    .grey {
      border-color: #6C757D !important;
    }
  </style>
</head>
<body>
  <div class="test">
    <div class="row p-5">
    <div class="col-6">
    lal
    </div>
      <div class="col-6 text-center justify-content-center border-right">
        <div class="text-left font-weight-light">
          <h2 class="font-weight-bold">${content.fullName}</h2>
          <p>${content.jobTitle}</p>
          <h6 class="font-weight-bold">Geburtsdatum:<span class="font-weight-light"> ${
            content.birthday
          }</span></h6>
          <h6 class="font-weight-bold">Addresse:<span class="font-weight-light"> ${
            content.address
          }</span></h6>
          <h6 class="font-weight-bold">Telefon:<span class="font-weight-light"> ${
            content.phone
          }</span></h6>
          <h6 class="font-weight-bold">E-Mail:<span class="font-weight-light"> ${
            content.email
          }</span></h6>
          <div class="border-bottom w-100 my-4"></div>
          <h3 class="font-weight-bold">Ausbildung & Karriere</h3>
        </div>
      </div>
      <div class="col-6 text-right pl-5">
        <h3 class="font-weight-bold mt-1">Über mich</h3>
        <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <h3 class="font-weight-bold mt-1">Hobbys</h3>
        <div class="row w-100 m-0 p-0 justify-content-end">
          <div class="col-9 p-0 my-3">
            <h5>Erstmal Hart gewichst</h5>
            <p>Aufm Pausenplatz haha dings</p>
          </div>
          <div class="col-9 p-0 my-3">
            <h5>Erstmal Hart gewichst</h5>
            <p>Aufm Pausenplatz haha dings</h6>
          </div>
          <div class="col-9 p-0 my-3">
            <h5>Erstmal Hart gewichst</h5>
            <p>Aufm Pausenplatz haha dings</p>
          </div>
        </div> 
        <h3 class="font-weight-bold mt-1">Referenzen</h3>
        <div class="row w-100 m-0 p-0 justify-content-end">
          <div class="col-9 p-0 my-3">
            <h5>Erstmal Hart gewichst</h5>
            <p>Aufm Pausenplatz haha dings</p>
          </div>
        </div> 
      </div>
    </div>
  </div>
</body>

</html>`;
  },
  second: function(req, pic) {
    return `
    <!DOCTYPE html>
    
    <html>
    
    <head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    
         <title>One Page Resume</title>
    
         <style type="text/css">
            * { margin: 0; padding: 0; }
            body { font: 16px Helvetica, Sans-Serif; line-height: 24px; background: url(images/noise.jpg);
              padding: 0 10cm 0 0!important; }
            .clear { clear: both; }
            #page-wrap { width: 800px; margin: 40px auto 60px; }
            #pic { float: right; margin: -30px 0 0 0; }
            h1 { margin: 0 0 16px 0; padding: 0 0 16px 0; font-size: 42px; font-weight: bold; letter-spacing: -2px; border-bottom: 1px solid #999; }
            h2 { font-size: 20px; margin: 0 0 6px 0; position: relative; }
            h2 span { position: absolute; bottom: 0; right: 0; font-style: italic; font-family: Georgia, Serif; font-size: 16px; color: #999; font-weight: normal; }
            p { margin: 0 0 16px 0; }
            a { color: #999; text-decoration: none; border-bottom: 1px dotted #999; }
            a:hover { border-bottom-style: solid; color: black; }
            ul { margin: 0 0 32px 17px; }
            #objective { width: 500px; float: left; }
            #objective p { font-family: Georgia, Serif; font-style: italic; color: #666; }
            dt { font-style: italic; font-weight: bold; font-size: 18px; text-align: right; padding: 0 26px 0 0; width: 150px; float: left; height: 100px; border-right: 1px solid #999;  }
            dd { width: 600px; float: right; }
            dd.clear { float: none; margin: 0; height: 15px; }
         </style>
    </head>
    
    <body>
    
        <div id="page-wrap">
        
            <img src="images/cthulu.png" alt="Photo of Cthulu" id="pic" />
        
            <div id="contact-info" class="vcard">
            
                <!-- Microformats! -->
            
                <h1 class="fn">C'thulhu</h1>
            
                <p>
                    Cell: <span class="tel">555-666-7777</span><br />
                    Email: <a class="email" href="mailto:greatoldone@lovecraft.com">greatoldone@lovecraft.com</a>
                </p>
            </div>
                    
            <div id="objective">
                <p>
                    I am an outgoing and energetic (ask anybody) young professional, seeking a 
                    career that fits my professional skills, personality, and murderous tendencies. 
                    My squid-like head is a masterful problem solver and inspires fear in who gaze upon it. 
                    I can bring world domination to your organization. 
                </p>
            </div>
            
            <div class="clear"></div>
            
            <dl>
                <dd class="clear"></dd>
                
                <dt>Education</dt>
                <dd>
                    <h2>Withering Madness University - Planet Vhoorl</h2>
                    <p><strong>Major:</strong> Public Relations<br />
                       <strong>Minor:</strong> Scale Tending</p>
                </dd>
                
                <dd class="clear"></dd>
                
                <dt>Skills</dt>
                <dd>
                    <h2>Office skills</h2>
                    <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
                    
                    <h2>Computer skills</h2>
                    <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
                </dd>
                
                <dd class="clear"></dd>
                
                <dt>Experience</dt>
                <dd>
                    <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
                    <ul>
                        <li>Inspired and won highest peasant death competition among servants</li>
                        <li>Helped coordinate managers to grow cult following</li>
                        <li>Provided untimely deaths to all who opposed</li>
                    </ul>
                    
                    <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
                    <ul>
                        <li>Worked on grass-roots promotional campaigns</li>
                        <li>Reduced theft and property damage percentages</li>
                        <li>Janitorial work, Laundry</li>
                    </ul> 
                </dd>
                
                <dd class="clear"></dd>
                
                <dt>Hobbies</dt>
                <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
                
                <dd class="clear"></dd>
                
                <dt>References</dt>
                <dd>Available on request</dd>
                
                <dd class="clear"></dd>
            </dl>
            
            <div class="clear"></div>
        
        </div>
    
    </body>
    
    </html>
    `;
  },
  third: function(color) {}
};
