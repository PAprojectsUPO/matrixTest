
import re

file_path = '/Users/jonathanquishpe/JoniDev/PAprojectsUPO/matrixTest/questions.json'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We need to escape backslashes for JSON.
# Currently the file contains literal '\' characters introduced by previous scripts (e.g. \in, \mathcal).
# These are invalid in JSON strings (except specific escapes like \", \n, etc).
# We want to turn '\' into '\\' so that the JSON parser reads it as a backslash char.
# BUT we must preserve valid escapes if any exist, primarily '\"' (escaped quote).
# We also want to match '\t', '\n' etc IF they are intended as control chars, but here they are likely Latex commands (\text, \nu).
# Since the file assumes UTF-8 and was text-based, '\t' is likely '\text' brokenly valid as tab+ext.
# So we basically want to escape ALL backslashes that are strictly meant to be backslashes.
# Safe bet: escape any backslash that is NOT preceeding a quote.
# Unicode escapes \uXXXX are a risk. We'll assume the file uses UTF-8 chars instead of escapes (common in modern editors).

# Regex: Matches a backslash NOT followed by a double quote.
# Replacement: Two backslashes.
# In Python re.sub replacement string, '\\\\' resolves to '\\'.
content = re.sub(r'\\(?!")', r'\\\\', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed JSON backslash escapes.")
