import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize , sent_tokenize
import heapq

nltk.download('punkt')
nltk.download('stopwords')

def summarize_text(text):
    sentences = nltk.sent_tokenize(text)
    words = nltk.word_tokenize(text)

    word_frequencies = {}
    for word in words:
        if word.isalnum():
            if word not in word_frequencies:
                word_frequencies[word] = 1
            else:
                word_frequencies[word] += 1

    max_freq = max(word_frequencies.values())
    for word in word_frequencies.keys():
        word_frequencies[word] = word_frequencies[word] / max_freq

    sentence_scores = {}
    for sent in sentences:
        for word in nltk.word_tokenize(sent):
            if word in word_frequencies:
                if sent not in sentence_scores:
                    sentence_scores[sent] = word_frequencies[word]
                else:
                    sentence_scores[sent] += word_frequencies[word]

    summary_sentences = heapq.nlargest(
        int(len(sentences)*0.3), sentence_scores, key=sentence_scores.get)
    summary = ' '.join(summary_sentences)
    return summary
