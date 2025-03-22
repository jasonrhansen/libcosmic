(function() {
    var type_impls = Object.fromEntries([["immutable_chunkmap",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-WeakMapRef%3CK,+V,+SIZE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/immutable_chunkmap/map.rs.html#80\">Source</a><a href=\"#impl-Clone-for-WeakMapRef%3CK,+V,+SIZE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, const SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"immutable_chunkmap/map/struct.WeakMapRef.html\" title=\"struct immutable_chunkmap::map::WeakMapRef\">WeakMapRef</a>&lt;K, V, SIZE&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/immutable_chunkmap/map.rs.html#80\">Source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"immutable_chunkmap/map/struct.WeakMapRef.html\" title=\"struct immutable_chunkmap::map::WeakMapRef\">WeakMapRef</a>&lt;K, V, SIZE&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.85.0/src/core/clone.rs.html#174\">Source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","immutable_chunkmap::map::WeakMapRefS","immutable_chunkmap::map::WeakMapRefM","immutable_chunkmap::map::WeakMapRefL"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-WeakMapRef%3CK,+V,+SIZE%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/immutable_chunkmap/map.rs.html#87-95\">Source</a><a href=\"#impl-WeakMapRef%3CK,+V,+SIZE%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;K, V, const SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.85.0/std/primitive.usize.html\">usize</a>&gt; <a class=\"struct\" href=\"immutable_chunkmap/map/struct.WeakMapRef.html\" title=\"struct immutable_chunkmap::map::WeakMapRef\">WeakMapRef</a>&lt;K, V, SIZE&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.85.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.upgrade\" class=\"method\"><a class=\"src rightside\" href=\"src/immutable_chunkmap/map.rs.html#92-94\">Source</a><h4 class=\"code-header\">pub fn <a href=\"immutable_chunkmap/map/struct.WeakMapRef.html#tymethod.upgrade\" class=\"fn\">upgrade</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.85.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"immutable_chunkmap/map/struct.Map.html\" title=\"struct immutable_chunkmap::map::Map\">Map</a>&lt;K, V, SIZE&gt;&gt;</h4></section></div></details>",0,"immutable_chunkmap::map::WeakMapRefS","immutable_chunkmap::map::WeakMapRefM","immutable_chunkmap::map::WeakMapRefL"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4981]}