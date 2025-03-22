(function() {
    var type_impls = Object.fromEntries([["x11rb",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17514\">Source</a><a href=\"#impl-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.buttons_len\" class=\"method\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17524\">Source</a><h4 class=\"code-header\">pub fn <a href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html#tymethod.buttons_len\" class=\"fn\">buttons_len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u16.html\">u16</a></h4></section></summary><div class=\"docblock\"><p>Get the value of the <code>buttons_len</code> field.</p>\n<p>The <code>buttons_len</code> field is used as the length field of the <code>button_mask</code> field.\nThis function computes the field’s value again based on the length of the list.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if the value cannot be represented in the target type. This\ncannot happen with values of the struct received from the X11 server.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.valuators_len\" class=\"method\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17537\">Source</a><h4 class=\"code-header\">pub fn <a href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html#tymethod.valuators_len\" class=\"fn\">valuators_len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u16.html\">u16</a></h4></section></summary><div class=\"docblock\"><p>Get the value of the <code>valuators_len</code> field.</p>\n<p>The <code>valuators_len</code> field is used as the length field of the <code>valuator_mask</code> field.\nThis function computes the field’s value again based on the length of the list.</p>\n<h5 id=\"panics-1\"><a class=\"doc-anchor\" href=\"#panics-1\">§</a>Panics</h5>\n<p>Panics if the value cannot be represented in the target type. This\ncannot happen with values of the struct received from the X11 server.</p>\n</div></details></div></details>",0,"x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17411\">Source</a><a href=\"#impl-Clone-for-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17411\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17438\">Source</a><a href=\"#impl-Debug-for-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17438\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.85.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17411\">Source</a><a href=\"#impl-Default-for-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17411\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.85.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17475\">Source</a><a href=\"#impl-Serialize-for-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.Serialize.html\" title=\"trait x11rb::x11_utils::Serialize\">Serialize</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Bytes\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17476\">Source</a><a href=\"#associatedtype.Bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\" class=\"associatedtype\">Bytes</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>The value returned by <code>serialize</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#associatedtype.Bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17477\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>&gt;</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17482\">Source</a><a href=\"#method.serialize_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\" class=\"fn\">serialize_into</a>(&amp;self, bytes: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.85.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>&gt;)</h4></section></summary><div class='docblock'>Serialize this value into X11 raw bytes, appending the result into <code>bytes</code>. <a href=\"x11rb/x11_utils/trait.Serialize.html#tymethod.serialize_into\">Read more</a></div></details></div></details>","Serialize","x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryParse-for-ButtonPressEvent\" class=\"impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17439\">Source</a><a href=\"#impl-TryParse-for-ButtonPressEvent\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"x11rb/x11_utils/trait.TryParse.html\" title=\"trait x11rb::x11_utils::TryParse\">TryParse</a> for <a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_parse\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/x11rb_protocol/protocol/xinput.rs.html#17440\">Source</a><a href=\"#method.try_parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\" class=\"fn\">try_parse</a>(\n    initial_value: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(<a class=\"struct\" href=\"x11rb/protocol/xinput/struct.ButtonPressEvent.html\" title=\"struct x11rb::protocol::xinput::ButtonPressEvent\">ButtonPressEvent</a>, &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.u8.html\">u8</a>]), <a class=\"enum\" href=\"x11rb/xcb_ffi/enum.ParseError.html\" title=\"enum x11rb::xcb_ffi::ParseError\">ParseError</a>&gt;</h4></section></summary><div class='docblock'>Try to parse the given values into an instance of this type. <a href=\"x11rb/x11_utils/trait.TryParse.html#tymethod.try_parse\">Read more</a></div></details></div></details>","TryParse","x11rb::protocol::xinput::ButtonReleaseEvent","x11rb::protocol::xinput::MotionEvent"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[13734]}