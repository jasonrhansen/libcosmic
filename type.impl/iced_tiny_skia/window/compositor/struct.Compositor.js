(function() {
    var type_impls = Object.fromEntries([["cosmic",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Compositor-for-Compositor\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#29\">Source</a><a href=\"#impl-Compositor-for-Compositor\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a> for <a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Renderer\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#30\">Source</a><a href=\"#associatedtype.Renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" class=\"associatedtype\">Renderer</a> = <a class=\"struct\" href=\"iced_tiny_skia/struct.Renderer.html\" title=\"struct iced_tiny_skia::Renderer\">Renderer</a></h4></section></summary><div class='docblock'>The iced renderer of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Surface\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#31\">Source</a><a href=\"#associatedtype.Surface\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" class=\"associatedtype\">Surface</a> = <a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Surface.html\" title=\"struct iced_tiny_skia::window::compositor::Surface\">Surface</a></h4></section></summary><div class='docblock'>The surface of the backend.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_backend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#33-37\">Source</a><a href=\"#method.with_backend\" class=\"anchor\">§</a><h4 class=\"code-header\">async fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.with_backend\" class=\"fn\">with_backend</a>&lt;W&gt;(\n    settings: <a class=\"struct\" href=\"cosmic/iced_renderer/graphics/struct.Settings.html\" title=\"struct cosmic::iced_renderer::graphics::Settings\">Settings</a>,\n    compatible_window: W,\n    backend: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a>, <a class=\"enum\" href=\"cosmic/iced_renderer/graphics/enum.Error.html\" title=\"enum cosmic::iced_renderer::graphics::Error\">Error</a>&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/compositor/trait.Window.html\" title=\"trait cosmic::iced_renderer::graphics::compositor::Window\">Window</a>,</div></h4></section></summary><div class='docblock'>Creates a new <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\"><code>Compositor</code></a> with a backend preference. <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.with_backend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_renderer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#51\">Source</a><a href=\"#method.create_renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.create_renderer\" class=\"fn\">create_renderer</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"type cosmic::iced_renderer::graphics::Compositor::Renderer\">Renderer</a></h4></section></summary><div class='docblock'>Creates a <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Self::Renderer</code></a> for the <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#58-63\">Source</a><a href=\"#method.create_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.create_surface\" class=\"fn\">create_surface</a>&lt;W&gt;(\n    &amp;mut self,\n    window: W,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"type cosmic::iced_renderer::graphics::Compositor::Surface\">Surface</a><div class=\"where\">where\n    W: <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/compositor/trait.Window.html\" title=\"trait cosmic::iced_renderer::graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Crates a new <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> for the given window.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.configure_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#84-89\">Source</a><a href=\"#method.configure_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.configure_surface\" class=\"fn\">configure_surface</a>(\n    &amp;mut self,\n    surface: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"type cosmic::iced_renderer::graphics::Compositor::Surface\">Surface</a>,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n)</h4></section></summary><div class='docblock'>Configures a new <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> with the given dimensions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_information\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#103\">Source</a><a href=\"#method.fetch_information\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.fetch_information\" class=\"fn\">fetch_information</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cosmic/iced_renderer/graphics/compositor/struct.Information.html\" title=\"struct cosmic::iced_renderer::graphics::compositor::Information\">Information</a></h4></section></summary><div class='docblock'>Returns <a href=\"cosmic/iced_renderer/graphics/compositor/struct.Information.html\" title=\"struct cosmic::iced_renderer::graphics::compositor::Information\"><code>Information</code></a> used by this <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.present\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#110-117\">Source</a><a href=\"#method.present\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.present\" class=\"fn\">present</a>&lt;T&gt;(\n    &amp;mut self,\n    renderer: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"type cosmic::iced_renderer::graphics::Compositor::Renderer\">Renderer</a>,\n    surface: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"type cosmic::iced_renderer::graphics::Compositor::Surface\">Surface</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_renderer/graphics/struct.Viewport.html\" title=\"struct cosmic::iced_renderer::graphics::Viewport\">Viewport</a>,\n    background_color: <a class=\"struct\" href=\"cosmic/iced/struct.Color.html\" title=\"struct cosmic::iced::Color\">Color</a>,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"cosmic/iced_renderer/graphics/compositor/enum.SurfaceError.html\" title=\"enum cosmic::iced_renderer::graphics::compositor::SurfaceError\">SurfaceError</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,</div></h4></section></summary><div class='docblock'>Presents the <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to the next frame of the given <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.screenshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#121-127\">Source</a><a href=\"#method.screenshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#tymethod.screenshot\" class=\"fn\">screenshot</a>&lt;T&gt;(\n    &amp;mut self,\n    renderer: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"type cosmic::iced_renderer::graphics::Compositor::Renderer\">Renderer</a>,\n    viewport: &amp;<a class=\"struct\" href=\"cosmic/iced_renderer/graphics/struct.Viewport.html\" title=\"struct cosmic::iced_renderer::graphics::Viewport\">Viewport</a>,\n    background_color: <a class=\"struct\" href=\"cosmic/iced/struct.Color.html\" title=\"struct cosmic::iced::Color\">Color</a>,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a><div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,</div></h4></section></summary><div class='docblock'>Screenshots the current <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to an offscreen texture, and returns the bytes of\nthe texture ordered as <code>RGBA</code> in the <code>sRGB</code> color space.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/compositor.rs.html#22-25\">Source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#method.new\" class=\"fn\">new</a>&lt;W&gt;(\n    settings: <a class=\"struct\" href=\"cosmic/iced_renderer/graphics/struct.Settings.html\" title=\"struct cosmic::iced_renderer::graphics::Settings\">Settings</a>,\n    compatible_window: W,\n) -&gt; impl <a class=\"trait\" href=\"cosmic/iced_futures/futures/trait.Future.html\" title=\"trait cosmic::iced_futures::futures::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"cosmic/iced_renderer/graphics/enum.Error.html\" title=\"enum cosmic::iced_renderer::graphics::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"cosmic/iced_renderer/graphics/compositor/trait.Window.html\" title=\"trait cosmic::iced_renderer::graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Creates a new <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html\" title=\"trait cosmic::iced_renderer::graphics::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/compositor.rs.html#66\">Source</a><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/iced_renderer/graphics/trait.Compositor.html#method.load_font\" class=\"fn\">load_font</a>(&amp;mut self, font: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a font from its bytes.</div></details></div></details>","Compositor","cosmic::iced_renderer::Compositor"]]],["iced_renderer",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Compositor-for-Compositor\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#29\">Source</a><a href=\"#impl-Compositor-for-Compositor\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a> for <a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Renderer\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#30\">Source</a><a href=\"#associatedtype.Renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" class=\"associatedtype\">Renderer</a> = <a class=\"struct\" href=\"iced_tiny_skia/struct.Renderer.html\" title=\"struct iced_tiny_skia::Renderer\">Renderer</a></h4></section></summary><div class='docblock'>The iced renderer of the backend.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Surface\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#31\">Source</a><a href=\"#associatedtype.Surface\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" class=\"associatedtype\">Surface</a> = <a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Surface.html\" title=\"struct iced_tiny_skia::window::compositor::Surface\">Surface</a></h4></section></summary><div class='docblock'>The surface of the backend.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_backend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#33-37\">Source</a><a href=\"#method.with_backend\" class=\"anchor\">§</a><h4 class=\"code-header\">async fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.with_backend\" class=\"fn\">with_backend</a>&lt;W&gt;(\n    settings: <a class=\"struct\" href=\"iced_graphics/settings/struct.Settings.html\" title=\"struct iced_graphics::settings::Settings\">Settings</a>,\n    compatible_window: W,\n    backend: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a>, <a class=\"enum\" href=\"iced_graphics/error/enum.Error.html\" title=\"enum iced_graphics::error::Error\">Error</a>&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a>,</div></h4></section></summary><div class='docblock'>Creates a new <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a> with a backend preference. <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.with_backend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_renderer\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#51\">Source</a><a href=\"#method.create_renderer\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.create_renderer\" class=\"fn\">create_renderer</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a></h4></section></summary><div class='docblock'>Creates a <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Self::Renderer</code></a> for the <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#58-63\">Source</a><a href=\"#method.create_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.create_surface\" class=\"fn\">create_surface</a>&lt;W&gt;(\n    &amp;mut self,\n    window: W,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n) -&gt; &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a><div class=\"where\">where\n    W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Crates a new <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> for the given window.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.configure_surface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#84-89\">Source</a><a href=\"#method.configure_surface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.configure_surface\" class=\"fn\">configure_surface</a>(\n    &amp;mut self,\n    surface: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>,\n    width: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u32.html\">u32</a>,\n)</h4></section></summary><div class='docblock'>Configures a new <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a> with the given dimensions.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_information\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#103\">Source</a><a href=\"#method.fetch_information\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.fetch_information\" class=\"fn\">fetch_information</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_graphics/compositor/struct.Information.html\" title=\"struct iced_graphics::compositor::Information\">Information</a></h4></section></summary><div class='docblock'>Returns <a href=\"iced_graphics/compositor/struct.Information.html\" title=\"struct iced_graphics::compositor::Information\"><code>Information</code></a> used by this <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.present\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#110-117\">Source</a><a href=\"#method.present\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.present\" class=\"fn\">present</a>&lt;T&gt;(\n    &amp;mut self,\n    renderer: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>,\n    surface: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"type iced_graphics::compositor::Compositor::Surface\">Surface</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_graphics/viewport/struct.Viewport.html\" title=\"struct iced_graphics::viewport::Viewport\">Viewport</a>,\n    background_color: <a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"iced_graphics/compositor/enum.SurfaceError.html\" title=\"enum iced_graphics::compositor::SurfaceError\">SurfaceError</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,</div></h4></section></summary><div class='docblock'>Presents the <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to the next frame of the given <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Surface\" title=\"associated type iced_graphics::compositor::Compositor::Surface::Surface\"><code>Surface</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.screenshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_tiny_skia/window/compositor.rs.html#121-127\">Source</a><a href=\"#method.screenshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#tymethod.screenshot\" class=\"fn\">screenshot</a>&lt;T&gt;(\n    &amp;mut self,\n    renderer: &amp;mut &lt;<a class=\"struct\" href=\"iced_tiny_skia/window/compositor/struct.Compositor.html\" title=\"struct iced_tiny_skia::window::compositor::Compositor\">Compositor</a> as <a class=\"trait\" href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\">Compositor</a>&gt;::<a class=\"associatedtype\" href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"type iced_graphics::compositor::Compositor::Renderer\">Renderer</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_graphics/viewport/struct.Viewport.html\" title=\"struct iced_graphics::viewport::Viewport\">Viewport</a>,\n    background_color: <a class=\"struct\" href=\"iced_core/color/struct.Color.html\" title=\"struct iced_core::color::Color\">Color</a>,\n    overlay: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.slice.html\">[T]</a>,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.str.html\">str</a>&gt;,</div></h4></section></summary><div class='docblock'>Screenshots the current <a href=\"iced_graphics/compositor/trait.Compositor.html#associatedtype.Renderer\" title=\"associated type iced_graphics::compositor::Compositor::Renderer::Renderer\"><code>Renderer</code></a> primitives to an offscreen texture, and returns the bytes of\nthe texture ordered as <code>RGBA</code> in the <code>sRGB</code> color space.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/compositor.rs.html#22-25\">Source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#method.new\" class=\"fn\">new</a>&lt;W&gt;(\n    settings: <a class=\"struct\" href=\"iced_graphics/settings/struct.Settings.html\" title=\"struct iced_graphics::settings::Settings\">Settings</a>,\n    compatible_window: W,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"iced_graphics/error/enum.Error.html\" title=\"enum iced_graphics::error::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"iced_graphics/compositor/trait.Window.html\" title=\"trait iced_graphics::compositor::Window\">Window</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Creates a new <a href=\"iced_graphics/compositor/trait.Compositor.html\" title=\"trait iced_graphics::compositor::Compositor\"><code>Compositor</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_font\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_graphics/compositor.rs.html#66\">Source</a><a href=\"#method.load_font\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced_graphics/compositor/trait.Compositor.html#method.load_font\" class=\"fn\">load_font</a>(&amp;mut self, font: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>]&gt;)</h4></section></summary><div class='docblock'>Loads a font from its bytes.</div></details></div></details>","Compositor","iced_renderer::Compositor"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[17760,17134]}