parser grammar SimplrlangParser ;

options {
  tokenVocab = SimplrlangLexer ;
}

program : statement+ ;

statement : assign | print | opts ;

opts: Opts (Any | Equals) ;
assign : Const Var Equals (Int | Str) ;
print : Print OpenParen (Int | Str | Var) CloseParen ;
