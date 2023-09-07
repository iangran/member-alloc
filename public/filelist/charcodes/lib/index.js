"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDigit = isDigit;
exports.tilde = exports.rightCurlyBrace = exports.verticalBar = exports.leftCurlyBrace = exports.lowercaseZ = exports.lowercaseY = exports.lowercaseX = exports.lowercaseW = exports.lowercaseV = exports.lowercaseU = exports.lowercaseT = exports.lowercaseS = exports.lowercaseR = exports.lowercaseQ = exports.lowercaseP = exports.lowercaseO = exports.lowercaseN = exports.lowercaseM = exports.lowercaseL = exports.lowercaseK = exports.lowercaseJ = exports.lowercaseI = exports.lowercaseH = exports.lowercaseG = exports.lowercaseF = exports.lowercaseE = exports.lowercaseD = exports.lowercaseC = exports.lowercaseB = exports.lowercaseA = exports.graveAccent = exports.underscore = exports.caret = exports.rightSquareBracket = exports.backslash = exports.leftSquareBracket = exports.uppercaseZ = exports.uppercaseY = exports.uppercaseX = exports.uppercaseW = exports.uppercaseV = exports.uppercaseU = exports.uppercaseT = exports.uppercaseS = exports.uppercaseR = exports.uppercaseQ = exports.uppercaseP = exports.uppercaseO = exports.uppercaseN = exports.uppercaseM = exports.uppercaseL = exports.uppercaseK = exports.uppercaseJ = exports.uppercaseI = exports.uppercaseH = exports.uppercaseG = exports.uppercaseF = exports.uppercaseE = exports.uppercaseD = exports.uppercaseC = exports.uppercaseB = exports.uppercaseA = exports.atSign = exports.questionMark = exports.greaterThan = exports.equalsTo = exports.lessThan = exports.semicolon = exports.colon = exports.digit9 = exports.digit8 = exports.digit7 = exports.digit6 = exports.digit5 = exports.digit4 = exports.digit3 = exports.digit2 = exports.digit1 = exports.digit0 = exports.slash = exports.dot = exports.dash = exports.comma = exports.plusSign = exports.asterisk = exports.rightParenthesis = exports.leftParenthesis = exports.apostrophe = exports.ampersand = exports.percentSign = exports.dollarSign = exports.numberSign = exports.quotationMark = exports.exclamationMark = exports.space = exports.shiftOut = exports.carriageReturn = exports.lineFeed = exports.tab = exports.backSpace = void 0;
exports.paragraphSeparator = exports.lineSeparator = exports.oghamSpaceMark = exports.nonBreakingSpace = void 0;
var backSpace = 8;
exports.backSpace = backSpace;
var tab = 9;
exports.tab = tab;
var lineFeed = 10;
exports.lineFeed = lineFeed;
var carriageReturn = 13;
exports.carriageReturn = carriageReturn;
var shiftOut = 14;
exports.shiftOut = shiftOut;
var space = 32;
exports.space = space;
var exclamationMark = 33;
exports.exclamationMark = exclamationMark;
var quotationMark = 34;
exports.quotationMark = quotationMark;
var numberSign = 35;
exports.numberSign = numberSign;
var dollarSign = 36;
exports.dollarSign = dollarSign;
var percentSign = 37;
exports.percentSign = percentSign;
var ampersand = 38;
exports.ampersand = ampersand;
var apostrophe = 39;
exports.apostrophe = apostrophe;
var leftParenthesis = 40;
exports.leftParenthesis = leftParenthesis;
var rightParenthesis = 41;
exports.rightParenthesis = rightParenthesis;
var asterisk = 42;
exports.asterisk = asterisk;
var plusSign = 43;
exports.plusSign = plusSign;
var comma = 44;
exports.comma = comma;
var dash = 45;
exports.dash = dash;
var dot = 46;
exports.dot = dot;
var slash = 47;
exports.slash = slash;
var digit0 = 48;
exports.digit0 = digit0;
var digit1 = 49;
exports.digit1 = digit1;
var digit2 = 50;
exports.digit2 = digit2;
var digit3 = 51;
exports.digit3 = digit3;
var digit4 = 52;
exports.digit4 = digit4;
var digit5 = 53;
exports.digit5 = digit5;
var digit6 = 54;
exports.digit6 = digit6;
var digit7 = 55;
exports.digit7 = digit7;
var digit8 = 56;
exports.digit8 = digit8;
var digit9 = 57;
exports.digit9 = digit9;
var colon = 58;
exports.colon = colon;
var semicolon = 59;
exports.semicolon = semicolon;
var lessThan = 60;
exports.lessThan = lessThan;
var equalsTo = 61;
exports.equalsTo = equalsTo;
var greaterThan = 62;
exports.greaterThan = greaterThan;
var questionMark = 63;
exports.questionMark = questionMark;
var atSign = 64;
exports.atSign = atSign;
var uppercaseA = 65;
exports.uppercaseA = uppercaseA;
var uppercaseB = 66;
exports.uppercaseB = uppercaseB;
var uppercaseC = 67;
exports.uppercaseC = uppercaseC;
var uppercaseD = 68;
exports.uppercaseD = uppercaseD;
var uppercaseE = 69;
exports.uppercaseE = uppercaseE;
var uppercaseF = 70;
exports.uppercaseF = uppercaseF;
var uppercaseG = 71;
exports.uppercaseG = uppercaseG;
var uppercaseH = 72;
exports.uppercaseH = uppercaseH;
var uppercaseI = 73;
exports.uppercaseI = uppercaseI;
var uppercaseJ = 74;
exports.uppercaseJ = uppercaseJ;
var uppercaseK = 75;
exports.uppercaseK = uppercaseK;
var uppercaseL = 76;
exports.uppercaseL = uppercaseL;
var uppercaseM = 77;
exports.uppercaseM = uppercaseM;
var uppercaseN = 78;
exports.uppercaseN = uppercaseN;
var uppercaseO = 79;
exports.uppercaseO = uppercaseO;
var uppercaseP = 80;
exports.uppercaseP = uppercaseP;
var uppercaseQ = 81;
exports.uppercaseQ = uppercaseQ;
var uppercaseR = 82;
exports.uppercaseR = uppercaseR;
var uppercaseS = 83;
exports.uppercaseS = uppercaseS;
var uppercaseT = 84;
exports.uppercaseT = uppercaseT;
var uppercaseU = 85;
exports.uppercaseU = uppercaseU;
var uppercaseV = 86;
exports.uppercaseV = uppercaseV;
var uppercaseW = 87;
exports.uppercaseW = uppercaseW;
var uppercaseX = 88;
exports.uppercaseX = uppercaseX;
var uppercaseY = 89;
exports.uppercaseY = uppercaseY;
var uppercaseZ = 90;
exports.uppercaseZ = uppercaseZ;
var leftSquareBracket = 91;
exports.leftSquareBracket = leftSquareBracket;
var backslash = 92;
exports.backslash = backslash;
var rightSquareBracket = 93;
exports.rightSquareBracket = rightSquareBracket;
var caret = 94;
exports.caret = caret;
var underscore = 95;
exports.underscore = underscore;
var graveAccent = 96;
exports.graveAccent = graveAccent;
var lowercaseA = 97;
exports.lowercaseA = lowercaseA;
var lowercaseB = 98;
exports.lowercaseB = lowercaseB;
var lowercaseC = 99;
exports.lowercaseC = lowercaseC;
var lowercaseD = 100;
exports.lowercaseD = lowercaseD;
var lowercaseE = 101;
exports.lowercaseE = lowercaseE;
var lowercaseF = 102;
exports.lowercaseF = lowercaseF;
var lowercaseG = 103;
exports.lowercaseG = lowercaseG;
var lowercaseH = 104;
exports.lowercaseH = lowercaseH;
var lowercaseI = 105;
exports.lowercaseI = lowercaseI;
var lowercaseJ = 106;
exports.lowercaseJ = lowercaseJ;
var lowercaseK = 107;
exports.lowercaseK = lowercaseK;
var lowercaseL = 108;
exports.lowercaseL = lowercaseL;
var lowercaseM = 109;
exports.lowercaseM = lowercaseM;
var lowercaseN = 110;
exports.lowercaseN = lowercaseN;
var lowercaseO = 111;
exports.lowercaseO = lowercaseO;
var lowercaseP = 112;
exports.lowercaseP = lowercaseP;
var lowercaseQ = 113;
exports.lowercaseQ = lowercaseQ;
var lowercaseR = 114;
exports.lowercaseR = lowercaseR;
var lowercaseS = 115;
exports.lowercaseS = lowercaseS;
var lowercaseT = 116;
exports.lowercaseT = lowercaseT;
var lowercaseU = 117;
exports.lowercaseU = lowercaseU;
var lowercaseV = 118;
exports.lowercaseV = lowercaseV;
var lowercaseW = 119;
exports.lowercaseW = lowercaseW;
var lowercaseX = 120;
exports.lowercaseX = lowercaseX;
var lowercaseY = 121;
exports.lowercaseY = lowercaseY;
var lowercaseZ = 122;
exports.lowercaseZ = lowercaseZ;
var leftCurlyBrace = 123;
exports.leftCurlyBrace = leftCurlyBrace;
var verticalBar = 124;
exports.verticalBar = verticalBar;
var rightCurlyBrace = 125;
exports.rightCurlyBrace = rightCurlyBrace;
var tilde = 126;
exports.tilde = tilde;
var nonBreakingSpace = 160;
exports.nonBreakingSpace = nonBreakingSpace;
var oghamSpaceMark = 5760;
exports.oghamSpaceMark = oghamSpaceMark;
var lineSeparator = 8232;
exports.lineSeparator = lineSeparator;
var paragraphSeparator = 8233;
exports.paragraphSeparator = paragraphSeparator;

function isDigit(code) {
  return code >= digit0 && code <= digit9;
}
