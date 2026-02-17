# JSON Specification Quick Reference

A comprehensive reference for the JSON data format as defined by [RFC 8259](https://www.rfc-editor.org/rfc/rfc8259). This guide covers syntax rules, data types, encoding, and the edge cases that catch developers off guard.

## The JSON Grammar

JSON (JavaScript Object Notation) consists of exactly **six structural characters** and **six value types**.

### Structural Characters

| Character | Name | Usage |
|-----------|------|-------|
| `{` `}` | Curly braces | Delimit objects |
| `[` `]` | Square brackets | Delimit arrays |
| `:` | Colon | Separates key from value |
| `,` | Comma | Separates elements |

### Value Types

```
value = object / array / string / number / "true" / "false" / "null"
```

| Type | Example | Notes |
|------|---------|-------|
| **Object** | `{"key": "value"}` | Unordered set of key/value pairs |
| **Array** | `[1, 2, 3]` | Ordered sequence of values |
| **String** | `"hello"` | Must use double quotes |
| **Number** | `42`, `3.14`, `-1e10` | No leading zeros, no hex, no `NaN`/`Infinity` |
| **Boolean** | `true`, `false` | Lowercase only |
| **Null** | `null` | Lowercase only |

## String Rules

JSON strings **must** use double quotes (`"`). Single quotes are not valid JSON.

### Escape Sequences

| Sequence | Character |
|----------|-----------|
| `\"` | Quotation mark |
| `\\` | Backslash |
| `\/` | Forward slash (optional escape) |
| `\b` | Backspace |
| `\f` | Form feed |
| `\n` | Newline |
| `\r` | Carriage return |
| `\t` | Tab |
| `\uXXXX` | Unicode code point (4 hex digits) |

Characters that **must** be escaped: `"`, `\`, and control characters (`U+0000` through `U+001F`).

### Unicode and Encoding

- JSON text **must** be encoded in UTF-8 (RFC 8259, Section 8.1).
- Characters outside the Basic Multilingual Plane use **surrogate pairs**: `\uD83D\uDE00` represents U+1F600.
- A BOM (`U+FEFF`) should not be present but parsers may tolerate it.

## Number Rules

```
number = [ "-" ] int [ frac ] [ exp ]
int    = "0" / ( digit1-9 *digit )
frac   = "." 1*digit
exp    = ("e" / "E") [ "+" / "-" ] 1*digit
```

### Valid numbers

```json
0, -0, 42, 3.14, -273.15, 1e10, 2.5E-3, 1E+6
```

### Invalid numbers (common mistakes)

```
+1       ← no leading plus sign
.5       ← must have digit before decimal point
01       ← no leading zeros (except "0" itself)
0x1F     ← no hexadecimal
NaN      ← not a JSON value
Infinity ← not a JSON value
1.       ← must have digit after decimal point
```

## Common Pitfalls

### 1. Trailing Commas

```json
{"name": "Alice", "age": 30,}   // INVALID — trailing comma
["a", "b", "c",]                 // INVALID — trailing comma
```

Most JavaScript engines tolerate trailing commas, but **strict JSON does not**.

### 2. Comments Are Not Allowed

```json
{
  "name": "Alice"  // This is not valid JSON
}
```

JSON has no comment syntax. Use JSONC or JSON5 if you need comments.

### 3. Duplicate Keys

RFC 8259 says keys **SHOULD** be unique but does not forbid duplicates. Behavior with duplicate keys is implementation-defined — most parsers keep the last value.

### 4. Number Precision

JSON numbers have no size limit in the specification, but most parsers use IEEE 754 double-precision floats, giving:

- Integer precision up to **2^53 - 1** (9,007,199,254,740,991)
- Values beyond this lose precision silently

```javascript
JSON.parse('{"id": 9007199254740993}')
// id becomes 9007199254740992 — precision lost!
```

### 5. Top-Level Value

RFC 8259 allows **any value** as a top-level JSON text. A bare string (`"hello"`), number (`42`), or boolean (`true`) is valid JSON — it does not have to be an object or array.

## Content-Type

The correct MIME type for JSON is:

```
application/json
```

The `charset` parameter is **not** needed (UTF-8 is assumed), but if specified, it must be `utf-8`.

## JSON vs. JavaScript Object Literals

| Feature | JSON | JavaScript |
|---------|------|------------|
| Keys | Must be double-quoted strings | Can be unquoted identifiers |
| Strings | Double quotes only | Single or double quotes, backticks |
| Trailing commas | Not allowed | Allowed |
| Comments | Not allowed | Allowed |
| `undefined` | Not a valid value | Valid |
| Functions | Not supported | Valid as values |

## Further Reading

- [RFC 8259 — The JSON Data Interchange Format](https://www.rfc-editor.org/rfc/rfc8259) — The official specification
- [JSON.org](https://www.json.org/) — Original specification site with railroad diagrams
- [json5.org](https://json5.org/) — Extended JSON format supporting comments and trailing commas
