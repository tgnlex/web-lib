interface Event {
   eventType: string;
   callback: () => Void;
}

class Selectors {
	event: Event;
  select: {
	  (selector: string): Selection;
	  (element: EventTarget): Selection;
	}
}

export {Selectors};
