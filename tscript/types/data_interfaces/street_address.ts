interface BasicAddress { 
	name?: string;
	street: string;
	city: string;
	country: string;
	postalCode: string; 
}

interface AddressWithUnit extends BasicAddress {
	unit: string;
}

interface AppartmentAddress extends BasicAddress {
	apartment: number;
}

interface AddressWithPoBox extends BasicAddress {
	poBox: number; 
}