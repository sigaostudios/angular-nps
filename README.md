# angular-nps
Angular Net Promoter System&reg; feedback form

## Synopsis
Angular NPS provides an easy-to-use NPS form for use on your site. 
 
## Example
```html
<div>
    <nps-form externalsubmit="true" ga="true" username="$scope.user" backgroundColor="#005093" buttonColor="#88cb34" buttonTextColor=""></nps-form>
</div>
```
### Attributes:
| Attribute       | Description                                                                                             |
|-----------------|---------------------------------------------------------------------------------------------------------|
| externalsubmit  | Removes submit button from form and grants the parent scope access to the directive's submit functions  |
| ga              | Submits a score via GoogleAnalytics                                                                     |
| username        | Username of the user submitting score                                                                   |
| backgroundColor | Background color of the feedback form                                                                   |
| buttonColor     | Color of the submit button                                                                              |
| buttonTextColor | Color of the text on the submit button                                                                  |

## Motivation
Angular-NPS was written for use in [AgileKit.IO](http://www.agilekit.io/) as a tool to gather feedback from our users.

## Installation

Angular-NPS can be installed using Bower:

```
bower install angular-nps --save
```

You will then need to reference the angular-nps.js and angular-nps.css files in your html.

```html
<link rel="stylesheet" href="./bower_components/angular-nps/dist/css/angular-nps.css" />
<script src="./bower_components/angular-nps/dist/js/angular-nps.js" />    
```

Add the angular-nps dependency into your Angular module definition:
```javascript
(function() {
    'use strict';
    angular.module('test-nps', ['angular-nps']);
})
```
## Tests

We use karma as a test runner. You can run karma start from the tests folder to run the unit test suite.

## Contributors

angular-nps is maintained by the team at [Sigao Studios, LLC](http://www.sigaostudios.com) If you would like to contribute to this project, feel free to contact us.

## License

angular-nps
Copyright (c) 2016 Sigao Studios, LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
