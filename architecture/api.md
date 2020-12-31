This document tries to reason about how this library should work. This is a living document.

# What?

What problem are we trying to solve? We're trying to solve the problem when we have multiple concepts that somehow relate to each other, how can we create a good graphical representation of these concepts? Basically what the library can do for you is to convert a graph with edges and vertices into an SVG.

# What factors?

By using the visualizer library we can convert geometrical shapes into valid svg. The part of this library (the layouter) is to determine where these geometrical shaped should live.

There are a couple of important input that should be given -> How big is the minimum distance between entities? Also, what is the preferred orientation of the chart? Should it rather be a square one, or more vertical or more horizontal.

The layouter also needs something that can convert an entity into a geometrical shape. Why is this important? Because the most simple case is that you would have rectangle representations of all entites, but it might be that you want to have graphs interacting with graphs. In this case the layouter could be used to determine a polygon shape of a layout, and this shape could be used as input to determine the shape of another layout.

# How?

One should find the most connected item in a graph. This item is placed first. Then the second most connected one that is also connected to he first item is picked. It is placed in a weighted position according to previously placed items, and on goes the algotihm.

# API

You have a converter. SimpleConverter -> makes a rectangle out of entities.

Layouter -> layout(graph) -> { shape: Polygon, svg: Element }.
