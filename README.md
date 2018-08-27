# StanfordASL
The ASL's website, hosted on GitHub Pages!

## Developing the Website
To develop, **you must do your work on the `source` branch**. `master` is autogenerated via a `rake` job (you can see the details in `Rakefile`). The `source` branch contains all the Jekyll code. To do this, simply execute
```
git checkout source
```

## Publishing the Website
When you've made the desired changes and are in the `source` branch, simply execute:
```
rake publish
```
This will rebuild the site, commit your changes to the `source` branch, and deploy the generated site (located in `_site`) to the `master` branch. GitHub Pages will pick up on this change and update `stanfordasl.github.io` with the new changes.

**NOTE**: This GitHub Pages link is the where the `asl.stanford.edu` and `asl-origin.stanford.edu` proxies point to, so this repository and the corresponding GitHub Page is the "actual" website.
