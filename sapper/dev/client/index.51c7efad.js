import { S as SvelteComponentDev, i as init, d as dispatch_dev, e as element, a as append_dev, s as safe_not_equal, v as validate_slots, b as space, t as text, q as query_selector_all, c as claim_element, f as detach_dev, g as claim_space, h as children, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as noop } from './client.594e1cf3.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const file = "src/routes/index.svelte";

function add_css() {
	var style = element("style");
	style.id = "svelte-1kk9opm-style";
	style.textContent = "h1.svelte-1kk9opm,figure.svelte-1kk9opm,p.svelte-1kk9opm{text-align:center;margin:0 auto}h1.svelte-1kk9opm{font-size:2.8em;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0}figure.svelte-1kk9opm{margin:0 0 1em 0}img.svelte-1kk9opm{width:100%;max-width:400px;margin:0 0 1em 0}p.svelte-1kk9opm{margin:1em auto}@media(min-width: 480px){h1.svelte-1kk9opm{font-size:4em}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlPlxuXHRoMSwgZmlndXJlLCBwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdGZpZ3VyZSB7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRpbWcge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1heC13aWR0aDogNDAwcHg7XG5cdFx0bWFyZ2luOiAwIDAgMWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cbjxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCI+XG48bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCI+XG48bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCI+XG48bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiPlxuPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIiBjb2xvcj1cIiM1YmJhZDVcIj5cbjxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLVRpbGVDb2xvclwiIGNvbnRlbnQ9XCIjZGE1MzJjXCI+XG48bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiI2ZmZmZmZlwiPlxuXG48bWV0YVxuICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgY29udGVudD1cIldlbGNvbWUgdG8gVGhlIFQtU1BBXCIgLz5cblxuXHQ8dGl0bGU+VGhlIFQtU1BBPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5HcmVhdCBzdWNjZXNzITwvaDE+XG5cbjxmaWd1cmU+XG5cdDxpbWcgYWx0PSdTdWNjZXNzJyBzcmM9J3N1Y2Nlc3NraWRfcnM0MGQ1LndlYnAnPlxuXHQ8ZmlnY2FwdGlvbj5IYXZlIGZ1biB3aXRoIHRoZSBULVNQQTwvZmlnY2FwdGlvbj5cbjwvZmlndXJlPlxuXG48cD48c3Ryb25nPlRyeSBlZGl0aW5nIHRoaXMgZmlsZSAoc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUpIHRvIHRlc3QgbGl2ZSByZWxvYWRpbmcuPC9zdHJvbmc+PC9wPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDLGlCQUFFLENBQUUscUJBQU0sQ0FBRSxDQUFDLGVBQUMsQ0FBQyxBQUNkLFVBQVUsQ0FBRSxNQUFNLENBQ2xCLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxBQUNmLENBQUMsQUFFRCxFQUFFLGVBQUMsQ0FBQyxBQUNILFNBQVMsQ0FBRSxLQUFLLENBQ2hCLGNBQWMsQ0FBRSxTQUFTLENBQ3pCLFdBQVcsQ0FBRSxHQUFHLENBQ2hCLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEFBQ3BCLENBQUMsQUFFRCxNQUFNLGVBQUMsQ0FBQyxBQUNQLE1BQU0sQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEFBQ2xCLENBQUMsQUFFRCxHQUFHLGVBQUMsQ0FBQyxBQUNKLEtBQUssQ0FBRSxJQUFJLENBQ1gsU0FBUyxDQUFFLEtBQUssQ0FDaEIsTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQUFDbEIsQ0FBQyxBQUVELENBQUMsZUFBQyxDQUFDLEFBQ0YsTUFBTSxDQUFFLEdBQUcsQ0FBQyxJQUFJLEFBQ2pCLENBQUMsQUFFRCxNQUFNLEFBQUMsWUFBWSxLQUFLLENBQUMsQUFBQyxDQUFDLEFBQzFCLEVBQUUsZUFBQyxDQUFDLEFBQ0gsU0FBUyxDQUFFLEdBQUcsQUFDZixDQUFDLEFBQ0YsQ0FBQyJ9 */";
	append_dev(document.head, style);
}

