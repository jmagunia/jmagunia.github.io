async function load() {
	let url = '/assets/data/json/' + json_file;
	let data_json = await (await fetch(url)).json();

	let col = [];
	Object.keys(data_json[0]).forEach(function(key) {
		col.push({id:key,name:String(key)});
	});

	new gridjs.Grid({columns:col,data:data_json}).render(document.getElementById("grid"));
}
load();
