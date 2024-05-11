interface Item {
	id: number;
	name: string;
	data?: any[] | any;
}
interface ItemList {
	items: Item[];
	push: (item: Item) => void;
}

function addToList(list: ItemList, item: Item) {
	list.push(item);
}


const item_1: Item = {
	id:  1,
	name: "test",
	data: "An Item!"
}