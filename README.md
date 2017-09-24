This is a simple example of SVG powered animations in PIXI.js

[See a demo!](https://gromgull.github.io/pixi-svg-anim)

The [PIXI SVG Loader](https://github.com/blunt1337/pixi-svg-loader)
does all the heavy lifting and lets you import a SVG as an object-tree
in PIXI, i.e. you can create your own hierarchy of elements and then
manipulate them individually in PIXI.

I only added Inkscape support (this requires my
[fork of pixi-svg-loader](https://github.com/gromgull/pixi-svg-loader) ),
and a half-baked framework for configuring the animations.

To make your own:
* make a svg in Inkscape
* take care to not create any group-level translates! (i.e. never move
  a group)
* you can also use the [apply  transforms](https://github.com/Klowner/inkscape-applytransforms)
  plugin to remove any extra transformations
* name the groups/element you want to animate something sensible, like
  `head`, `leftleg` etc.
* move the pivots where you want things to rotate around (see https://imgur.com/a/MxeCd)
* save the file, edit in a text editor, add a `#` to the start of the
  labels you added. Only labels starting with `#` are exposed as PIXI
  objects.
* load the object into PIXI and configure the animation (see index.js)
