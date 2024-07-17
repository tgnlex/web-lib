type ID = string | number;
type Value = string | number | boolean | null;
type DataType = "TEXT" | "NUMERIC" | "OBJECT" | "CSV" | "TSV" | "JSON" | "XML" | "YAML" | "HTML" | "OTHER";

interface Empty {/* Nothing */};
interface Base extends Empty { key: string };
interface Unit extends Base  { value: Value };
interface Item extends Unit  { id: ID };
interface Data extends Item { type?: Data}

interface Describable extends Data { description?: string; }

const empty: Empty {/* Nothing */};
const base: Base        { key: "base" };
const unit: Unit        { key: "unit", value: 10};
const item: Item        { key: "item", value: 20, id: 1 };
const data: Data        { key: "data", value: 30, id: 2, type: "NUMERIC" };
const desc: Describable { key: "desc", value: 40, id: 3, type: "NUMERIC", description: "An Item that can be described"}  
