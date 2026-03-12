declare module "gsap/SplitText" {
  export * from "gsap/all";
  export class SplitText {
    constructor(target: gsap.DOMTarget, vars?: SplitText.Vars);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
  }
  namespace SplitText {
    interface Vars {
      type?: string;
      charsClass?: string;
      wordsClass?: string;
      linesClass?: string;
      position?: string;
      [key: string]: any;
    }
  }
}