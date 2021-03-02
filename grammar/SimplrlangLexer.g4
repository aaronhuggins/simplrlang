lexer grammar SimplrlangLexer;

options {superClass=ExtendedLexer;}

tokens {
  Equals
}

OpenParen : '(' ;
CloseParen : ')' ;
Opts : 'opts' { this.evaluateOpts(SimplrlangLexer) } ;
Print : [Pp][Rr][Ii][Nn][Tt] ;
Const: 'const' ;
Var : [a-zA-Z][a-zA-Z0-9]* ;
Int : [0-9]+ ;
Quote : ['] ;
Str : Quote ('\\' Quote|[ a-zA-Z0-9.=*])* Quote ;
WS : [ \r\n\t]+ -> skip ;
Any: . { this.evaluateAny(SimplrlangLexer) } ;
