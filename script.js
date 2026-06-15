const form = document.querySelector('#ideaForm');
const results = document.querySelector('#results');
const scoreOutput = document.querySelector('#score');
const recommendationOutput = document.querySelector('#recommendation');
const explanationOutput = document.querySelector('#explanation');
const weakPointsOutput = document.querySelector('#weakPoints');
const nextStepsOutput = document.querySelector('#nextSteps');
const suggestedMvpOutput = document.querySelector('#suggestedMvp');
const futureFeaturesOutput = document.querySelector('#futureFeatures');
const userMotivationOutput = document.querySelector('#userMotivation');
const marketEntryOutput = document.querySelector('#marketEntry');
const keyRisksOutput = document.querySelector('#keyRisks');
const validationQuestionsOutput = document.querySelector('#validationQuestions');
const interestInput = document.querySelector('#personalInterest');
const confidenceInput = document.querySelector('#confidence');
const interestValue = document.querySelector('#interestValue');
const confidenceValue = document.querySelector('#confidenceValue');

const minimumUsefulLengths = {
  ideaDescription: 60,
  targetAudience: 20,
  userPain: 35,
  monetization: 28,
};

function updateRangeLabel(input, output) {
  output.textContent = input.value;
}

function getTextScore(value, usefulLength) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return 0;
  }

  return Math.min(10, Math.round((trimmedValue.length / usefulLength) * 10));
}

function getFormValues() {
  return {
    ideaName: form.ideaName.value.trim(),
    ideaDescription: form.ideaDescription.value.trim(),
    targetAudience: form.targetAudience.value.trim(),
    userPain: form.userPain.value.trim(),
    monetization: form.monetization.value.trim(),
    personalInterest: Number(form.personalInterest.value),
    confidence: Number(form.confidence.value),
  };
}

function isMonetizationVague(value) {
  const trimmedValue = value.trim().toLowerCase();
  const wordCount = trimmedValue.split(/\s+/).filter(Boolean).length;
  const vagueTerms = ['maybe', 'not sure', 'unknown', 'tbd', 'ads', 'subscription', 'freemium', 'donations'];

  return (
    trimmedValue.length < minimumUsefulLengths.monetization ||
    wordCount < 4 ||
    vagueTerms.some((term) => trimmedValue === term)
  );
}

function evaluateIdea(values) {
  const criteria = {
    description: getTextScore(values.ideaDescription, minimumUsefulLengths.ideaDescription),
    audience: getTextScore(values.targetAudience, minimumUsefulLengths.targetAudience),
    pain: getTextScore(values.userPain, minimumUsefulLengths.userPain),
    monetization: getTextScore(values.monetization, minimumUsefulLengths.monetization),
    monetizationIsVague: isMonetizationVague(values.monetization),
    interest: values.personalInterest,
    confidence: values.confidence,
  };

  const weightedScore =
    criteria.description * 1.2 +
    criteria.audience * 1.5 +
    criteria.pain * 2 +
    criteria.monetization * 1.5 +
    criteria.interest * 1 +
    criteria.confidence * 2.8;

  const confidencePenalty = criteria.confidence <= 6 ? (6 - criteria.confidence) * 2 : 0;
  const monetizationPenalty = criteria.monetizationIsVague ? 4 : 0;
  const rawScore = Math.max(0, Math.round(weightedScore - confidencePenalty - monetizationPenalty));
  const confidenceScoreCap = criteria.confidence <= 6 ? 54 + criteria.confidence * 4 : 100;
  const score = Math.min(rawScore, confidenceScoreCap);
  const weakPoints = getWeakPoints(criteria);
  const nextSteps = getNextSteps(criteria, values.ideaName);
  const recommendation = getRecommendation(score);
  const productExpansion = getProductExpansion(criteria, values, score);

  return {
    score,
    recommendation,
    weakPoints,
    nextSteps,
    productExpansion,
    explanation: getExplanation(score, recommendation.label, values.ideaName),
  };
}

