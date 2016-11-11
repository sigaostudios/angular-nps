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
| Attribute       | Description                            |
|-----------------|----------------------------------------|
| externalsubmit  | Submits a score via ajax POST          |
| ga              | Submits a score via GoogleAnalytics    |
| username        | Username of the user submitting score  |
| backgroundColor | Background color of the feedback form  |
| buttonColor     | Color of the submit button             |
| buttonTextColor | Color of the text on the submit button |

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