function create_fragment(ctx) {
	let link0;
	let link1;
	let link2;
	let link3;
	let link4;
	let meta0;
	let meta1;
	let meta2;
	let t0;
	let h1;
	let t1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t4;
	let t5;
	let p;
	let strong;
	let t6;

	const block = {
		c: function create() {
			link0 = element("link");
			link1 = element("link");
			link2 = element("link");
			link3 = element("link");
			link4 = element("link");
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			t0 = space();
			h1 = element("h1");
			t1 = text("Great success!");
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			t4 = text("Have fun with the T-SPA");
			t5 = space();
			p = element("p");
			strong = element("strong");
			t6 = text("Try editing this file (src/routes/index.svelte) to test live reloading.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-96fa0v\"]", document.head);
			link0 = claim_element(head_nodes, "LINK", { rel: true, sizes: true, href: true });

			link1 = claim_element(head_nodes, "LINK", {
				rel: true,
				type: true,
				sizes: true,
				href: true
			});

			link2 = claim_element(head_nodes, "LINK", {
				rel: true,
				type: true,
				sizes: true,
				href: true
			});

			link3 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			link4 = claim_element(head_nodes, "LINK", { rel: true, href: true, color: true });
			meta0 = claim_element(head_nodes, "META", { name: true, content: true });
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			meta2 = claim_element(head_nodes, "META", { name: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Great success!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			figure = claim_element(nodes, "FIGURE", { class: true });
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { alt: true, src: true, class: true });
			t3 = claim_space(figure_nodes);
			figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
			var figcaption_nodes = children(figcaption);
			t4 = claim_text(figcaption_nodes, "Have fun with the T-SPA");
			figcaption_nodes.forEach(detach_dev);
			figure_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			strong = claim_element(p_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t6 = claim_text(strong_nodes, "Try editing this file (src/routes/index.svelte) to test live reloading.");
			strong_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(link0, "rel", "apple-touch-icon");
			attr_dev(link0, "sizes", "180x180");
			attr_dev(link0, "href", "/apple-touch-icon.png");
			add_location(link0, file, 36, 0, 389);
			attr_dev(link1, "rel", "icon");
			attr_dev(link1, "type", "image/png");
			attr_dev(link1, "sizes", "32x32");
			attr_dev(link1, "href", "/favicon-32x32.png");
			add_location(link1, file, 37, 0, 464);
			attr_dev(link2, "rel", "icon");
			attr_dev(link2, "type", "image/png");
			attr_dev(link2, "sizes", "16x16");
			attr_dev(link2, "href", "/favicon-16x16.png");
			add_location(link2, file, 38, 0, 539);
			attr_dev(link3, "rel", "manifest");
			attr_dev(link3, "href", "/site.webmanifest");
			add_location(link3, file, 39, 0, 614);
			attr_dev(link4, "rel", "mask-icon");
			attr_dev(link4, "href", "/safari-pinned-tab.svg");
			attr_dev(link4, "color", "#5bbad5");
			add_location(link4, file, 40, 0, 661);
			attr_dev(meta0, "name", "msapplication-TileColor");
			attr_dev(meta0, "content", "#da532c");
			add_location(meta0, file, 41, 0, 730);
			attr_dev(meta1, "name", "theme-color");
			attr_dev(meta1, "content", "#ffffff");
			add_location(meta1, file, 42, 0, 786);
			attr_dev(meta2, "name", "description");
			attr_dev(meta2, "content", "Welcome to The T-SPA");
			add_location(meta2, file, 44, 0, 831);
			document.title = "The T-SPA";
			attr_dev(h1, "class", "svelte-1kk9opm");
			add_location(h1, file, 51, 0, 941);
			attr_dev(img, "alt", "Success");
			if (img.src !== (img_src_value = "successkid_rs40d5.webp")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1kk9opm");
			add_location(img, file, 54, 1, 976);
			add_location(figcaption, file, 55, 1, 1026);
			attr_dev(figure, "class", "svelte-1kk9opm");
			add_location(figure, file, 53, 0, 966);
			add_location(strong, file, 58, 3, 1089);
			attr_dev(p, "class", "svelte-1kk9opm");
			add_location(p, file, 58, 0, 1086);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, link0);
			append_dev(document.head, link1);
			append_dev(document.head, link2);
			append_dev(document.head, link3);
			append_dev(document.head, link4);
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			append_dev(figcaption, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, strong);
			append_dev(strong, t6);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(link0);
			detach_dev(link1);
			detach_dev(link2);
			detach_dev(link3);
			detach_dev(link4);
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		if (!document.getElementById("svelte-1kk9opm-style")) add_css();
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTFjN2VmYWQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