function getRecommendation(score) {
  if (score >= 80) {
    return { label: 'Do it', className: 'recommend-do' };
  }

  if (score >= 55) {
    return { label: 'Improve it', className: 'recommend-improve' };
  }

  return { label: 'Postpone it', className: 'recommend-postpone' };
}

function getExplanation(score, recommendation, ideaName) {
  const name = ideaName || 'This idea';

  if (recommendation === 'Do it') {
    return `${name} looks promising because the main parts are clear enough to test with a small first version. The score is ${score}/100, so the best move is to validate it quickly with real users.`;
  }

  if (recommendation === 'Improve it') {
    return `${name} has potential, but some important details need more work before building. The score is ${score}/100, so improve the weak areas and then evaluate it again.`;
  }

  return `${name} is not ready yet. The score is ${score}/100, so it is better to postpone building until the audience, problem, value, or confidence becomes clearer.`;
}

function getWeakPoints(criteria) {
  const weakPoints = [];

  if (criteria.audience < 7) {
    weakPoints.push('The target audience is not specific enough yet.');
  }

  if (criteria.pain < 7) {
    weakPoints.push('The user pain or problem needs to be clearer and stronger.');
  }

  if (criteria.description < 7) {
    weakPoints.push('The first version of the idea needs a clearer and simpler description.');
  }

  if (criteria.monetizationIsVague) {
    weakPoints.push('The business model is unclear because the monetization plan is too vague or short.');
  } else if (criteria.monetization < 7) {
    weakPoints.push('The monetization path is still untested.');
  }

  if (criteria.interest < 6) {
    weakPoints.push('Your personal interest is low, which may make the idea harder to finish.');
  }

  if (criteria.confidence <= 6) {
    weakPoints.push('Missing validation: information confidence is 6/10 or lower, so the idea needs more evidence from real users or market research.');
  }

  const allCriteriaAreStrong =
    criteria.description >= 8 &&
    criteria.audience >= 8 &&
    criteria.pain >= 8 &&
    criteria.monetization >= 8 &&
    !criteria.monetizationIsVague &&
    criteria.interest >= 8 &&
    criteria.confidence >= 8;

  if (weakPoints.length === 0 && allCriteriaAreStrong) {
    weakPoints.push('No major weak points found: the audience, pain, business model, interest, and confidence are all strong.');
  } else if (weakPoints.length === 0) {
    weakPoints.push('The idea is reasonable, but at least one criterion is not strong enough yet to treat it as fully validated.');
  }

  return weakPoints;
}

function getNextSteps(criteria, ideaName) {
  const name = ideaName || 'the idea';
  const steps = [];

  if (criteria.audience < 7) {
    steps.push('Write one sentence that describes exactly who has this problem.');
  }

  if (criteria.pain < 7) {
    steps.push('Talk to 3 potential users and ask how they currently solve this problem.');
  }

  if (criteria.monetizationIsVague || criteria.monetization < 7) {
    steps.push('Check whether users already pay for similar solutions.');
    steps.push('Write one clear sentence explaining who pays, how much, and why.');
  }

  if (criteria.confidence <= 6) {
    steps.push('Find 3 existing alternatives and note what users like or dislike about them.');
    steps.push('Collect real examples, forum posts, reviews, or user comments that prove the need exists.');
  } else {
    steps.push('Find 3 existing alternatives and compare their audience, pricing, and main promise.');
  }

  steps.push('Interview 3 potential users before building anything large.');
  steps.push(`Define the smallest testable version of ${name}.`);
  steps.push('Choose one validation task you can finish this week.');

  return steps;
}


function getConfidenceLevel(confidence) {
  if (confidence <= 4) {
    return 'low';
  }

  if (confidence <= 6) {
    return 'medium';
  }

  return 'high';
}

