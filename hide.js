(async () => {
	const hideSomeDiscoverMoreElement = async () => {
		(async function(){
	const cellInnerDivs = document.querySelector(`[data-testid="cellInnerDiv"] > div > div > div > [role="heading"]`)?.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.childNodes;
	if(!cellInnerDivs?.length) return;
  for(let i = 0;i < cellInnerDivs.length;i++){
		if(cellInnerDivs[i].querySelectorAll('[data-testid="cellInnerDiv"] > div > div > div > [role="heading"]').length){
			for(let j = cellInnerDivs.length - 1;i <= j;j--){
				cellInnerDivs[j].hidden = "hidden"
			}
			break;
		}
	}
})()
	};
	const events = Object.keys(document.__proto__.__proto__).reduce((arr, event)=> { // https://stackoverflow.com/questions/39963850/how-can-i-add-an-event-listener-for-all-events-in-javascript-without-listing-the
		if(event.startsWith('on')) return [...arr, event.substr(2)];
		return arr;
	}, []);
	events.forEach(async (event) => {
		document.addEventListener(event,hideSomeDiscoverMoreElement);
	});
})();

