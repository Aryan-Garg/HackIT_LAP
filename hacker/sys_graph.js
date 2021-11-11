class Graph {
	constructor(noOfVertices)
	{
			this.noOfVertices = noOfVertices;
			this.AdjList = new Map();
			this.parentNode = new Map();
	}
	addVertex(v)
	{
    this.AdjList.set(v, []);
	}
	addEdge(v, w)
	{
		this.AdjList.get(v).push(w);
		this.parentNode.set(w,v);
  	//this.AdjList.get(w).push(v);
	}
	getEdges(v)
	{
		var get_values = this.AdjList.get(v);
		return get_values;
	}
	printSystems(v)
	{
		var get_values = this.AdjList.get(v);
		//console.log(get_values);
		var str = '<br/>';
		for (var j of get_values) 
		{
			str = str + "System"+j+", "  
		}
		if(get_values.length==0) str = str + "No further systems";
		return str;

	}
	printGraph()
	{
    var get_keys = this.AdjList.keys();
    for (var i of get_keys)
		{
				var get_values = this.AdjList.get(i);
				
				console.log(get_values);				
				// var conc = "";  
        // for (var j of get_values) 
        //   {
				// 		conc += j + " ";
				// 	}
				// console.log(i + " -> " + conc); 
    } 
	} 
}

var g = new Graph(41); 
var vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];  
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 

g.addEdge(0, 1); 
g.addEdge(0, 2); 
g.addEdge(0, 3); 
g.addEdge(0, 4); 
g.addEdge(0, 5); 
g.addEdge(0, 6); 
g.addEdge(0, 7); 
g.addEdge(0, 8);
g.addEdge(0, 9);
g.addEdge(0, 10);
g.addEdge(1, 11);
g.addEdge(1, 12);
g.addEdge(1, 13);
g.addEdge(2, 14);
g.addEdge(2, 15);
g.addEdge(2, 16);
g.addEdge(3, 17);
g.addEdge(3, 18);
g.addEdge(3, 19);
g.addEdge(4, 20);
g.addEdge(4, 21);
g.addEdge(4, 22); 
g.addEdge(5, 23);
g.addEdge(5, 24);
g.addEdge(5, 25);
g.addEdge(6, 26);
g.addEdge(6, 27);
g.addEdge(6, 28);
g.addEdge(7, 29);
g.addEdge(7, 30);
g.addEdge(7, 31);
g.addEdge(8, 32);
g.addEdge(8, 33);
g.addEdge(8, 34);
g.addEdge(9, 35);
g.addEdge(9, 36);
g.addEdge(9, 37);
g.addEdge(10, 38);
g.addEdge(10, 39);
g.addEdge(10, 40);

//g.printGraph(); 
var x = "1";
console.log(g.printSystems(Number(x)));
