export type modifer="Alt" | "Control" | "Shift";
export type  button= "left" | "right" | "middle";

export interface FillOptions{
    force:boolean,
    noWaitAfter:boolean,
    timeout:number
}

export interface ClickOptions extends FillOptions{
    delay:number,
    clickCount:number
}

export  const defaultFillOption : FillOptions{
    force=true,
    noWaitAfter=true,
    timeout=60000
}