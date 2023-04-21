# GPT API Workshop

## April 21, 2023

## What we'll cover

- OpenAI APIs
- Git / Github
- Vercel
- Front-end

## How does this workshop work?

All the code will be available right away, but some of it will be commented out.

At each step, comment out the relevant code and make changes.

It's a lot of code, and you won't understand it all, but that's okay! Once you understand how to edit the parts you care about, you can always return to this codebase to modify things in the future.

## Why did you make this so complicated?

A combination of things required for security reasons and a desire to use real-world developer tools :')

## What we'll build

- Customizable Chatbot with Image Functionality
- Deploy our site so that others can use it

## Step 0: Playground
GPT Playground lets you interact with the model, adjust its parameters, and customize its behavior.

[Explore GPT Playground](https://platform.openai.com/playground?mode=chat&model=gpt-3.5-turbo)

- _Complete_: This mode is designed for text completion tasks. You provide a prompt, and the AI model will generate a continuation of the text based on your input. It's particularly useful for generating creative content or when you need assistance in finishing sentences or paragraphs. 
- _Chat_ (we're using this today!): In this mode, the AI model behaves like a conversational partner, responding to a series of messages as if you were having a back-and-forth conversation. 
- _Insert_: The Insert mode allows you to specify a location within a given text where the AI model should generate a relevant insertion.
- _Edit_: In Edit mode, the AI model is given a piece of text with specific areas marked for improvement. GPT will then generate suggested revisions.

_Within Chat:_
- Temperature: Temperature controls the randomness of the AI's output. A higher temperature (e.g., 1.0) will result in more diverse and creative responses, while a lower temperature (e.g., 0.2) will make the output more focused and deterministic. A very low temperature may cause the model to be overly repetitive.
- Maximum Length: This parameter determines the maximum number of tokens (words or word pieces) the AI can generate in its response.
- Top P: top_p shrinks or grows the “pool” of available tokens to choose from, the domain to select over. 1=big pool, 0=small pool. Within that pool, each token has a probability of coming next. By using a smaller Top P value, you are restricting the model to a narrower pool of words with higher probabilities. This results in more deterministic and conservative responses that closely follow the input context. Conversely, a higher Top P value allows for a larger pool of words to be considered, making the AI's output more diverse and creative. Also known as "nucleus sampling," it filters the generated tokens based on their cumulative probability, selecting only those tokens that contribute to the given probability (e.g., 0.9).
- Frequency penalty: This parameter penalizes the generation of common words or phrases, making the output less generic. A higher frequency penalty (e.g., 1) will discourage the AI from using common phrases, while a lower penalty (e.g., -1) will encourage the use of more frequent words.
- Presence penalty: The presence penalty controls the repetition of words or phrases that have already appeared in the input or earlier parts of the generated text. A higher presence penalty (e.g., 1) will discourage repetition, while a lower penalty (e.g., -1) will allow the AI to reuse words or phrases more freely.

## Step 1: Set up Front-end

[Make a Github account](https://github.com/)

Clone the Workshop Repo

Clone GitHub Repo
Open in Codespaces to edit
![](https://cdn.glitch.global/bef53b9d-b68c-4b41-967d-60d00b39effb/codespace-button.png?v=1681927555940)

Start a server from codespaces:
`npm install`
`node server.js`
Click “view in browser”
![](https://cdn.glitch.global/bef53b9d-b68c-4b41-967d-60d00b39effb/terminal.png?v=1681927895072)


## Step 2: GPT API

![](https://apipheny.io/wp-content/uploads/2020/08/api-ui.png)

*Interested in learning more? [Mozilla's Deep Dive into APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)*

In the world of Chat GPT, APIs are more important than ever. 

Create a file called `.env` and paste in `API_KEY=insert API key from Whatsapp here`

_Note: You'll eventually have to set up your own private key with your OpenAI account and replace this if you want to keep working on this project or start a new one._

Delete the "Uncomment in Step 2" Comment Code


## Step 2.5: Chat GPT Assisted Code Break
Use the class names to promp Chat GPT for CSS styling:

Example (simple): `Write CSS to make a button of class submit-button green with white text`

Example (complex): `Write CSS to make a button of class submit-button cyan to navy horizontal gradient background with black text, bold, have a 3px corner radius, and a drop shadow`

- Class user-message
- Class bot-message
- Class submit-button
- Class title
- body

Copy output into the bottom of `style.css`

## Step 3: Dalle API

Delete the "Uncomment in Step 3" Comment Code

## Step 4: Deploying Code

Deploy site to Vercel

## What to do next with LLMS?

- Running / Fine-tuning a local language model (Alpaca)
- Stability JUST RELEASED an [open-source language model](https://twitter.com/StabilityAI/status/1648706156330876928)
