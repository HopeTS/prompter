/** Options for Prompter question */
export type QuestionOpts<T = string> = {
  /** Default value if user hits enter */
  default?: string;
  /** Validate input; return string to display an error message and re-prompt */
  validate?: (input: string) => true | string;
  /** Transform the final string into a value (e.g., number) before resolving */
  transform?: (input: string) => T;
  /** Auto-cancel if no input after N ms */
  timeout?: number;
  /** Allow external cancellation */
  signal?: AbortSignal;
  /** Prompt prefix (defaults to "\nPearDrive CLI> ") */
  prompt?: string;
};
