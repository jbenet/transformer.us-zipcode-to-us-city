# transformer.us-zipcode-to-us-city

[Transformer](http://github.com/jbenet/transformer) conversion: us-zipcode to us-city

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '92018' | transform us-zipcode us-city
'Carlsbad, CA'
```

### Javascript

```js
var transformer = require('dat-transformer');
var tUsZipcodeToUsCity = transformer('us-zipcode', 'us-city');
tUsZipcodeToUsCity('92018'); // 'Carlsbad, CA'
```
