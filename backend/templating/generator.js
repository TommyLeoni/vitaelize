module.exports = {
  first: function(req) {
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
  second: function(color) {},
  third: function(color) {}
};
