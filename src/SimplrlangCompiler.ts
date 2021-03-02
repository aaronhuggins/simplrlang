import { readFileSync } from 'fs'
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { SimplrlangLexer } from './SimplrlangLexer'
import { SimplrlangParserListener } from './SimplrlangParserListener'
import { AssignContext, PrintContext, SimplrlangParser } from './SimplrlangParser'

function trimQuotes (str: string): string {
  return str.substring(1, str.length -1)
}

export function evaluate (path: string) {
  console.time('evaluate')
  const variableMap = new Map<string, number | string>()
  const listener: SimplrlangParserListener = {
    exitPrint (ctx: PrintContext): void {
      switch ('object') {
        case (typeof ctx.Int()):
          console.log(ctx.Int().toString())
          break
        case (typeof ctx.Str()):
          console.log(trimQuotes(ctx.Str().toString()))
          break
        case (typeof ctx.Var()):
          console.log(variableMap.get(ctx.Var().toString()))
          break
      }
    },
    exitAssign (ctx: AssignContext): void {
      switch ('object') {
        case (typeof ctx.Int()):
          variableMap.set(ctx.Var().toString(), parseFloat(ctx.Int().toString()))
          break
        case (typeof ctx.Str()):
          variableMap.set(ctx.Var().toString(), trimQuotes(ctx.Str().toString()))
          break
      }
    }
  }
  const file = readFileSync(path, 'utf8')
  const lexer = new SimplrlangLexer(CharStreams.fromString(file, path))
  const tokens = new CommonTokenStream(lexer)
  const parser = new SimplrlangParser(tokens)

  parser.addParseListener(listener)
  parser.program()
  console.timeEnd('evaluate')
}

evaluate('./test.simpler')
