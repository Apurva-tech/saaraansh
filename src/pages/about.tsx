import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { Layout } from "../components/Layout";

export default function Home() {
  const content = `
  # Inspiration ✨

  **Around the world, millions of adults are unable to read or write, and therefore fall prey to the extremely confusing jargon of lengthy legal documents. India has the highest adult illiteracy rate in the world. According to the latest report published by UNESCO, there are 287 million illiterate adults in India—37 percent of the illiterate population in the entire world. Farmers, manual laborers, and the people below the poverty line don't have access to education, therefore do not understand the legal terms and even can't understand the language of the document which are generally in English, and fall trap to financial debts in many cases. Therefore, we present to you Saaransh**
  
  # What it does 🙌
  
  We will build an easy-to-use web app that summarizes the lengthy legal documents into easy-to-understand terms and then convert them to the local language of the individual so that he/she is completely aware of what they are signing for.  
  
  The app works like this: The users can submit the documents they want to understand and the app uses an API to process the document and gives the user back a simplified and summarised document in their regional language.
  
  This supplies the user with a much easier-to-understand document with which they can understand the broader terms of the document and can make a decision whether they should go ahead with the agreements or not. 
  
  # How we’ll build it 💡
  
  1. The website UI/UX will be designed using Figma and then developed with Next.js, The React Framework and Tailwind CSS for UI, Tensorflow.js, Python, and GCP API to translate the summary to the regional language.
  2. We’ll use the open-source framework of Hugging Face to create the document summarizer using Natural Language Processing.
  3. For training our model we used our own image as the train data and tested it in different settings.
  4. We will implement the Web App using cutting-edge web technologies like NextJs as React framework, nextAuth for handling auth, and Tailwind CSS for rapid prototyping.
  
  # Novelty 🥇
  
  There is no existing software to create accurate summarization text with translation features. Adapting from the different research papers on legal document summarization, we are adding 2 novel features on translating the summary to regional languages and text to voice conversion for better understanding. 
  
  # Future Aspects ✔
  
  #### ➡ Improving the NLP Model to create the summary more precisely.
  
  #### ➡ Create a mobile application for the same.
  
  #### ➡ Adding more regional languages and adding text-to-speech for the summarized text.
  
  
  # Tech Stack ⚙
  
  - NEXTjs
  - Tailwind CSS
  - React-Hook-Forms
  - SWR
  - Hugging Face
  - Web Browser API
  - Google API
  - Python
  - Tensorflow.js
  - Deployed on Vercel
  
  
  # The team 
  
  - [Apurva Sharma](https://github.com/Apurva-tech)
  - [Aniket Singh Rawat](https://github.com/dikwickley)
  - [Dev Sharma](https://github.com/cryptus-neoxys)
  `;
  return (
    <Layout title={"About"}>
      <div className="min-h-screen p-8 mx-64">
        {/* <ReactMarkdown source={content} plugins={[gfm]} /> */}
        <h1 className="my-4 text-4xl font-semibold">Inspiration</h1>
        <p className="my-4">
          Around the world, millions of adults are unable to read or write, and
          therefore fall prey to the extremely confusing jargon of lengthy legal
          documents.{" "}
          <b>
            {" "}
            India has the highest adult illiteracy rate in the world. According
            to the latest report published by UNESCO, there are 287 million
            illiterate adults in India—37 percent of the illiterate population
            in the entire world.
          </b>{" "}
          Farmers, manual laborers, and the people below the poverty line don't
          have access to education, therefore do not understand the legal terms
          and even can't understand the language of the document which are
          generally in English, and{" "}
          <b>
            {" "}
            fall trap to financial debts in many cases. Therefore, we present to
            you Saaransh
          </b>
        </p>
        <h1 className="my-4 text-4xl font-semibold">What it does</h1>
        <p className="my-3">
          We will build an easy-to-use web app that summarizes the lengthy legal
          documents into easy-to-understand terms and then convert them to the
          local language of the individual so that he/she is completely aware of
          what they are signing for.
        </p>
        <p className="my-3">
          The app works like this: The users can submit the documents they want
          to understand and the app uses an API to process the document and
          gives the user back a simplified and summarised document in their
          regional language.
        </p>
        <p className="my-3">
          This supplies the user with a much easier-to-understand document with
          which they can understand the broader terms of the document and can
          make a decision whether they should go ahead with the agreements or
          not.
        </p>
        <h1 className="my-4 text-4xl font-semibold">How we built it</h1>
        <ol className="my-4">
          <li className="my-3">
            <p>
              The website UI/UX will be designed using Figma and then developed
              with Next.js, The React Framework and Tailwind CSS for UI,
              Tensorflow.js, Python, and GCP API to translate the summary to the
              regional language.
            </p>
          </li>
          <li className="my-3">
            <p>
              We’ll use the open-source framework of Hugging Face to create the
              document summarizer using Natural Language Processing.
            </p>
          </li>
          <li className="my-3">
            <p>
              For training our model we used our own image as the train data and
              tested it in different settings.
            </p>
          </li>
          <li className="my-3">
            <p>
              We have implemented the Web App using cutting-edge web
              technologies like NEXTjs as React framework, Tailwind CSS for
              rapid prototyping and TWA to create mobile and desktop apps.
            </p>
          </li>
        </ol>
        <h1 className="my-6 text-4xl font-semibold">The Team</h1>
        <div className="justify-evenly flex flex-wrap">
          <div className="text-center">
            <img
              src="https://avatars.githubusercontent.com/u/59837325?v=4"
              alt="Apurva Sharma"
              className="w-64"
            />
            <p className="my-2 text-2xl italic underline">Apurva Sharma</p>
          </div>
          <div className="text-center">
            <img
              src="https://avatars.githubusercontent.com/u/50591491?v=4"
              alt="Dev Sharma"
              className="w-64"
            />
            <p className="my-2 text-2xl italic underline">Dev Sharma</p>
          </div>
          <div className="text-center">
            <img
              src="https://avatars.githubusercontent.com/u/31622972?v=4"
              alt="Aniket Singh Rawat"
              className="w-64"
            />
            <p className="my-2 text-2xl italic underline">Aniket Singh Rawat</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
