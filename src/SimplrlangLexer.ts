// Generated from grammar/SimplrlangLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";
import { ExtendedLexer } from "./ExtendedLexer";


export class SimplrlangLexer extends ExtendedLexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OpenParen", "CloseParen", "Opts", "Print", "Const", "Var", "Int", "Quote", 
		"Str", "WS", "Any",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'('", "')'", "'opts'", undefined, "'const'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Equals", "OpenParen", "CloseParen", "Opts", "Print", "Const", 
		"Var", "Int", "Quote", "Str", "WS", "Any",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimplrlangLexer._LITERAL_NAMES, SimplrlangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimplrlangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SimplrlangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SimplrlangLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimplrlangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimplrlangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SimplrlangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SimplrlangLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 2:
			this.Opts_action(_localctx, actionIndex);
			break;

		case 10:
			this.Any_action(_localctx, actionIndex);
			break;
		}
	}
	private Opts_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			 this.evaluateOpts(SimplrlangLexer) 
			break;
		}
	}
	private Any_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			 this.evaluateAny(SimplrlangLexer) 
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0ES\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x07\x073\n\x07\f\x07\x0E" +
		"\x076\v\x07\x03\b\x06\b9\n\b\r\b\x0E\b:\x03\t\x03\t\x03\n\x03\n\x03\n" +
		"\x03\n\x07\nC\n\n\f\n\x0E\nF\v\n\x03\n\x03\n\x03\v\x06\vK\n\v\r\v\x0E" +
		"\vL\x03\v\x03\v\x03\f\x03\f\x03\f\x02\x02\x02\r\x03\x02\x04\x05\x02\x05" +
		"\x07\x02\x06\t\x02\x07\v\x02\b\r\x02\t\x0F\x02\n\x11\x02\v\x13\x02\f\x15" +
		"\x02\r\x17\x02\x0E\x03\x02\r\x04\x02RRrr\x04\x02TTtt\x04\x02KKkk\x04\x02" +
		"PPpp\x04\x02VVvv\x04\x02C\\c|\x05\x022;C\\c|\x03\x022;\x03\x02))\t\x02" +
		"\"\",,002;??C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02W\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
		"\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1B\x03\x02\x02\x02\x07" +
		"\x1D\x03\x02\x02\x02\t$\x03\x02\x02\x02\v*\x03\x02\x02\x02\r0\x03\x02" +
		"\x02\x02\x0F8\x03\x02\x02\x02\x11<\x03\x02\x02\x02\x13>\x03\x02\x02\x02" +
		"\x15J\x03\x02\x02\x02\x17P\x03\x02\x02\x02\x19\x1A\x07*\x02\x02\x1A\x04" +
		"\x03\x02\x02\x02\x1B\x1C\x07+\x02\x02\x1C\x06\x03\x02\x02\x02\x1D\x1E" +
		"\x07q\x02\x02\x1E\x1F\x07r\x02\x02\x1F \x07v\x02\x02 !\x07u\x02\x02!\"" +
		"\x03\x02\x02\x02\"#\b\x04\x02\x02#\b\x03\x02\x02\x02$%\t\x02\x02\x02%" +
		"&\t\x03\x02\x02&\'\t\x04\x02\x02\'(\t\x05\x02\x02()\t\x06\x02\x02)\n\x03" +
		"\x02\x02\x02*+\x07e\x02\x02+,\x07q\x02\x02,-\x07p\x02\x02-.\x07u\x02\x02" +
		"./\x07v\x02\x02/\f\x03\x02\x02\x0204\t\x07\x02\x0213\t\b\x02\x0221\x03" +
		"\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x025\x0E" +
		"\x03\x02\x02\x0264\x03\x02\x02\x0279\t\t\x02\x0287\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;\x10\x03\x02\x02\x02" +
		"<=\t\n\x02\x02=\x12\x03\x02\x02\x02>D\x05\x11\t\x02?@\x07^\x02\x02@C\x05" +
		"\x11\t\x02AC\t\v\x02\x02B?\x03\x02\x02\x02BA\x03\x02\x02\x02CF\x03\x02" +
		"\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02EG\x03\x02\x02\x02FD\x03\x02" +
		"\x02\x02GH\x05\x11\t\x02H\x14\x03\x02\x02\x02IK\t\f\x02\x02JI\x03\x02" +
		"\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02" +
		"\x02\x02NO\b\v\x03\x02O\x16\x03\x02\x02\x02PQ\v\x02\x02\x02QR\b\f\x04" +
		"\x02R\x18\x03\x02\x02\x02\b\x024:BDL\x05\x03\x04\x02\b\x02\x02\x03\f\x03";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimplrlangLexer.__ATN) {
			SimplrlangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimplrlangLexer._serializedATN));
		}

		return SimplrlangLexer.__ATN;
	}

}

