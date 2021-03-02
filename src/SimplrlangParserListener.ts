// Generated from grammar/SimplrlangParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./SimplrlangParser";
import { StatementContext } from "./SimplrlangParser";
import { OptsContext } from "./SimplrlangParser";
import { AssignContext } from "./SimplrlangParser";
import { PrintContext } from "./SimplrlangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimplrlangParser`.
 */
export interface SimplrlangParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SimplrlangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SimplrlangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `SimplrlangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `SimplrlangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `SimplrlangParser.opts`.
	 * @param ctx the parse tree
	 */
	enterOpts?: (ctx: OptsContext) => void;
	/**
	 * Exit a parse tree produced by `SimplrlangParser.opts`.
	 * @param ctx the parse tree
	 */
	exitOpts?: (ctx: OptsContext) => void;

	/**
	 * Enter a parse tree produced by `SimplrlangParser.assign`.
	 * @param ctx the parse tree
	 */
	enterAssign?: (ctx: AssignContext) => void;
	/**
	 * Exit a parse tree produced by `SimplrlangParser.assign`.
	 * @param ctx the parse tree
	 */
	exitAssign?: (ctx: AssignContext) => void;

	/**
	 * Enter a parse tree produced by `SimplrlangParser.print`.
	 * @param ctx the parse tree
	 */
	enterPrint?: (ctx: PrintContext) => void;
	/**
	 * Exit a parse tree produced by `SimplrlangParser.print`.
	 * @param ctx the parse tree
	 */
	exitPrint?: (ctx: PrintContext) => void;
}

