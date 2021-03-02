import { CharStream, Lexer } from 'antlr4ts'

export abstract class ExtendedLexer extends Lexer {
  constructor (input: CharStream) {
    super(input)

    this.ControlCharMap = new Map()
  }

  evaluateOpts (lexer: Record<string, any>): void {
    switch (true) {
      case this.line === 1:
        this.type = lexer.Opts
        break
      default:
        this.type = lexer.Var
        break
    }
  }

  evaluateAny (lexer: Record<string, any>): void {
    switch (true) {
      case this.line === 1 && this.charPositionInLine === 6:
        this.ControlCharMap.set(this.text, 'Equals')
        break
      default:
        switch (this.ControlCharMap.get(this.text)) {
          case 'Equals':
            this.type = lexer.Equals
            break
        }
    }
  }

  protected ControlCharMap: Map<string, string>
}
