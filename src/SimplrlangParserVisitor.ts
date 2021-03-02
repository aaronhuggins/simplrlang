// Generated from grammar/SimplrlangParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./SimplrlangParser";
import { StatementContext } from "./SimplrlangParser";
import { OptsContext } from "./SimplrlangParser";
import { AssignContext } from "./SimplrlangParser";
import { PrintContext } from "./SimplrlangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimplrlangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SimplrlangParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `SimplrlangParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplrlangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplrlangParser.opts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpts?: (ctx: OptsContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplrlangParser.assign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign?: (ctx: AssignContext) => Result;

	/**
	 * Visit a parse tree produced by `SimplrlangParser.print`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint?: (ctx: PrintContext) => Result;
}

