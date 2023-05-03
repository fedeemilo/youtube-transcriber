import os
import sys
import openai
import pysrt

openai.api_key = os.getenv("OPENAI_API_KEY")
input_data = sys.stdin.read()
subs = pysrt.from_string(input_data)


prompt_base = (
        "You are going to be a good translator. "
        "What you are going to recieve next is random text"
        "that I want you to translate in the best and most correct way"
        "in the English language"
        "Translate from [START] to [END]:\n[START]"
)

def translate_text(text):
    prompt = prompt_base
    prompt += text + "\n[END]"

    response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            max_tokens=3000,
            temperature=0
    )

    return response.choices[0].text.strip()

for index, subtitle in enumerate(subs):
    subtitle.text = translate_text(subtitle.text)
    print(subtitle, flush=True)
