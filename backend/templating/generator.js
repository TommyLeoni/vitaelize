module.exports = {
  first: function(req, pic) {
    const content = req.content;
    const settings = req.settings;
    return `
    <html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous">
    <style>
        .test {
          padding: 0 10cm 0 0!important;
        }

        .lol {
          color: ${settings.color}
        }
      </style>
    <body>
      <div id="pageHeader">
        <div class="container">
          <br/>
            <span class="label label-default">With external css</span>
          </div>
        </div>

        <div class="container test">
          <div class="jumbotron">
            <h1>${content.title}</h1>
            <h3>${content.name}</h3>
            <p class="lol">${content.jobTitle}</p>
            <p>${content.phoneNumber}, ${content.address}</p>
            <p>
              <a class="btn btn-lg btn-primary"
                href="http://getbootstrap.com/components/#navbar" role="button">View
                navbar docs &raquo;</a>
            </p>
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
