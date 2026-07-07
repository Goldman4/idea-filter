# Idea Filter

Idea Filter is a small product-thinking tool for evaluating digital product ideas before spending time building them.

Live demo: https://goldman4.github.io/idea-filter/

## Overview

Idea Filter helps a beginner product creator evaluate whether a digital product idea is worth exploring.

The tool takes a product idea, target audience, user pain, monetization assumptions, personal interest, confidence level, and market evidence. Then it generates a structured evaluation with a score, recommendation, weak points, next steps, product expansion guidance, evidence assessment, and market research prompts.

This project was built as my first complete AI-assisted product creation cycle: from idea and requirements to GitHub, Codex tasks, pull requests, product testing, iteration, and GitHub Pages deployment.

## Problem

Many product ideas sound interesting at first, but not every idea has:

* a real user pain;
* a clear target audience;
* evidence of market demand;
* signs that users already pay for similar solutions;
* a realistic first version;
* a clear path to validation.

The goal of Idea Filter is not to “praise” every idea, but to help the user think more critically before building.

## Target User

The first target user is a beginner digital product creator who wants to:

* generate and evaluate small product ideas;
* avoid building products based only on assumptions;
* learn product thinking through practice;
* understand what evidence should be collected before investing more time;
* move from vague ideas to small, testable MVPs.

## What the Product Does

Idea Filter allows the user to enter:

* idea name;
* idea description;
* target audience;
* user pain or problem;
* possible monetization;
* personal interest;
* confidence in the information;
* search demand evidence;
* competitor evidence;
* user review evidence;
* payment or pricing evidence;
* personal observations.

The tool then generates:

* score from 0 to 100;
* recommendation: Do it / Improve it / Postpone it;
* explanation of the recommendation;
* weak points;
* next steps;
* assumptions;
* market signals;
* validation still needed;
* Evidence Assessment;
* Product Expansion;
* Market Research Assistant.

## Key Features

### 1. Idea Evaluation

The app evaluates a product idea using several criteria:

* real user pain;
* clarity of target audience;
* monetization potential;
* simplicity of the first version;
* personal interest;
* confidence in the available information;
* strength of market evidence.

The recommendation is intentionally conservative. If the idea lacks evidence, the score is limited and the app pushes the user toward validation instead of immediate building.

### 2. Evidence-Based Thinking

The app separates assumptions from market signals.

The user can add evidence such as:

* Google Trends observations;
* search demand findings;
* competitor examples;
* user reviews;
* Reddit/forum comments;
* pricing or payment signals;
* personal observations.

The tool then explains which evidence is strong, which is weak, and what still needs to be validated.

### 3. Product Expansion

The app helps expand an idea into a more practical product direction.

It suggests:

* a possible MVP;
* future features;
* user motivation;
* market entry ideas;
* key risks;
* validation questions.

This helps move from “interesting idea” to “what should I actually test first?”

### 4. Market Research Assistant

The app generates research prompts for manual market validation.

It suggests:

* Google search queries;
* Google Trends query ideas;
* competitor research queries;
* Reddit/forum/review queries;
* competitor comparison checklist;
* evidence to collect;
* red flags to watch for.

The goal is not to pretend that the app has automatically researched the internet. The goal is to guide the user toward better market research and help them collect stronger evidence.

### 5. Language Support

The app supports two output languages:

* English;
* Russian.

The user can also choose a separate research query language:

* English;
* Russian;
* Both.

This is useful because the explanation can be in Russian while market research queries can still be generated in English.

## Example Use Case

Example idea:

> English speaking practice bot

Description:

> A bot that helps users practice English through text or voice conversations, finds mistakes, and suggests better phrases.

Target audience:

> People who learn English and want more speaking practice.

User pain:

> It is hard to practice English regularly without a tutor or speaking partner.

Possible monetization:

> Monthly subscription.

Evidence:

> Google Trends shows steady search interest for “English speaking practice”; competitors include ELSA Speak, Praktika AI, TalkPal, and Duolingo Max; competitors have subscription models.

The app helps evaluate whether the idea is worth pursuing and suggests what evidence should be collected before building seriously.

## Screenshots

Screenshots will be added here:

```text
assets/screenshots/main-form.png
assets/screenshots/result-score.png
assets/screenshots/product-expansion.png
assets/screenshots/market-research-assistant.png
```

Recommended screenshots:

1. Main input form.
2. Evaluation result with score and recommendation.
3. Evidence Assessment.
4. Product Expansion.
5. Market Research Assistant with generated search queries.

## Product Development Process

This project was created through several iterations.

### Iteration 1: First Prototype

The first version included a simple HTML/CSS/JavaScript app with:

* input fields;
* score calculation;
* recommendation;
* weak points;
* next steps.

### Iteration 2: Stricter Scoring

The first scoring logic was too optimistic. It gave a very high score even when confidence in the information was only medium.

The scoring logic was improved to:

* make information confidence more important;
* add weak points when validation is missing;
* make recommendations more conservative;
* avoid saying “No major weak points” too easily.

### Iteration 3: Product Expansion

A new Product Expansion section was added to help the user think beyond the initial idea.

It included:

* suggested MVP;
* future features;
* user motivation;
* market entry;
* key risks;
* validation questions.

### Iteration 4: Evidence and Market Research

The app was improved to include evidence-based evaluation.

New sections were added for:

* search demand evidence;
* competitor evidence;
* user review evidence;
* payment evidence;
* personal observations.

The Market Research Assistant was added to generate research queries and validation prompts.

### Iteration 5: Language Support and Research Query Language

The app was updated to support Russian and English output.

A separate selector was added for research query language, because the user may want explanations in Russian while still researching an English-speaking market using English queries.

### Iteration 6: Cleaner Research Queries

The Market Research Assistant was improved to avoid mixed-language search queries.

English research queries are now shorter, more practical, and more suitable for copying into Google, Google Trends, Reddit, and review searches.

## Tech Stack

The project is intentionally simple:

* HTML;
* CSS;
* JavaScript;
* GitHub;
* GitHub Pages;
* Codex-assisted development.

There is no backend, no database, no login, no paid API, and no external dependencies.

## What I Learned

This project helped me understand the first complete cycle of creating a small digital product:

* defining a product idea;
* writing a product brief;
* creating a GitHub repository;
* creating issues;
* using Codex to implement changes;
* reviewing pull requests;
* merging changes;
* publishing through GitHub Pages;
* testing the product as a user;
* identifying weak product logic;
* improving the product through iterations.

The most important lesson: a technically working prototype is not enough. The product must also give useful, critical, and realistic output.

## Current Limitations

Idea Filter is a prototype and has several limitations:

* it does not automatically connect to real market data;
* it does not call Google Trends, Reddit, App Store, or competitor APIs;
* it does not store user ideas;
* it does not have accounts or saved history;
* it does not perform real web research;
* its scoring logic is rule-based and simplified;
* the quality of output depends heavily on the quality of user input.

## Future Direction

This project is closed as a first learning case.

The next logical step is to build more advanced products that work with real market signals:

* search APIs;
* competitor data;
* reviews;
* pricing pages;
* user complaints;
* demand signals.

The broader direction is to move from simple idea evaluation to real market signal discovery.

## Status

Idea Filter v0.1 is completed as a learning project and product case.

The project is not intended to be a finished commercial SaaS product. It is a first practical case in AI-assisted product building, product thinking, and market validation logic.
