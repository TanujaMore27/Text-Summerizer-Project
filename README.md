# 🧠 Text Summarizer Project
✨ Real-time Text and File Summarization using Basic NLP & Flask

This project is a web-based Text Summarizer that converts long paragraphs or uploaded files into concise summaries using traditional NLP techniques (not deep learning).
It uses Flask for the backend, HTML/JS for the frontend, and Python’s NLTK library for natural language processing.

🌟 Features

✅ Summarizes pasted text instantly
✅ Supports .txt and .pdf file uploads for automatic summarization
✅ Uses basic NLP techniques like tokenization, frequency scoring, and sentence ranking
✅ Fast and lightweight Flask REST API backend
✅ Cross-Origin support using Flask-CORS
✅ Clean and responsive frontend interface

🧠 Approach

This project uses traditional Natural Language Processing (NLP) — not deep learning.
The summarization is done by:

Tokenizing text into words and sentences using NLTK

Removing stopwords

Calculating word frequencies

Scoring sentences based on important words

Selecting the top sentences to form the summary

This approach is efficient, explainable, and ideal for smaller datasets or simple summarization tasks.
