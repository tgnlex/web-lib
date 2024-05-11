export interface Selectors {
	select: {
	  (selector: string): Selection;
	  (element: EventTarget): Selection;
	}
}

export interface Event {
   eventType: string, 
   callback: () => Void;
}

class BaseSelector extends Selectors {
  event: Event;
}