function getProductExpansion(criteria, values, score) {
  const name = values.ideaName || 'this idea';
  const audience = values.targetAudience || 'the target audience';
  const problem = values.userPain || 'the stated problem';
  const confidenceLevel = getConfidenceLevel(criteria.confidence);
  const shouldValidateFirst = confidenceLevel !== 'high' || score < 70;

  const suggestedMvp = shouldValidateFirst
    ? `Do not start with a full product. First make a simple proof of demand for ${audience}: a landing page, manual service, or clickable demo that promises one narrow solution to ${problem}. Only build the smallest working version after people show real interest.`
    : `Build one narrow workflow for ${audience}: help them solve the main pain described, with one clear outcome, no extra dashboards, no automation beyond what is needed, and a simple way to request feedback or payment.`;

  const futureFeatures = shouldValidateFirst
    ? [
        'A lightweight self-serve version after manual tests prove repeated demand.',
        'Progress tracking or saved history only if users return more than once.',
        'Integrations, templates, or automation after users clearly ask for faster workflow support.',
      ]
    : [
        'Personalized recommendations based on the user\'s past inputs or results.',
        'Saved projects, progress tracking, or reminders that help users return.',
        'Templates, integrations, or sharing tools that reduce setup time for repeat users.',
      ];

  const userMotivation = `Users might want ${name} if it saves time, lowers effort, or makes ${problem} less frustrating. The risky assumption is that the pain is urgent enough for ${audience} to change behavior or pay, not just say the idea sounds useful.`;

  const marketEntry = shouldValidateFirst
    ? [
        'Interview 5–10 people in the target audience before building and look for repeated painful stories, not compliments.',
        'Post a short problem-focused offer in communities where the audience already asks for help, then track replies or signups.',
        'Run a manual concierge version for the first users to learn what they actually value before writing more code.',
      ]
    : [
        'Find small communities where the target audience already discusses this pain and offer a focused beta.',
        'Create a landing page with one clear promise and measure email signups or preorders.',
        'Reach out directly to people using weaker alternatives and ask them to compare the MVP.',
      ];

  const keyRisks = [
    'The audience may agree the problem exists but not feel enough urgency to switch tools or pay.',
    'Existing alternatives may already solve the painful part well enough.',
    criteria.monetizationIsVague
      ? 'The monetization plan is too vague, so demand may not become revenue.'
      : 'The proposed pricing or business model may not match how users expect to solve this problem.',
  ];

  const validationQuestions = shouldValidateFirst
    ? [
        'Who specifically has this problem often enough that they are already looking for a solution?',
        'What proof shows they have spent money, time, or effort on this problem before?',
        'What is the smallest manual test that would make you more confident before building seriously?',
      ]
    : [
        'What exact action should a first-time user complete in the MVP to receive value?',
        'What result would prove users prefer this over their current workaround?',
        'What price, signup, or usage signal would make the idea worth continuing?',
      ];

  return {
    suggestedMvp,
    futureFeatures,
    userMotivation,
    marketEntry,
    keyRisks,
    validationQuestions,
  };
}

function renderList(element, items) {
  element.innerHTML = '';

  items.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    element.appendChild(listItem);
  });
}

function renderResults(evaluation) {
  scoreOutput.textContent = evaluation.score;
  recommendationOutput.textContent = evaluation.recommendation.label;
  recommendationOutput.className = evaluation.recommendation.className;
  explanationOutput.textContent = evaluation.explanation;
  renderList(weakPointsOutput, evaluation.weakPoints);
  renderList(nextStepsOutput, evaluation.nextSteps);
  suggestedMvpOutput.textContent = evaluation.productExpansion.suggestedMvp;
  renderList(futureFeaturesOutput, evaluation.productExpansion.futureFeatures);
  userMotivationOutput.textContent = evaluation.productExpansion.userMotivation;
  renderList(marketEntryOutput, evaluation.productExpansion.marketEntry);
  renderList(keyRisksOutput, evaluation.productExpansion.keyRisks);
  renderList(validationQuestionsOutput, evaluation.productExpansion.validationQuestions);
  results.classList.remove('is-hidden');
}

interestInput.addEventListener('input', () => updateRangeLabel(interestInput, interestValue));
confidenceInput.addEventListener('input', () => updateRangeLabel(confidenceInput, confidenceValue));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const values = getFormValues();
  const evaluation = evaluateIdea(values);
  renderResults(evaluation);
});
