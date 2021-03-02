// Generated from grammar/SimplrlangParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SimplrlangParserListener } from "./SimplrlangParserListener";
import { SimplrlangParserVisitor } from "./SimplrlangParserVisitor";


export class SimplrlangParser extends Parser {
	public static readonly Equals = 1;
	public static readonly OpenParen = 2;
	public static readonly CloseParen = 3;
	public static readonly Opts = 4;
	public static readonly Print = 5;
	public static readonly Const = 6;
	public static readonly Var = 7;
	public static readonly Int = 8;
	public static readonly Quote = 9;
	public static readonly Str = 10;
	public static readonly WS = 11;
	public static readonly Any = 12;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_opts = 2;
	public static readonly RULE_assign = 3;
	public static readonly RULE_print = 4;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "opts", "assign", "print",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'opts'", undefined, "'const'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Equals", "OpenParen", "CloseParen", "Opts", "Print", "Const", 
		"Var", "Int", "Quote", "Str", "WS", "Any",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimplrlangParser._LITERAL_NAMES, SimplrlangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimplrlangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimplrlangParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimplrlangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimplrlangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimplrlangParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimplrlangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 10;
				this.statement();
				}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplrlangParser.Opts) | (1 << SimplrlangParser.Print) | (1 << SimplrlangParser.Const))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimplrlangParser.RULE_statement);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimplrlangParser.Const:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.assign();
				}
				break;
			case SimplrlangParser.Print:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 16;
				this.print();
				}
				break;
			case SimplrlangParser.Opts:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 17;
				this.opts();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opts(): OptsContext {
		let _localctx: OptsContext = new OptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SimplrlangParser.RULE_opts);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.match(SimplrlangParser.Opts);
			this.state = 21;
			_la = this._input.LA(1);
			if (!(_la === SimplrlangParser.Equals || _la === SimplrlangParser.Any)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SimplrlangParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.match(SimplrlangParser.Const);
			this.state = 24;
			this.match(SimplrlangParser.Var);
			this.state = 25;
			this.match(SimplrlangParser.Equals);
			this.state = 26;
			_la = this._input.LA(1);
			if (!(_la === SimplrlangParser.Int || _la === SimplrlangParser.Str)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print(): PrintContext {
		let _localctx: PrintContext = new PrintContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SimplrlangParser.RULE_print);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.match(SimplrlangParser.Print);
			this.state = 29;
			this.match(SimplrlangParser.OpenParen);
			this.state = 30;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimplrlangParser.Var) | (1 << SimplrlangParser.Int) | (1 << SimplrlangParser.Str))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 31;
			this.match(SimplrlangParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E$\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02" +
		"\x06\x02\x0E\n\x02\r\x02\x0E\x02\x0F\x03\x03\x03\x03\x03\x03\x05\x03\x15" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02\x02\x07\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\x02\x05\x04\x02\x03\x03\x0E\x0E\x04\x02\n" +
		"\n\f\f\x04\x02\t\n\f\f\x02!\x02\r\x03\x02\x02\x02\x04\x14\x03\x02\x02" +
		"\x02\x06\x16\x03\x02\x02\x02\b\x19\x03\x02\x02\x02\n\x1E\x03\x02\x02\x02" +
		"\f\x0E\x05\x04\x03\x02\r\f\x03\x02\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F" +
		"\r\x03\x02\x02\x02\x0F\x10\x03\x02\x02\x02\x10\x03\x03\x02\x02\x02\x11" +
		"\x15\x05\b\x05\x02\x12\x15\x05\n\x06\x02\x13\x15\x05\x06\x04\x02\x14\x11" +
		"\x03\x02\x02\x02\x14\x12\x03\x02\x02\x02\x14\x13\x03\x02\x02\x02\x15\x05" +
		"\x03\x02\x02\x02\x16\x17\x07\x06\x02\x02\x17\x18\t\x02\x02\x02\x18\x07" +
		"\x03\x02\x02\x02\x19\x1A\x07\b\x02\x02\x1A\x1B\x07\t\x02\x02\x1B\x1C\x07" +
		"\x03\x02\x02\x1C\x1D\t\x03\x02\x02\x1D\t\x03\x02\x02\x02\x1E\x1F\x07\x07" +
		"\x02\x02\x1F \x07\x04\x02\x02 !\t\x04\x02\x02!\"\x07\x05\x02\x02\"\v\x03" +
		"\x02\x02\x02\x04\x0F\x14";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimplrlangParser.__ATN) {
			SimplrlangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimplrlangParser._serializedATN));
		}

		return SimplrlangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimplrlangParser.RULE_program; }
	// @Override
	public enterRule(listener: SimplrlangParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SimplrlangParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimplrlangParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public assign(): AssignContext | undefined {
		return this.tryGetRuleContext(0, AssignContext);
	}
	public print(): PrintContext | undefined {
		return this.tryGetRuleContext(0, PrintContext);
	}
	public opts(): OptsContext | undefined {
		return this.tryGetRuleContext(0, OptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimplrlangParser.RULE_statement; }
	// @Override
	public enterRule(listener: SimplrlangParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: SimplrlangParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimplrlangParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OptsContext extends ParserRuleContext {
	public Opts(): TerminalNode { return this.getToken(SimplrlangParser.Opts, 0); }
	public Any(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Any, 0); }
	public Equals(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Equals, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimplrlangParser.RULE_opts; }
	// @Override
	public enterRule(listener: SimplrlangParserListener): void {
		if (listener.enterOpts) {
			listener.enterOpts(this);
		}
	}
	// @Override
	public exitRule(listener: SimplrlangParserListener): void {
		if (listener.exitOpts) {
			listener.exitOpts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimplrlangParserVisitor<Result>): Result {
		if (visitor.visitOpts) {
			return visitor.visitOpts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public Const(): TerminalNode { return this.getToken(SimplrlangParser.Const, 0); }
	public Var(): TerminalNode { return this.getToken(SimplrlangParser.Var, 0); }
	public Equals(): TerminalNode { return this.getToken(SimplrlangParser.Equals, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Int, 0); }
	public Str(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Str, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimplrlangParser.RULE_assign; }
	// @Override
	public enterRule(listener: SimplrlangParserListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: SimplrlangParserListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimplrlangParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintContext extends ParserRuleContext {
	public Print(): TerminalNode { return this.getToken(SimplrlangParser.Print, 0); }
	public OpenParen(): TerminalNode { return this.getToken(SimplrlangParser.OpenParen, 0); }
	public CloseParen(): TerminalNode { return this.getToken(SimplrlangParser.CloseParen, 0); }
	public Int(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Int, 0); }
	public Str(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Str, 0); }
	public Var(): TerminalNode | undefined { return this.tryGetToken(SimplrlangParser.Var, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimplrlangParser.RULE_print; }
	// @Override
	public enterRule(listener: SimplrlangParserListener): void {
		if (listener.enterPrint) {
			listener.enterPrint(this);
		}
	}
	// @Override
	public exitRule(listener: SimplrlangParserListener): void {
		if (listener.exitPrint) {
			listener.exitPrint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimplrlangParserVisitor<Result>): Result {
		if (visitor.visitPrint) {
			return visitor.visitPrint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


