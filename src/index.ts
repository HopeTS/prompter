import readline from "readline";
import tty from "tty";
import ReadyResource from "ready-resource";

class Prompter extends ReadyResource {
  /** Readline interface */
  private rl: readline.Interface;

  /** Default prompt prefix */
  private promptPrefix = "> ";

  constructor({
    promptPrefix = "> ",
  }: {
    promptPrefix?: string;
  } = {}) {
    super();

    // Create readline interface
    this.rl = readline.createInterface({
      input: new tty.ReadStream(0),
      output: new tty.WriteStream(1),
      prompt: promptPrefix,
    });

    // Configure
    this.promptPrefix = promptPrefix;
  }

  /*****************************************************************************
   * Public methods
   ****************************************************************************/

  prompt() {}

  async question(query: string): Promise<string> {
    if (!this.opened) return Promise.reject(new Error("Not opened"));
    return "";
  }

  /*****************************************************************************
   * Lifecycle
   ****************************************************************************/

  _open(): Promise<void> {
    return Promise.resolve();
  }

  _close(): Promise<void> {
    this.rl.close();
    return Promise.resolve();
  }
}

export default Prompter;
