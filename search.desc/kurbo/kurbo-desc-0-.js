searchState.loadedDescShard("kurbo", 0, "2D geometry, with a focus on curves.\nA 2D affine transform.\nA single elliptical arc segment.\nA straight line connecting the segments.\nA Bézier path.\nFlat cap.\nDefines the shape to be drawn at the ends of a stroke.\nA circle.\nA segment of a circle.\nClose off the path.\nA trivial “curve” that is just a constant.\nA cubic bezier segment.\nA single cubic Bézier segment.\nAn iterator for cubic beziers.\nA sample point of a curve for fitting.\nDraw a cubic bezier using the current location and the …\nClassification result for cusp detection.\nA default value for methods that take an ‘accuracy’ …\nCollection of values representing lengths in a dash …\nThe parametric curve obtained by taking the derivative of …\nCusp has two closely spaced inflection points.\nAn ellipse.\nA transform that is flipped on the x-axis.\nA transform that is flipped on the y-axis. Useful for …\nThe identity transform.\nInsets from the edges of a rectangle.\nDefines the connection between two segments of a stroke.\nA single line.\nA line segment.\nAn intersection of a <code>Line</code> and a <code>PathSeg</code>.\nDraw a line from the current location to the point.\nCusp is a loop.\nThe maximum number of extrema that can be reported in the …\nThe minimum distance between two Bézier curves.\nThe segments are extended to their natural intersection …\nMove directly to the point without drawing anything, …\nThe nearest position on a curve to some point.\nThe point at the origin; (0, 0).\nCompute optimized subdivision points to minimize error.\nA curve parametrized by a scalar.\nA parametrized curve that can have its arc length measured.\nA parametrized curve that can have its signed area …\nA parametrized curve that reports its curvature.\nA differentiable parametrized curve.\nA parametrized curve that reports its extrema.\nThe source curve for curve fitting.\nA parametrized curve that reports the nearest point.\nThe element of a Bézier path.\nThe iterator returned by the <code>path_elements</code> method.\nA segment of a Bézier path.\nAn iterator for path segments.\nA 2D point.\nA quadratic bezier segment.\nA single quadratic Bézier segment.\nAn iterator for quadratic beziers.\nA quadratic Bézier spline in B-spline format.\nDraw a quadratic bezier using the current location and the …\nA rectangle.\nAn arc between the segments.\nRounded cap with radius equal to half the stroke width.\nA rectangle with equally rounded corners.\nRadii for each corner of a rounded rectangle.\nAn iterator that transforms path elements to path segments.\nA generic trait for open and closed shapes.\nA 2D size.\nSquare cap with dimensions equal to half the stroke width.\nDescribes the visual style of a stroke.\nOptimization level for computing\nOptions for path stroking.\nAdaptively subdivide segments in half.\nA single SVG arc segment.\nAn error which can be returned when parsing an SVG.\nA transformation consisting of a uniform scaling followed …\nThe input string ended while still expecting input.\nEncountered a command that precedes expected ‘moveto’ …\nEncountered an unknown command letter.\nA 2D vector.\nA number was expected.\nZeroed insets.\nThe point (0, 0).\nThe empty rectangle at the origin.\nA size with zero width or height.\nThe vector (0, 0).\nTake absolute value of width and height.\nTakes the absolute value of all corner radii.\nIn this context adding a <code>Vec2</code> applies the corresponding …\nFind the angle in radians between this vector and the …\nCreate an iterator generating Bezier path elements.\nApply an affine transform to the path.\nReturn a <code>QuadSpline</code> approximating this cubic Bézier.\nThe arc length of the curve.\nArclength of a cubic Bézier segment.\nArclength of a quadratic Bézier segment.\nReturn <code>true</code> iff all values are nonnegative.\nSigned area.\nNote: shape isn’t closed so area is not well defined.\nSigned area.\nThe area under the curve.\nReturning zero here is consistent with the contract (area …\nThe area of the rectangle.\nThe area covered by this size.\nIf the shape is a circle, make it available.\nIf the shape is a circle, make it available.\nGet the coefficients of the transform.\nIf the shape is a line, make it available.\nIf the shape is a line, make it available.\nGet the <code>PathEl</code> that is equivalent to discarding the …\nIf the shape is stored as a slice of path elements, make …\nIf the shape is stored as a slice of path elements, make …\nIf the shape is a rectangle, make it available.\nIf the shape is a rectangle, make it available.\nIf the shape is a rounded rectangle, make it available.\nIf the shape is a rounded rectangle, make it available.\nIf all radii are equal, returns the value of the radii. …\nDecompose transformation into translation and scale.\nThe aspect ratio of the <code>Rect</code>.\nReturns the aspect ratio of a rectangle with the given …\nFind the angle in radians between this vector and the …\nThe radius of the bottom-left corner.\nThe radius of the bottom-right corner.\nThe smallest rectangle that encloses the shape.\nThe smallest rectangle that encloses the curve in the …\nThe smallest rectangle that encloses the curve in the …\nFind a cusp or corner within the given range.\nReturns a new <code>Point</code>, with <code>x</code> and <code>y</code> rounded up to the …\nReturns a new <code>Rect</code>, with each coordinate value rounded up …\nReturns a new <code>Size</code>, with <code>width</code> and <code>height</code> rounded up to …\nReturns a new <code>Vec2</code>, with <code>x</code> and <code>y</code> rounded up to the nearest …\nReturns the center of this ellipse.\nThe center point of the rectangle.\nThe center point of the rectangle.\nThe arc’s centre point.\nThe center.\nThe center.\nFor each corner, takes the min of that corner’s radius …\nReturns a new size bounded by <code>min</code> and <code>max.</code>\nPush a “close path” element onto the path.\nCommon mathematical operations\nReturns the largest possible <code>Rect</code> that is fully contained …\nReturns <code>true</code> if the <code>Point</code> is inside this shape.\nReturns <code>true</code> if the <code>Point</code> is inside this shape.\nReturns <code>true</code> if <code>point</code> lies within <code>self</code>.\nReturns whether this rectangle contains another rectangle.\nReturns a rectangle that conservatively encloses the path.\nCross product of two vectors.\nComputes the point where two lines, if extended to …\nConvert multiple cubic Bézier curves to quadratic splines.\nCompute the signed curvature at parameter <code>t</code>.\nCompute the signed curvature at parameter <code>t</code>.\nPush a “curve to” element onto the path.\nCreate a new dashing iterator.\nOffset of the first dash.\nLengths of dashes in alternating on/off order.\nThe derivative of the curve.\nCompute the determinant of this transform.\nEuclidean distance.\nThe shortest distance between any two points on the two …\nThe square of the distance from the nearest position on …\nSquared Euclidean distance.\nNote: division by a scalar is implemented by multiplying …\nDot product of two vectors.\nGet the path elements.\nGet the path elements (mut version).\nThe end point.\nThe end point.\nStyle for capping the end of an open subpath.\nGet the end point of the path element, if it exists.\nEvaluate the curve at parameter <code>t</code>.\nReturns a new <code>Point</code>, with <code>x</code> and <code>y</code> rounded away from zero …\nReturns a new <code>Rect</code>, with each coordinate value rounded …\nReturns a new <code>Size</code>, with <code>width</code> and <code>height</code> rounded away …\nReturns a new <code>Vec2</code>, with <code>x</code> and <code>y</code> rounded away from zero to …\nCompute the extrema of the curve.\nReturn parameter ranges, each of which is monotonic within …\nReturn parameter ranges, each of which is monotonic within …\nGenerate a Bézier path that fits the source curve.\nGenerate a highly optimized Bézier path that fits the …\nFit a single cubic to a range of the source curve.\nFlatten the path, invoking the callback repeatedly.\nFlatten the path, invoking the callback repeatedly.\nReturns a new <code>Point</code>, with <code>x</code> and <code>y</code> rounded down to the …\nReturns a new <code>Rect</code>, with each coordinate value rounded down…\nReturns a new <code>Size</code>, with <code>width</code> and <code>height</code> rounded down to …\nReturns a new <code>Vec2</code>, with <code>x</code> and <code>y</code> rounded down to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe arc’s start point.\nCreate an ellipse from an affine transformation of the …\nA unit vector of the given angle.\nA new rectangle from center and size.\nA new rectangle from origin and size.\nA new rectangle from origin and size.\nCreate a <code>BezPath</code> with segments corresponding to the …\nA new rectangle from two points.\nA new rectangle from two <code>Point</code>s.\nReturns the largest ellipse that can be bounded by this …\nA new rounded rectangle from a rectangle and corner radii.\nCreate a transform that scales about a point other than …\nCreate a new <code>RoundedRectRadii</code> from a single radius. The …\nTry to parse a bezier path from an SVG path element.\nCreates an <code>Arc</code> from a <code>SvgArc</code>.\nCreate a path from a vector of path elements.\nEstimate arclength using Gaussian quadrature.\nEstimate arclength using Gaussian quadrature.\nGet the segment at the given element index.\nThe height of the rectangle.\nThe height of the rectangle.\nThe height.\nMagnitude of vector.\nMagnitude squared of vector.\nExpand a rectangle by a constant amount in both directions.\nDetermine the inflection points.\nReturn an arc representing the inner radius.\nThe inner radius.\nCreate a new <code>Rect</code> by applying the <code>Insets</code>.\nThe intersection of two rectangles.\nCompute intersections against a line.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert into a Bézier path.\nConvert into a Bézier path.\nSolve for the parameter that has the given arc length from …\nSolve for the parameter that has the given arc length from …\nCompute the inverse transform.\nCompute the inverse transform.\nReturns <code>true</code> if the path contains no segments.\nWhether this rectangle has zero area.\nWhether this size has zero area.\nIs this map finite?\nIs this path finite?\nIs this path element finite?\nIs this Bezier path finite?\nIs this line intersection finite?\nIs this circle finite?\nIs this circle segment finite?\nIs this cubic Bezier curve finite?\nIs this ellipse finite?\nAre these insets finite?\nIs this line <code>finite</code>?\nIs this point finite?\nIs this point finite?\nIs this quadratic Bezier curve finite?\nIs this rectangle finite?\nIs this rounded rectangle finite?\nReturns <code>true</code> if all radius values are finite.\nIs this size finite?\nIs this translate/scale finite?\nIs this <code>Vec2</code> finite?\nIs this map NaN?\nIs this path NaN?\nIs this path element NaN?\nIs this Bezier path NaN?\nIs this line intersection NaN?\nIs this circle NaN?\nIs this circle segment NaN?\nIs this cubic Bezier curve NaN?\nIs this ellipse NaN?\nAre these insets NaN?\nIs this line <code>NaN</code>?\nIs this point NaN?\nIs this point <code>NaN</code>?\nIs this quadratic Bezier curve NaN?\nIs this rectangle NaN?\nIs this rounded rectangle NaN?\nReturns <code>true</code> if any corner radius value is NaN.\nIs this size NaN?\nIs this translate/scale NaN?\nIs this <code>Vec2</code> <code>NaN</code>?\nChecks that arc is actually a straight line.\nWhether this rectangle has zero area.\nWhether this size has zero area.\nReturns an iterator over the path’s elements.\nStyle for connecting segments of the stroke.\nDoes this arc sweep through more than π radians?\nThe length of the line.\nMagnitude of vector.\nMagnitude squared of vector.\nLinearly interpolate between two points.\nLinearly interpolate between two vectors.\nThe ‘time’ that the intersection occurs, on the line.\nPush a “line to” element onto the path.\nCreates an affine transformation that takes the unit …\nReturns the max of <code>width</code> and <code>height</code>.\nReturns the maximum value for the x-coordinate of the …\nReturns the maximum value for the y-coordinate of the …\nThe midpoint of the line.\nDetermine the midpoint of two points.\nMinimum distance between two <code>PathSeg</code>s.\nReturns the min of <code>width</code> and <code>height</code>.\nReturns the minimum value for the x-coordinate of the …\nReturns the minimum value for the y-coordinate of the …\nLimit for miter joins.\nCompute moment integrals.\nCompute moment integrals.\nPush a “move to” element onto the path.\nFind the position on the curve that is nearest to the …\nFind the nearest point, using subdivision.\nFind the nearest point, using analytical algorithm based …\nConstruct an affine transform from coefficients.\nCreate a new <code>Arc</code>.\nCreate a new path.\nA new circle from center and radius.\nCreate a <code>CircleSegment</code> out of its constituent parts.\nCreate a new cubic Bézier segment.\nCreate A new ellipse with a given center, radii, and …\nNew insets. The ordering of the arguments is “left, top, …\nCreate a new line.\nCreate a new <code>Point</code> with the provided <code>x</code> and <code>y</code> coordinates.\nCreate a new quadratic Bézier segment.\nConstruct a new <code>QuadSpline</code> from an array of <code>Point</code>s.\nA new rectangle from minimum and maximum coordinates.\nA new rectangle from minimum and maximum coordinates.\nCreate a new <code>RoundedRectRadii</code>. This function takes radius …\nCreate a new <code>Size</code> with the provided <code>width</code> and <code>height</code>.\nCreates a new stroke with the specified width.\nCreate a new transformation from translation and scale.\nCreate a new vector.\nReturn new <code>Insets</code> with all negative values replaced with …\nReturns a vector of magnitude 1.0 with the same angle as …\nComputation of offset curves of cubic Béziers, based on a …\nSet optimization level for computing stroke outlines.\nThe origin of the rectangle.\nThe origin of the rectangle.\nReturn an arc representing the outer radius.\nThe outer radius.\nDetermines whether this rectangle overlaps with another in …\nA point on the curve at the sample location.\nThe line’s start point.\nThe line’s end point.\nReturns an iterator over this shape expressed as <code>PathEl</code>s; …\nReturns an iterator over this shape expressed as Bézier …\nReturns an iterator over this shape expressed as Bézier …\nTotal length of perimeter.\nThe perimeter of the arc.\nReturn the spline’s control <code>Point</code>s.\nRemoves the last <code>PathEl</code> from the path and returns it, or …\nA rotation by <code>th</code> followed by <code>self</code>.\nA rotation by <code>th</code> about <code>center</code> followed by <code>self</code>.\nA scale by <code>scale</code> followed by <code>self</code>.\nA scale by <code>(scale_x, scale_y)</code> followed by <code>self</code>.\nA translation of <code>trans</code> followed by <code>self</code>.\nPush a generic path element onto the path.\nPush a “quad to” element onto the path.\nReturns the two radii of this ellipse.\nRadii of the rounded corners.\nThe arc’s radii, where the vector’s x-component is the …\nThe arc’s radii, where the vector’s x-component is the …\nReturns the radii and the rotation of this ellipse.\nThe radius.\nRaise the order by 1.\nThe (non-rounded) rectangle.\nCreate an affine transform that represents reflection …\nReturns a new <code>PathSeg</code> describing the same path as <code>self</code>, …\nReturns a new path with the winding direction of all …\nReturns a copy of this <code>Arc</code> in the opposite direction.\nReturns a copy of this <code>Line</code> with the end points swapped so …\nAn affine transform representing rotation.\nAn affine transform representing a rotation of <code>th</code> radians …\nThe ellipse’s rotation, in radians.\nReturns a new <code>Point</code>, with <code>x</code> and <code>y</code> rounded to the nearest …\nReturns a new <code>Rect</code>, with each coordinate value rounded to …\nReturns a new <code>Size</code>, with <code>width</code> and <code>height</code> rounded to the …\nReturns a new <code>Vec2</code>, with <code>x</code> and <code>y</code> rounded to the nearest …\nEvaluate the point and derivative at parameter <code>t</code>.\nEvaluate the curve and its tangent at parameter <code>t</code>.\nAn affine transform representing uniform scaling.\nCreate a new transformation with scale only.\nThe scale component of this transformation\nScales the <code>Rect</code> by <code>factor</code> with respect to the origin (the …\nAn affine transform representing non-uniform scaling with …\nCreate a <code>CircleSegment</code> by cutting out parts of this circle.\nThe ‘time’ that the intersection occurs, on the path …\nTransform an iterator over path elements into one over path\nIterate over the path segments.\nCompute the signed area under the curve.\nSimplification of a Bézier path.\nReturns the total delta represented by these insets as a …\nThe size of the rectangle.\nAn affine transformation representing a skew.\nThe start point.\nThe start point.\nThe start angle in radians.\nThe angle to start drawing the segment (in radians).\nStyle for capping the beginning of an open subpath.\nExpand a stroke into a fill.\nIn this context subtracting a <code>Vec2</code> applies the …\nSubdivide into (roughly) halves.\nSubdivide into (roughly) halves.\nSubdivide into halves, using de Casteljau.\nSubdivide into halves, using de Casteljau.\nGet a subsegment of the curve for the given parameter …\nDetermines if the arc should begin moving at positive …\nThe angle between the start and end of the arc, in radians.\nThe arc length of the segment (in radians).\nThe position on the curve of the nearest point, as a …\nThe position of the nearest point on the first curve, as a …\nThe position of the nearest point on the second curve, as …\nA vector tangent to the curve at the sample location.\nFind points on the curve where the tangent line passes …\n<code>self</code> followed by a rotation of <code>th</code>.\n<code>self</code> followed by a rotation of <code>th</code> about <code>center</code>.\n<code>self</code> followed by a scale of <code>scale</code>.\n<code>self</code> followed by a scale of <code>(scale_x, scale_y)</code>.\n<code>self</code> followed by a translation of <code>trans</code>.\nThe arc’s end point.\nConvert this segment to a cubic bezier.\nConverts an <code>Arc</code> into a series of cubic bezier segments.\nReturns the <code>Ellipse</code> that is bounded by this <code>Rect</code>.\nConvert to a Bézier path.\nConvert to a Bézier path.\nConvert this vector into a <code>Point</code>.\nConvert to quadratic Béziers.\nReturn an iterator over the implied <code>QuadBez</code> sequence.\nConvert this <code>Size</code> into a <code>Rect</code> with origin <code>(0.0, 0.0)</code>.\nCreates a new <code>RoundedRect</code> from this <code>Rect</code> and the provided …\nConvert this <code>Size</code> into a <code>RoundedRect</code> with origin <code>(0.0, 0.0)</code>…\nConvert this vector into a <code>Size</code>.\nConvert the path to an SVG path string representation.\nConvert this point into a <code>Vec2</code>.\nConvert this size into a <code>Vec2</code>, with <code>width</code> mapped to <code>x</code> and …\nThe radius of the top-left corner.\nThe radius of the top-right corner.\nCompute the bounding box of a transformed rectangle.\nAn affine transform representing translation.\nCreate a new transformation with translation only.\nReturns the translation part of this affine map (…\nThe translation component of this transformation\nReturns a new <code>Point</code>, with <code>x</code> and <code>y</code> rounded towards zero to …\nReturns a new <code>Rect</code>, with each coordinate value rounded …\nReturns a new <code>Size</code>, with <code>width</code> and <code>height</code> rounded towards …\nReturns a new <code>Vec2</code>, with <code>x</code> and <code>y</code> rounded towards zero to …\nShorten the path, keeping the first <code>len</code> elements.\nNew uniform insets.\nNew insets with uniform values along each axis.\nThe smallest rectangle enclosing two rectangles.\nCompute the union with one point.\nThe width of the rectangle.\nThe width of the rectangle.\nThe width.\nWidth of the stroke.\nThe winding number of a point.\nNote: shape isn’t closed, so a point’s winding number …\nWinding number of point.\nSame consideration as <code>area</code>.\nNote: this function is carefully designed so that if the …\nBuilder method for setting the cap style.\nCreate a new <code>Ellipse</code> centered on the provided point.\nBuilder method for setting the dashing parameters.\nBuilder method for setting the cap style for the end of …\nBuilder method for setting the join style.\nBuilder method for setting the limit for miter joins.\nCreate a new <code>Rect</code> with the same size as <code>self</code> and a new …\nCreate a new <code>Ellipse</code> with the provided radii.\nCreate a new <code>Ellipse</code>, with the rotation replaced by …\nCreate a new <code>Rect</code> with the same origin as <code>self</code> and a new …\nBuilder method for setting the cap style for the start of …\nReplaces the translation portion of this affine map\nWrite the SVG representation of this path to the provided …\nThe x coordinate.\nThe x-coordinate.\nThe minimum x coordinate (left edge).\nThe minimum x coordinate (left edge).\nThe maximum x coordinate (right edge).\nThe maximum x coordinate (right edge).\nHow much the arc is rotated, in radians.\nHow much the arc is rotated, in radians.\nThe total delta on the x-axis represented by these insets.\nThe y coordinate.\nThe y-coordinate.\nThe minimum y coordinate (top edge in y-down spaces).\nThe minimum y coordinate (top edge in y-down spaces).\nThe maximum y coordinate (bottom edge in y-down spaces).\nThe maximum y coordinate (bottom edge in y-down spaces).\nThe total delta on the y-axis represented by these insets.\nAdds convenience methods to <code>f32</code> and <code>f64</code>.\nRounds to the nearest integer away from zero, unless the …\nFactor a quartic into two quadratics.\nFind real roots of cubic equation.\nSolve an arbitrary function for a zero-crossing.\nFind real roots of quadratic equation.\nFind real roots of a quartic equation.\nThe offset curve of a cubic Bézier.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCreate a new curve from Bézier segment and offset.\nCreate a new curve from Bézier segment and offset, with …\nOptimize subdivision points.\nA Bézier path which has been prepared for simplification.\nOptimization level for simplification.\nOptions for simplifying paths.\nSubdivide; faster but not as optimized results.\nSet angle threshold.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSet up a new Bézier path for simplification.\nSet optimization level.\nSimplify a Bézier path.")